# UtilApi

All URIs are relative to *https://api.billingo.hu/v3*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**checkTaxNumber**](UtilApi.md#checkTaxNumber) | **GET** /utils/check-tax-number/{tax_number} | Check tax number. |
| [**getId**](UtilApi.md#getId) | **GET** /utils/convert-legacy-id/{id} | Convert legacy ID to v3 ID. |
| [**getServerTime**](UtilApi.md#getServerTime) | **GET** /utils/time | Get the server time |


<a name="checkTaxNumber"></a>
# **checkTaxNumber**
> TaxNumber checkTaxNumber(tax\_number)

Check tax number.

    Check the given tax number format, and NAV validate.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **tax\_number** | **String**|  | [default to null] |

### Return type

[**TaxNumber**](../Models/TaxNumber.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getId"></a>
# **getId**
> Id getId(id)

Convert legacy ID to v3 ID.

    Retrieves the API v3 ID.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **Integer**|  | [default to null] |

### Return type

[**Id**](../Models/Id.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getServerTime"></a>
# **getServerTime**
> ServerTime getServerTime()

Get the server time

    Return the server time.

### Parameters
This endpoint does not need any parameter.

### Return type

[**ServerTime**](../Models/ServerTime.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

