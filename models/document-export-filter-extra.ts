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


// May contain unused imports in some cases
// @ts-ignore
import { LedgerNumberInformation } from './ledger-number-information';

/**
 * 
 * @export
 * @interface DocumentExportFilterExtra
 */
export interface DocumentExportFilterExtra {
    /**
     * 
     * @type {string}
     * @memberof DocumentExportFilterExtra
     */
    'tensoft_vkod'?: string;
    /**
     * 
     * @type {LedgerNumberInformation}
     * @memberof DocumentExportFilterExtra
     */
    'ledger_number'?: LedgerNumberInformation;
    /**
     * 
     * @type {string}
     * @memberof DocumentExportFilterExtra
     */
    'forintsoft_konyvelesi_naplo_szam'?: string;
    /**
     * 
     * @type {string}
     * @memberof DocumentExportFilterExtra
     */
    'positive_ledger_number'?: string;
    /**
     * 
     * @type {string}
     * @memberof DocumentExportFilterExtra
     */
    'negative_ledger_number'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof DocumentExportFilterExtra
     */
    'rlb_kata'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof DocumentExportFilterExtra
     */
    'rlb_note'?: string;
    /**
     * 
     * @type {string}
     * @memberof DocumentExportFilterExtra
     */
    'novitax_naplokod'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof DocumentExportFilterExtra
     */
    'use_gross_values'?: boolean;
}

