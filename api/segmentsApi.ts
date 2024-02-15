/**
 * Klaviyo API
 * The Klaviyo REST API. Please visit https://developers.klaviyo.com for more details.
 *
 * Contact: developers@klaviyo.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


const axios = require('axios');
import {AxiosRequestConfig, AxiosResponse} from "axios";
import { backOff, BackoffOptions } from 'exponential-backoff';
import FormData from 'form-data'

/* tslint:disable:no-unused-locals */
import { GetAccounts4XXResponse } from '../model/getAccounts4XXResponse';
import { GetSegmentListResponseCollectionCompoundDocument } from '../model/getSegmentListResponseCollectionCompoundDocument';
import { GetSegmentMemberResponseCollection } from '../model/getSegmentMemberResponseCollection';
import { GetSegmentRelationshipsResponseCollection } from '../model/getSegmentRelationshipsResponseCollection';
import { GetSegmentRetrieveResponseCompoundDocument } from '../model/getSegmentRetrieveResponseCompoundDocument';
import { GetSegmentTagRelationshipListResponseCollection } from '../model/getSegmentTagRelationshipListResponseCollection';
import { GetTagResponseCollection } from '../model/getTagResponseCollection';
import { PatchSegmentPartialUpdateResponse } from '../model/patchSegmentPartialUpdateResponse';
import { SegmentPartialUpdateQuery } from '../model/segmentPartialUpdateQuery';

import { ObjectSerializer } from '../model/models';

import {RequestFile, queryParamPreProcessor, RetryOptions, Session} from './apis';

let defaultBasePath = 'https://a.klaviyo.com';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================


export class SegmentsApi {

    protected backoffOptions: BackoffOptions = new RetryOptions().options
    session: Session

