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
import { Currency } from './currency';

/**
 * 
 * @export
 * @interface BankAccount
 */
export interface BankAccount {
    /**
     * 
     * @type {string}
     * @memberof BankAccount
     */
    'name': string;
    /**
     * 
     * @type {string}
     * @memberof BankAccount
     */
    'account_number': string;
    /**
     * 
     * @type {Currency}
     * @memberof BankAccount
     */
    'currency': Currency;
    /**
     * 
     * @type {number}
     * @memberof BankAccount
     */
    'id'?: number;
    /**
     * 
     * @type {string}
     * @memberof BankAccount
     */
    'account_number_iban'?: string;
    /**
     * 
     * @type {string}
     * @memberof BankAccount
     */
    'swift'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BankAccount
     * @deprecated
     */
    'need_qr'?: boolean;
}



