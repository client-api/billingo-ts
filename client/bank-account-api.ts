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
import { BankAccount } from '../models';
// @ts-ignore
import { BankAccountList } from '../models';
// @ts-ignore
import { ClientErrorResponse } from '../models';
// @ts-ignore
import { ServerErrorResponse } from '../models';
// @ts-ignore
import { SubscriptionErrorResponse } from '../models';
// @ts-ignore
import { TooManyRequestsResponse } from '../models';
// @ts-ignore
import { ValidationErrorResponse } from '../models';
/**
 * BankAccountApi - axios parameter creator
 * @export
 */
export const BankAccountApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Create a new bank account. Returns a bank account object if the create is succeded.
         * @summary Create a bank account
         * @param {BankAccount} bankAccount BankAccount object that you would like to store.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createBankAccount: async (bankAccount: BankAccount, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'bankAccount' is not null or undefined
            assertParamExists('createBankAccount', 'bankAccount', bankAccount)
            const localVarPath = `/bank-accounts`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication api_key required
            await setApiKeyToObject(localVarHeaderParameter, "X-API-KEY", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(bankAccount, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Delete an existing bank account.
         * @summary Delete a bank account
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteBankAccount: async (id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('deleteBankAccount', 'id', id)
            const localVarPath = `/bank-accounts/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication api_key required
            await setApiKeyToObject(localVarHeaderParameter, "X-API-KEY", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Retrieves the details of an existing bank account.
         * @summary Retrieve a bank account
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getBankAccount: async (id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getBankAccount', 'id', id)
            const localVarPath = `/bank-accounts/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
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


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns a list of your bank accounts. The bank accounts are returned sorted by creation date, with the most recent bank account appearing first.
         * @summary List all bank account
         * @param {number} [page] 
         * @param {number} [perPage] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listBankAccount: async (page?: number, perPage?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/bank-accounts`;
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


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Update an existing bank accounts. Returns a bank account object if the update is succeded.
         * @summary Update a bank account
         * @param {number} id 
         * @param {BankAccount} bankAccount Bank account object that you would like to update.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateBankAccount: async (id: number, bankAccount: BankAccount, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('updateBankAccount', 'id', id)
            // verify required parameter 'bankAccount' is not null or undefined
            assertParamExists('updateBankAccount', 'bankAccount', bankAccount)
            const localVarPath = `/bank-accounts/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication api_key required
            await setApiKeyToObject(localVarHeaderParameter, "X-API-KEY", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(bankAccount, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * BankAccountApi - functional programming interface
 * @export
 */
export const BankAccountApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = BankAccountApiAxiosParamCreator(configuration)
    return {
        /**
         * Create a new bank account. Returns a bank account object if the create is succeded.
         * @summary Create a bank account
         * @param {BankAccount} bankAccount BankAccount object that you would like to store.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createBankAccount(bankAccount: BankAccount, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BankAccount>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createBankAccount(bankAccount, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Delete an existing bank account.
         * @summary Delete a bank account
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteBankAccount(id: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteBankAccount(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Retrieves the details of an existing bank account.
         * @summary Retrieve a bank account
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getBankAccount(id: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BankAccount>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getBankAccount(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns a list of your bank accounts. The bank accounts are returned sorted by creation date, with the most recent bank account appearing first.
         * @summary List all bank account
         * @param {number} [page] 
         * @param {number} [perPage] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listBankAccount(page?: number, perPage?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BankAccountList>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listBankAccount(page, perPage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Update an existing bank accounts. Returns a bank account object if the update is succeded.
         * @summary Update a bank account
         * @param {number} id 
         * @param {BankAccount} bankAccount Bank account object that you would like to update.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateBankAccount(id: number, bankAccount: BankAccount, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BankAccount>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateBankAccount(id, bankAccount, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * BankAccountApi - factory interface
 * @export
 */
export const BankAccountApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = BankAccountApiFp(configuration)
    return {
        /**
         * Create a new bank account. Returns a bank account object if the create is succeded.
         * @summary Create a bank account
         * @param {BankAccount} bankAccount BankAccount object that you would like to store.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createBankAccount(bankAccount: BankAccount, options?: any): AxiosPromise<BankAccount> {
            return localVarFp.createBankAccount(bankAccount, options).then((request) => request(axios, basePath));
        },
        /**
         * Delete an existing bank account.
         * @summary Delete a bank account
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteBankAccount(id: number, options?: any): AxiosPromise<void> {
            return localVarFp.deleteBankAccount(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieves the details of an existing bank account.
         * @summary Retrieve a bank account
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getBankAccount(id: number, options?: any): AxiosPromise<BankAccount> {
            return localVarFp.getBankAccount(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a list of your bank accounts. The bank accounts are returned sorted by creation date, with the most recent bank account appearing first.
         * @summary List all bank account
         * @param {number} [page] 
         * @param {number} [perPage] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listBankAccount(page?: number, perPage?: number, options?: any): AxiosPromise<BankAccountList> {
            return localVarFp.listBankAccount(page, perPage, options).then((request) => request(axios, basePath));
        },
        /**
         * Update an existing bank accounts. Returns a bank account object if the update is succeded.
         * @summary Update a bank account
         * @param {number} id 
         * @param {BankAccount} bankAccount Bank account object that you would like to update.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateBankAccount(id: number, bankAccount: BankAccount, options?: any): AxiosPromise<BankAccount> {
            return localVarFp.updateBankAccount(id, bankAccount, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * BankAccountApi - interface
 * @export
 * @interface BankAccountApi
 */
export interface BankAccountApiInterface {
    /**
     * Create a new bank account. Returns a bank account object if the create is succeded.
     * @summary Create a bank account
     * @param {BankAccount} bankAccount BankAccount object that you would like to store.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BankAccountApiInterface
     */
    createBankAccount(bankAccount: BankAccount, options?: AxiosRequestConfig): AxiosPromise<BankAccount>;

    /**
     * Delete an existing bank account.
     * @summary Delete a bank account
     * @param {number} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BankAccountApiInterface
     */
    deleteBankAccount(id: number, options?: AxiosRequestConfig): AxiosPromise<void>;

    /**
     * Retrieves the details of an existing bank account.
     * @summary Retrieve a bank account
     * @param {number} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BankAccountApiInterface
     */
    getBankAccount(id: number, options?: AxiosRequestConfig): AxiosPromise<BankAccount>;

    /**
     * Returns a list of your bank accounts. The bank accounts are returned sorted by creation date, with the most recent bank account appearing first.
     * @summary List all bank account
     * @param {number} [page] 
     * @param {number} [perPage] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BankAccountApiInterface
     */
    listBankAccount(page?: number, perPage?: number, options?: AxiosRequestConfig): AxiosPromise<BankAccountList>;

    /**
     * Update an existing bank accounts. Returns a bank account object if the update is succeded.
     * @summary Update a bank account
     * @param {number} id 
     * @param {BankAccount} bankAccount Bank account object that you would like to update.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BankAccountApiInterface
     */
    updateBankAccount(id: number, bankAccount: BankAccount, options?: AxiosRequestConfig): AxiosPromise<BankAccount>;

}

/**
 * BankAccountApi - object-oriented interface
 * @export
 * @class BankAccountApi
 * @extends {BaseAPI}
 */
export class BankAccountApi extends BaseAPI implements BankAccountApiInterface {
    /**
     * Create a new bank account. Returns a bank account object if the create is succeded.
     * @summary Create a bank account
     * @param {BankAccount} bankAccount BankAccount object that you would like to store.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BankAccountApi
     */
    public createBankAccount(bankAccount: BankAccount, options?: AxiosRequestConfig) {
        return BankAccountApiFp(this.configuration).createBankAccount(bankAccount, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Delete an existing bank account.
     * @summary Delete a bank account
     * @param {number} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BankAccountApi
     */
    public deleteBankAccount(id: number, options?: AxiosRequestConfig) {
        return BankAccountApiFp(this.configuration).deleteBankAccount(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieves the details of an existing bank account.
     * @summary Retrieve a bank account
     * @param {number} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BankAccountApi
     */
    public getBankAccount(id: number, options?: AxiosRequestConfig) {
        return BankAccountApiFp(this.configuration).getBankAccount(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of your bank accounts. The bank accounts are returned sorted by creation date, with the most recent bank account appearing first.
     * @summary List all bank account
     * @param {number} [page] 
     * @param {number} [perPage] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BankAccountApi
     */
    public listBankAccount(page?: number, perPage?: number, options?: AxiosRequestConfig) {
        return BankAccountApiFp(this.configuration).listBankAccount(page, perPage, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Update an existing bank accounts. Returns a bank account object if the update is succeded.
     * @summary Update a bank account
     * @param {number} id 
     * @param {BankAccount} bankAccount Bank account object that you would like to update.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BankAccountApi
     */
    public updateBankAccount(id: number, bankAccount: BankAccount, options?: AxiosRequestConfig) {
        return BankAccountApiFp(this.configuration).updateBankAccount(id, bankAccount, options).then((request) => request(this.axios, this.basePath));
    }
}

