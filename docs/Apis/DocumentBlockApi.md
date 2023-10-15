# DocumentBlockApi

All URIs are relative to *https://api.billingo.hu/v3*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**listDocumentBlock**](DocumentBlockApi.md#listDocumentBlock) | **GET** /document-blocks | List all document blocks |


<a name="listDocumentBlock"></a>
# **listDocumentBlock**
> DocumentBlockList listDocumentBlock(page, per\_page, type)

List all document blocks

    Returns a list of your document blocks. The document blocks are returned sorted by creation date, with the most recent document blocks appearing first.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **page** | **Integer**|  | [optional] [default to null] |
| **per\_page** | **Integer**|  | [optional] [default to 25] |
| **type** | [**DocumentBlockType**](../Models/.md)| Filter document blocks by type | [optional] [default to null] [enum: certificate_of_completion, dossier, invoice, offer, order_form, receipt, waybill] |

### Return type

[**DocumentBlockList**](../Models/DocumentBlockList.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

