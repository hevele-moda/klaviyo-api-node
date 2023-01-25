/*
 * Klaviyo API
 * The Klaviyo REST API. Please visit https://developers.klaviyo.com for more details.
 *
 * OpenAPI spec version: 2023-01-24
 * Contact: developers@klaviyo.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.32
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from "../ApiClient.js";

/**
* Profiles service.
* @module api/ProfilesApi
* @version 2023-01-24
*/
export class ProfilesApi {
    apiClient

    /**
    * Constructs a new ProfilesApi. 
    * @alias module:api/ProfilesApi
    * @class
    * @param {ApiClient#instance} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Create Profile
     * Create a new profile. If you use a phone number as the profile identifier and SMS is not set up in the Klaviyo account, you&#x27;ll need to include at least one other identifier attribute (&#x60;email&#x60; or &#x60;external_id&#x60;) in addition to the &#x60;phone_number&#x60; attribute for the API call to work.&lt;br&gt;&lt;br&gt;*Rate limits*:&lt;br&gt;Burst: &#x60;75/s&#x60;&lt;br&gt;Steady: &#x60;700/m&#x60;  **Scopes:** &#x60;Profiles Write&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    createProfile = async (body) => {

    
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createProfile");
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

      return this.apiClient.callApi(
        '/api/profiles/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      ).then(function(response_and_data) {
          return {
              body: response_and_data.data,
              headers: response_and_data.response.headers,
              status: response_and_data.response.status,
          };
      });
    }

    /**
     * Get Profile
     * Get the profile with the given profile ID. Include parameters can be provided to get the following related resource data: &#x60;lists&#x60; memberships, &#x60;segments&#x60; memberships\&quot;&lt;br&gt;&lt;br&gt;*Rate limits*:&lt;br&gt;Burst: &#x60;3/s&#x60;&lt;br&gt;Steady: &#x60;60/m&#x60;  **Scopes:** &#x60;Profiles Read&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} id 
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.fieldsList For more information please visit https://developers.klaviyo.com/en/v2023-01-24/reference/api-overview#sparse-fieldsets
     * @param {Array.<module:model/String>} opts.fieldsProfile For more information please visit https://developers.klaviyo.com/en/v2023-01-24/reference/api-overview#sparse-fieldsets
     * @param {Array.<module:model/String>} opts.fieldsSegment For more information please visit https://developers.klaviyo.com/en/v2023-01-24/reference/api-overview#sparse-fieldsets
     * @param {Array.<module:model/String>} opts.include For more information please visit https://developers.klaviyo.com/en/v2023-01-24/reference/api-overview#relationships
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    getProfile = async (id, opts) => {

    opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getProfile");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        'fields[list]': this.apiClient.buildCollectionParam(opts['fieldsList'], 'csv'),'fields[profile]': this.apiClient.buildCollectionParam(opts['fieldsProfile'], 'csv'),'fields[segment]': this.apiClient.buildCollectionParam(opts['fieldsSegment'], 'csv'),'include': this.apiClient.buildCollectionParam(opts['include'], 'csv')
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['Klaviyo-API-Key'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Object;

      return this.apiClient.callApi(
        '/api/profiles/{id}/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      ).then(function(response_and_data) {
          return {
              body: response_and_data.data,
              headers: response_and_data.response.headers,
              status: response_and_data.response.status,
          };
      });
    }

    /**
     * Get Profile Lists
     * Get list memberships for a profile with the given profile ID.&lt;br&gt;&lt;br&gt;*Rate limits*:&lt;br&gt;Burst: &#x60;3/s&#x60;&lt;br&gt;Steady: &#x60;60/m&#x60;  **Scopes:** &#x60;List Read&#x60; &#x60;Profiles Read&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} profileId 
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.fieldsList For more information please visit https://developers.klaviyo.com/en/v2023-01-24/reference/api-overview#sparse-fieldsets
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    getProfileLists = async (profileId, opts) => {

    opts = opts || {};
      let postBody = null;
      // verify the required parameter 'profileId' is set
      if (profileId === undefined || profileId === null) {
        throw new Error("Missing the required parameter 'profileId' when calling getProfileLists");
      }

      let pathParams = {
        'profile_id': profileId
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

      return this.apiClient.callApi(
        '/api/profiles/{profile_id}/lists/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      ).then(function(response_and_data) {
          return {
              body: response_and_data.data,
              headers: response_and_data.response.headers,
              status: response_and_data.response.status,
          };
      });
    }

    /**
     * Get Profile Relationships
     * Get list membership or segment membership relationships for a profile with the given profile ID.&lt;br&gt;&lt;br&gt;*Rate limits*:&lt;br&gt;Burst: &#x60;3/s&#x60;&lt;br&gt;Steady: &#x60;60/m&#x60;  **Scopes:** &#x60;Lists Read&#x60; &#x60;Profiles Read&#x60; &#x60;Segments Read&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} id 
     * @param {<&vendorExtensions.x-jsdoc-type>} relatedResource 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    getProfileRelationships = async (id, relatedResource) => {

    
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getProfileRelationships");
      }
      // verify the required parameter 'relatedResource' is set
      if (relatedResource === undefined || relatedResource === null) {
        throw new Error("Missing the required parameter 'relatedResource' when calling getProfileRelationships");
      }

      let pathParams = {
        'id': id,'related_resource': relatedResource
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

      return this.apiClient.callApi(
        '/api/profiles/{id}/relationships/{related_resource}/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      ).then(function(response_and_data) {
          return {
              body: response_and_data.data,
              headers: response_and_data.response.headers,
              status: response_and_data.response.status,
          };
      });
    }

    /**
     * Get Profile Segments
     * Get segment memberships for a profile with the given profile ID.&lt;br&gt;&lt;br&gt;*Rate limits*:&lt;br&gt;Burst: &#x60;3/s&#x60;&lt;br&gt;Steady: &#x60;60/m&#x60;  **Scopes:** &#x60;Profiles Read&#x60; &#x60;Segments Read&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} profileId 
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.fieldsSegment For more information please visit https://developers.klaviyo.com/en/v2023-01-24/reference/api-overview#sparse-fieldsets
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    getProfileSegments = async (profileId, opts) => {

    opts = opts || {};
      let postBody = null;
      // verify the required parameter 'profileId' is set
      if (profileId === undefined || profileId === null) {
        throw new Error("Missing the required parameter 'profileId' when calling getProfileSegments");
      }

      let pathParams = {
        'profile_id': profileId
      };
      let queryParams = {
        'fields[segment]': this.apiClient.buildCollectionParam(opts['fieldsSegment'], 'csv')
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['Klaviyo-API-Key'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Object;

      return this.apiClient.callApi(
        '/api/profiles/{profile_id}/segments/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      ).then(function(response_and_data) {
          return {
              body: response_and_data.data,
              headers: response_and_data.response.headers,
              status: response_and_data.response.status,
          };
      });
    }

    /**
     * Get Profiles
     * Get all profiles in an account. Profiles can be sorted by the following fields in ascending and descending order: &#x60;id&#x60;, &#x60;created&#x60;, &#x60;email&#x60; You can adjust the number of results per page via the &#x60;page[size]&#x60; query parameter, e.g. &#x60;?page[size]&#x3D;25&#x60;. **Default**: 20. **Max**: 100.&lt;br&gt;&lt;br&gt;*Rate limits*:&lt;br&gt;Burst: &#x60;3/s&#x60;&lt;br&gt;Steady: &#x60;60/m&#x60;  **Scopes:** &#x60;Profiles Read&#x60;
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.fieldsProfile For more information please visit https://developers.klaviyo.com/en/v2023-01-24/reference/api-overview#sparse-fieldsets
     * @param {String} opts.filter For more information please visit https://developers.klaviyo.com/en/v2023-01-24/reference/api-overview#filtering&lt;br&gt;Allowed field(s)/operator(s):&lt;br&gt;&#x60;id&#x60;: &#x60;any&#x60;, &#x60;equals&#x60;&lt;br&gt;&#x60;email&#x60;: &#x60;any&#x60;, &#x60;equals&#x60;&lt;br&gt;&#x60;phone_number&#x60;: &#x60;any&#x60;, &#x60;equals&#x60;&lt;br&gt;&#x60;external_id&#x60;: &#x60;any&#x60;, &#x60;equals&#x60;&lt;br&gt;&#x60;anonymous_id&#x60;: &#x60;any&#x60;, &#x60;equals&#x60;&lt;br&gt;&#x60;_kx&#x60;: &#x60;equals&#x60;&lt;br&gt;&#x60;created&#x60;: &#x60;greater-than&#x60;, &#x60;less-than&#x60;
     * @param {String} opts.pageCursor For more information please visit https://developers.klaviyo.com/en/v2023-01-24/reference/api-overview#pagination
     * @param {module:model/String} opts.sort For more information please visit https://developers.klaviyo.com/en/v2023-01-24/reference/api-overview#sorting
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    getProfiles = async (opts) => {

    opts = opts || {};
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        'fields[profile]': this.apiClient.buildCollectionParam(opts['fieldsProfile'], 'csv'),'filter': opts['filter'],'page[cursor]': opts['pageCursor'],'sort': opts['sort']
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['Klaviyo-API-Key'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Object;

      return this.apiClient.callApi(
        '/api/profiles/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      ).then(function(response_and_data) {
          return {
              body: response_and_data.data,
              headers: response_and_data.response.headers,
              status: response_and_data.response.status,
          };
      });
    }

    /**
     * Subscribe Profiles
     * Subscribe one or more profiles to email marketing, SMS marketing, or both. If the list has double opt-in enabled, profiles will receive a message requiring their confirmation before subscribing. Otherwise, profiles will be immediately subscribed without receiving a confirmation message. To add someone to a list without changing their subscription status, use [Add Profile to List](https://developers.klaviyo.com/en/reference/create_list_relationships). Maximum number of profile can be submitted for subscription: 100&lt;br&gt;&lt;br&gt;*Rate limits*:&lt;br&gt;Burst: &#x60;75/s&#x60;&lt;br&gt;Steady: &#x60;700/m&#x60;  **Scopes:** &#x60;List Write&#x60; &#x60;Profiles Write&#x60; &#x60;Subscriptions Write&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} body Subscribes one or more profiles to marketing. Currently, supports email and SMS only. All profiles will be added to the provided list. Either email or phone number is required. Both may be specified to subscribe to both channels. If a profile cannot be found matching the given identifier(s), a new profile will be created and then subscribed.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    subscribeProfiles = async (body) => {

    
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling subscribeProfiles");
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

      return this.apiClient.callApi(
        '/api/profile-subscription-bulk-create-jobs/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      ).then(function(response_and_data) {
          return {
              body: response_and_data.data,
              headers: response_and_data.response.headers,
              status: response_and_data.response.status,
          };
      });
    }

    /**
     * Suppress Profiles
     * Manually suppress one or more profiles. Manually suppressed profiles will not receive email marketing. Not supported for SMS marketing. Maximum number of profile can be submitted for suppression: 100&lt;br&gt;&lt;br&gt;*Rate limits*:&lt;br&gt;Burst: &#x60;75/s&#x60;&lt;br&gt;Steady: &#x60;700/m&#x60;  **Scopes:** &#x60;Profiles Write&#x60; &#x60;Subscriptions Write&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} body Suppresses one or more profiles from receiving marketing. Currently, supports email only. If a profile is not found with the given email, one will be created and immediately suppressed.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    suppressProfiles = async (body) => {

    
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling suppressProfiles");
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

      return this.apiClient.callApi(
        '/api/profile-suppression-bulk-create-jobs/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      ).then(function(response_and_data) {
          return {
              body: response_and_data.data,
              headers: response_and_data.response.headers,
              status: response_and_data.response.status,
          };
      });
    }

    /**
     * Unsubscribe Profiles
     * Unsubscribe one or more profiles to email marketing, SMS marketing, or both. To remove someone from a list without changing their subscription status, use [Remove Profile from List](https://developers.klaviyo.com/en/reference/delete_list_relationships). Maximum number of profile can be submitted for unsubscription: 100&lt;br&gt;&lt;br&gt;*Rate limits*:&lt;br&gt;Burst: &#x60;75/s&#x60;&lt;br&gt;Steady: &#x60;700/m&#x60;  **Scopes:** &#x60;List Write&#x60; &#x60;Profiles Write&#x60; &#x60;Subscriptions Write&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} body Unsubscribes one or more profiles from marketing. Currently, supports email and SMS only. All profiles will be removed from the provided list. Either email or phone number is required. If a profile cannot be found matching the given identifier(s), a new profile will be created and then unsubscribed.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    unsubscribeProfiles = async (body) => {

    
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling unsubscribeProfiles");
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

      return this.apiClient.callApi(
        '/api/profile-unsubscription-bulk-create-jobs/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      ).then(function(response_and_data) {
          return {
              body: response_and_data.data,
              headers: response_and_data.response.headers,
              status: response_and_data.response.status,
          };
      });
    }

    /**
     * Unsuppress Profiles
     * Unsuppress one or more profiles. Unsuppressed profiles will receive email marketing. Not supported for SMS marketing. Profiles suppressed due to a hard bounced email will not be unsuppressed. Maximum number of profile can be submitted for unsuppression: 100&lt;br&gt;&lt;br&gt;*Rate limits*:&lt;br&gt;Burst: &#x60;75/s&#x60;&lt;br&gt;Steady: &#x60;700/m&#x60;  **Scopes:** &#x60;Subscriptions Write&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} body Unsuppresses one or more profiles from receiving marketing. Currently, supports email only. If a profile is not found with the given email, no action will be taken.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    unsuppressProfiles = async (body) => {

    
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling unsuppressProfiles");
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

      return this.apiClient.callApi(
        '/api/profile-unsuppression-bulk-create-jobs/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      ).then(function(response_and_data) {
          return {
              body: response_and_data.data,
              headers: response_and_data.response.headers,
              status: response_and_data.response.status,
          };
      });
    }

    /**
     * Update Profile
     * Update the profile with the given profile ID. If you use a phone number as the profile identifier and SMS is not set up in the Klaviyo account, you&#x27;ll need to include at least one other identifier attribute (&#x60;email&#x60; or &#x60;external_id&#x60;) in addition to the &#x60;phone_number&#x60; attribute for the API call to work.&lt;br&gt;&lt;br&gt;*Rate limits*:&lt;br&gt;Burst: &#x60;75/s&#x60;&lt;br&gt;Steady: &#x60;700/m&#x60;  **Scopes:** &#x60;Profiles Write&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} body 
     * @param {<&vendorExtensions.x-jsdoc-type>} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    updateProfile = async (body, id) => {

    
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateProfile");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateProfile");
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

      return this.apiClient.callApi(
        '/api/profiles/{id}/', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      ).then(function(response_and_data) {
          return {
              body: response_and_data.data,
              headers: response_and_data.response.headers,
              status: response_and_data.response.status,
          };
      });
    }

}