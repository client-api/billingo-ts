# DocumentExportApi

All URIs are relative to *https://api.billingo.hu/v3*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**create**](DocumentExportApi.md#create) | **POST** /document-export | Create document export. |
| [**download**](DocumentExportApi.md#download) | **GET** /document-export/{id}/download | Return exported binary file. |
| [**poll**](DocumentExportApi.md#poll) | **GET** /document-export/{id}/poll | Retrieve export state. |


<a name="create"></a>
# **create**
> DocumentExportId create(CreateDocumentExport)

Create document export.

    Return with the id of the export.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **CreateDocumentExport** | [**CreateDocumentExport**](../Models/CreateDocumentExport.md)| Create document export body. | |

### Return type

[**DocumentExportId**](../Models/DocumentExportId.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="download"></a>
# **download**
> File download(id)

Return exported binary file.

    Return the exported file.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| The ID from create document export endpoint. | [default to null] |

### Return type

**File**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/*, application/json

<a name="poll"></a>
# **poll**
> DocumentExportStatus poll(id)

Retrieve export state.

    Return state of the given export.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| The ID from create document export endpoint. | [default to null] |

### Return type

[**DocumentExportStatus**](../Models/DocumentExportStatus.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

