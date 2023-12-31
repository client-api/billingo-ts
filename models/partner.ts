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
import { PartnerCustomBillingSettings } from './partner-custom-billing-settings';
// May contain unused imports in some cases
// @ts-ignore
import { PartnerTaxType } from './partner-tax-type';

/**
 * 
 * @export
 * @interface Partner
 */
export interface Partner {
    /**
     * 
     * @type {number}
     * @memberof Partner
     */
    'id'?: number;
    /**
     * 
     * @type {string}
     * @memberof Partner
     */
    'name'?: string;
    /**
     * 
     * @type {Address}
     * @memberof Partner
     */
    'address'?: Address;
    /**
     * 
     * @type {Array<string>}
     * @memberof Partner
     */
    'emails'?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof Partner
     */
    'taxcode'?: string;
    /**
     * 
     * @type {string}
     * @memberof Partner
     */
    'iban'?: string;
    /**
     * 
     * @type {string}
     * @memberof Partner
     */
    'swift'?: string;
    /**
     * 
     * @type {string}
     * @memberof Partner
     */
    'account_number'?: string;
    /**
     * 
     * @type {string}
     * @memberof Partner
     */
    'phone'?: string;
    /**
     * 
     * @type {string}
     * @memberof Partner
     */
    'general_ledger_number'?: string;
    /**
     * 
     * @type {PartnerTaxType}
     * @memberof Partner
     */
    'tax_type'?: PartnerTaxType;
    /**
     * 
     * @type {PartnerCustomBillingSettings}
     * @memberof Partner
     */
    'custom_billing_settings'?: PartnerCustomBillingSettings;
    /**
     * The tax number of group member. Send tax number for update. Send empty string for delete. Ignored if omitted.
     * @type {string}
     * @memberof Partner
     */
    'group_member_tax_number'?: string;
}



