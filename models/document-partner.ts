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
// May contain unused imports in some cases
// @ts-ignore
import { PartnerTaxType } from './partner-tax-type';

/**
 * 
 * @export
 * @interface DocumentPartner
 */
export interface DocumentPartner {
    /**
     * 
     * @type {number}
     * @memberof DocumentPartner
     */
    'id'?: number;
    /**
     * 
     * @type {string}
     * @memberof DocumentPartner
     */
    'name'?: string;
    /**
     * 
     * @type {Address}
     * @memberof DocumentPartner
     */
    'address'?: Address;
    /**
     * 
     * @type {Array<string>}
     * @memberof DocumentPartner
     */
    'emails'?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof DocumentPartner
     */
    'taxcode'?: string;
    /**
     * 
     * @type {string}
     * @memberof DocumentPartner
     */
    'iban'?: string;
    /**
     * 
     * @type {string}
     * @memberof DocumentPartner
     */
    'swift'?: string;
    /**
     * 
     * @type {string}
     * @memberof DocumentPartner
     */
    'account_number'?: string;
    /**
     * 
     * @type {string}
     * @memberof DocumentPartner
     */
    'phone'?: string;
    /**
     * 
     * @type {PartnerTaxType}
     * @memberof DocumentPartner
     */
    'tax_type'?: PartnerTaxType;
}



