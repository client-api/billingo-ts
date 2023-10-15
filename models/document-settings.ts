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
import { DocumentType } from './document-type';
// May contain unused imports in some cases
// @ts-ignore
import { OnlinePayment } from './online-payment';
// May contain unused imports in some cases
// @ts-ignore
import { Round } from './round';

/**
 * 
 * @export
 * @interface DocumentSettings
 */
export interface DocumentSettings {
    /**
     * 
     * @type {boolean}
     * @memberof DocumentSettings
     */
    'mediated_service'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof DocumentSettings
     */
    'without_financial_fulfillment'?: boolean;
    /**
     * 
     * @type {OnlinePayment}
     * @memberof DocumentSettings
     */
    'online_payment'?: OnlinePayment;
    /**
     * 
     * @type {Round}
     * @memberof DocumentSettings
     */
    'round'?: Round;
    /**
     * 
     * @type {boolean}
     * @memberof DocumentSettings
     */
    'no_send_onlineszamla_by_user'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof DocumentSettings
     */
    'order_number'?: string;
    /**
     * 
     * @type {number}
     * @memberof DocumentSettings
     */
    'place_id'?: number | null;
    /**
     * 
     * @type {boolean}
     * @memberof DocumentSettings
     */
    'instant_payment'?: boolean;
    /**
     * 
     * @type {DocumentType}
     * @memberof DocumentSettings
     */
    'selected_type'?: DocumentType;
}


