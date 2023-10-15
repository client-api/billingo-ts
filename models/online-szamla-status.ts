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
import { OnlineSzamlaStatusMessage } from './online-szamla-status-message';

/**
 * 
 * @export
 * @interface OnlineSzamlaStatus
 */
export interface OnlineSzamlaStatus {
    /**
     * 
     * @type {string}
     * @memberof OnlineSzamlaStatus
     */
    'transaction_id'?: string;
    /**
     * 
     * @type {string}
     * @memberof OnlineSzamlaStatus
     */
    'status'?: string;
    /**
     * 
     * @type {Array<OnlineSzamlaStatusMessage>}
     * @memberof OnlineSzamlaStatus
     */
    'messages'?: Array<OnlineSzamlaStatusMessage>;
}

