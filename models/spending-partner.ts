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
import { Address } from './address';

/**
 * 
 * @export
 * @interface SpendingPartner
 */
export interface SpendingPartner {
    /**
     * 
     * @type {number}
     * @memberof SpendingPartner
     */
    'id'?: number;
    /**
     * 
     * @type {string}
     * @memberof SpendingPartner
     */
    'name'?: string;
    /**
     * 
     * @type {string}
     * @memberof SpendingPartner
     */
    'tax_code'?: string;
    /**
     * 
     * @type {Address}
     * @memberof SpendingPartner
     */
    'address'?: Address;
    /**
     * 
     * @type {string}
     * @memberof SpendingPartner
     */
    'iban'?: string;
    /**
     * 
     * @type {string}
     * @memberof SpendingPartner
     */
    'swift'?: string;
    /**
     * 
     * @type {string}
     * @memberof SpendingPartner
     */
    'account_number'?: string;
    /**
     * 
     * @type {string}
     * @memberof SpendingPartner
     */
    'phone'?: string;
    /**
     * 
     * @type {string}
     * @memberof SpendingPartner
     */
    'internal_comment'?: string;
    /**
     * 
     * @type {string}
     * @memberof SpendingPartner
     */
    'group_member_tax_number'?: string;
}

