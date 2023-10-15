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
import { Document } from './document';

/**
 * A object with a data property that contains an array of up to limit documents. Each entry in the array is a separate document object. If no more documents are available, the resulting array will be empty.
 * @export
 * @interface DocumentList
 */
export interface DocumentList {
    /**
     * 
     * @type {Array<Document>}
     * @memberof DocumentList
     */
    'data'?: Array<Document>;
    /**
     * 
     * @type {number}
     * @memberof DocumentList
     */
    'total'?: number;
    /**
     * 
     * @type {number}
     * @memberof DocumentList
     */
    'per_page'?: number;
    /**
     * 
     * @type {number}
     * @memberof DocumentList
     */
    'current_page'?: number;
    /**
     * 
     * @type {number}
     * @memberof DocumentList
     */
    'last_page'?: number;
    /**
     * 
     * @type {string}
     * @memberof DocumentList
     */
    'prev_page_url'?: string;
    /**
     * 
     * @type {string}
     * @memberof DocumentList
     */
    'next_page_url'?: string;
}
