/* tslint:disable */
/* eslint-disable */
/**
 * Billingo API v3
 * This is a Billingo API v3 documentation. Our API based on REST software architectural style. API has resource-oriented URLs, accepts JSON-encoded request bodies and returns JSON-encoded responses. To use this API you have to generate a new API key on our [site](https://app.billingo.hu/api-key). After that, you can test your API key on this page.
 *
 * The version of the OpenAPI document: 3.0.14
 * Contact: hello@billingo.hu
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @enum {string}
 */

export const Feature = {
    ApiLimitBasic: 'api_limit_basic',
    ApiLimitPro: 'api_limit_pro',
    ApiLimitStandard: 'api_limit_standard',
    BanksyncPlus: 'banksync_plus',
    CampaignManagerBasic: 'campaign_manager_basic',
    CampaignManagerStandard: 'campaign_manager_standard',
    CeginfoEnterprise: 'ceginfo_enterprise',
    CeginfoPro: 'ceginfo_pro',
    CeginfoStandard: 'ceginfo_standard',
    Innovator: 'innovator',
    LimitIncrease: 'limit_increase',
    Master: 'master',
    PartnermonitorBasic: 'partnermonitor_basic',
    PartnermonitorPro: 'partnermonitor_pro',
    PartnermonitorStandard: 'partnermonitor_standard',
    Softpos: 'softpos',
    SubscriptionBasic: 'subscription_basic',
    SubscriptionPro: 'subscription_pro',
    SubscriptionStandard: 'subscription_standard',
    TendermonitorStandard: 'tendermonitor_standard',
    TendermonitorVip: 'tendermonitor_vip',
    Whitelabel: 'whitelabel'
} as const;

export type Feature = typeof Feature[keyof typeof Feature];



