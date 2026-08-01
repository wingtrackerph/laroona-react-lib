import React, { useEffect } from "react";
import PageHeader from "./page-header";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../contexts/auth-context";
import { useModalContext } from "../contexts/modal-context";
import { AppRequest, useRequestContext } from "../contexts/request-context";
import AppTable from "./app-table"; 

interface Properties {
    title: string;
    requests: AppRequest[];
    tableRequestKey: string;
    detailsModalId: string;
    detailsModal?: any;
    addModalId?: string;
    addModal?: any;
    hasActionAdd?: boolean;
    hasActionBack?: boolean;
    hasSearchBar?: boolean;
    hasDownloadButton?: boolean;
    hasSecondaryDownloadButton?: boolean;
    downloadText?: string;
    secondaryDownloadText?: string;
    isDownloading?: boolean;
    isSecondaryDownloading?: boolean;
    keysToSearch: string[];
    searchTableOnly?: boolean;
    filterBar?: any;
    tableHeaders: string[];
    tableColumns: any[];
    isTableRowClickable?: boolean;
    tablePageSize?: number;
    customActionIcon?: any;
    customActionTooltip?: string;
    tableMarginTop?: number;
    headerHeight?: number;
    onUseEffect?: () => void;
    onRenderRowColor?: (item: any) => string;
    onShowDetailsModal?: (item: any) => void;
    onRowEntryClick?: (item: any) => void;
    onRowClick?: (item: any) => void;
    onRowCustomClick?: (item: any) => void;
    onRowDeleteClick?: (item: any) => void;
    onSearch?: (item: any) => void;
    onDownloadClick?: () => void;
    onSecondaryDownloadClick?: () => void;
    renderLayout?: (content: React.ReactNode) => React.ReactNode;
}
const Overview = (properties: Properties) => {
    const { getRequest, getPostRequest, fetchRequest, notifyPostRequests } =
        useRequestContext();
    const { openModal, closeModal } = useModalContext();
    const { authUser } = useAuthContext();
    const navigate = useNavigate();
    const { fetchRequests, filterRequestData } = useRequestContext();

    useEffect(() => {
        if (authUser && properties.requests?.length > 0) {
            fetchRequests(properties.requests, false);
        }
    }, [authUser, properties.requests, fetchRequests]);

    useEffect(() => {
        if (properties.onUseEffect) {
            properties.onUseEffect();
        }
    }, [properties.onUseEffect]);

    const request = getRequest(properties.tableRequestKey);
    const isPaginated = request.isPaginated;

    const showDetailsModal = (item: any = null) => {
        if (!item) {
            item = {
                id: 0,
            };
        }

        // Close add modal if it's open
        if (
            properties.addModalId &&
            properties.addModalId !== properties.detailsModalId
        ) {
            closeModal(properties.addModalId);
        }

        if (properties.onShowDetailsModal) {
            properties.onShowDetailsModal(item);
        }

        const postRequest = getPostRequest(properties.detailsModalId);
        postRequest.errors = null;
        postRequest.errorMessage = null;
        postRequest.postData = structuredClone(item);
        notifyPostRequests();

        openModal(properties.detailsModalId);
    };

    const showAddModal = () => {
        const modalId = properties.addModalId || properties.detailsModalId;
        const item = {
            id: 0,
        };

        // Close details modal if add modal is different
        if (
            properties.addModalId &&
            properties.addModalId !== properties.detailsModalId
        ) {
            closeModal(properties.detailsModalId);
        }

        if (properties.onShowDetailsModal) {
            properties.onShowDetailsModal(item);
        }

        const postRequest = getPostRequest(modalId);
        postRequest.errors = null;
        postRequest.errorMessage = null;
        postRequest.postData = structuredClone(item);
        notifyPostRequests();

        openModal(modalId);
    };

    const searchRequest = (value: string) => {
        if (value.length >= 2 || value.length == 0) {
            const request = getRequest(properties.tableRequestKey);
            request.queryText = value;
            fetchRequest(request);
        }

        if (properties.onSearch) {
            properties.onSearch(value);
        }
    };

    const content = (
        <>
            <PageHeader
                title={properties.title}
                hasActionAdd={
                    properties.hasActionAdd != undefined
                        ? properties.hasActionAdd
                        : true
                }
                hasActionBack={
                    properties.hasActionBack != undefined
                        ? properties.hasActionBack
                        : false
                }
                hasSearchBar={
                    properties.hasSearchBar != undefined
                        ? properties.hasSearchBar
                        : true
                }
                hasDownloadButton={properties.hasDownloadButton}
                hasSecondaryDownloadButton={
                    properties.hasSecondaryDownloadButton
                }
                downloadText={properties.downloadText}
                secondaryDownloadText={
                    properties.secondaryDownloadText
                }
                isDownloading={properties.isDownloading}
                isSecondaryDownloading={
                    properties.isSecondaryDownloading
                }
                onAddClick={() => showAddModal()}
                onBackClick={() => navigate(-1)}
                onDownloadClick={properties.onDownloadClick}
                onSecondaryDownloadClick={
                    properties.onSecondaryDownloadClick
                }
                onSearch={(value) => {
                    if (isPaginated && !properties.searchTableOnly) {
                        searchRequest(value);
                        return;
                    }

                    filterRequestData(
                        properties.tableRequestKey,
                        value,
                        properties.keysToSearch,
                    );
                }}
            />
            {properties.filterBar && properties.filterBar}
            <AppTable
                headers={properties.tableHeaders}
                columns={properties.tableColumns}
                data={request.data}
                requestKey={properties.tableRequestKey}
                pageSize={properties.tablePageSize}
                customActionIcon={properties.customActionIcon}
                customActionTooltip={properties.customActionTooltip}
                marginTop={properties.tableMarginTop}
                headerHeight={properties.headerHeight}
                onRowEditClick={(item) => {
                    showDetailsModal(item);
                }}
                onRenderRowColor={properties.onRenderRowColor}
                onRowClick={properties.onRowClick}
                onRowCustomClick={properties.onRowCustomClick}
                onRowDeleteClick={properties.onRowDeleteClick}
            />
        </>
    );

    return (
        <>
            {properties.renderLayout ? properties.renderLayout(content) : content}
            {properties.detailsModal && properties.detailsModal}
            {properties.addModal && properties.addModal}
        </>
    );
};

export default Overview;
