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
import {ApiClient} from '../ApiClient.js';
import {DataPrivacyCreateDeletionJobQueryResourceObject} from './DataPrivacyCreateDeletionJobQueryResourceObject.js';

/**
 * The DataPrivacyCreateDeletionJobQuery model module.
 * @module model/DataPrivacyCreateDeletionJobQuery
 * @version 2023-02-22
 */
export class DataPrivacyCreateDeletionJobQuery {
  /**
   * Constructs a new <code>DataPrivacyCreateDeletionJobQuery</code>.
   * @alias module:model/DataPrivacyCreateDeletionJobQuery
   * @class
   * @param data {module:model/DataPrivacyCreateDeletionJobQueryResourceObject} 
   */
  constructor(data) {
    this.data = data;
  }

  /**
   * Constructs a <code>DataPrivacyCreateDeletionJobQuery</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DataPrivacyCreateDeletionJobQuery} obj Optional instance to populate.
   * @return {module:model/DataPrivacyCreateDeletionJobQuery} The populated <code>DataPrivacyCreateDeletionJobQuery</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DataPrivacyCreateDeletionJobQuery();
      if (data.hasOwnProperty('data'))
        obj.data = DataPrivacyCreateDeletionJobQueryResourceObject.constructFromObject(data['data']);
    }
    return obj;
  }
}

/**
 * @member {module:model/DataPrivacyCreateDeletionJobQueryResourceObject} data
 */
DataPrivacyCreateDeletionJobQuery.prototype.data = undefined;

