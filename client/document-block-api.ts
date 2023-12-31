/* tslint:disable */
/* eslint-disable */
/**
 * Billingo API v3
 * This is a Billingo API v3 documentation. Our API based on REST software architectural style. API has resource-oriented URLs, accepts JSON-encoded request bodies and returns JSON-encoded responses. To use this API you have to generate a new API key on our [site](https://app.billingo.hu/api-key). After that, you can test your API key on this page.
 *
 * The version of the OpenAPI document: 3.0.14
 * Contact: hello@billingo.hu
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { ClientErrorResponse } from '../models';
// @ts-ignore
import { DocumentBlockList } from '../models';
// @ts-ignore
import { DocumentBlockType } from '../models';
// @ts-ignore
import { ServerErrorResponse } from '../models';
// @ts-ignore
import { SubscriptionErrorResponse } from '../models';
// @ts-ignore
import { TooManyRequestsResponse } from '../models';
// @ts-ignore
import { ValidationErrorResponse } from '../models';
/**
 * DocumentBlockApi - axios parameter creator
 * @export
 */
export const DocumentBlockApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Returns a list of your document blocks. The document blocks are returned sorted by creation date, with the most recent document blocks appearing first.
         * @summary List all document blocks
         * @param {number} [page] 
         * @param {number} [perPage] 
         * @param {DocumentBlockType} [type] Filter document blocks by type
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listDocumentBlock: async (page?: number, perPage?: number, type?: DocumentBlockType, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/document-blocks`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication api_key required
            await setApiKeyToObject(localVarHeaderParameter, "X-API-KEY", configuration)

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (perPage !== undefined) {
                localVarQueryParameter['per_page'] = perPage;
            }

            if (type !== undefined) {
                localVarQueryParameter['type'] = type;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DocumentBlockApi - functional programming interface
 * @export
 */
export const DocumentBlockApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = DocumentBlockApiAxiosParamCreator(configuration)
    return {
        /**
         * Returns a list of your document blocks. The document blocks are returned sorted by creation date, with the most recent document blocks appearing first.
         * @summary List all document blocks
         * @param {number} [page] 
         * @param {number} [perPage] 
         * @param {DocumentBlockType} [type] Filter document blocks by type
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listDocumentBlock(page?: number, perPage?: number, type?: DocumentBlockType, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DocumentBlockList>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listDocumentBlock(page, perPage, type, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * DocumentBlockApi - factory interface
 * @export
 */
export const DocumentBlockApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = DocumentBlockApiFp(configuration)
    return {
        /**
         * Returns a list of your document blocks. The document blocks are returned sorted by creation date, with the most recent document blocks appearing first.
         * @summary List all document blocks
         * @param {number} [page] 
         * @param {number} [perPage] 
         * @param {DocumentBlockType} [type] Filter document blocks by type
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listDocumentBlock(page?: number, perPage?: number, type?: DocumentBlockType, options?: any): AxiosPromise<DocumentBlockList> {
            return localVarFp.listDocumentBlock(page, perPage, type, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * DocumentBlockApi - interface
 * @export
 * @interface DocumentBlockApi
 */
export interface DocumentBlockApiInterface {
    /**
     * Returns a list of your document blocks. The document blocks are returned sorted by creation date, with the most recent document blocks appearing first.
     * @summary List all document blocks
     * @param {number} [page] 
     * @param {number} [perPage] 
     * @param {DocumentBlockType} [type] Filter document blocks by type
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocumentBlockApiInterface
     */
    listDocumentBlock(page?: number, perPage?: number, type?: DocumentBlockType, options?: AxiosRequestConfig): AxiosPromise<DocumentBlockList>;

}

/**
 * DocumentBlockApi - object-oriented interface
 * @export
 * @class DocumentBlockApi
 * @extends {BaseAPI}
 */
export class DocumentBlockApi extends BaseAPI implements DocumentBlockApiInterface {
    /**
     * Returns a list of your document blocks. The document blocks are returned sorted by creation date, with the most recent document blocks appearing first.
     * @summary List all document blocks
     * @param {number} [page] 
     * @param {number} [perPage] 
     * @param {DocumentBlockType} [type] Filter document blocks by type
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocumentBlockApi
     */
    public listDocumentBlock(page?: number, perPage?: number, type?: DocumentBlockType, options?: AxiosRequestConfig) {
        return DocumentBlockApiFp(this.configuration).listDocumentBlock(page, perPage, type, options).then((request) => request(this.axios, this.basePath));
    }
}

