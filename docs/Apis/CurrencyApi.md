# CurrencyApi

All URIs are relative to *https://api.billingo.hu/v3*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getConversionRate**](CurrencyApi.md#getConversionRate) | **GET** /currencies | Get currencies exchange rate. |


<a name="getConversionRate"></a>
# **getConversionRate**
> ConversationRate getConversionRate(from, to, date)

Get currencies exchange rate.

    Return with the exchange value of given currencies.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **from** | [**Currency**](../Models/.md)|  | [default to null] [enum: AED, AUD, BGN, BRL, CAD, CHF, CNY, CZK, DKK, EUR, GBP, HKD, HRK, HUF, IDR, ILS, INR, ISK, JPY, KRW, MXN, MYR, NOK, NZD, PHP, PLN, RON, RSD, RUB, SEK, SGD, THB, TRY, UAH, USD, ZAR] |
| **to** | [**Currency**](../Models/.md)|  | [default to null] [enum: AED, AUD, BGN, BRL, CAD, CHF, CNY, CZK, DKK, EUR, GBP, HKD, HRK, HUF, IDR, ILS, INR, ISK, JPY, KRW, MXN, MYR, NOK, NZD, PHP, PLN, RON, RSD, RUB, SEK, SGD, THB, TRY, UAH, USD, ZAR] |
| **date** | **date**|  | [optional] [default to null] |

### Return type

[**ConversationRate**](../Models/ConversationRate.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

