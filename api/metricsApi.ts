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
import { GetMetricResponse } from '../model/getMetricResponse';
import { GetMetricResponseCollection } from '../model/getMetricResponseCollection';
import { MetricAggregateQuery } from '../model/metricAggregateQuery';
import { PostMetricAggregateResponse } from '../model/postMetricAggregateResponse';

import { ObjectSerializer } from '../model/models';

import {RequestFile, queryParamPreProcessor, RetryOptions, Session} from './apis';

let defaultBasePath = 'https://a.klaviyo.com';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================


export class MetricsApi {

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
     * Get a metric with the given metric ID.<br><br>*Rate limits*:<br>Burst: `10/s`<br>Steady: `150/m`  **Scopes:** `metrics:read`
     * @summary Get Metric
     * @param id Metric ID
     * @param fieldsMetric For more information please visit https://developers.klaviyo.com/en/v2023-10-15/reference/api-overview#sparse-fieldsets
     */
    public async getMetric (id: string, options: { fieldsMetric?: Array<'name' | 'created' | 'updated' | 'integration'>,  } = {}): Promise<{ response: AxiosResponse; body: GetMetricResponse;  }> {

        const localVarPath = this.basePath + '/api/metrics/{id}/'
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
            throw new Error('Required parameter id was null or undefined when calling getMetric.');
        }

        if (options.fieldsMetric !== undefined) {
            localVarQueryParameters['fields[metric]'] = ObjectSerializer.serialize(options.fieldsMetric, "Array<'name' | 'created' | 'updated' | 'integration'>");
        }

        queryParamPreProcessor(localVarQueryParameters)

        let config: AxiosRequestConfig = {
            method: 'GET',
            url: localVarPath,
            headers: localVarHeaderParams,
            params: localVarQueryParameters,
        }

        await this.session.applyToRequest(config)

        const request = async (config: AxiosRequestConfig, retried = false): Promise<{ response: AxiosResponse; body: GetMetricResponse;  }> => {
            try {
                const axiosResponse = await axios(config)
                let body;
                body = ObjectSerializer.deserialize(axiosResponse.data, "GetMetricResponse");
                return ({response: axiosResponse, body: body});
            } catch (error) {
                if (await this.session.refreshAndRetry(error, retried)) {
                    await this.session.applyToRequest(config)
                    return request(config, true)
                }
                throw error
            }
        }

