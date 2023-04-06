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
import {CatalogItemCreateQueryResourceObjectRelationshipsCategories} from './CatalogItemCreateQueryResourceObjectRelationshipsCategories.js';

/**
 * The CatalogItemCreateQueryResourceObjectRelationships model module.
 * @module model/CatalogItemCreateQueryResourceObjectRelationships
 * @version 2023-02-22
 */
export class CatalogItemCreateQueryResourceObjectRelationships {
  /**
   * Constructs a new <code>CatalogItemCreateQueryResourceObjectRelationships</code>.
   * @alias module:model/CatalogItemCreateQueryResourceObjectRelationships
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>CatalogItemCreateQueryResourceObjectRelationships</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CatalogItemCreateQueryResourceObjectRelationships} obj Optional instance to populate.
   * @return {module:model/CatalogItemCreateQueryResourceObjectRelationships} The populated <code>CatalogItemCreateQueryResourceObjectRelationships</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CatalogItemCreateQueryResourceObjectRelationships();
      if (data.hasOwnProperty('categories'))
        obj.categories = CatalogItemCreateQueryResourceObjectRelationshipsCategories.constructFromObject(data['categories']);
    }
    return obj;
  }
}

/**
 * @member {module:model/CatalogItemCreateQueryResourceObjectRelationshipsCategories} categories
 */
CatalogItemCreateQueryResourceObjectRelationships.prototype.categories = undefined;

