# SpendingApi

All URIs are relative to *https://api.billingo.hu/v3*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**spendingDelete**](SpendingApi.md#spendingDelete) | **DELETE** /spendings/{id} | Deletes a spending. |
| [**spendingList**](SpendingApi.md#spendingList) | **GET** /spendings | Lists all spending |
| [**spendingSave**](SpendingApi.md#spendingSave) | **POST** /spendings | Creates a new spending. |
| [**spendingShow**](SpendingApi.md#spendingShow) | **GET** /spendings/{id} | Retrieves one specific spending. |
| [**spendingUpdate**](SpendingApi.md#spendingUpdate) | **PUT** /spendings/{id} | Updates a spending item. |


<a name="spendingDelete"></a>
# **spendingDelete**
> spendingDelete(id)

Deletes a spending.

    Deletes the spending identified by the ID given in path.

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

<a name="spendingList"></a>
# **spendingList**
> SpendingList spendingList(q, page, per\_page, spending\_date, start\_date, end\_date, payment\_status, spending\_type, categories, currencies, payment\_methods)

Lists all spending

    Returns a list of your spending items, ordered by the due date.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **q** | **String**|  | [optional] [default to ] |
| **page** | **Integer**|  | [optional] [default to 1] |
| **per\_page** | **Integer**|  | [optional] [default to 25] |
| **spending\_date** | [**DateType**](../Models/.md)|  | [optional] [default to null] [enum: due_date, fulfillment_date, invoice_date] |
| **start\_date** | **String**|  | [optional] [default to null] |
| **end\_date** | **String**|  | [optional] [default to null] |
| **payment\_status** | [**PaymentStatusSpending**](../Models/.md)|  | [optional] [default to null] [enum: all, paid, unpaid] |
| **spending\_type** | [**Source**](../Models/.md)|  | [optional] [default to null] [enum: all, manual, nav] |
| **categories** | [**Category**](../Models/.md)|  | [optional] [default to null] [enum: advertisement, development, other, overheads, service, stock, tangible_assets] |
| **currencies** | [**Currency**](../Models/.md)|  | [optional] [default to null] [enum: AED, AUD, BGN, BRL, CAD, CHF, CNY, CZK, DKK, EUR, GBP, HKD, HRK, HUF, IDR, ILS, INR, ISK, JPY, KRW, MXN, MYR, NOK, NZD, PHP, PLN, RON, RSD, RUB, SEK, SGD, THB, TRY, UAH, USD, ZAR] |
| **payment\_methods** | [**PaymentMethod**](../Models/.md)|  | [optional] [default to null] [enum: aruhitel, bankcard, barion, barter, cash, cash_on_delivery, coupon, elore_utalas, ep_kartya, kompenzacio, levonas, online_bankcard, other, paylike, payoneer, paypal, paypal_utolag, payu, pick_pack_pont, postai_csekk, postautalvany, skrill, szep_card, transferwise, upwork, utalvany, valto, wire_transfer] |

### Return type

[**SpendingList**](../Models/SpendingList.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="spendingSave"></a>
# **spendingSave**
> Spending spendingSave(SpendingSave)

Creates a new spending.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **SpendingSave** | [**SpendingSave**](../Models/SpendingSave.md)|  | [optional] |

### Return type

[**Spending**](../Models/Spending.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="spendingShow"></a>
# **spendingShow**
> Spending spendingShow(id)

Retrieves one specific spending.

    Retrives the spending identified by the given ID in path.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **Integer**|  | [default to null] |

### Return type

[**Spending**](../Models/Spending.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="spendingUpdate"></a>
# **spendingUpdate**
> Spending spendingUpdate(id, SpendingSave)

Updates a spending item.

    Updates the spending item identified by the ID given in path.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **Integer**|  | [default to null] |
| **SpendingSave** | [**SpendingSave**](../Models/SpendingSave.md)|  | [optional] |

### Return type

[**Spending**](../Models/Spending.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