    protected _basePath = defaultBasePath;
    protected _defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    constructor(session: Session){
        this.session = session
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    set defaultHeaders(defaultHeaders: any) {
        this._defaultHeaders = defaultHeaders;
    }

    get defaultHeaders() {
        return this._defaultHeaders;
    }

    get basePath() {
        return this._basePath;
    }

    /**
     * Get a segment with the given segment ID.<br><br>*Rate limits*:<br>Burst: `75/s`<br>Steady: `700/m`<br><br>Rate limits when using the `additional-fields[segment]=profile_count` parameter in your API request:<br>Burst: `1/s`<br>Steady: `15/m`<br><br>To learn more about how the `additional-fields` parameter impacts rate limits, check out our [Rate limits, status codes, and errors](https://developers.klaviyo.com/en/v2024-02-15/docs/rate_limits_and_error_handling) guide.  **Scopes:** `segments:read`
     * @summary Get Segment
     * @param id 
     * @param additionalFieldsSegment Request additional fields not included by default in the response. Supported values: \&#39;profile_count\&#39;* @param fieldsSegment For more information please visit https://developers.klaviyo.com/en/v2024-02-15/reference/api-overview#sparse-fieldsets* @param fieldsTag For more information please visit https://developers.klaviyo.com/en/v2024-02-15/reference/api-overview#sparse-fieldsets* @param include For more information please visit https://developers.klaviyo.com/en/v2024-02-15/reference/api-overview#relationships
     */
    public async getSegment (id: string, options: { additionalFieldsSegment?: Array<'profile_count'>, fieldsSegment?: Array<'name' | 'created' | 'updated' | 'profile_count'>, fieldsTag?: Array<'name'>, include?: Array<'tags'>,  } = {}): Promise<{ response: AxiosResponse; body: GetSegmentRetrieveResponseCompoundDocument;  }> {

        const localVarPath = this.basePath + '/api/segments/{id}/'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getSegment.');
        }

        if (options.additionalFieldsSegment !== undefined) {
            localVarQueryParameters['additional-fields[segment]'] = ObjectSerializer.serialize(options.additionalFieldsSegment, "Array<'profile_count'>");
        }

        if (options.fieldsSegment !== undefined) {
            localVarQueryParameters['fields[segment]'] = ObjectSerializer.serialize(options.fieldsSegment, "Array<'name' | 'created' | 'updated' | 'profile_count'>");
        }

        if (options.fieldsTag !== undefined) {
            localVarQueryParameters['fields[tag]'] = ObjectSerializer.serialize(options.fieldsTag, "Array<'name'>");
        }

        if (options.include !== undefined) {
            localVarQueryParameters['include'] = ObjectSerializer.serialize(options.include, "Array<'tags'>");
        }

        queryParamPreProcessor(localVarQueryParameters)

        let config: AxiosRequestConfig = {
            method: 'GET',
            url: localVarPath,
            headers: localVarHeaderParams,
            params: localVarQueryParameters,
        }

        await this.session.applyToRequest(config)

        const request = async (config: AxiosRequestConfig, retried = false): Promise<{ response: AxiosResponse; body: GetSegmentRetrieveResponseCompoundDocument;  }> => {
            try {
                const axiosResponse = await axios(config)
                let body;
                body = ObjectSerializer.deserialize(axiosResponse.data, "GetSegmentRetrieveResponseCompoundDocument");
                return ({response: axiosResponse, body: body});
            } catch (error) {
                if (await this.session.refreshAndRetry(error, retried)) {
                    await this.session.applyToRequest(config)
                    return request(config, true)
                }
                throw error
            }
        }

        return backOff<{ response: AxiosResponse; body: GetSegmentRetrieveResponseCompoundDocument;  }>(
            () => {return request(config)},
            this.session.getRetryOptions()
        );
    }
    /**
     * Get all profiles within a segment with the given segment ID.  Filter to request a subset of all profiles. Profiles can be filtered by `email`, `phone_number`, `push_token`, and `joined_group_at` fields. Profiles can be sorted by the following fields, in ascending and descending order: `joined_group_at`<br><br>*Rate limits*:<br>Burst: `75/s`<br>Steady: `700/m`  **Scopes:** `profiles:read` `segments:read`
     * @summary Get Segment Profiles
     * @param id 
     * @param additionalFieldsProfile Request additional fields not included by default in the response. Supported values: \&#39;subscriptions\&#39;, \&#39;predictive_analytics\&#39;* @param fieldsProfile For more information please visit https://developers.klaviyo.com/en/v2024-02-15/reference/api-overview#sparse-fieldsets* @param filter For more information please visit https://developers.klaviyo.com/en/v2024-02-15/reference/api-overview#filtering&lt;br&gt;Allowed field(s)/operator(s):&lt;br&gt;&#x60;email&#x60;: &#x60;any&#x60;, &#x60;equals&#x60;&lt;br&gt;&#x60;phone_number&#x60;: &#x60;any&#x60;, &#x60;equals&#x60;&lt;br&gt;&#x60;push_token&#x60;: &#x60;any&#x60;, &#x60;equals&#x60;&lt;br&gt;&#x60;_kx&#x60;: &#x60;equals&#x60;&lt;br&gt;&#x60;joined_group_at&#x60;: &#x60;greater-or-equal&#x60;, &#x60;greater-than&#x60;, &#x60;less-or-equal&#x60;, &#x60;less-than&#x60;* @param pageCursor For more information please visit https://developers.klaviyo.com/en/v2024-02-15/reference/api-overview#pagination* @param pageSize Default: 20. Min: 1. Max: 100.* @param sort For more information please visit https://developers.klaviyo.com/en/v2024-02-15/reference/api-overview#sorting
     */
    public async getSegmentProfiles (id: string, options: { additionalFieldsProfile?: Array<'subscriptions' | 'predictive_analytics'>, fieldsProfile?: Array<'email' | 'phone_number' | 'external_id' | 'first_name' | 'last_name' | 'organization' | 'title' | 'image' | 'created' | 'updated' | 'last_event_date' | 'location' | 'location.address1' | 'location.address2' | 'location.city' | 'location.country' | 'location.latitude' | 'location.longitude' | 'location.region' | 'location.zip' | 'location.timezone' | 'location.ip' | 'properties' | 'joined_group_at' | 'subscriptions' | 'subscriptions.email' | 'subscriptions.email.marketing' | 'subscriptions.email.marketing.can_receive_email_marketing' | 'subscriptions.email.marketing.consent' | 'subscriptions.email.marketing.consent_timestamp' | 'subscriptions.email.marketing.last_updated' | 'subscriptions.email.marketing.method' | 'subscriptions.email.marketing.method_detail' | 'subscriptions.email.marketing.custom_method_detail' | 'subscriptions.email.marketing.double_optin' | 'subscriptions.email.marketing.suppression' | 'subscriptions.email.marketing.list_suppressions' | 'subscriptions.sms' | 'subscriptions.sms.marketing' | 'subscriptions.sms.marketing.can_receive_sms_marketing' | 'subscriptions.sms.marketing.consent' | 'subscriptions.sms.marketing.consent_timestamp' | 'subscriptions.sms.marketing.method' | 'subscriptions.sms.marketing.method_detail' | 'subscriptions.sms.marketing.last_updated' | 'predictive_analytics' | 'predictive_analytics.historic_clv' | 'predictive_analytics.predicted_clv' | 'predictive_analytics.total_clv' | 'predictive_analytics.historic_number_of_orders' | 'predictive_analytics.predicted_number_of_orders' | 'predictive_analytics.average_days_between_orders' | 'predictive_analytics.average_order_value' | 'predictive_analytics.churn_probability' | 'predictive_analytics.expected_date_of_next_order'>, filter?: string, pageCursor?: string, pageSize?: number, sort?: 'joined_group_at' | '-joined_group_at',  } = {}): Promise<{ response: AxiosResponse; body: GetSegmentMemberResponseCollection;  }> {

        const localVarPath = this.basePath + '/api/segments/{id}/profiles/'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getSegmentProfiles.');
        }

