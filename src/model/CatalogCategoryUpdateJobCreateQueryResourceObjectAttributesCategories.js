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
import {CatalogCategoryUpdateQueryResourceObject} from './CatalogCategoryUpdateQueryResourceObject.js';

/**
 * The CatalogCategoryUpdateJobCreateQueryResourceObjectAttributesCategories model module.
 * @module model/CatalogCategoryUpdateJobCreateQueryResourceObjectAttributesCategories
 * @version 2023-07-15
 */
export class CatalogCategoryUpdateJobCreateQueryResourceObjectAttributesCategories {
  /**
   * Constructs a new <code>CatalogCategoryUpdateJobCreateQueryResourceObjectAttributesCategories</code>.
   * Array of catalog categories to update.
   * @alias module:model/CatalogCategoryUpdateJobCreateQueryResourceObjectAttributesCategories
   * @class
   * @param data {Array.<module:model/CatalogCategoryUpdateQueryResourceObject>} 
   */
  constructor(data) {
    this.data = data;
  }

  /**
   * Constructs a <code>CatalogCategoryUpdateJobCreateQueryResourceObjectAttributesCategories</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CatalogCategoryUpdateJobCreateQueryResourceObjectAttributesCategories} obj Optional instance to populate.
   * @return {module:model/CatalogCategoryUpdateJobCreateQueryResourceObjectAttributesCategories} The populated <code>CatalogCategoryUpdateJobCreateQueryResourceObjectAttributesCategories</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CatalogCategoryUpdateJobCreateQueryResourceObjectAttributesCategories();
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [CatalogCategoryUpdateQueryResourceObject]);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/CatalogCategoryUpdateQueryResourceObject>} data
 */
CatalogCategoryUpdateJobCreateQueryResourceObjectAttributesCategories.prototype.data = undefined;

