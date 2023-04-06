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
import {TagGroupUpdateQueryResourceObject} from './TagGroupUpdateQueryResourceObject.js';

/**
 * The TagGroupUpdateQuery model module.
 * @module model/TagGroupUpdateQuery
 * @version 2023-02-22
 */
export class TagGroupUpdateQuery {
  /**
   * Constructs a new <code>TagGroupUpdateQuery</code>.
   * @alias module:model/TagGroupUpdateQuery
   * @class
   * @param data {module:model/TagGroupUpdateQueryResourceObject} 
   */
  constructor(data) {
    this.data = data;
  }

  /**
   * Constructs a <code>TagGroupUpdateQuery</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TagGroupUpdateQuery} obj Optional instance to populate.
   * @return {module:model/TagGroupUpdateQuery} The populated <code>TagGroupUpdateQuery</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TagGroupUpdateQuery();
      if (data.hasOwnProperty('data'))
        obj.data = TagGroupUpdateQueryResourceObject.constructFromObject(data['data']);
    }
    return obj;
  }
}

/**
 * @member {module:model/TagGroupUpdateQueryResourceObject} data
 */
TagGroupUpdateQuery.prototype.data = undefined;

