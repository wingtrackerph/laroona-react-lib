# @wingtrackerph/laroona-react-lib

A React component + hooks library for building Ant Design–based admin/CRUD apps against a Laravel-style JSON API. It provides a request-state layer (`RequestProvider`), auth/session handling, modal orchestration, and a set of pre-wired UI components (tables, forms, page layout) so that a full "list + add/edit modal" page can be built with very little boilerplate.

This document is written so an AI coding assistant (or a developer) can consume this library correctly in a downstream project without reading its source.

## Table of contents

- [Requirements](#requirements)
- [Installation](#installation)
- [Required app setup](#required-app-setup)
- [Core concepts](#core-concepts)
- [Full example: a CRUD page](#full-example-a-crud-page)
- [API reference](#api-reference)
  - [Providers & contexts](#providers--contexts)
  - [Hooks](#hooks)
  - [Helpers](#helpers)
  - [Components](#components)
- [AppTable / Overview column mini-language](#apptable--overview-column-mini-language)
- [Conventions & gotchas](#conventions--gotchas)

## Requirements

Peer dependencies (must be installed in the consuming app):

```
react ">=18"
react-dom ">=18"
react-router ">=7"
react-router-dom ">=7"
antd "^5.0.0"
```

The library also depends internally on `axios`, `dayjs`, `moment`, `@ant-design/v5-patch-for-react-19`, `qrcode`, `jspdf`, `@react-pdf/renderer`, `aos`, `clsx`, and `canvas` — these are bundled as regular dependencies, not peer dependencies, so you don't need to install them yourself.

## Installation

```bash
npm install @wingtrackerph/laroona-react-lib antd react-router react-router-dom
```

The package ships ESM only (`type: module`, `dist/index.js`) with bundled TypeScript declarations (`dist/index.d.ts`). Import everything from the package root:

```tsx
import { BasePage, AppTable, useAuthContext } from "@wingtrackerph/laroona-react-lib";
```

`react`, `react-dom`, `react-router`, `react-router-dom`, `antd`, and `@ant-design/icons` are externalized in the build — the host app's copies are used.

## Required app setup

### 1. Global `window.env.API_BASE_URL`

`ApiService` (the internal axios instance used by every data-fetching function in this library) reads its base URL from `window.env.API_BASE_URL` **at import time**. The host app must define this **before** the library's code runs — typically in `index.html` or an early bootstrap script:

```html
<script>
  window.env = { API_BASE_URL: "https://api.example.com" };
</script>
```

Requests also auto-attach:
- `Authorization: Bearer <token>` — read from `localStorage["user"].token` (the same object `AuthProvider`/`useLocalStorage` manages).
- `X-CSRF-TOKEN` — read from `<meta name="csrf-token">` if present in the page (Laravel Blade-style setups).

### 2. Provider tree order

The contexts depend on each other. Wrap your app in this exact nesting order:

```tsx
import {
  AuthProvider,
  NotificationProvider,
  RequestProvider,
  ModalProvider,
} from "@wingtrackerph/laroona-react-lib";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <NotificationProvider>
          <RequestProvider>
            <ModalProvider>
              {/* routes / pages go here */}
            </ModalProvider>
          </RequestProvider>
        </NotificationProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
```

Why this order matters:
- `RequestProvider` calls `useAuthContext()` (for `logout` on 401) and `useNotificationContext()` (to surface success/error toasts) — both must be above it.
- `ModalProvider` calls `useRequestContext()` (to clear post-request state when a modal closes) — it must be below `RequestProvider`.
- `ProtectedRoute` calls `useAuthContext()` — must be used inside `AuthProvider`, and inside a `react-router` `<Routes>` tree since it renders `<Navigate>`.

`BasePage` (the app shell/sidebar layout) internally uses `useNavigate`/`useLocation` from `react-router-dom`, so it must be rendered inside a Router.

## Core concepts

### `AppRequest` — the unit of server state

Almost everything in this library revolves around a `RequestContext` that tracks named `AppRequest` objects, each identified by a string `key`. There are two pools:

- **GET requests** (`requests`) — for fetching lists/single records. Created with `createRequest`/`getRequest`, triggered with `fetchRequest`/`fetchRequests`.
- **POST requests** (`postRequests`) — for form submissions. Created implicitly via `getPostRequest`, submitted with `submitPostRequest`. Each holds a mutable `postData` object that form inputs (`DataInput`) read/write directly.

You don't create `AppRequest` objects by hand normally — you call `useRequestContext()` and use its functions with a `key` string you choose (convention: use the API path as the key, e.g. `"users"`).

```tsx
const { getRequest, fetchRequest, createRequest } = useRequestContext();

useEffect(() => {
  fetchRequest(createRequest({ key: "users", path: "users" }));
}, []);

const usersRequest = getRequest("users"); // { data, isLoading, isDone, ... }
```

`fetchRequest`/`fetchRequests` call `GET {API_BASE_URL}/{path}` and populate `request.data` (array) or `request.singleData` (object). They understand two response shapes automatically:
- Laravel paginator (`{ data: { current_page, last_page, total, from, data: [...] } }`) → sets `request.isPaginated = true` and paging fields.
- `{ data: { total, data: [...] } }` → non-paginated but wrapped.
- `{ data: [...] }` → plain array.

### GET / POST / DELETE flow

- `fetchRequest(request)` / `fetchRequests(requests, forceFetch?)` — GET, populates `.data`/`.singleData`.
- `submitPostRequest({ key, path, extraParameters?, onSuccess?, onError?, showToast? })` — POST `postData` (merged with `extraParameters`) to `path`. Shows an Ant Design success toast by default (via `NotificationContext` + `BasePage`'s `notification.useNotification()`), unless `showToast: false`. On validation errors, populates `request.errors` (keyed by field) and calls `onError(errors)`.
- `submitDeleteRequest({ key, path, data?, onSuccess?, onError? })` — DELETE `path`.

Both POST and DELETE show a toast via `NotificationContext`; the toast is actually rendered by `BasePage` (it holds the `notification.useNotification()` instance), so a page must be inside `BasePage` (or replicate that `useEffect` on `notificationData`) to see toasts.

### Auth

`useAuthContext()` exposes `{ authUser, login, logout, updateAuthUser }`. `authUser` is persisted to `localStorage["user"]` via `useLocalStorage`. `login(userObject)` stores it (the object should include a `token` field — `ApiService` reads `authUser.token` for the `Authorization` header). `logout()` clears it and redirects to `/login`.

### Modals

`useModalContext()` exposes `{ isModalOpen, openModal, closeModal }`, keyed by a modal `id` string (by convention, the same key used for the corresponding POST request). `ModalData` and `AppModal` use this internally — you usually don't call these directly except to trigger `openModal("some-id")` from a custom button.

## Full example: a CRUD page

This is the idiomatic pattern this library is built around: `Overview` (list page: header + search + table) + `ModalData` (add/edit form modal) + `DataInput` (fields bound to the modal's `postData`).

```tsx
import {
  Overview,
  ModalData,
  DataInput,
  useRequestContext,
  formatDate,
} from "@wingtrackerph/laroona-react-lib";

const USERS_KEY = "users"; // used as both the GET request key and the modal/POST key

function UsersPage() {
  const { createRequest } = useRequestContext();

  return (
    <Overview
      title="Users"
      requests={[createRequest({ key: USERS_KEY, path: USERS_KEY })]}
      tableRequestKey={USERS_KEY}
      detailsModalId={USERS_KEY}
      detailsModal={
        <ModalData
          id={USERS_KEY}
          titleLabel="User"          // renders "Add User" / "Edit User" automatically
          savePath={USERS_KEY}       // POST users (create) or users/{id} handled server-side
          body={
            <>
              <DataInput
                requestKey={USERS_KEY}
                dataKey="full_name"
                type="text"
                title="Full Name"
              />
              <DataInput
                requestKey={USERS_KEY}
                dataKey="email"
                type="text"
                title="Email"
              />
              <DataInput
                requestKey={USERS_KEY}
                dataKey="role_id"
                type="select"
                title="Role"
                options={[{ id: 1, name: "Admin" }, { id: 2, name: "Staff" }]}
              />
            </>
          }
        />
      }
      keysToSearch={["full_name", "email"]}
      tableHeaders={["#", "Name", "Email", "Joined", "Actions"]}
      tableColumns={[
        "i",
        "full_name",
        "email",
        "created_at.date",
        "column-action-edit-column-action-delete",
      ]}
      onRowDeleteClick={(item) => {
        // wire up submitDeleteRequest from useRequestContext() here
      }}
    />
  );
}
```

What this renders: a page header with title, search box, and "+" add button; a table backed by the `users` GET request; clicking "+" or the row edit icon opens the same modal (in create or edit mode, detected automatically from whether `id` is `0`); saving POSTs to `users`, re-fetches the `users` list, and closes the modal.

Wrap your routed pages with `BasePage` for the app shell (sidebar, toasts):

```tsx
<BasePage
  appTitle="My App"
  menuItems={[{ key: "/users", label: "Users", icon: <UserOutlined /> }]}
  content={<UsersPage />}
/>
```

## API reference

### Providers & contexts

| Export | Type | Purpose |
|---|---|---|
| `AuthProvider` / `useAuthContext()` | Provider / hook | `{ authUser, login(user), logout(), updateAuthUser(user) }`. Persists `authUser` to `localStorage["user"]`. |
| `NotificationProvider` / `useNotificationContext()` | Provider / hook | `{ notificationData, setNotificationData(data) }`. Shape: `{ show_notification, success_title?, success_message?, error_title?, error_message? }`. Consumed by `BasePage` to show Ant Design notifications. |
| `RequestProvider` / `useRequestContext()` | Provider / hook | See [Core concepts](#core-concepts). Must be nested under `AuthProvider` + `NotificationProvider`. |
| `ModalProvider` / `useModalContext()` | Provider / hook | `{ isModalOpen(id), openModal(id), closeModal(id) }`. Must be nested under `RequestProvider`. |
| `ProtectedRoute` | Component | Route guard. Props: `authorizedRole?` (single role id) or `authorizedRoles?` (array of role ids), compared against `authUser.role_id`. Redirects to `/` if unauthenticated, `/not-authorized` if role mismatch. Use as a wrapper inside `react-router` route elements: `<Route path="/admin" element={<ProtectedRoute authorizedRoles={[1]}><AdminPage /></ProtectedRoute>} />`. |

#### `useRequestContext()` full signature

```ts
{
  fetchRequest(request: AppRequest): void;
  fetchRequests(requests: AppRequest[], forceFetch?: boolean): void; // forceFetch defaults true in fetchRequests, but fetchRequest always forces
  createRequest(params: { key: string; path: string; pageSize?: number; queryText?: string; onSuccess?: Function }): AppRequest;
  getRequest(key: string): AppRequest;
  getPostRequest(key: string): AppRequest;
  getPostRequestErrorProperty(key: string, propertyKey: string): any;
  submitPostRequest(params: { key: string; path: string; showToast?: boolean; showErrorToast?: boolean; onSuccess?: Function; onError?: Function; extraParameters?: any }): void;
  submitDeleteRequest(params: { key: string; path: string; data?: any; showToast?: boolean; showErrorToast?: boolean; onSuccess?: Function; onError?: Function }): void;
  notifyRequests(): void;      // force a re-render after mutating a GET AppRequest in place
  notifyPostRequests(): void;  // force a re-render after mutating a POST AppRequest's postData in place
  isForCreation(key: string): boolean; // true if postData.id == 0
  filterRequestData(key: string, queryText: string, propertiesToFilter: string[]): void; // client-side filter of already-fetched data
  clearRequest(key: string): void;
  clearPostRequest(key: string): void;
  clearRequests(): void; // clears both pools, called on logout / route change
  getRequestKeys(): string[];
}
```

Note: `AppRequest` objects returned by `getRequest`/`getPostRequest` are mutable plain objects, not React state directly — after mutating fields on one outside of the provided setter functions, call `notifyRequests()`/`notifyPostRequests()` to trigger a re-render.

### Hooks

| Export | Signature | Purpose |
|---|---|---|
| `useIsMobile()` | `() => boolean` | True when `window.innerWidth < 768`, updates on resize. Used internally by responsive components; useful in consuming apps too. |
| `useLocalStorage(key, defaultValue)` | `(string, any) => [value, setValue]` | `useState` backed by `localStorage`, JSON-serialized. Same pattern `AuthProvider` uses for the `user` key. |

### Helpers

All in `format-helper.tsx`. Dates are handled as UTC-in/local-out (`format*`) or local-in/UTC-out (`formatUtc*`) — pick based on direction of data flow (API → UI vs UI → API).

| Function | Purpose |
|---|---|
| `formatDate(date)` / `formatDateTime(date)` / `formatTime(date)` | UTC ISO string → localized display string (`"ddd, MMM Do YYYY"` / with time / time-only). |
| `formatIsoDate(date)` / `formatIsoDateTime(date)` / `formatIsoDateTimeMilli(date)` / `formatIsoTime(date)` | UTC ISO string → local time, formatted as ISO (`YYYY-MM-DD[ HH:mm:ss[.SSS]]`). |
| `formatUtcIsoDate(date)` / `formatUtcIsoDateTime(date)` / `formatUtcIsoDateTimeMilli(date)` | Local date/time string → UTC ISO string. Use when sending user-entered dates to the API. |
| `formatLocalIsoDate(date)` / `formatLocalIsoDateTime(date)` | Passthrough formatting to ISO in local time (no UTC conversion). |
| `formatNumber(number)` | Adds thousands separators; returns `"-"` for falsy input. |
| `formatDecimal(decimal, decimalPlace = 6)` | Fixed-decimal formatting with thousands separators on the whole part; returns `"-"` for falsy input. |
| `convertDMStoDecimal(key, data)` / `convertDecimaltoDMS(key, data)` | Mutates `data` in place, converting between `data[key]` (decimal degrees) and `data[key+"_degrees"/"_minutes"/"_seconds"]` (DMS). For geo-coordinate inputs. |
| `defaultDateFormat`, `defaultDateTimeFormat`, `defaultTimeFormat`, `isoDateFormat`, `isoDateTimeFormat`, `isoTimeFormat`, `isoDateTimeMilliFormat` | The underlying format strings (moment.js tokens), exported as constants. |

`useLocalStorage` is also exported from `helpers/local-storage`, see [Hooks](#hooks).

### Components

#### `BasePage`

App shell: collapsible sidebar (Ant Design `Menu`) + content area + toast notifications. Renders `notification` popups from `NotificationContext`. Must be rendered inside a Router and `RequestProvider`/`AuthProvider`/`NotificationProvider`.

| Prop | Type | Notes |
|---|---|---|
| `content` / `children` | `ReactNode` | The page body. `content` takes precedence. |
| `menuItems` | `MenuProps["items"]` | Ant Design menu items. Use `key` as the route path — clicking navigates via `react-router`'s `navigate(key)`. |
| `appTitle`, `appSubtitle`, `appTitleLogo` | `string` / `string` / `ReactNode` | Branding shown in the sidebar header/footer. |
| `accountLabel` | `string` | Label for the auto-added account menu group (defaults to `authUser.full_name` or `"Account"`). |
| `disableDefaultAccountMenu` | `boolean` | Suppress the auto-injected "Account > Logout" menu entry. |
| `onLogout` | `() => void` | Override default logout (which POSTs `logout`, clears requests, calls `logout()` from `AuthContext`). |
| `siderBackground`, `siderHeaderBackground`, `isSiderLight` | styling | Sidebar theming. |

#### `Overview`

List-page composer: `PageHeader` + optional filter bar + `AppTable`, plus modal-open orchestration for add/edit. See [Full example](#full-example-a-crud-page). Key props: `title`, `requests` (array passed to `fetchRequests` on mount), `tableRequestKey`, `detailsModalId`/`detailsModal`, `addModalId`/`addModal` (defaults to `detailsModalId`/`detailsModal` if omitted — same modal used for add and edit), `keysToSearch` (client-side filter fields, used when the table's GET request isn't server-paginated or `searchTableOnly` is off), `tableHeaders`/`tableColumns` (see [column mini-language](#apptable--overview-column-mini-language)), plus pass-throughs to `PageHeader` (`hasActionAdd`, `hasSearchBar`, `hasDownloadButton`, etc.) and `AppTable` (`tablePageSize`, `customActionIcon`, `onRowDeleteClick`, etc.). `renderLayout(content)` lets you wrap the header+table in custom chrome (e.g. a `Card`).

#### `AppTable`

Data table bound to a GET `AppRequest` (by `requestKey`), auto-switches to stacked cards on mobile (`useIsMobile`). Usually used via `Overview`, but can be used standalone.

| Prop | Type | Notes |
|---|---|---|
| `headers` | `string[]` | Column header labels. |
| `columns` | `(string \| ((item) => string))[]` | One entry per header — a field-key string (see mini-language below) or a render function. |
| `data` | `any[]` | Rows to display (typically `getRequest(requestKey).data`). |
| `requestKey` | `string` | Which `AppRequest` drives loading state + pagination. |
| `pageSize` | `number` | Default page size (10). |
| `onRowEditClick`, `onRowClick`, `onRowCustomClick`, `onRowDeleteClick` | `(item) => void` | Wired to `column-action-*` columns. |
| `customActionIcon`, `customActionTooltip` | `ReactNode`/`string` | Icon/tooltip for `column-action-custom`. |

`ResponsiveTable` is a more generic, Ant Design–`Table`-shaped alternative (standard `columns`/`dataSource`/`pagination` props, not tied to `RequestContext`) — use it when you're not using the `AppRequest` pattern but still want the mobile-card fallback.

#### `PageHeader`

Title bar with optional back button, add button, search box, and one or two download buttons. Props: `title`, `hasActionAdd`, `hasActionBack`, `hasSearchBar`, `hasDownloadButton`/`hasSecondaryDownloadButton` (+ `downloadText`/`secondaryDownloadText`, `isDownloading`/`isSecondaryDownloading`), `onAddClick`, `onBackClick`, `onSearch(value)`, `onDownloadClick`, `onSecondaryDownloadClick`.

#### `ModalData`

Form modal wired to a POST `AppRequest` and a `ModalContext` entry, both keyed by `id`. Submits `postData` to `savePath`, then re-fetches `tableRequestKey` (or derives it from `savePath` if omitted) and closes the modal. On field-level validation errors, scrolls to and focuses the first invalid `DataInput` (via its `inputRefs`).

| Prop | Type | Notes |
|---|---|---|
| `id` | `string` | Modal id + POST request key. |
| `titleLabel` | `string` | Auto title: `"Add " + titleLabel` / `"Edit " + titleLabel` based on `isForCreation(id)`. Overridden by `title` if set. |
| `body` | `ReactNode` | Form fields, typically `DataInput`s. |
| `savePath` | `string` | POST endpoint. |
| `tableRequestKey` | `string` | GET request key to refresh after save (defaults to `savePath` up to `?`). |
| `dontCloseAfterSave`, `showToastAfterSave` | `boolean` | Behavior after a successful save. |
| `onPreSaveClick`, `onSaveClick` (override), `onDataSaved(responseData, savedData)`, `onCancelClick` | `Function` | Lifecycle hooks. |
| `isSubModal` | `boolean` | Raises z-index for a modal opened on top of another. |

#### `AppModal`

Lower-level Ant Design `Modal` wrapper (no `RequestContext`/`ModalContext` binding) — used internally by `ModalData`. Use directly if you want the modal chrome without the request-binding conventions. Props: `id`, `title`, `body`, `isSaving`, `isOpen`, `saveText`/`cancelText`, `isSaveButtonHidden`/`isSaveButtonDisabled`, `isSubModal`, `width`, `onSaveClick`, `onCancelClick`.

#### `DataInput`

Form field bound to a POST `AppRequest`'s `postData[dataKey]`, wrapping `AppInput`. Reads/writes `getPostRequest(requestKey).postData`, surfaces `getPostRequestErrorProperty(requestKey, errorKey ?? dataKey)` as the field error, and registers a ref in `inputRefs` for `ModalData`'s scroll-to-error behavior.

| Prop | Type | Notes |
|---|---|---|
| `requestKey` | `string` | The POST `AppRequest` key (matches the enclosing `ModalData`'s `id`). |
| `dataKey` | `string` | Field name in `postData`. |
| `type` | `string` | See `AppInput` types below, plus composite date/time types: `"date-datetime"`, `"time-datetime"`, `"timemilli-datetime"` — these split a single ISO datetime field into separate date/time sub-inputs and recombine them (with UTC conversion) on change. |
| `options`, `optionsKey` | `any[]`, `string` | For `select`/`multiselect`: array of option objects; `optionsKey` selects the label field (default `"name"`), `id` is always the value. |
| `isInitialValueDisabled` | `boolean` | For multiselect: disables the option(s) that were present when the modal opened (e.g. prevent removing existing tags). |
| `errorKey` | `string` | Override which key to read the server validation error from (defaults to `dataKey`). |
| `onSetValue` | `(value) => void` | Fires in addition to the internal write to `postData`. |

#### `AppInput`

Presentational Ant Design input, dispatched by `type`. Doesn't know about `RequestContext` — controlled via `value`/`onChange`. Prefer `DataInput` inside `ModalData` forms; use `AppInput` directly for standalone/non-request-bound forms.

Supported `type` values: `"text"` (default), `"password"` (`showPasswordToggle` supported), `"text-area"`, `"date"`, `"time"`, `"timemilli"` (time with milliseconds), `"select"`, `"multiselect"`, `"number"` (supports `minValue`/`maxValue`/`step`/`inputWidth`), `"checkbox"`, `"switch"`.

Other props: `title` (Form.Item label), `errorMessage`, `placeholder`, `disabled`, `hidden` (renders `null`), `disablePastDates` (date type), `maxLength`, `description` (Form.Item help text), `allCaps`/`capitalize`/`capitalizeFirst` (text/text-area transforms), `onEnterKeyPress`.

#### `Icon`

Generic inline SVG wrapper for custom icon paths. Props: `path` (SVG child elements/paths), `size` (`IconSize.XSmall` 16 / `Small` 18 / `Default` 24), `color` (`IconColor.Dark` "currentColor" / `Default` "#fff" / `Green` "#00FF00"), `isSemiTransparent`.

#### `QuickActionCard`

Dashboard shortcut tile. Props: `icon`, `title`, `description`, `onClick`, `color`, `gradientFrom`, `gradientTo` (all required — no defaults).

#### `TabBar`

Segmented-control style tab switcher (Ant Design `Radio.Group` buttons), responsive on mobile. Props: `options` (array of `{ name }`-like objects — label pulled from `option.name`), `onChange(index: number)`.

## `AppTable` / `Overview` column mini-language

`tableColumns` entries are either a render function `(item) => value` or a string key interpreted against each row (`item`) as follows:

| Pattern | Meaning |
|---|---|
| `"field"` | `item.field`, printed as-is (`"-"` if null/empty). |
| `"i"` | Row index (1-based, respects pagination offset) — no dot needed. |
| `"field-center"` | Same as `"field"` but center-aligned (desktop table only). |
| `"relation.field"` | `item.relation.field` (one level of dot access). |
| `"relation.list-first.field"` | First element of `item.relation` array, then `.field`. |
| `"relation.join.field"` | All elements of `item.relation` array, `.field` values joined with `", "`. |
| `"relation.date"` / `"relation.date.iso"` | `item.relation` formatted as a date (localized / ISO). |
| `"relation.datetime"` / `"...datetime.iso"` / `"...datetime.isomilli"` | Same, with time. |
| `"relation.decimal"` / `"relation.decimalN"` | `item.relation` via `formatDecimal(value, N)` (default 6 places). |
| `"relation.number"` | `item.relation` via `formatNumber`. |
| `"column-action-edit"` | Renders an edit icon button, calls `onRowEditClick(item)`. |
| `"column-action-delete"` | Renders a delete icon button, calls `onRowDeleteClick(item)`. |
| `"column-action-click"` | Renders a "view" (chevron) icon button, calls `onRowClick(item)`. |
| `"column-action-custom"` | Renders `customActionIcon`/`customActionTooltip`, calls `onRowCustomClick(item)`. |

Multiple action types can be combined in one string (matched with `.includes(...)`, e.g. a column string containing both `"column-action-edit"` and `"column-action-delete"` renders both buttons in one cell) — see the example above (`"column-action-edit-column-action-delete"`).

When using a function instead of a string, return a plain value, or a string starting with `"column-action-"` to trigger the same action-button rendering.

## Conventions & gotchas

- **Request keys are shared identifiers.** The same string is reused as: the GET `AppRequest` key, the `ModalData`/POST `AppRequest` id, and the `ModalContext` modal id, for a given resource. Pick one (commonly the API path, e.g. `"users"`) and reuse it across `Overview.tableRequestKey`, `ModalData.id`, and `DataInput.requestKey`.
- **`postData.id === 0` means "create".** `Overview`'s `showAddModal` seeds `postData = { id: 0 }`; `ModalData` titles/behavior branch off `isForCreation`, which just checks `postData.id == 0`. If you open an edit modal manually, seed `postData` with the full record (including a non-zero `id`).
- **Mutating `AppRequest`/`postData` directly requires a manual notify.** These are plain objects, not `useState`. After hand-editing `getRequest(key)` or `getPostRequest(key).postData` outside the provided setter functions, call `notifyRequests()` / `notifyPostRequests()` to re-render.
- **Toasts render inside `BasePage`.** `submitPostRequest`/`submitDeleteRequest` write to `NotificationContext`, but the actual Ant Design `notification` popup is only shown by `BasePage`'s `useEffect`. Pages not rendered under a `BasePage` won't show toasts unless you replicate that listener.
- **`window.env.API_BASE_URL` must exist before this library's module graph evaluates**, since `ApiService` reads it during module init, not lazily.
- **This library assumes a Laravel-style backend**: JSON error bodies shaped like `{ data, error, error_title, message }`, paginators shaped like `{ data: { current_page, last_page, total, from, data } }`, a `"Unauthenticated"` message string triggering auto-logout, and CSRF handled via a `<meta name="csrf-token">` tag.
- **Dates round-trip through UTC.** Use `format*` helpers (no `Utc` prefix) to display API (UTC) dates locally, and `formatUtc*` helpers to convert local user input back to UTC before sending to the API. `DataInput`'s `*-datetime` types do this conversion automatically.