        return backOff<{ response: AxiosResponse; body: GetMetricResponse;  }>(
            () => {return request(config)},
            this.session.getRetryOptions()
        );
    }
    /**
     * Get all metrics in an account.  Requests can be filtered by the following fields: integration `name`, integration `category`  Returns a maximum of 200 results per page.<br><br>*Rate limits*:<br>Burst: `10/s`<br>Steady: `150/m`  **Scopes:** `metrics:read`
     * @summary Get Metrics
     
     * @param fieldsMetric For more information please visit https://developers.klaviyo.com/en/v2023-10-15/reference/api-overview#sparse-fieldsets* @param filter For more information please visit https://developers.klaviyo.com/en/v2023-10-15/reference/api-overview#filtering&lt;br&gt;Allowed field(s)/operator(s):&lt;br&gt;&#x60;integration.name&#x60;: &#x60;equals&#x60;&lt;br&gt;&#x60;integration.category&#x60;: &#x60;equals&#x60;* @param pageCursor For more information please visit https://developers.klaviyo.com/en/v2023-10-15/reference/api-overview#pagination
     */
    public async getMetrics (options: { fieldsMetric?: Array<'name' | 'created' | 'updated' | 'integration'>, filter?: string, pageCursor?: string,  } = {}): Promise<{ response: AxiosResponse; body: GetMetricResponseCollection;  }> {

        const localVarPath = this.basePath + '/api/metrics/';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }

        if (options.fieldsMetric !== undefined) {
            localVarQueryParameters['fields[metric]'] = ObjectSerializer.serialize(options.fieldsMetric, "Array<'name' | 'created' | 'updated' | 'integration'>");
        }

        if (options.filter !== undefined) {
            localVarQueryParameters['filter'] = ObjectSerializer.serialize(options.filter, "string");
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

        const request = async (config: AxiosRequestConfig, retried = false): Promise<{ response: AxiosResponse; body: GetMetricResponseCollection;  }> => {
            try {
                const axiosResponse = await axios(config)
                let body;
                body = ObjectSerializer.deserialize(axiosResponse.data, "GetMetricResponseCollection");
                return ({response: axiosResponse, body: body});
            } catch (error) {
                if (await this.session.refreshAndRetry(error, retried)) {
                    await this.session.applyToRequest(config)
                    return request(config, true)
                }
                throw error
            }
        }

        return backOff<{ response: AxiosResponse; body: GetMetricResponseCollection;  }>(
            () => {return request(config)},
            this.session.getRetryOptions()
        );
    }
    /**
     * Query and aggregate event data associated with a metric, including native Klaviyo metrics, integration-specific metrics, and custom events. Queries must be passed in the JSON body of your `POST` request.  Results can be filtered and grouped by time, event, or profile dimensions.  To learn more about how to use this endpoint, check out our new [Using the Query Metric Aggregates Endpoint guide](https://developers.klaviyo.com/en/docs/using-the-query-metric-aggregates-endpoint).  **Request body parameters** (nested under `attributes`):  * `return_fields`: request specific fields using [sparse fieldsets](https://developers.klaviyo.com/en/reference/api_overview#sparse-fieldsets) * `sort`: sort results by a specified field, such as `\"-timestamp\"` * `page_cursor`: results can be paginated with [cursor-based pagination](https://developers.klaviyo.com/en/reference/api_overview#pagination) * `page_size`: limit the number of returned results per page * `by`: optional attributes used to group by the aggregation function     * When using `by` attributes, an empty `dimensions` response is expected when the counts for the events do not have the associated dimension requested by the set `by` attribute. For example, a query including `\"by\": [\"$flow\"]` will return an empty dimensions response for counts of metrics not associated with a `$flow` * `measurement`: the measurement key supports the following values:     * `\"sum_value\"`: perform a summation of the `_Event Value_`, optionally partitioned over any dimension provided in the `by` field     * `\"count\"`: counts the number of events associated to a metric, optionally partitioned over any dimension provided in the `by` field     * `\"unique\"` counts the number of unique customers associated to a metric, optionally partitioned over any dimension provided in the `by` field * `interval`: aggregation interval, such as `\"hour\"`,`\"day\"`,`\"week\"`, and `\"month\"` * `metric_id`: the metric ID used in the aggregation * `filter`: list of filters for specific fields, must include time range using ISO 8601 format (`\"YYYY-MM-DDTHH:MM:SS.mmmmmm\"`)     * The time range can be filtered by providing a `greater-or-equal` filter on the datetime field, such as `\"greater-or-equal(datetime,2021-07-01T00:00:00)\"` and a `less-than` filter on the same datetime field, such as `\"less-than(datetime,2022-07-01T00:00:00)\"`     * The time range may span a maximum of one year. Time range dates may be set to a maximum of 5 years prior to the current date     * Filter the list of supported aggregate dimensions using the common filter syntax, such as `\"equals(URL,\\\"https://www.klaviyo.com/\\\")\"` * `timezone`: the timezone used when processing the query. Case sensitive. This field is validated against a list of common timezones from the [IANA Time Zone Database](https://www.iana.org/time-zones)     * While the payload accepts a timezone, the response datetimes returned will be in UTC.  For a comprehensive list of native Klaviyo metrics and their associated attributes for grouping and filtering, please refer to the [metrics attributes guide](https://developers.klaviyo.com/en/docs/supported_metrics_and_attributes).<br><br>*Rate limits*:<br>Burst: `3/s`<br>Steady: `60/m`  **Scopes:** `metrics:read`
     * @summary Query Metric Aggregates
     * @param metricAggregateQuery Retrieve Metric Aggregations
     
     */
    public async queryMetricAggregates (metricAggregateQuery: MetricAggregateQuery, ): Promise<{ response: AxiosResponse; body: PostMetricAggregateResponse;  }> {

        const localVarPath = this.basePath + '/api/metric-aggregates/';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }

        // verify required parameter 'metricAggregateQuery' is not null or undefined
        if (metricAggregateQuery === null || metricAggregateQuery === undefined) {
            throw new Error('Required parameter metricAggregateQuery was null or undefined when calling queryMetricAggregates.');
        }

        queryParamPreProcessor(localVarQueryParameters)

        let config: AxiosRequestConfig = {
            method: 'POST',
            url: localVarPath,
            headers: localVarHeaderParams,
            params: localVarQueryParameters,
            data: ObjectSerializer.serialize(metricAggregateQuery, "MetricAggregateQuery")
        }

        await this.session.applyToRequest(config)

        const request = async (config: AxiosRequestConfig, retried = false): Promise<{ response: AxiosResponse; body: PostMetricAggregateResponse;  }> => {
            try {
                const axiosResponse = await axios(config)
                let body;
                body = ObjectSerializer.deserialize(axiosResponse.data, "PostMetricAggregateResponse");
                return ({response: axiosResponse, body: body});
            } catch (error) {
                if (await this.session.refreshAndRetry(error, retried)) {
                    await this.session.applyToRequest(config)
                    return request(config, true)
                }
                throw error
            }
        }

        return backOff<{ response: AxiosResponse; body: PostMetricAggregateResponse;  }>(
            () => {return request(config)},
            this.session.getRetryOptions()
        );
    }
}
