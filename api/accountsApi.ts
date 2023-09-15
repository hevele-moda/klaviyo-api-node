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


import axios, {AxiosRequestConfig, AxiosResponse} from "axios";
import { backOff, BackoffOptions } from 'exponential-backoff';
import FormData from 'form-data'

/* tslint:disable:no-unused-locals */
import { GetAccountResponse } from '../model/getAccountResponse';
import { GetAccountResponseCollection } from '../model/getAccountResponseCollection';
import { GetAccounts4XXResponse } from '../model/getAccounts4XXResponse';

import { ObjectSerializer, Authentication } from '../model/models';
import { ApiKeyAuth } from '../model/models';

import {RequestFile, queryParamPreProcessor, RetryOptions, Session} from './apis';

let defaultBasePath = 'https://a.klaviyo.com';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================


export class AccountsApi {

    protected backoffOptions: BackoffOptions = new RetryOptions().options
    session: Session

    protected _basePath = defaultBasePath;
    protected _defaultHeaders : any = {
        revision: "2023-09-15",
        "User-Agent": "klaviyo-api-node/6.0.0"
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
     * Retrieve a single account object by its account ID. You can only request the account by which the private API key was generated.<br><br>*Rate limits*:<br>Burst: `1/s`<br>Steady: `15/m`  **Scopes:** `accounts:read`
     * @summary Get Account
     * @param id The ID of the account
     * @param fieldsAccount For more information please visit https://developers.klaviyo.com/en/v2023-09-15/reference/api-overview#sparse-fieldsets
     */
    public async getAccount (id: string, options: { fieldsAccount?: Array<'contact_information' | 'contact_information.default_sender_name' | 'contact_information.default_sender_email' | 'contact_information.website_url' | 'contact_information.organization_name' | 'contact_information.street_address' | 'contact_information.street_address.address1' | 'contact_information.street_address.address2' | 'contact_information.street_address.city' | 'contact_information.street_address.region' | 'contact_information.street_address.country' | 'contact_information.street_address.zip' | 'industry' | 'timezone' | 'preferred_currency' | 'public_api_key'>,  } = {}): Promise<{ response: AxiosResponse; body: GetAccountResponse;  }> {

        const localVarPath = this.basePath + '/api/accounts/{id}/'
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
            throw new Error('Required parameter id was null or undefined when calling getAccount.');
        }

        if (options.fieldsAccount !== undefined) {
            localVarQueryParameters['fields[account]'] = ObjectSerializer.serialize(options.fieldsAccount, "Array<'contact_information' | 'contact_information.default_sender_name' | 'contact_information.default_sender_email' | 'contact_information.website_url' | 'contact_information.organization_name' | 'contact_information.street_address' | 'contact_information.street_address.address1' | 'contact_information.street_address.address2' | 'contact_information.street_address.city' | 'contact_information.street_address.region' | 'contact_information.street_address.country' | 'contact_information.street_address.zip' | 'industry' | 'timezone' | 'preferred_currency' | 'public_api_key'>");
        }

        queryParamPreProcessor(localVarQueryParameters)

        let config: AxiosRequestConfig = {
            method: 'GET',
            url: localVarPath,
            headers: localVarHeaderParams,
            params: localVarQueryParameters,
        }

        this.session.applyToRequest(config)

        return backOff<{ response: AxiosResponse; body: GetAccountResponse;  }>( () => {
            return new Promise<{ response: AxiosResponse; body: GetAccountResponse;  }>((resolve, reject) => {
                axios(config)
                    .then(axiosResponse => {
                        let body;
                        body = ObjectSerializer.deserialize(axiosResponse.data, "GetAccountResponse");
                        resolve({ response: axiosResponse, body: body });
                    })
                    .catch(error => {
                        reject(error);
                    })
            });
        }, this.session.getRetryOptions());
    }
    /**
     * Retrieve the account(s) associated with a given private API key. This will return 1 account object within the array.  You can use this to retrieve account-specific data (contact information, timezone, currency, Public API key, etc.) or test if a Private API Key belongs to the correct account prior to performing subsequent actions with the API.<br><br>*Rate limits*:<br>Burst: `1/s`<br>Steady: `15/m`  **Scopes:** `accounts:read`
     * @summary Get Accounts
     
     * @param fieldsAccount For more information please visit https://developers.klaviyo.com/en/v2023-09-15/reference/api-overview#sparse-fieldsets
     */
    public async getAccounts (options: { fieldsAccount?: Array<'contact_information' | 'contact_information.default_sender_name' | 'contact_information.default_sender_email' | 'contact_information.website_url' | 'contact_information.organization_name' | 'contact_information.street_address' | 'contact_information.street_address.address1' | 'contact_information.street_address.address2' | 'contact_information.street_address.city' | 'contact_information.street_address.region' | 'contact_information.street_address.country' | 'contact_information.street_address.zip' | 'industry' | 'timezone' | 'preferred_currency' | 'public_api_key'>,  } = {}): Promise<{ response: AxiosResponse; body: GetAccountResponseCollection;  }> {

        const localVarPath = this.basePath + '/api/accounts/';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }

        if (options.fieldsAccount !== undefined) {
            localVarQueryParameters['fields[account]'] = ObjectSerializer.serialize(options.fieldsAccount, "Array<'contact_information' | 'contact_information.default_sender_name' | 'contact_information.default_sender_email' | 'contact_information.website_url' | 'contact_information.organization_name' | 'contact_information.street_address' | 'contact_information.street_address.address1' | 'contact_information.street_address.address2' | 'contact_information.street_address.city' | 'contact_information.street_address.region' | 'contact_information.street_address.country' | 'contact_information.street_address.zip' | 'industry' | 'timezone' | 'preferred_currency' | 'public_api_key'>");
        }

        queryParamPreProcessor(localVarQueryParameters)

        let config: AxiosRequestConfig = {
            method: 'GET',
            url: localVarPath,
            headers: localVarHeaderParams,
            params: localVarQueryParameters,
        }

        this.session.applyToRequest(config)

        return backOff<{ response: AxiosResponse; body: GetAccountResponseCollection;  }>( () => {
            return new Promise<{ response: AxiosResponse; body: GetAccountResponseCollection;  }>((resolve, reject) => {
                axios(config)
                    .then(axiosResponse => {
                        let body;
                        body = ObjectSerializer.deserialize(axiosResponse.data, "GetAccountResponseCollection");
                        resolve({ response: axiosResponse, body: body });
                    })
                    .catch(error => {
                        reject(error);
                    })
            });
        }, this.session.getRetryOptions());
    }
}
