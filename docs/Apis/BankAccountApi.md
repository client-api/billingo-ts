# BankAccountApi

All URIs are relative to *https://api.billingo.hu/v3*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createBankAccount**](BankAccountApi.md#createBankAccount) | **POST** /bank-accounts | Create a bank account |
| [**deleteBankAccount**](BankAccountApi.md#deleteBankAccount) | **DELETE** /bank-accounts/{id} | Delete a bank account |
| [**getBankAccount**](BankAccountApi.md#getBankAccount) | **GET** /bank-accounts/{id} | Retrieve a bank account |
| [**listBankAccount**](BankAccountApi.md#listBankAccount) | **GET** /bank-accounts | List all bank account |
| [**updateBankAccount**](BankAccountApi.md#updateBankAccount) | **PUT** /bank-accounts/{id} | Update a bank account |


<a name="createBankAccount"></a>
# **createBankAccount**
> BankAccount createBankAccount(BankAccount)

Create a bank account

    Create a new bank account. Returns a bank account object if the create is succeded.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **BankAccount** | [**BankAccount**](../Models/BankAccount.md)| BankAccount object that you would like to store. | |

### Return type

[**BankAccount**](../Models/BankAccount.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="deleteBankAccount"></a>
# **deleteBankAccount**
> deleteBankAccount(id)

Delete a bank account

    Delete an existing bank account.

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

<a name="getBankAccount"></a>
# **getBankAccount**
> BankAccount getBankAccount(id)

Retrieve a bank account

    Retrieves the details of an existing bank account.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **Integer**|  | [default to null] |

### Return type

[**BankAccount**](../Models/BankAccount.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="listBankAccount"></a>
# **listBankAccount**
> BankAccountList listBankAccount(page, per\_page)

List all bank account

    Returns a list of your bank accounts. The bank accounts are returned sorted by creation date, with the most recent bank account appearing first.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **page** | **Integer**|  | [optional] [default to null] |
| **per\_page** | **Integer**|  | [optional] [default to 25] |

### Return type

[**BankAccountList**](../Models/BankAccountList.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="updateBankAccount"></a>
# **updateBankAccount**
> BankAccount updateBankAccount(id, BankAccount)

Update a bank account

    Update an existing bank accounts. Returns a bank account object if the update is succeded.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **Integer**|  | [default to null] |
| **BankAccount** | [**BankAccount**](../Models/BankAccount.md)| Bank account object that you would like to update. | |

### Return type

[**BankAccount**](../Models/BankAccount.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

