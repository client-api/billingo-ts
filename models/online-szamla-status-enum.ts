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

export const OnlineSzamlaStatusEnum = {
    Aborted: 'aborted',
    Done: 'done',
    EmptyOrganizationCountryCode: 'empty_organization_country_code',
    EmptyPartnerCountryCode: 'empty_partner_country_code',
    EmptyTax: 'empty_tax',
    Forbidden: 'forbidden',
    InvalidAddress: 'invalid_address',
    InvalidClient: 'invalid_client',
    InvalidConversionRate: 'invalid_conversion_rate',
    InvalidCustomer: 'invalid_customer',
    InvalidInvoiceReference: 'invalid_invoice_reference',
    InvalidPostalcode: 'invalid_postalcode',
    InvalidSecurityUser: 'invalid_security_user',
    InvalidTax: 'invalid_tax',
    InvalidTaxNumber: 'invalid_tax_number',
    InvalidUserRelation: 'invalid_user_relation',
    InvalidVatData: 'invalid_vat_data',
    InvoiceNumberNotUnique: 'invoice_number_not_unique',
    KobakProcessing: 'kobak_processing',
    MissingDocumentItemName: 'missing_document_item_name',
    NavWarn: 'nav_warn',
    NoOnlineSzamlaSettings: 'no_online_szamla_settings',
    NoSendByUser: 'no_send_by_user',
    NonExistTaxNumber: 'non_exist_tax_number',
    NotUnique: 'not unique',
    NotChecked: 'not_checked',
    NotRegisteredCustomer: 'not_registered_customer',
    Processing: 'processing',
    Received: 'received',
    Saved: 'saved',
    SendFailed: 'send_failed',
    Sent: 'sent',
    Started: 'started',
    TechnicalError: 'technical_error',
    UnderTaxLimit: 'under_tax_limit',
    UserHasInvalidKobak: 'user_has_invalid_kobak',
    UserHasnotKobak: 'user_hasnot_kobak',
    ValidationOk: 'validation_ok'
} as const;

export type OnlineSzamlaStatusEnum = typeof OnlineSzamlaStatusEnum[keyof typeof OnlineSzamlaStatusEnum];



