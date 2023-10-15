# DocumentApi

All URIs are relative to *https://api.billingo.hu/v3*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**archiveDocument**](DocumentApi.md#archiveDocument) | **PUT** /documents/{id}/archive | Archive a proforma document. |
| [**cancelDocument**](DocumentApi.md#cancelDocument) | **POST** /documents/{id}/cancel | Cancel a document |
| [**createDocument**](DocumentApi.md#createDocument) | **POST** /documents | Create a document |
| [**createDocumentFromDraft**](DocumentApi.md#createDocumentFromDraft) | **PUT** /documents/{id} | Converts a draft to an invoice. |
| [**createDocumentFromProforma**](DocumentApi.md#createDocumentFromProforma) | **POST** /documents/{id}/create-from-proforma | Create a document from proforma. |
| [**createModificationDocument**](DocumentApi.md#createModificationDocument) | **POST** /documents/{id}/create-modification-document | Create a modification document. |
| [**createReceipt**](DocumentApi.md#createReceipt) | **POST** /documents/receipt | Create a receipt |
| [**createReceiptFromDraft**](DocumentApi.md#createReceiptFromDraft) | **PUT** /documents/receipt/{id} | Converts a draft to a receipt. |
| [**deleteDocument**](DocumentApi.md#deleteDocument) | **DELETE** /documents/{id} | Delete a draft. |
| [**deletePayment**](DocumentApi.md#deletePayment) | **DELETE** /documents/{id}/payments | Delete all payment history on document |
| [**documentCopy**](DocumentApi.md#documentCopy) | **POST** /documents/{id}/copy | Copy a document |
| [**downloadDocument**](DocumentApi.md#downloadDocument) | **GET** /documents/{id}/download | Download a document in PDF format. |
| [**getDocument**](DocumentApi.md#getDocument) | **GET** /documents/{id} | Retrieve a document |
| [**getDocumentByVendorId**](DocumentApi.md#getDocumentByVendorId) | **GET** /documents/vendor/{vendor_id} | Retrieve a document by vendor id |
| [**getOnlineSzamlaStatus**](DocumentApi.md#getOnlineSzamlaStatus) | **GET** /documents/{id}/online-szamla | Retrieve a document Online Számla status |
| [**getPayment**](DocumentApi.md#getPayment) | **GET** /documents/{id}/payments | Retrieve a payment histroy |
| [**getPublicUrl**](DocumentApi.md#getPublicUrl) | **GET** /documents/{id}/public-url | Retrieve a document download public url. |
| [**listDocument**](DocumentApi.md#listDocument) | **GET** /documents | List all documents |
| [**posPrint**](DocumentApi.md#posPrint) | **GET** /documents/{id}/print/pos | Returns a printable POS PDF |
| [**sendDocument**](DocumentApi.md#sendDocument) | **POST** /documents/{id}/send | Send invoice to given email adresses. |
| [**updatePayment**](DocumentApi.md#updatePayment) | **PUT** /documents/{id}/payments | Update payment history |


<a name="archiveDocument"></a>
# **archiveDocument**
> archiveDocument(id)

Archive a proforma document.

    Archive an existing proforma document.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **Integer**|  | [default to null] |

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="cancelDocument"></a>
# **cancelDocument**
> Document cancelDocument(id, DocumentCancellation)

Cancel a document

    Cancel a document. Returns a cancellation document object if the cancellation is succeded.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **Integer**|  | [default to null] |
| **DocumentCancellation** | [**DocumentCancellation**](../Models/DocumentCancellation.md)| Comment and notifiable email addresses - comma separated for multiple email addresses | [optional] |

### Return type

[**Document**](../Models/Document.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="createDocument"></a>
# **createDocument**
> Document createDocument(DocumentInsert)

Create a document

    Create a new document. Returns a document object if the create is succeded.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **DocumentInsert** | [**DocumentInsert**](../Models/DocumentInsert.md)| DocumentInsert object that you would like to store. | |

### Return type

[**Document**](../Models/Document.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="createDocumentFromDraft"></a>
# **createDocumentFromDraft**
> Document createDocumentFromDraft(id, DocumentInsert)

Converts a draft to an invoice.

    Converts a draft to an invoice. Returns the invoice object if the convert is succeded.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **Integer**|  | [default to null] |
| **DocumentInsert** | [**DocumentInsert**](../Models/DocumentInsert.md)| DocumentInsert object that you would like to store. | |

### Return type

[**Document**](../Models/Document.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="createDocumentFromProforma"></a>
# **createDocumentFromProforma**
> Document createDocumentFromProforma(id, InvoiceSettings)

Create a document from proforma.

    Create a new document from proforma. Returns a document object if the create is succeded.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **Integer**|  | [default to null] |
| **InvoiceSettings** | [**InvoiceSettings**](../Models/InvoiceSettings.md)| InvoiceSettings object. | [optional] |

### Return type

[**Document**](../Models/Document.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="createModificationDocument"></a>
# **createModificationDocument**
> Document createModificationDocument(id, ModificationDocumentInsert)

Create a modification document.

    Create a modification document for the given document. Returns a new document object if the create is successful.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **Integer**|  | [default to null] |
| **ModificationDocumentInsert** | [**ModificationDocumentInsert**](../Models/ModificationDocumentInsert.md)| ModificationDocumentInsert object that you would like to store. | |

### Return type

[**Document**](../Models/Document.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="createReceipt"></a>
# **createReceipt**
> Document createReceipt(ReceiptInsert)

Create a receipt

    Create a new receipt. Returns a document object if the create is succeded.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **ReceiptInsert** | [**ReceiptInsert**](../Models/ReceiptInsert.md)| ReceiptInsert object that you would like to store. | |

### Return type

[**Document**](../Models/Document.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="createReceiptFromDraft"></a>
# **createReceiptFromDraft**
> Document createReceiptFromDraft(id, ReceiptInsert)

Converts a draft to a receipt.

    Converts a draft to a receipt. Returns the receipt object if the convert is succeded.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **Integer**|  | [default to null] |
| **ReceiptInsert** | [**ReceiptInsert**](../Models/ReceiptInsert.md)| ReceiptInsert object that you would like to store. | |

### Return type

[**Document**](../Models/Document.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="deleteDocument"></a>
# **deleteDocument**
> deleteDocument(id)

Delete a draft.

    Delete an existing draft.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **Integer**|  | [default to null] |

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="deletePayment"></a>
# **deletePayment**
> List deletePayment(id)

Delete all payment history on document

    Delete all exist payment history on document.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **Integer**|  | [default to null] |

### Return type

[**List**](../Models/PaymentHistory.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="documentCopy"></a>
# **documentCopy**
> Document documentCopy(id)

Copy a document

    Copy a document. Returns the new document if the copy was succeded.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **Integer**|  | [default to null] |

### Return type

[**Document**](../Models/Document.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="downloadDocument"></a>
# **downloadDocument**
> File downloadDocument(id)

Download a document in PDF format.

    Download a document. Returns a document in PDF format.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **Integer**|  | [default to null] |

### Return type

**File**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/pdf, application/json

<a name="getDocument"></a>
# **getDocument**
> Document getDocument(id)

Retrieve a document

    Retrieves the details of an existing document.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **Integer**|  | [default to null] |

### Return type

[**Document**](../Models/Document.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getDocumentByVendorId"></a>
# **getDocumentByVendorId**
> Document getDocumentByVendorId(vendor\_id)

Retrieve a document by vendor id

    Retrieves the details of an existing document by vendor id.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **vendor\_id** | **String**|  | [default to null] |

### Return type

[**Document**](../Models/Document.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getOnlineSzamlaStatus"></a>
# **getOnlineSzamlaStatus**
> OnlineSzamlaStatus getOnlineSzamlaStatus(id)

Retrieve a document Online Számla status

    Retrieves the details of an existing document status.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **Integer**|  | [default to null] |

### Return type

[**OnlineSzamlaStatus**](../Models/OnlineSzamlaStatus.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getPayment"></a>
# **getPayment**
> List getPayment(id)

Retrieve a payment histroy

    Retrieves the details of payment history an existing document.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **Integer**|  | [default to null] |

### Return type

[**List**](../Models/PaymentHistory.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getPublicUrl"></a>
# **getPublicUrl**
> DocumentPublicUrl getPublicUrl(id)

Retrieve a document download public url.

    Retrieves public url to download an existing document.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **Integer**|  | [default to null] |

### Return type

[**DocumentPublicUrl**](../Models/DocumentPublicUrl.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="listDocument"></a>
# **listDocument**
> DocumentList listDocument(page, per\_page, block\_id, partner\_id, payment\_method, payment\_status, start\_date, end\_date, start\_number, end\_number, start\_year, end\_year, type, query, paid\_start\_date, paid\_end\_date, fulfillment\_start\_date, fulfillment\_end\_date, last\_modified\_date)

List all documents

    Returns a list of your documents. The documents are returned sorted by creation date, with the most recent documents appearing first.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **page** | **Integer**|  | [optional] [default to null] |
| **per\_page** | **Integer**|  | [optional] [default to 25] |
| **block\_id** | **Integer**| Filter documents by the identifier of your DocumentBlock. | [optional] [default to null] |
| **partner\_id** | **Integer**| Filter documents by the identifier of your Partner. | [optional] [default to null] |
| **payment\_method** | [**PaymentMethod**](../Models/.md)| Filter documents by PaymentMethod value. | [optional] [default to null] [enum: aruhitel, bankcard, barion, barter, cash, cash_on_delivery, coupon, elore_utalas, ep_kartya, kompenzacio, levonas, online_bankcard, other, paylike, payoneer, paypal, paypal_utolag, payu, pick_pack_pont, postai_csekk, postautalvany, skrill, szep_card, transferwise, upwork, utalvany, valto, wire_transfer] |
| **payment\_status** | [**PaymentStatus**](../Models/.md)| Filter documents by PaymentStatus value. | [optional] [default to null] [enum: expired, none, outstanding, paid, partially_paid] |
| **start\_date** | **date**| Filter documents by their invoice date. | [optional] [default to null] |
| **end\_date** | **date**| Filter documents by their invoice date. | [optional] [default to null] |
| **start\_number** | **Integer**| Starting number of the document, should not contain year or any other formatting. Required if &#x60;start_year&#x60; given | [optional] [default to null] |
| **end\_number** | **Integer**| Ending number of the document, should not contain year or any other formatting. Required if &#x60;end_year&#x60; given | [optional] [default to null] |
| **start\_year** | **Integer**| Year for &#x60;start_number&#x60; parameter. Required if &#x60;start_number&#x60; given. | [optional] [default to null] |
| **end\_year** | **Integer**| Year for &#x60;end_number&#x60; parameter. Required if &#x60;end_number&#x60; given. | [optional] [default to null] |
| **type** | [**DocumentType**](../Models/.md)| Filter documents by type | [optional] [default to null] [enum: advance, cancellation, cert_of_completion, d_cert_of_completion, dossier, draft, draft_offer, draft_order_form, draft_waybill, invoice, modification, offer, order_form, proforma, receipt, receipt_cancellation, waybill] |
| **query** | **String**| Filter documents by the given text | [optional] [default to null] |
| **paid\_start\_date** | **date**| Filter documents by their payment date. | [optional] [default to null] |
| **paid\_end\_date** | **date**| Filter documents by their payment date. | [optional] [default to null] |
| **fulfillment\_start\_date** | **date**| Filter documents by their fulfillment date. | [optional] [default to null] |
| **fulfillment\_end\_date** | **date**| Filter documents by their fulfillment date. | [optional] [default to null] |
| **last\_modified\_date** | **String**| Filter documents by their last modified date. | [optional] [default to null] |

### Return type

[**DocumentList**](../Models/DocumentList.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="posPrint"></a>
# **posPrint**
> File posPrint(id, size)

Returns a printable POS PDF

    Returns a printable POS PDF file of a particular document.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **Integer**|  | [default to null] |
| **size** | **BigDecimal**| In which size the POS PDF should be rendered. | [default to null] [enum: 58, 80] |

### Return type

**File**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/pdf, application/json

<a name="sendDocument"></a>
# **sendDocument**
> SendDocument sendDocument(id, SendDocument)

Send invoice to given email adresses.

    Returns a list of emails, where the invoice is sent.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **Integer**|  | [default to null] |
| **SendDocument** | [**SendDocument**](../Models/SendDocument.md)| List of email-s where you want to send the invoice. | [optional] |

### Return type

[**SendDocument**](../Models/SendDocument.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="updatePayment"></a>
# **updatePayment**
> List updatePayment(id, PaymentHistory)

Update payment history

    Update payment history an existing document. Returns a payment history object if the update is succeded.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **Integer**|  | [default to null] |
| **PaymentHistory** | [**List**](../Models/PaymentHistory.md)| Payment history object that you would like to update. | |

### Return type

[**List**](../Models/PaymentHistory.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

