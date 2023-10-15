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
import { DocumentExportFilterExtra } from './document-export-filter-extra';
// May contain unused imports in some cases
// @ts-ignore
import { DocumentExportOtherOptions } from './document-export-other-options';
// May contain unused imports in some cases
// @ts-ignore
import { DocumentExportQueryType } from './document-export-query-type';
// May contain unused imports in some cases
// @ts-ignore
import { DocumentExportSortBy } from './document-export-sort-by';
// May contain unused imports in some cases
// @ts-ignore
import { DocumentExportType } from './document-export-type';
// May contain unused imports in some cases
// @ts-ignore
import { PaymentMethod } from './payment-method';

/**
 * 
 * @export
 * @interface CreateDocumentExport
 */
export interface CreateDocumentExport {
    /**
     * 
     * @type {DocumentExportQueryType}
     * @memberof CreateDocumentExport
     */
    'query_type': DocumentExportQueryType;
    /**
     * 
     * @type {string}
     * @memberof CreateDocumentExport
     */
    'start_date': string;
    /**
     * 
     * @type {string}
     * @memberof CreateDocumentExport
     */
    'end_date': string;
    /**
     * 
     * @type {DocumentExportType}
     * @memberof CreateDocumentExport
     */
    'export_type': DocumentExportType;
    /**
     * 
     * @type {number}
     * @memberof CreateDocumentExport
     */
    'document_block_id'?: number;
    /**
     * 
     * @type {number}
     * @memberof CreateDocumentExport
     */
    'number_start_year'?: number;
    /**
     * 
     * @type {number}
     * @memberof CreateDocumentExport
     */
    'number_start_sequence'?: number;
    /**
     * 
     * @type {number}
     * @memberof CreateDocumentExport
     */
    'number_end_year'?: number;
    /**
     * 
     * @type {number}
     * @memberof CreateDocumentExport
     */
    'number_end_sequence'?: number;
    /**
     * 
     * @type {PaymentMethod}
     * @memberof CreateDocumentExport
     */
    'payment_method'?: PaymentMethod;
    /**
     * 
     * @type {DocumentExportSortBy}
     * @memberof CreateDocumentExport
     */
    'sort_by'?: DocumentExportSortBy;
    /**
     * 
     * @type {DocumentExportOtherOptions}
     * @memberof CreateDocumentExport
     */
    'other_options'?: DocumentExportOtherOptions;
    /**
     * 
     * @type {DocumentExportFilterExtra}
     * @memberof CreateDocumentExport
     */
    'filter_extra'?: DocumentExportFilterExtra;
}



