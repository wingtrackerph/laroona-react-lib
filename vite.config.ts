import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { resolve } from "path";

export default defineConfig({
    plugins: [
        react(),
        dts({
            insertTypesEntry: true,
        }),
    ],
    build: {
        lib: {
            entry: resolve(__dirname, "src/index.ts"),
            name: "LaroonaReactLib",
            fileName: "index",
            formats: ["es"],
        },
        rollupOptions: {
            external: [
                "react",
                "react-dom",
                "react-router",
                "react-router-dom",
                "antd",
                "@ant-design/icons",
                // AntD's pickers are driven by dayjs and extend it with the
                // weekday/localeData/weekOfYear plugins on import. If we bundle
                // our own copy instead of using the consumer's, app-input hands
                // AntD a dayjs object from a DIFFERENT, unextended instance and
                // the picker dies with "clone.weekday is not a function" the
                // moment it positions a panel around a selected value.
                "dayjs",
            ],
        },
    },
});