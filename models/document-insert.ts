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
// May contain unused imports in some cases
// @ts-ignore
import { Discount } from './discount';
// May contain unused imports in some cases
// @ts-ignore
import { DocumentInsertItemsInner } from './document-insert-items-inner';
// May contain unused imports in some cases
// @ts-ignore
import { DocumentInsertType } from './document-insert-type';
// May contain unused imports in some cases
// @ts-ignore
import { DocumentLanguage } from './document-language';
// May contain unused imports in some cases
// @ts-ignore
import { DocumentSettings } from './document-settings';
// May contain unused imports in some cases
// @ts-ignore
import { PaymentMethod } from './payment-method';

/**
 * 
 * @export
 * @interface DocumentInsert
 */
export interface DocumentInsert {
    /**
     * 
     * @type {number}
     * @memberof DocumentInsert
     */
    'partner_id': number;
    /**
     * 
     * @type {number}
     * @memberof DocumentInsert
     */
    'block_id': number;
    /**
     * 
     * @type {DocumentInsertType}
     * @memberof DocumentInsert
     */
    'type': DocumentInsertType;
    /**
     * 
     * @type {string}
     * @memberof DocumentInsert
     */
    'fulfillment_date': string;
    /**
     * 
     * @type {string}
     * @memberof DocumentInsert
     */
    'due_date': string;
    /**
     * 
     * @type {PaymentMethod}
     * @memberof DocumentInsert
     */
    'payment_method': PaymentMethod;
    /**
     * 
     * @type {DocumentLanguage}
     * @memberof DocumentInsert
     */
    'language': DocumentLanguage;
    /**
     * 
     * @type {Currency}
     * @memberof DocumentInsert
     */
    'currency': Currency;
    /**
     * 
     * @type {string}
     * @memberof DocumentInsert
     */
    'vendor_id'?: string;
    /**
     * 
     * @type {number}
     * @memberof DocumentInsert
     */
    'bank_account_id'?: number;
    /**
     * 
     * @type {number}
     * @memberof DocumentInsert
     */
    'conversion_rate'?: number;
    /**
     * 
     * @type {boolean}
     * @memberof DocumentInsert
     */
    'electronic'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof DocumentInsert
     */
    'paid'?: boolean;
    /**
     * 
     * @type {Array<DocumentInsertItemsInner>}
     * @memberof DocumentInsert
     */
    'items'?: Array<DocumentInsertItemsInner>;
    /**
     * 
     * @type {string}
     * @memberof DocumentInsert
     */
    'comment'?: string;
    /**
     * 
     * @type {DocumentSettings}
     * @memberof DocumentInsert
     */
    'settings'?: DocumentSettings;
    /**
     * 
     * @type {Array<number>}
     * @memberof DocumentInsert
     */
    'advance_invoice'?: Array<number>;
    /**
     * 
     * @type {Discount}
     * @memberof DocumentInsert
     */
    'discount'?: Discount;
    /**
     * 
     * @type {boolean}
     * @memberof DocumentInsert
     */
    'instant_payment'?: boolean;
}



