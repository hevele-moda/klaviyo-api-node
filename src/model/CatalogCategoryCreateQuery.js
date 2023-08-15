/*
 * Klaviyo API
 * The Klaviyo REST API. Please visit https://developers.klaviyo.com for more details.
 *
 * OpenAPI spec version: 2023-08-15
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
import {CatalogCategoryCreateQueryResourceObject} from './CatalogCategoryCreateQueryResourceObject.js';

/**
 * The CatalogCategoryCreateQuery model module.
 * @module model/CatalogCategoryCreateQuery
 * @version 2023-08-15
 */
export class CatalogCategoryCreateQuery {
  /**
   * Constructs a new <code>CatalogCategoryCreateQuery</code>.
   * @alias module:model/CatalogCategoryCreateQuery
   * @class
   * @param data {module:model/CatalogCategoryCreateQueryResourceObject} 
   */
  constructor(data) {
    this.data = data;
  }

  /**
   * Constructs a <code>CatalogCategoryCreateQuery</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CatalogCategoryCreateQuery} obj Optional instance to populate.
   * @return {module:model/CatalogCategoryCreateQuery} The populated <code>CatalogCategoryCreateQuery</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CatalogCategoryCreateQuery();
      if (data.hasOwnProperty('data'))
        obj.data = CatalogCategoryCreateQueryResourceObject.constructFromObject(data['data']);
    }
    return obj;
  }
}

/**
 * @member {module:model/CatalogCategoryCreateQueryResourceObject} data
 */
CatalogCategoryCreateQuery.prototype.data = undefined;

