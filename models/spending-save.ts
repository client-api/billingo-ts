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
import { Category } from './category';
// May contain unused imports in some cases
// @ts-ignore
import { Currency } from './currency';
// May contain unused imports in some cases
// @ts-ignore
import { SpendingPaymentMethod } from './spending-payment-method';

/**
 * 
 * @export
 * @interface SpendingSave
 */
export interface SpendingSave {
    /**
     * 
     * @type {Currency}
     * @memberof SpendingSave
     */
    'currency': Currency;
    /**
     * 
     * @type {number}
     * @memberof SpendingSave
     */
    'total_gross': number;
    /**
     * 
     * @type {number}
     * @memberof SpendingSave
     */
    'total_gross_huf': number;
    /**
     * 
     * @type {number}
     * @memberof SpendingSave
     */
    'total_vat_amount': number;
    /**
     * 
     * @type {number}
     * @memberof SpendingSave
     */
    'total_vat_amount_huf': number;
    /**
     * 
     * @type {string}
     * @memberof SpendingSave
     */
    'fulfillment_date': string;
    /**
     * 
     * @type {Category}
     * @memberof SpendingSave
     */
    'category': Category;
    /**
     * 
     * @type {SpendingPaymentMethod}
     * @memberof SpendingSave
     */
    'payment_method': SpendingPaymentMethod;
    /**
     * 
     * @type {number}
     * @memberof SpendingSave
     */
    'conversion_rate'?: number;
    /**
     * 
     * @type {string}
     * @memberof SpendingSave
     */
    'paid_at'?: string;
    /**
     * 
     * @type {string}
     * @memberof SpendingSave
     */
    'comment'?: string;
    /**
     * 
     * @type {string}
     * @memberof SpendingSave
     */
    'invoice_number'?: string;
    /**
     * 
     * @type {string}
     * @memberof SpendingSave
     */
    'invoice_date'?: string;
    /**
     * 
     * @type {string}
     * @memberof SpendingSave
     */
    'due_date'?: string;
    /**
     * 
     * @type {number}
     * @memberof SpendingSave
     */
    'partner_id'?: number;
}


