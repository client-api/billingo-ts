# Document
## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **id** | **Integer** | The document&#39;s unique identifier. | [optional] [default to null] |
| **invoice\_number** | **String** | The document&#39;s invoice number. | [optional] [default to null] |
| **type** | [**DocumentType**](DocumentType.md) |  | [optional] [default to null] |
| **cancelled** | **Boolean** |  | [optional] [default to null] |
| **block\_id** | **Integer** | DocumentBlock&#39;s identifier. | [optional] [default to null] |
| **payment\_status** | [**PaymentStatus**](PaymentStatus.md) |  | [optional] [default to null] |
| **payment\_method** | [**PaymentMethod**](PaymentMethod.md) |  | [optional] [default to null] |
| **gross\_total** | **Float** | The document&#39;s gross total price. | [optional] [default to null] |
| **currency** | [**Currency**](Currency.md) |  | [optional] [default to null] |
| **conversion\_rate** | **Float** |  | [optional] [default to null] |
| **invoice\_date** | **date** |  | [optional] [default to null] |
| **fulfillment\_date** | **date** |  | [optional] [default to null] |
| **due\_date** | **date** |  | [optional] [default to null] |
| **paid\_date** | **date** |  | [optional] [default to null] |
| **organization** | [**DocumentOrganization**](DocumentOrganization.md) |  | [optional] [default to null] |
| **partner** | [**Partner**](Partner.md) |  | [optional] [default to null] |
| **document\_partner** | [**DocumentPartner**](DocumentPartner.md) |  | [optional] [default to null] |
| **electronic** | **Boolean** |  | [optional] [default to null] |
| **comment** | **String** |  | [optional] [default to null] |
| **tags** | **List** |  | [optional] [default to null] |
| **notification\_status** | [**DocumentNotificationStatus**](DocumentNotificationStatus.md) |  | [optional] [default to null] |
| **language** | [**DocumentLanguage**](DocumentLanguage.md) |  | [optional] [default to null] |
| **items** | [**List**](DocumentItem.md) |  | [optional] [default to null] |
| **summary** | [**DocumentSummary**](DocumentSummary.md) |  | [optional] [default to null] |
| **settings** | [**DocumentSettings**](DocumentSettings.md) |  | [optional] [default to null] |
| **online\_szamla\_status** | [**OnlineSzamlaStatusEnum**](OnlineSzamlaStatusEnum.md) |  | [optional] [default to null] |
| **related\_documents** | [**List**](DocumentAncestor.md) |  | [optional] [default to null] |
| **discount** | [**Discount**](Discount.md) |  | [optional] [default to null] |
| **correction\_type** | [**CorrectionType**](CorrectionType.md) |  | [optional] [default to null] |

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

