# ProductApi

All URIs are relative to *https://api.billingo.hu/v3*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createProduct**](ProductApi.md#createProduct) | **POST** /products | Create a product |
| [**deleteProduct**](ProductApi.md#deleteProduct) | **DELETE** /products/{id} | Delete a product |
| [**getProduct**](ProductApi.md#getProduct) | **GET** /products/{id} | Retrieve a product |
| [**listProduct**](ProductApi.md#listProduct) | **GET** /products | List all product |
| [**updateProduct**](ProductApi.md#updateProduct) | **PUT** /products/{id} | Update a product |


<a name="createProduct"></a>
# **createProduct**
> Product createProduct(Product)

Create a product

    Create a new product. Returns a product object if the create is succeded.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **Product** | [**Product**](../Models/Product.md)| Product object that you would like to store. | |

### Return type

[**Product**](../Models/Product.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="deleteProduct"></a>
# **deleteProduct**
> deleteProduct(id)

Delete a product

    Delete an existing product.

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

<a name="getProduct"></a>
# **getProduct**
> Product getProduct(id)

Retrieve a product

    Retrieves the details of an existing product.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **Integer**|  | [default to null] |

### Return type

[**Product**](../Models/Product.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="listProduct"></a>
# **listProduct**
> ProductList listProduct(page, per\_page, query)

List all product

    Returns a list of your products. The partners are returned sorted by creation date, with the most recent partners appearing first.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **page** | **Integer**|  | [optional] [default to null] |
| **per\_page** | **Integer**|  | [optional] [default to 25] |
| **query** | **String**|  | [optional] [default to null] |

### Return type

[**ProductList**](../Models/ProductList.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="updateProduct"></a>
# **updateProduct**
> Product updateProduct(id, Product)

Update a product

    Update an existing product. Returns a product object if the update is succeded.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **Integer**|  | [default to null] |
| **Product** | [**Product**](../Models/Product.md)| Product object that you would like to update. | |

### Return type

[**Product**](../Models/Product.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