        if (options.additionalFieldsProfile !== undefined) {
            localVarQueryParameters['additional-fields[profile]'] = ObjectSerializer.serialize(options.additionalFieldsProfile, "Array<'subscriptions' | 'predictive_analytics'>");
        }

        if (options.fieldsProfile !== undefined) {
            localVarQueryParameters['fields[profile]'] = ObjectSerializer.serialize(options.fieldsProfile, "Array<'email' | 'phone_number' | 'external_id' | 'first_name' | 'last_name' | 'organization' | 'title' | 'image' | 'created' | 'updated' | 'last_event_date' | 'location' | 'location.address1' | 'location.address2' | 'location.city' | 'location.country' | 'location.latitude' | 'location.longitude' | 'location.region' | 'location.zip' | 'location.timezone' | 'location.ip' | 'properties' | 'joined_group_at' | 'subscriptions' | 'subscriptions.email' | 'subscriptions.email.marketing' | 'subscriptions.email.marketing.can_receive_email_marketing' | 'subscriptions.email.marketing.consent' | 'subscriptions.email.marketing.consent_timestamp' | 'subscriptions.email.marketing.last_updated' | 'subscriptions.email.marketing.method' | 'subscriptions.email.marketing.method_detail' | 'subscriptions.email.marketing.custom_method_detail' | 'subscriptions.email.marketing.double_optin' | 'subscriptions.email.marketing.suppression' | 'subscriptions.email.marketing.list_suppressions' | 'subscriptions.sms' | 'subscriptions.sms.marketing' | 'subscriptions.sms.marketing.can_receive_sms_marketing' | 'subscriptions.sms.marketing.consent' | 'subscriptions.sms.marketing.consent_timestamp' | 'subscriptions.sms.marketing.method' | 'subscriptions.sms.marketing.method_detail' | 'subscriptions.sms.marketing.last_updated' | 'predictive_analytics' | 'predictive_analytics.historic_clv' | 'predictive_analytics.predicted_clv' | 'predictive_analytics.total_clv' | 'predictive_analytics.historic_number_of_orders' | 'predictive_analytics.predicted_number_of_orders' | 'predictive_analytics.average_days_between_orders' | 'predictive_analytics.average_order_value' | 'predictive_analytics.churn_probability' | 'predictive_analytics.expected_date_of_next_order'>");
        }

        if (options.filter !== undefined) {
            localVarQueryParameters['filter'] = ObjectSerializer.serialize(options.filter, "string");
        }

        if (options.pageCursor !== undefined) {
            localVarQueryParameters['page[cursor]'] = ObjectSerializer.serialize(options.pageCursor, "string");
        }

        if (options.pageSize !== undefined) {
            localVarQueryParameters['page[size]'] = ObjectSerializer.serialize(options.pageSize, "number");
        }

        if (options.sort !== undefined) {
            localVarQueryParameters['sort'] = ObjectSerializer.serialize(options.sort, "'joined_group_at' | '-joined_group_at'");
        }

        queryParamPreProcessor(localVarQueryParameters)

        let config: AxiosRequestConfig = {
            method: 'GET',
            url: localVarPath,
            headers: localVarHeaderParams,
            params: localVarQueryParameters,
        }

        await this.session.applyToRequest(config)

        const request = async (config: AxiosRequestConfig, retried = false): Promise<{ response: AxiosResponse; body: GetSegmentMemberResponseCollection;  }> => {
            try {
                const axiosResponse = await axios(config)
                let body;
                body = ObjectSerializer.deserialize(axiosResponse.data, "GetSegmentMemberResponseCollection");
                return ({response: axiosResponse, body: body});
            } catch (error) {
                if (await this.session.refreshAndRetry(error, retried)) {
                    await this.session.applyToRequest(config)
                    return request(config, true)
                }
                throw error
            }
        }

