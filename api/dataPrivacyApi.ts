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
import { DataPrivacyCreateDeletionJobQuery } from '../model/dataPrivacyCreateDeletionJobQuery';
import { GetAccounts4XXResponse } from '../model/getAccounts4XXResponse';

import { ObjectSerializer } from '../model/models';

import {RequestFile, queryParamPreProcessor, RetryOptions, Session} from './apis';

let defaultBasePath = 'https://a.klaviyo.com';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================


export class DataPrivacyApi {

    protected backoffOptions: BackoffOptions = new RetryOptions().options
    session: Session

    protected _basePath = defaultBasePath;
    protected _defaultHeaders : any = {
        revision: "2023-10-15",
        "User-Agent": "klaviyo-api-node/7.0.0"
    };
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
     * Request a deletion for the profiles corresponding to one of the following identifiers: `email`, `phone_number`, or `id`. If multiple identifiers are provided, we will return an error.  All profiles that match the provided identifier will be deleted.  The deletion occurs asynchronously; however, once it has completed, the deleted profile will appear on the [Deleted Profiles page](https://www.klaviyo.com/account/deleted).  For more information on the deletion process, please refer to our [Help Center docs on how to handle GDPR and CCPA deletion requests](https://help.klaviyo.com/hc/en-us/articles/360004217631-How-to-Handle-GDPR-Requests#record-gdpr-and-ccpa%20%20-deletion-requests2).<br><br>*Rate limits*:<br>Burst: `3/s`<br>Steady: `60/m`  **Scopes:** `data-privacy:write`
     * @summary Request Profile Deletion
     * @param dataPrivacyCreateDeletionJobQuery 
     
     */
    public async requestProfileDeletion (dataPrivacyCreateDeletionJobQuery: DataPrivacyCreateDeletionJobQuery, ): Promise<{ response: AxiosResponse; body?: any;  }> {

        const localVarPath = this.basePath + '/api/data-privacy-deletion-jobs/';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }

        // verify required parameter 'dataPrivacyCreateDeletionJobQuery' is not null or undefined
        if (dataPrivacyCreateDeletionJobQuery === null || dataPrivacyCreateDeletionJobQuery === undefined) {
            throw new Error('Required parameter dataPrivacyCreateDeletionJobQuery was null or undefined when calling requestProfileDeletion.');
        }

        queryParamPreProcessor(localVarQueryParameters)

        let config: AxiosRequestConfig = {
            method: 'POST',
            url: localVarPath,
            headers: localVarHeaderParams,
            params: localVarQueryParameters,
            data: ObjectSerializer.serialize(dataPrivacyCreateDeletionJobQuery, "DataPrivacyCreateDeletionJobQuery")
        }

        this.session.applyToRequest(config)

        return backOff<{ response: AxiosResponse; body?: any;  }>( () => {
            return new Promise<{ response: AxiosResponse; body?: any;  }>((resolve, reject) => {
                axios(config)
                    .then(axiosResponse => {
                        let body;
                        resolve({ response: axiosResponse, body: body });
                    })
                    .catch(error => {
                        reject(error);
                    })
            });
        }, this.session.getRetryOptions());
    }
}
