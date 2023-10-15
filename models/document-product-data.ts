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
import { Entitlement } from './entitlement';
// May contain unused imports in some cases
// @ts-ignore
import { UnitPriceType } from './unit-price-type';
// May contain unused imports in some cases
// @ts-ignore
import { Vat } from './vat';

/**
 * 
 * @export
 * @interface DocumentProductData
 */
export interface DocumentProductData {
    /**
     * 
     * @type {string}
     * @memberof DocumentProductData
     */
    'name': string;
    /**
     * 
     * @type {number}
     * @memberof DocumentProductData
     */
    'unit_price': number;
    /**
     * 
     * @type {UnitPriceType}
     * @memberof DocumentProductData
     */
    'unit_price_type': UnitPriceType;
    /**
     * 
     * @type {number}
     * @memberof DocumentProductData
     */
    'quantity': number;
    /**
     * 
     * @type {string}
     * @memberof DocumentProductData
     */
    'unit': string;
    /**
     * 
     * @type {Vat}
     * @memberof DocumentProductData
     */
    'vat': Vat;
    /**
     * 
     * @type {string}
     * @memberof DocumentProductData
     */
    'comment'?: string;
    /**
     * 
     * @type {Entitlement}
     * @memberof DocumentProductData
     */
    'entitlement'?: Entitlement;
}



