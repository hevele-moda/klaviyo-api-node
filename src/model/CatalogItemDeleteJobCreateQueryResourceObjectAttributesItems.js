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
import {CatalogItemDeleteQueryResourceObject} from './CatalogItemDeleteQueryResourceObject.js';

/**
 * The CatalogItemDeleteJobCreateQueryResourceObjectAttributesItems model module.
 * @module model/CatalogItemDeleteJobCreateQueryResourceObjectAttributesItems
 * @version 2023-08-15
 */
export class CatalogItemDeleteJobCreateQueryResourceObjectAttributesItems {
  /**
   * Constructs a new <code>CatalogItemDeleteJobCreateQueryResourceObjectAttributesItems</code>.
   * Array of catalog items to delete.
   * @alias module:model/CatalogItemDeleteJobCreateQueryResourceObjectAttributesItems
   * @class
   * @param data {Array.<module:model/CatalogItemDeleteQueryResourceObject>} 
   */
  constructor(data) {
    this.data = data;
  }

  /**
   * Constructs a <code>CatalogItemDeleteJobCreateQueryResourceObjectAttributesItems</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CatalogItemDeleteJobCreateQueryResourceObjectAttributesItems} obj Optional instance to populate.
   * @return {module:model/CatalogItemDeleteJobCreateQueryResourceObjectAttributesItems} The populated <code>CatalogItemDeleteJobCreateQueryResourceObjectAttributesItems</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CatalogItemDeleteJobCreateQueryResourceObjectAttributesItems();
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [CatalogItemDeleteQueryResourceObject]);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/CatalogItemDeleteQueryResourceObject>} data
 */
CatalogItemDeleteJobCreateQueryResourceObjectAttributesItems.prototype.data = undefined;

