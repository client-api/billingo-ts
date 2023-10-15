# Documentation for Billingo API v3

<a name="documentation-for-api-endpoints"></a>
## Documentation for API Endpoints

All URIs are relative to *https://api.billingo.hu/v3*

| Class | Method | HTTP request | Description |
|------------ | ------------- | ------------- | -------------|
| *BankAccountApi* | [**createBankAccount**](Apis/BankAccountApi.md#createbankaccount) | **POST** /bank-accounts | Create a bank account |
*BankAccountApi* | [**deleteBankAccount**](Apis/BankAccountApi.md#deletebankaccount) | **DELETE** /bank-accounts/{id} | Delete a bank account |
*BankAccountApi* | [**getBankAccount**](Apis/BankAccountApi.md#getbankaccount) | **GET** /bank-accounts/{id} | Retrieve a bank account |
*BankAccountApi* | [**listBankAccount**](Apis/BankAccountApi.md#listbankaccount) | **GET** /bank-accounts | List all bank account |
*BankAccountApi* | [**updateBankAccount**](Apis/BankAccountApi.md#updatebankaccount) | **PUT** /bank-accounts/{id} | Update a bank account |
| *CurrencyApi* | [**getConversionRate**](Apis/CurrencyApi.md#getconversionrate) | **GET** /currencies | Get currencies exchange rate. |
| *DocumentApi* | [**archiveDocument**](Apis/DocumentApi.md#archivedocument) | **PUT** /documents/{id}/archive | Archive a proforma document. |
*DocumentApi* | [**cancelDocument**](Apis/DocumentApi.md#canceldocument) | **POST** /documents/{id}/cancel | Cancel a document |
*DocumentApi* | [**createDocument**](Apis/DocumentApi.md#createdocument) | **POST** /documents | Create a document |
*DocumentApi* | [**createDocumentFromDraft**](Apis/DocumentApi.md#createdocumentfromdraft) | **PUT** /documents/{id} | Converts a draft to an invoice. |
*DocumentApi* | [**createDocumentFromProforma**](Apis/DocumentApi.md#createdocumentfromproforma) | **POST** /documents/{id}/create-from-proforma | Create a document from proforma. |
*DocumentApi* | [**createModificationDocument**](Apis/DocumentApi.md#createmodificationdocument) | **POST** /documents/{id}/create-modification-document | Create a modification document. |
*DocumentApi* | [**createReceipt**](Apis/DocumentApi.md#createreceipt) | **POST** /documents/receipt | Create a receipt |
*DocumentApi* | [**createReceiptFromDraft**](Apis/DocumentApi.md#createreceiptfromdraft) | **PUT** /documents/receipt/{id} | Converts a draft to a receipt. |
*DocumentApi* | [**deleteDocument**](Apis/DocumentApi.md#deletedocument) | **DELETE** /documents/{id} | Delete a draft. |
*DocumentApi* | [**deletePayment**](Apis/DocumentApi.md#deletepayment) | **DELETE** /documents/{id}/payments | Delete all payment history on document |
*DocumentApi* | [**documentCopy**](Apis/DocumentApi.md#documentcopy) | **POST** /documents/{id}/copy | Copy a document |
*DocumentApi* | [**downloadDocument**](Apis/DocumentApi.md#downloaddocument) | **GET** /documents/{id}/download | Download a document in PDF format. |
*DocumentApi* | [**getDocument**](Apis/DocumentApi.md#getdocument) | **GET** /documents/{id} | Retrieve a document |
*DocumentApi* | [**getDocumentByVendorId**](Apis/DocumentApi.md#getdocumentbyvendorid) | **GET** /documents/vendor/{vendor_id} | Retrieve a document by vendor id |
*DocumentApi* | [**getOnlineSzamlaStatus**](Apis/DocumentApi.md#getonlineszamlastatus) | **GET** /documents/{id}/online-szamla | Retrieve a document Online Számla status |
*DocumentApi* | [**getPayment**](Apis/DocumentApi.md#getpayment) | **GET** /documents/{id}/payments | Retrieve a payment histroy |
*DocumentApi* | [**getPublicUrl**](Apis/DocumentApi.md#getpublicurl) | **GET** /documents/{id}/public-url | Retrieve a document download public url. |
*DocumentApi* | [**listDocument**](Apis/DocumentApi.md#listdocument) | **GET** /documents | List all documents |
*DocumentApi* | [**posPrint**](Apis/DocumentApi.md#posprint) | **GET** /documents/{id}/print/pos | Returns a printable POS PDF |
*DocumentApi* | [**sendDocument**](Apis/DocumentApi.md#senddocument) | **POST** /documents/{id}/send | Send invoice to given email adresses. |
*DocumentApi* | [**updatePayment**](Apis/DocumentApi.md#updatepayment) | **PUT** /documents/{id}/payments | Update payment history |
| *DocumentBlockApi* | [**listDocumentBlock**](Apis/DocumentBlockApi.md#listdocumentblock) | **GET** /document-blocks | List all document blocks |
| *DocumentExportApi* | [**create**](Apis/DocumentExportApi.md#create) | **POST** /document-export | Create document export. |
*DocumentExportApi* | [**download**](Apis/DocumentExportApi.md#download) | **GET** /document-export/{id}/download | Return exported binary file. |
*DocumentExportApi* | [**poll**](Apis/DocumentExportApi.md#poll) | **GET** /document-export/{id}/poll | Retrieve export state. |
| *OrganizationApi* | [**getOrganizationData**](Apis/OrganizationApi.md#getorganizationdata) | **GET** /organization | Retrieve a organization data. |
| *PartnerApi* | [**createPartner**](Apis/PartnerApi.md#createpartner) | **POST** /partners | Create a partner |
*PartnerApi* | [**deletePartner**](Apis/PartnerApi.md#deletepartner) | **DELETE** /partners/{id} | Delete a partner |
*PartnerApi* | [**getPartner**](Apis/PartnerApi.md#getpartner) | **GET** /partners/{id} | Retrieve a partner |
*PartnerApi* | [**listPartner**](Apis/PartnerApi.md#listpartner) | **GET** /partners | List all partners |
*PartnerApi* | [**updatePartner**](Apis/PartnerApi.md#updatepartner) | **PUT** /partners/{id} | Update a partner |
| *ProductApi* | [**createProduct**](Apis/ProductApi.md#createproduct) | **POST** /products | Create a product |
*ProductApi* | [**deleteProduct**](Apis/ProductApi.md#deleteproduct) | **DELETE** /products/{id} | Delete a product |
*ProductApi* | [**getProduct**](Apis/ProductApi.md#getproduct) | **GET** /products/{id} | Retrieve a product |
*ProductApi* | [**listProduct**](Apis/ProductApi.md#listproduct) | **GET** /products | List all product |
*ProductApi* | [**updateProduct**](Apis/ProductApi.md#updateproduct) | **PUT** /products/{id} | Update a product |
| *SpendingApi* | [**spendingDelete**](Apis/SpendingApi.md#spendingdelete) | **DELETE** /spendings/{id} | Deletes a spending. |
*SpendingApi* | [**spendingList**](Apis/SpendingApi.md#spendinglist) | **GET** /spendings | Lists all spending |
*SpendingApi* | [**spendingSave**](Apis/SpendingApi.md#spendingsave) | **POST** /spendings | Creates a new spending. |
*SpendingApi* | [**spendingShow**](Apis/SpendingApi.md#spendingshow) | **GET** /spendings/{id} | Retrieves one specific spending. |
*SpendingApi* | [**spendingUpdate**](Apis/SpendingApi.md#spendingupdate) | **PUT** /spendings/{id} | Updates a spending item. |
| *UtilApi* | [**checkTaxNumber**](Apis/UtilApi.md#checktaxnumber) | **GET** /utils/check-tax-number/{tax_number} | Check tax number. |
*UtilApi* | [**getId**](Apis/UtilApi.md#getid) | **GET** /utils/convert-legacy-id/{id} | Convert legacy ID to v3 ID. |
*UtilApi* | [**getServerTime**](Apis/UtilApi.md#getservertime) | **GET** /utils/time | Get the server time |


<a name="documentation-for-models"></a>
## Documentation for Models

 - [Address](./Models/Address.md)
 - [BankAccount](./Models/BankAccount.md)
 - [BankAccountList](./Models/BankAccountList.md)
 - [Category](./Models/Category.md)
 - [CheckTaxNumberMessage](./Models/CheckTaxNumberMessage.md)
 - [ClientError](./Models/ClientError.md)
 - [ClientErrorResponse](./Models/ClientErrorResponse.md)
 - [ConversationRate](./Models/ConversationRate.md)
 - [CorrectionType](./Models/CorrectionType.md)
 - [Country](./Models/Country.md)
 - [CreateDocumentExport](./Models/CreateDocumentExport.md)
 - [Currency](./Models/Currency.md)
 - [DateType](./Models/DateType.md)
 - [Discount](./Models/Discount.md)
 - [DiscountType](./Models/DiscountType.md)
 - [Document](./Models/Document.md)
 - [DocumentAncestor](./Models/DocumentAncestor.md)
 - [DocumentBankAccount](./Models/DocumentBankAccount.md)
 - [DocumentBlock](./Models/DocumentBlock.md)
 - [DocumentBlockList](./Models/DocumentBlockList.md)
 - [DocumentBlockType](./Models/DocumentBlockType.md)
 - [DocumentCancellation](./Models/DocumentCancellation.md)
 - [DocumentExportFilterExtra](./Models/DocumentExportFilterExtra.md)
 - [DocumentExportId](./Models/DocumentExportId.md)
 - [DocumentExportOtherOptions](./Models/DocumentExportOtherOptions.md)
 - [DocumentExportQueryType](./Models/DocumentExportQueryType.md)
 - [DocumentExportSortBy](./Models/DocumentExportSortBy.md)
 - [DocumentExportStatus](./Models/DocumentExportStatus.md)
 - [DocumentExportStatusState](./Models/DocumentExportStatusState.md)
 - [DocumentExportType](./Models/DocumentExportType.md)
 - [DocumentForm](./Models/DocumentForm.md)
 - [DocumentFormat](./Models/DocumentFormat.md)
 - [DocumentInsert](./Models/DocumentInsert.md)
 - [DocumentInsertType](./Models/DocumentInsertType.md)
 - [DocumentInsert_items_inner](./Models/DocumentInsert_items_inner.md)
 - [DocumentItem](./Models/DocumentItem.md)
 - [DocumentItemData](./Models/DocumentItemData.md)
 - [DocumentLanguage](./Models/DocumentLanguage.md)
 - [DocumentList](./Models/DocumentList.md)
 - [DocumentNotificationStatus](./Models/DocumentNotificationStatus.md)
 - [DocumentOrganization](./Models/DocumentOrganization.md)
 - [DocumentPartner](./Models/DocumentPartner.md)
 - [DocumentProductData](./Models/DocumentProductData.md)
 - [DocumentPublicUrl](./Models/DocumentPublicUrl.md)
 - [DocumentSettings](./Models/DocumentSettings.md)
 - [DocumentSummary](./Models/DocumentSummary.md)
 - [DocumentType](./Models/DocumentType.md)
 - [DocumentVatRateSummary](./Models/DocumentVatRateSummary.md)
 - [Entitlement](./Models/Entitlement.md)
 - [Feature](./Models/Feature.md)
 - [Id](./Models/Id.md)
 - [InvoiceSettings](./Models/InvoiceSettings.md)
 - [LedgerNumberInformation](./Models/LedgerNumberInformation.md)
 - [ModificationDocumentInsert](./Models/ModificationDocumentInsert.md)
 - [OnlinePayment](./Models/OnlinePayment.md)
 - [OnlineSzamlaStatus](./Models/OnlineSzamlaStatus.md)
 - [OnlineSzamlaStatusEnum](./Models/OnlineSzamlaStatusEnum.md)
 - [OnlineSzamlaStatusMessage](./Models/OnlineSzamlaStatusMessage.md)
 - [OrganizationData](./Models/OrganizationData.md)
 - [Partner](./Models/Partner.md)
 - [PartnerCustomBillingSettings](./Models/PartnerCustomBillingSettings.md)
 - [PartnerList](./Models/PartnerList.md)
 - [PartnerTaxType](./Models/PartnerTaxType.md)
 - [PaymentHistory](./Models/PaymentHistory.md)
 - [PaymentMethod](./Models/PaymentMethod.md)
 - [PaymentStatus](./Models/PaymentStatus.md)
 - [PaymentStatusSpending](./Models/PaymentStatusSpending.md)
 - [Product](./Models/Product.md)
 - [ProductList](./Models/ProductList.md)
 - [ReceiptInsert](./Models/ReceiptInsert.md)
 - [ReceiptInsert_items_inner](./Models/ReceiptInsert_items_inner.md)
 - [ReceiptItemData](./Models/ReceiptItemData.md)
 - [ReceiptProductData](./Models/ReceiptProductData.md)
 - [Round](./Models/Round.md)
 - [SendDocument](./Models/SendDocument.md)
 - [ServerError](./Models/ServerError.md)
 - [ServerErrorResponse](./Models/ServerErrorResponse.md)
 - [ServerTime](./Models/ServerTime.md)
 - [Source](./Models/Source.md)
 - [Spending](./Models/Spending.md)
 - [SpendingList](./Models/SpendingList.md)
 - [SpendingListItem](./Models/SpendingListItem.md)
 - [SpendingPartner](./Models/SpendingPartner.md)
 - [SpendingPaymentMethod](./Models/SpendingPaymentMethod.md)
 - [SpendingSave](./Models/SpendingSave.md)
 - [Subscription](./Models/Subscription.md)
 - [SubscriptionErrorResponse](./Models/SubscriptionErrorResponse.md)
 - [TaxNumber](./Models/TaxNumber.md)
 - [TooManyRequestsResponse](./Models/TooManyRequestsResponse.md)
 - [UnitPriceType](./Models/UnitPriceType.md)
 - [ValidationError](./Models/ValidationError.md)
 - [ValidationErrorResponse](./Models/ValidationErrorResponse.md)
 - [Vat](./Models/Vat.md)


<a name="documentation-for-authorization"></a>
## Documentation for Authorization

<a name="api_key"></a>
### api_key

- **Type**: API key
- **API key parameter name**: X-API-KEY
- **Location**: HTTP header