        return backOff<{ response: AxiosResponse; body: GetSegmentMemberResponseCollection;  }>(
            () => {return request(config)},
            this.session.getRetryOptions()
        );
    }
    /**
     * Get all profile membership [relationships](https://developers.klaviyo.com/en/reference/api_overview#relationships) for the given segment ID.<br><br>*Rate limits*:<br>Burst: `75/s`<br>Steady: `700/m`  **Scopes:** `profiles:read` `segments:read`
     * @summary Get Segment Relationships Profiles
     * @param id 
     * @param filter For more information please visit https://developers.klaviyo.com/en/v2024-02-15/reference/api-overview#filtering&lt;br&gt;Allowed field(s)/operator(s):&lt;br&gt;&#x60;email&#x60;: &#x60;any&#x60;, &#x60;equals&#x60;&lt;br&gt;&#x60;phone_number&#x60;: &#x60;any&#x60;, &#x60;equals&#x60;&lt;br&gt;&#x60;push_token&#x60;: &#x60;any&#x60;, &#x60;equals&#x60;&lt;br&gt;&#x60;_kx&#x60;: &#x60;equals&#x60;&lt;br&gt;&#x60;joined_group_at&#x60;: &#x60;greater-or-equal&#x60;, &#x60;greater-than&#x60;, &#x60;less-or-equal&#x60;, &#x60;less-than&#x60;* @param pageCursor For more information please visit https://developers.klaviyo.com/en/v2024-02-15/reference/api-overview#pagination* @param pageSize Default: 20. Min: 1. Max: 1000.* @param sort For more information please visit https://developers.klaviyo.com/en/v2024-02-15/reference/api-overview#sorting
     */
    public async getSegmentRelationshipsProfiles (id: string, options: { filter?: string, pageCursor?: string, pageSize?: number, sort?: 'joined_group_at' | '-joined_group_at',  } = {}): Promise<{ response: AxiosResponse; body: GetSegmentRelationshipsResponseCollection;  }> {

        const localVarPath = this.basePath + '/api/segments/{id}/relationships/profiles/'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getSegmentRelationshipsProfiles.');
        }

        if (options.filter !== undefined) {
            localVarQueryParameters['filter'] = ObjectSerializer.serialize(options.filter, "string");
        }

        if (options.pageCursor !== undefined) {
            localVarQueryParameters['page[cursor]'] = ObjectSerializer.serialize(options.pageCursor, "string");
        }

        if (options.pageSize !== undefined) {
            localVarQueryParameters['page[size]'] = ObjectSerializer.serialize(options.pageSize, "number");
        }

        if (options.sort !== undefined) {
            localVarQueryParameters['sort'] = ObjectSerializer.serialize(options.sort, "'joined_group_at' | '-joined_group_at'");
        }

        queryParamPreProcessor(localVarQueryParameters)

        let config: AxiosRequestConfig = {
            method: 'GET',
            url: localVarPath,
            headers: localVarHeaderParams,
            params: localVarQueryParameters,
        }

        await this.session.applyToRequest(config)

        const request = async (config: AxiosRequestConfig, retried = false): Promise<{ response: AxiosResponse; body: GetSegmentRelationshipsResponseCollection;  }> => {
            try {
                const axiosResponse = await axios(config)
                let body;
                body = ObjectSerializer.deserialize(axiosResponse.data, "GetSegmentRelationshipsResponseCollection");
                return ({response: axiosResponse, body: body});
            } catch (error) {
                if (await this.session.refreshAndRetry(error, retried)) {
                    await this.session.applyToRequest(config)
                    return request(config, true)
                }
                throw error
            }
        }

        return backOff<{ response: AxiosResponse; body: GetSegmentRelationshipsResponseCollection;  }>(
            () => {return request(config)},
            this.session.getRetryOptions()
        );
    }
    /**
     * If `related_resource` is `tags`, returns the tag IDs of all tags associated with the given segment ID.<br><br>*Rate limits*:<br>Burst: `3/s`<br>Steady: `60/m`  **Scopes:** `segments:read` `tags:read`
     * @summary Get Segment Relationships Tags
     * @param id 
     
     */
    public async getSegmentRelationshipsTags (id: string, ): Promise<{ response: AxiosResponse; body: GetSegmentTagRelationshipListResponseCollection;  }> {

        const localVarPath = this.basePath + '/api/segments/{id}/relationships/tags/'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getSegmentRelationshipsTags.');
        }

        queryParamPreProcessor(localVarQueryParameters)

        let config: AxiosRequestConfig = {
            method: 'GET',
            url: localVarPath,
            headers: localVarHeaderParams,
            params: localVarQueryParameters,
        }

        await this.session.applyToRequest(config)

        const request = async (config: AxiosRequestConfig, retried = false): Promise<{ response: AxiosResponse; body: GetSegmentTagRelationshipListResponseCollection;  }> => {
            try {
                const axiosResponse = await axios(config)
                let body;
                body = ObjectSerializer.deserialize(axiosResponse.data, "GetSegmentTagRelationshipListResponseCollection");
                return ({response: axiosResponse, body: body});
            } catch (error) {
                if (await this.session.refreshAndRetry(error, retried)) {
                    await this.session.applyToRequest(config)
                    return request(config, true)
                }
                throw error
            }
        }

        return backOff<{ response: AxiosResponse; body: GetSegmentTagRelationshipListResponseCollection;  }>(
            () => {return request(config)},
            this.session.getRetryOptions()
        );
    }
    /**
     * Return all tags associated with the given segment ID.<br><br>*Rate limits*:<br>Burst: `3/s`<br>Steady: `60/m`  **Scopes:** `segments:read` `tags:read`
     * @summary Get Segment Tags
     * @param id 
     * @param fieldsTag For more information please visit https://developers.klaviyo.com/en/v2024-02-15/reference/api-overview#sparse-fieldsets
     */
    public async getSegmentTags (id: string, options: { fieldsTag?: Array<'name'>,  } = {}): Promise<{ response: AxiosResponse; body: GetTagResponseCollection;  }> {

        const localVarPath = this.basePath + '/api/segments/{id}/tags/'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getSegmentTags.');
        }

        if (options.fieldsTag !== undefined) {
            localVarQueryParameters['fields[tag]'] = ObjectSerializer.serialize(options.fieldsTag, "Array<'name'>");
        }

        queryParamPreProcessor(localVarQueryParameters)

        let config: AxiosRequestConfig = {
            method: 'GET',
            url: localVarPath,
            headers: localVarHeaderParams,
            params: localVarQueryParameters,
        }

        await this.session.applyToRequest(config)

        const request = async (config: AxiosRequestConfig, retried = false): Promise<{ response: AxiosResponse; body: GetTagResponseCollection;  }> => {
            try {
                const axiosResponse = await axios(config)
                let body;
                body = ObjectSerializer.deserialize(axiosResponse.data, "GetTagResponseCollection");
                return ({response: axiosResponse, body: body});
            } catch (error) {
                if (await this.session.refreshAndRetry(error, retried)) {
                    await this.session.applyToRequest(config)
                    return request(config, true)
                }
                throw error
            }
        }

        return backOff<{ response: AxiosResponse; body: GetTagResponseCollection;  }>(
            () => {return request(config)},
            this.session.getRetryOptions()
        );
    }
    /**
     * Get all segments in an account.  Filter to request a subset of all segments. Segments can be filtered by `name`, `created`, and `updated` fields.  Returns a maximum of 10 results per page.<br><br>*Rate limits*:<br>Burst: `75/s`<br>Steady: `700/m`  **Scopes:** `segments:read`
     * @summary Get Segments
     
     * @param fieldsSegment For more information please visit https://developers.klaviyo.com/en/v2024-02-15/reference/api-overview#sparse-fieldsets* @param fieldsTag For more information please visit https://developers.klaviyo.com/en/v2024-02-15/reference/api-overview#sparse-fieldsets* @param filter For more information please visit https://developers.klaviyo.com/en/v2024-02-15/reference/api-overview#filtering&lt;br&gt;Allowed field(s)/operator(s):&lt;br&gt;&#x60;name&#x60;: &#x60;any&#x60;, &#x60;equals&#x60;&lt;br&gt;&#x60;id&#x60;: &#x60;any&#x60;, &#x60;equals&#x60;&lt;br&gt;&#x60;created&#x60;: &#x60;greater-than&#x60;&lt;br&gt;&#x60;updated&#x60;: &#x60;greater-than&#x60;* @param include For more information please visit https://developers.klaviyo.com/en/v2024-02-15/reference/api-overview#relationships* @param pageCursor For more information please visit https://developers.klaviyo.com/en/v2024-02-15/reference/api-overview#pagination
     */
    public async getSegments (options: { fieldsSegment?: Array<'name' | 'created' | 'updated'>, fieldsTag?: Array<'name'>, filter?: string, include?: Array<'tags'>, pageCursor?: string,  } = {}): Promise<{ response: AxiosResponse; body: GetSegmentListResponseCollectionCompoundDocument;  }> {

        const localVarPath = this.basePath + '/api/segments/';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }

        if (options.fieldsSegment !== undefined) {
            localVarQueryParameters['fields[segment]'] = ObjectSerializer.serialize(options.fieldsSegment, "Array<'name' | 'created' | 'updated'>");
        }

        if (options.fieldsTag !== undefined) {
            localVarQueryParameters['fields[tag]'] = ObjectSerializer.serialize(options.fieldsTag, "Array<'name'>");
        }

        if (options.filter !== undefined) {
            localVarQueryParameters['filter'] = ObjectSerializer.serialize(options.filter, "string");
        }

        if (options.include !== undefined) {
            localVarQueryParameters['include'] = ObjectSerializer.serialize(options.include, "Array<'tags'>");
        }

        if (options.pageCursor !== undefined) {
            localVarQueryParameters['page[cursor]'] = ObjectSerializer.serialize(options.pageCursor, "string");
        }

        queryParamPreProcessor(localVarQueryParameters)

        let config: AxiosRequestConfig = {
            method: 'GET',
            url: localVarPath,
            headers: localVarHeaderParams,
            params: localVarQueryParameters,
        }

        await this.session.applyToRequest(config)

        const request = async (config: AxiosRequestConfig, retried = false): Promise<{ response: AxiosResponse; body: GetSegmentListResponseCollectionCompoundDocument;  }> => {
            try {
                const axiosResponse = await axios(config)
                let body;
                body = ObjectSerializer.deserialize(axiosResponse.data, "GetSegmentListResponseCollectionCompoundDocument");
                return ({response: axiosResponse, body: body});
            } catch (error) {
                if (await this.session.refreshAndRetry(error, retried)) {
                    await this.session.applyToRequest(config)
                    return request(config, true)
                }
                throw error
            }
        }

        return backOff<{ response: AxiosResponse; body: GetSegmentListResponseCollectionCompoundDocument;  }>(
            () => {return request(config)},
            this.session.getRetryOptions()
        );
    }
    /**
     * Update the name of a segment with the given segment ID.<br><br>*Rate limits*:<br>Burst: `1/s`<br>Steady: `15/m`  **Scopes:** `segments:write`
     * @summary Update Segment
     * @param id * @param segmentPartialUpdateQuery 
     
     */
    public async updateSegment (id: string, segmentPartialUpdateQuery: SegmentPartialUpdateQuery, ): Promise<{ response: AxiosResponse; body: PatchSegmentPartialUpdateResponse;  }> {

        const localVarPath = this.basePath + '/api/segments/{id}/'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling updateSegment.');
        }

        // verify required parameter 'segmentPartialUpdateQuery' is not null or undefined
        if (segmentPartialUpdateQuery === null || segmentPartialUpdateQuery === undefined) {
            throw new Error('Required parameter segmentPartialUpdateQuery was null or undefined when calling updateSegment.');
        }

        queryParamPreProcessor(localVarQueryParameters)

        let config: AxiosRequestConfig = {
            method: 'PATCH',
            url: localVarPath,
            headers: localVarHeaderParams,
            params: localVarQueryParameters,
            data: ObjectSerializer.serialize(segmentPartialUpdateQuery, "SegmentPartialUpdateQuery")
        }

        await this.session.applyToRequest(config)

        const request = async (config: AxiosRequestConfig, retried = false): Promise<{ response: AxiosResponse; body: PatchSegmentPartialUpdateResponse;  }> => {
            try {
                const axiosResponse = await axios(config)
                let body;
                body = ObjectSerializer.deserialize(axiosResponse.data, "PatchSegmentPartialUpdateResponse");
                return ({response: axiosResponse, body: body});
            } catch (error) {
                if (await this.session.refreshAndRetry(error, retried)) {
                    await this.session.applyToRequest(config)
                    return request(config, true)
                }
                throw error
            }
        }

        return backOff<{ response: AxiosResponse; body: PatchSegmentPartialUpdateResponse;  }>(
            () => {return request(config)},
            this.session.getRetryOptions()
        );
    }
}
