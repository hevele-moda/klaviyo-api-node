/*
 * Klaviyo API
 * The Klaviyo REST API. Please visit https://developers.klaviyo.com for more details.
 *
 * OpenAPI spec version: 2023-02-22
 * Contact: developers@klaviyo.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.41
 *
 * Do not edit the class manually.
 *
 */
import { ApiClient } from "../ApiClient.js";
import { backOff } from "exponential-backoff";

/**
* Lists service.
* @module api/ListsApi
* @version 2023-02-22
*/
export class ListsApi {
    apiClient

    /**
    * Constructs a new ListsApi. 
    * @alias module:api/ListsApi
    * @class
    * @param {ApiClient#instance} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Create List
     * Create a new list.&lt;br&gt;&lt;br&gt;*Rate limits*:&lt;br&gt;Burst: &#x60;10/s&#x60;&lt;br&gt;Steady: &#x60;150/m&#x60;  **Scopes:** &#x60;List Write&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    createList = async (body) => {

        
        let postBody = body;
      // verify the required parameter 'body' is set
        if (body === undefined || body === null) {
            throw new Error("Missing the required parameter 'body' when calling createList");
        }

        let pathParams = {
          
        };
        let queryParams = {
          
        };
        let headerParams = {
          
        };
        let formParams = {
          
        };

        let authNames = ['Klaviyo-API-Key'];
        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = Object;

        return backOff(() => {
          return this.apiClient.callApi(
            '/api/lists/', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
          ).then(function(response_and_data) {
            return {
              body: response_and_data.data,
              headers: response_and_data.response.headers,
              status: response_and_data.response.status,
            };
          });
        }, {
          jitter: "full",
          numOfAttempts: this.apiClient.RETRY_MAX_ATTEMPTS,
          timeMultiple: this.apiClient.TIME_MULTIPLE,
          startingDelay: this.apiClient.STARTING_DELAY,
          retry: res => {
            return this.apiClient.RETRY_CODES.includes(res.status)
          }
        });
    }

    /**
     * Add Profile To List
     * Add a profile to a list with the given list ID. It is recommended that you use the [Subscribe Profiles endpoint](https://developers.klaviyo.com/en/reference/subscribe_profiles) if you&#x27;re trying to give a profile consent to receive email marketing. This endpoint accepts a maximum of 1000 profiles per call.&lt;br&gt;&lt;br&gt;*Rate limits*:&lt;br&gt;Burst: &#x60;10/s&#x60;&lt;br&gt;Steady: &#x60;150/m&#x60;  **Scopes:** &#x60;List Write&#x60; &#x60;Profiles Write&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} body 
     * @param {<&vendorExtensions.x-jsdoc-type>} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    createListRelationships = async (body, id) => {

        
        let postBody = body;
      // verify the required parameter 'body' is set
        if (body === undefined || body === null) {
            throw new Error("Missing the required parameter 'body' when calling createListRelationships");
        }
      // verify the required parameter 'id' is set
        if (id === undefined || id === null) {
            throw new Error("Missing the required parameter 'id' when calling createListRelationships");
        }

        let pathParams = {
          'id': id
        };
        let queryParams = {
          
        };
        let headerParams = {
          
        };
        let formParams = {
          
        };

        let authNames = ['Klaviyo-API-Key'];
        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = Object;

        return backOff(() => {
          return this.apiClient.callApi(
            '/api/lists/{id}/relationships/profiles/', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
          ).then(function(response_and_data) {
            return {
              body: response_and_data.data,
              headers: response_and_data.response.headers,
              status: response_and_data.response.status,
            };
          });
        }, {
          jitter: "full",
          numOfAttempts: this.apiClient.RETRY_MAX_ATTEMPTS,
          timeMultiple: this.apiClient.TIME_MULTIPLE,
          startingDelay: this.apiClient.STARTING_DELAY,
          retry: res => {
            return this.apiClient.RETRY_CODES.includes(res.status)
          }
        });
    }

    /**
     * Delete List
     * Delete a list with the given list ID.&lt;br&gt;&lt;br&gt;*Rate limits*:&lt;br&gt;Burst: &#x60;10/s&#x60;&lt;br&gt;Steady: &#x60;150/m&#x60;  **Scopes:** &#x60;List Write&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} id Primary key that uniquely identifies this list. Generated by Klaviyo.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteList = async (id) => {

        
        let postBody = null;
      // verify the required parameter 'id' is set
        if (id === undefined || id === null) {
            throw new Error("Missing the required parameter 'id' when calling deleteList");
        }

        let pathParams = {
          'id': id
        };
        let queryParams = {
          
        };
        let headerParams = {
          
        };
        let formParams = {
          
        };

        let authNames = ['Klaviyo-API-Key'];
        let contentTypes = [];
        let accepts = ['application/json'];
        let returnType = Object;

        return backOff(() => {
          return this.apiClient.callApi(
            '/api/lists/{id}/', 'DELETE',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
          ).then(function(response_and_data) {
            return {
              body: response_and_data.data,
              headers: response_and_data.response.headers,
              status: response_and_data.response.status,
            };
          });
        }, {
          jitter: "full",
          numOfAttempts: this.apiClient.RETRY_MAX_ATTEMPTS,
          timeMultiple: this.apiClient.TIME_MULTIPLE,
          startingDelay: this.apiClient.STARTING_DELAY,
          retry: res => {
            return this.apiClient.RETRY_CODES.includes(res.status)
          }
        });
    }

    /**
     * Remove Profile From List
     * Remove a profile from a list with the given list ID. The provided profile will no longer receive marketing from this particular list once removed. Removing a profile from a list will not impact the profile&#x27;s consent status or subscription status in general. To update a profile&#x27;s subscription status, please use the [Unsubscribe Profiles endpoint](https://developers.klaviyo.com/en/reference/unsubscribe_profiles). This endpoint accepts a maximum of 1000 profiles per call.&lt;br&gt;&lt;br&gt;*Rate limits*:&lt;br&gt;Burst: &#x60;10/s&#x60;&lt;br&gt;Steady: &#x60;150/m&#x60;  **Scopes:** &#x60;List Write&#x60; &#x60;Profiles Write&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} body 
     * @param {<&vendorExtensions.x-jsdoc-type>} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteListRelationships = async (body, id) => {

        
        let postBody = body;
      // verify the required parameter 'body' is set
        if (body === undefined || body === null) {
            throw new Error("Missing the required parameter 'body' when calling deleteListRelationships");
        }
      // verify the required parameter 'id' is set
        if (id === undefined || id === null) {
            throw new Error("Missing the required parameter 'id' when calling deleteListRelationships");
        }

        let pathParams = {
          'id': id
        };
        let queryParams = {
          
        };
        let headerParams = {
          
        };
        let formParams = {
          
        };

        let authNames = ['Klaviyo-API-Key'];
        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = Object;

        return backOff(() => {
          return this.apiClient.callApi(
            '/api/lists/{id}/relationships/profiles/', 'DELETE',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
          ).then(function(response_and_data) {
            return {
              body: response_and_data.data,
              headers: response_and_data.response.headers,
              status: response_and_data.response.status,
            };
          });
        }, {
          jitter: "full",
          numOfAttempts: this.apiClient.RETRY_MAX_ATTEMPTS,
          timeMultiple: this.apiClient.TIME_MULTIPLE,
          startingDelay: this.apiClient.STARTING_DELAY,
          retry: res => {
            return this.apiClient.RETRY_CODES.includes(res.status)
          }
        });
    }

    /**
     * Get List
     * Get a list with the given list ID.&lt;br&gt;&lt;br&gt;*Rate limits*:&lt;br&gt;Burst: &#x60;10/s&#x60;&lt;br&gt;Steady: &#x60;150/m&#x60;  **Scopes:** &#x60;List Write&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} id Primary key that uniquely identifies this list. Generated by Klaviyo.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.fieldsList For more information please visit https://developers.klaviyo.com/en/v2023-02-22/reference/api-overview#sparse-fieldsets
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    getList = async (id, opts) => {

        opts = opts || {};
        let postBody = null;
      // verify the required parameter 'id' is set
        if (id === undefined || id === null) {
            throw new Error("Missing the required parameter 'id' when calling getList");
        }

        let pathParams = {
          'id': id
        };
        let queryParams = {
          'fields[list]': this.apiClient.buildCollectionParam(opts['fieldsList'], 'csv')
        };
        let headerParams = {
          
        };
        let formParams = {
          
        };

        let authNames = ['Klaviyo-API-Key'];
        let contentTypes = [];
        let accepts = ['application/json'];
        let returnType = Object;

        return backOff(() => {
          return this.apiClient.callApi(
            '/api/lists/{id}/', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
          ).then(function(response_and_data) {
            return {
              body: response_and_data.data,
              headers: response_and_data.response.headers,
              status: response_and_data.response.status,
            };
          });
        }, {
          jitter: "full",
          numOfAttempts: this.apiClient.RETRY_MAX_ATTEMPTS,
          timeMultiple: this.apiClient.TIME_MULTIPLE,
          startingDelay: this.apiClient.STARTING_DELAY,
          retry: res => {
            return this.apiClient.RETRY_CODES.includes(res.status)
          }
        });
    }

    /**
     * Get List Profiles
     * Get all profiles within a list with the given list ID. Filter to request a subset of all profiles. Profiles can be filtered by &#x60;email&#x60;, &#x60;phone_number&#x60;, and &#x60;push_token&#x60; fields. You can adjust the number of results per page via the &#x60;page[size]&#x60; query parameter, e.g. &#x60;?page[size]&#x3D;25&#x60;. **Default**: 20. **Max**: 100.&lt;br&gt;&lt;br&gt;*Rate limits*:&lt;br&gt;Burst: &#x60;10/s&#x60;&lt;br&gt;Steady: &#x60;150/m&#x60;  **Scopes:** &#x60;List Read&#x60; &#x60;Profiles Read&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} listId Primary key that uniquely identifies this list. Generated by Klaviyo.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.additionalFieldsProfile Request additional fields not included by default in the response. Supported values: &#x27;predictive_analytics&#x27;
     * @param {Array.<module:model/String>} opts.fieldsProfile For more information please visit https://developers.klaviyo.com/en/v2023-02-22/reference/api-overview#sparse-fieldsets
     * @param {String} opts.filter For more information please visit https://developers.klaviyo.com/en/v2023-02-22/reference/api-overview#filtering&lt;br&gt;Allowed field(s)/operator(s):&lt;br&gt;&#x60;email&#x60;: &#x60;any&#x60;&lt;br&gt;&#x60;phone_number&#x60;: &#x60;any&#x60;&lt;br&gt;&#x60;push_token&#x60;: &#x60;any&#x60;&lt;br&gt;&#x60;_kx&#x60;: &#x60;equals&#x60;
     * @param {String} opts.pageCursor For more information please visit https://developers.klaviyo.com/en/v2023-02-22/reference/api-overview#pagination
     * @param {Number} opts.pageSize The number of results to return per page. Default &#x3D; 20. Max &#x3D; 100
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    getListProfiles = async (listId, opts) => {

        opts = opts || {};
        let postBody = null;
      // verify the required parameter 'listId' is set
        if (listId === undefined || listId === null) {
            throw new Error("Missing the required parameter 'listId' when calling getListProfiles");
        }

        let pathParams = {
          'list_id': listId
        };
        let queryParams = {
          'additional-fields[profile]': this.apiClient.buildCollectionParam(opts['additionalFieldsProfile'], 'csv'),'fields[profile]': this.apiClient.buildCollectionParam(opts['fieldsProfile'], 'csv'),'filter': opts['filter'],'page[cursor]': opts['pageCursor'],'page[size]': opts['pageSize']
        };
        let headerParams = {
          
        };
        let formParams = {
          
        };

        let authNames = ['Klaviyo-API-Key'];
        let contentTypes = [];
        let accepts = ['application/json'];
        let returnType = Object;

        return backOff(() => {
          return this.apiClient.callApi(
            '/api/lists/{list_id}/profiles/', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
          ).then(function(response_and_data) {
            return {
              body: response_and_data.data,
              headers: response_and_data.response.headers,
              status: response_and_data.response.status,
            };
          });
        }, {
          jitter: "full",
          numOfAttempts: this.apiClient.RETRY_MAX_ATTEMPTS,
          timeMultiple: this.apiClient.TIME_MULTIPLE,
          startingDelay: this.apiClient.STARTING_DELAY,
          retry: res => {
            return this.apiClient.RETRY_CODES.includes(res.status)
          }
        });
    }

    /**
     * Get List Relationships Profiles
     * Get profile membership [relationships](https://developers.klaviyo.com/en/reference/api_overview#relationships) for a list with the given list ID. You can adjust the number of results per page via the &#x60;page[size]&#x60; query parameter, e.g. &#x60;?page[size]&#x3D;25&#x60;. **Default**: 20. **Max**: 100.&lt;br&gt;&lt;br&gt;*Rate limits*:&lt;br&gt;Burst: &#x60;10/s&#x60;&lt;br&gt;Steady: &#x60;150/m&#x60;  **Scopes:** &#x60;List Read&#x60; &#x60;Profiles Read&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} id 
     * @param {Object} opts Optional parameters
     * @param {String} opts.pageCursor For more information please visit https://developers.klaviyo.com/en/v2023-02-22/reference/api-overview#pagination
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    getListRelationshipsProfiles = async (id, opts) => {

        opts = opts || {};
        let postBody = null;
      // verify the required parameter 'id' is set
        if (id === undefined || id === null) {
            throw new Error("Missing the required parameter 'id' when calling getListRelationshipsProfiles");
        }

        let pathParams = {
          'id': id
        };
        let queryParams = {
          'page[cursor]': opts['pageCursor']
        };
        let headerParams = {
          
        };
        let formParams = {
          
        };

        let authNames = ['Klaviyo-API-Key'];
        let contentTypes = [];
        let accepts = ['application/json'];
        let returnType = Object;

        return backOff(() => {
          return this.apiClient.callApi(
            '/api/lists/{id}/relationships/profiles/', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
          ).then(function(response_and_data) {
            return {
              body: response_and_data.data,
              headers: response_and_data.response.headers,
              status: response_and_data.response.status,
            };
          });
        }, {
          jitter: "full",
          numOfAttempts: this.apiClient.RETRY_MAX_ATTEMPTS,
          timeMultiple: this.apiClient.TIME_MULTIPLE,
          startingDelay: this.apiClient.STARTING_DELAY,
          retry: res => {
            return this.apiClient.RETRY_CODES.includes(res.status)
          }
        });
    }

    /**
     * Get List Relationships Tags
     * Returns the tag IDs of all tags associated with the given list.&lt;br&gt;&lt;br&gt;*Rate limits*:&lt;br&gt;Burst: &#x60;3/s&#x60;&lt;br&gt;Steady: &#x60;60/m&#x60;  **Scopes:** &#x60;List Read&#x60; &#x60;Tags Read&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    getListRelationshipsTags = async (id) => {

        
        let postBody = null;
      // verify the required parameter 'id' is set
        if (id === undefined || id === null) {
            throw new Error("Missing the required parameter 'id' when calling getListRelationshipsTags");
        }

        let pathParams = {
          'id': id
        };
        let queryParams = {
          
        };
        let headerParams = {
          
        };
        let formParams = {
          
        };

        let authNames = ['Klaviyo-API-Key'];
        let contentTypes = [];
        let accepts = ['application/json'];
        let returnType = Object;

        return backOff(() => {
          return this.apiClient.callApi(
            '/api/lists/{id}/relationships/tags/', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
          ).then(function(response_and_data) {
            return {
              body: response_and_data.data,
              headers: response_and_data.response.headers,
              status: response_and_data.response.status,
            };
          });
        }, {
          jitter: "full",
          numOfAttempts: this.apiClient.RETRY_MAX_ATTEMPTS,
          timeMultiple: this.apiClient.TIME_MULTIPLE,
          startingDelay: this.apiClient.STARTING_DELAY,
          retry: res => {
            return this.apiClient.RETRY_CODES.includes(res.status)
          }
        });
    }

    /**
     * Get List Tags
     * Return all tags associated with the given list ID.&lt;br&gt;&lt;br&gt;*Rate limits*:&lt;br&gt;Burst: &#x60;3/s&#x60;&lt;br&gt;Steady: &#x60;60/m&#x60;  **Scopes:** &#x60;List Read&#x60; &#x60;Tags Read&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} listId Primary key that uniquely identifies this list. Generated by Klaviyo.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.fieldsTag For more information please visit https://developers.klaviyo.com/en/v2023-02-22/reference/api-overview#sparse-fieldsets
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    getListTags = async (listId, opts) => {

        opts = opts || {};
        let postBody = null;
      // verify the required parameter 'listId' is set
        if (listId === undefined || listId === null) {
            throw new Error("Missing the required parameter 'listId' when calling getListTags");
        }

        let pathParams = {
          'list_id': listId
        };
        let queryParams = {
          'fields[tag]': this.apiClient.buildCollectionParam(opts['fieldsTag'], 'csv')
        };
        let headerParams = {
          
        };
        let formParams = {
          
        };

        let authNames = ['Klaviyo-API-Key'];
        let contentTypes = [];
        let accepts = ['application/json'];
        let returnType = Object;

        return backOff(() => {
          return this.apiClient.callApi(
            '/api/lists/{list_id}/tags/', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
          ).then(function(response_and_data) {
            return {
              body: response_and_data.data,
              headers: response_and_data.response.headers,
              status: response_and_data.response.status,
            };
          });
        }, {
          jitter: "full",
          numOfAttempts: this.apiClient.RETRY_MAX_ATTEMPTS,
          timeMultiple: this.apiClient.TIME_MULTIPLE,
          startingDelay: this.apiClient.STARTING_DELAY,
          retry: res => {
            return this.apiClient.RETRY_CODES.includes(res.status)
          }
        });
    }

    /**
     * Get Lists
     * Get all lists in an account. Filter to request a subset of all lists. Lists can be filtered by &#x60;id&#x60;, &#x60;name&#x60;, &#x60;created&#x60;, and &#x60;updated&#x60; fields. Returns a maximum of 10 results per page.&lt;br&gt;&lt;br&gt;*Rate limits*:&lt;br&gt;Burst: &#x60;10/s&#x60;&lt;br&gt;Steady: &#x60;150/m&#x60;  **Scopes:** &#x60;List Read&#x60;
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.fieldsList For more information please visit https://developers.klaviyo.com/en/v2023-02-22/reference/api-overview#sparse-fieldsets
     * @param {String} opts.filter For more information please visit https://developers.klaviyo.com/en/v2023-02-22/reference/api-overview#filtering&lt;br&gt;Allowed field(s)/operator(s):&lt;br&gt;&#x60;name&#x60;: &#x60;any&#x60;, &#x60;equals&#x60;&lt;br&gt;&#x60;id&#x60;: &#x60;any&#x60;, &#x60;equals&#x60;&lt;br&gt;&#x60;created&#x60;: &#x60;greater-than&#x60;&lt;br&gt;&#x60;updated&#x60;: &#x60;greater-than&#x60;
     * @param {String} opts.pageCursor For more information please visit https://developers.klaviyo.com/en/v2023-02-22/reference/api-overview#pagination
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    getLists = async (opts) => {

        opts = opts || {};
        let postBody = null;

        let pathParams = {
          
        };
        let queryParams = {
          'fields[list]': this.apiClient.buildCollectionParam(opts['fieldsList'], 'csv'),'filter': opts['filter'],'page[cursor]': opts['pageCursor']
        };
        let headerParams = {
          
        };
        let formParams = {
          
        };

        let authNames = ['Klaviyo-API-Key'];
        let contentTypes = [];
        let accepts = ['application/json'];
        let returnType = Object;

        return backOff(() => {
          return this.apiClient.callApi(
            '/api/lists/', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
          ).then(function(response_and_data) {
            return {
              body: response_and_data.data,
              headers: response_and_data.response.headers,
              status: response_and_data.response.status,
            };
          });
        }, {
          jitter: "full",
          numOfAttempts: this.apiClient.RETRY_MAX_ATTEMPTS,
          timeMultiple: this.apiClient.TIME_MULTIPLE,
          startingDelay: this.apiClient.STARTING_DELAY,
          retry: res => {
            return this.apiClient.RETRY_CODES.includes(res.status)
          }
        });
    }

    /**
     * Update List
     * Update the name of a list with the given list ID.&lt;br&gt;&lt;br&gt;*Rate limits*:&lt;br&gt;Burst: &#x60;10/s&#x60;&lt;br&gt;Steady: &#x60;150/m&#x60;  **Scopes:** &#x60;List Write&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} body 
     * @param {<&vendorExtensions.x-jsdoc-type>} id Primary key that uniquely identifies this list. Generated by Klaviyo.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    updateList = async (body, id) => {

        
        let postBody = body;
      // verify the required parameter 'body' is set
        if (body === undefined || body === null) {
            throw new Error("Missing the required parameter 'body' when calling updateList");
        }
      // verify the required parameter 'id' is set
        if (id === undefined || id === null) {
            throw new Error("Missing the required parameter 'id' when calling updateList");
        }

        let pathParams = {
          'id': id
        };
        let queryParams = {
          
        };
        let headerParams = {
          
        };
        let formParams = {
          
        };

        let authNames = ['Klaviyo-API-Key'];
        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = Object;

        return backOff(() => {
          return this.apiClient.callApi(
            '/api/lists/{id}/', 'PATCH',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
          ).then(function(response_and_data) {
            return {
              body: response_and_data.data,
              headers: response_and_data.response.headers,
              status: response_and_data.response.status,
            };
          });
        }, {
          jitter: "full",
          numOfAttempts: this.apiClient.RETRY_MAX_ATTEMPTS,
          timeMultiple: this.apiClient.TIME_MULTIPLE,
          startingDelay: this.apiClient.STARTING_DELAY,
          retry: res => {
            return this.apiClient.RETRY_CODES.includes(res.status)
          }
        });
    }

}