/*
 * Klaviyo API
 * The Klaviyo REST API. Please visit https://developers.klaviyo.com for more details.
 *
 * OpenAPI spec version: 2023-07-15
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
import {CatalogItemCreateQueryResourceObject} from './CatalogItemCreateQueryResourceObject.js';

/**
 * The CatalogItemCreateQuery model module.
 * @module model/CatalogItemCreateQuery
 * @version 2023-07-15
 */
export class CatalogItemCreateQuery {
  /**
   * Constructs a new <code>CatalogItemCreateQuery</code>.
   * @alias module:model/CatalogItemCreateQuery
   * @class
   * @param data {module:model/CatalogItemCreateQueryResourceObject} 
   */
  constructor(data) {
    this.data = data;
  }

  /**
   * Constructs a <code>CatalogItemCreateQuery</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CatalogItemCreateQuery} obj Optional instance to populate.
   * @return {module:model/CatalogItemCreateQuery} The populated <code>CatalogItemCreateQuery</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CatalogItemCreateQuery();
      if (data.hasOwnProperty('data'))
        obj.data = CatalogItemCreateQueryResourceObject.constructFromObject(data['data']);
    }
    return obj;
  }
}

/**
 * @member {module:model/CatalogItemCreateQueryResourceObject} data
 */
CatalogItemCreateQuery.prototype.data = undefined;

