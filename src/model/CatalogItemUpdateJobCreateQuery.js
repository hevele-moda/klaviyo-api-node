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
import {CatalogItemUpdateJobCreateQueryResourceObject} from './CatalogItemUpdateJobCreateQueryResourceObject.js';

/**
 * The CatalogItemUpdateJobCreateQuery model module.
 * @module model/CatalogItemUpdateJobCreateQuery
 * @version 2023-02-22
 */
export class CatalogItemUpdateJobCreateQuery {
  /**
   * Constructs a new <code>CatalogItemUpdateJobCreateQuery</code>.
   * @alias module:model/CatalogItemUpdateJobCreateQuery
   * @class
   * @param data {module:model/CatalogItemUpdateJobCreateQueryResourceObject} 
   */
  constructor(data) {
    this.data = data;
  }

  /**
   * Constructs a <code>CatalogItemUpdateJobCreateQuery</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CatalogItemUpdateJobCreateQuery} obj Optional instance to populate.
   * @return {module:model/CatalogItemUpdateJobCreateQuery} The populated <code>CatalogItemUpdateJobCreateQuery</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CatalogItemUpdateJobCreateQuery();
      if (data.hasOwnProperty('data'))
        obj.data = CatalogItemUpdateJobCreateQueryResourceObject.constructFromObject(data['data']);
    }
    return obj;
  }
}

/**
 * @member {module:model/CatalogItemUpdateJobCreateQueryResourceObject} data
 */
CatalogItemUpdateJobCreateQuery.prototype.data = undefined;

