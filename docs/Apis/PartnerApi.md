# PartnerApi

All URIs are relative to *https://api.billingo.hu/v3*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createPartner**](PartnerApi.md#createPartner) | **POST** /partners | Create a partner |
| [**deletePartner**](PartnerApi.md#deletePartner) | **DELETE** /partners/{id} | Delete a partner |
| [**getPartner**](PartnerApi.md#getPartner) | **GET** /partners/{id} | Retrieve a partner |
| [**listPartner**](PartnerApi.md#listPartner) | **GET** /partners | List all partners |
| [**updatePartner**](PartnerApi.md#updatePartner) | **PUT** /partners/{id} | Update a partner |


<a name="createPartner"></a>
# **createPartner**
> Partner createPartner(Partner)

Create a partner

    Create a new partner. Returns a partner object if the create is succeded.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **Partner** | [**Partner**](../Models/Partner.md)| Partner object that you would like to store. | |

### Return type

[**Partner**](../Models/Partner.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="deletePartner"></a>
# **deletePartner**
> deletePartner(id)

Delete a partner

    Delete an existing partner.

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

<a name="getPartner"></a>
# **getPartner**
> Partner getPartner(id)

Retrieve a partner

    Retrieves the details of an existing partner.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **Integer**|  | [default to null] |

### Return type

[**Partner**](../Models/Partner.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="listPartner"></a>
# **listPartner**
> PartnerList listPartner(page, per\_page, query)

List all partners

    Returns a list of your partners. The partners are returned sorted by creation date, with the most recent partners appearing first.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **page** | **Integer**|  | [optional] [default to null] |
| **per\_page** | **Integer**|  | [optional] [default to 25] |
| **query** | **String**|  | [optional] [default to null] |

### Return type

[**PartnerList**](../Models/PartnerList.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="updatePartner"></a>
# **updatePartner**
> Partner updatePartner(id, Partner)

Update a partner

    Update an existing partner. Returns a partner object if the update is succeded.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **Integer**|  | [default to null] |
| **Partner** | [**Partner**](../Models/Partner.md)| Partner object that you would like to update. | |

### Return type

[**Partner**](../Models/Partner.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

