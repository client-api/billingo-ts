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



/**
 * 
 * @export
 * @enum {string}
 */

export const DocumentExportType = {
    Armada: 'armada',
    AwsBatch: 'aws_batch',
    ExPanda: 'ex_panda',
    Forintsoft: 'forintsoft',
    Hessyn: 'hessyn',
    Ima: 'ima',
    Infoteka: 'infoteka',
    KulcsKonyv: 'kulcs_konyv',
    Maxitax: 'maxitax',
    NagyMachinator: 'nagy_machinator',
    NavPtgszlah: 'nav_ptgszlah',
    NavStatus: 'nav_status',
    NavXml: 'nav_xml',
    NavXmlAlias: 'nav_xml_alias',
    Novitax: 'novitax',
    ProformaOutstanding: 'proforma_outstanding',
    Relax: 'relax',
    Rlb: 'rlb',
    Rlb60: 'rlb60',
    RlbDoubleEntry: 'rlb_double_entry',
    SimpleCsv: 'simple_csv',
    SimpleExcel: 'simple_excel',
    SimpleExcelItems: 'simple_excel_items',
    Tensoft: 'tensoft',
    Tensoft29Dot65: 'tensoft_29_dot_65'
} as const;

export type DocumentExportType = typeof DocumentExportType[keyof typeof DocumentExportType];



