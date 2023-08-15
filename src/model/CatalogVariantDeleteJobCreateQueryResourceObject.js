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
import {CatalogVariantBulkDeleteJobEnum} from './CatalogVariantBulkDeleteJobEnum.js';
import {CatalogVariantDeleteJobCreateQueryResourceObjectAttributes} from './CatalogVariantDeleteJobCreateQueryResourceObjectAttributes.js';

/**
 * The CatalogVariantDeleteJobCreateQueryResourceObject model module.
 * @module model/CatalogVariantDeleteJobCreateQueryResourceObject
 * @version 2023-08-15
 */
export class CatalogVariantDeleteJobCreateQueryResourceObject {
  /**
   * Constructs a new <code>CatalogVariantDeleteJobCreateQueryResourceObject</code>.
   * @alias module:model/CatalogVariantDeleteJobCreateQueryResourceObject
   * @class
   * @param type {module:model/CatalogVariantBulkDeleteJobEnum} 
   * @param attributes {module:model/CatalogVariantDeleteJobCreateQueryResourceObjectAttributes} 
   */
  constructor(type, attributes) {
    this.type = type;
    this.attributes = attributes;
  }

  /**
   * Constructs a <code>CatalogVariantDeleteJobCreateQueryResourceObject</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CatalogVariantDeleteJobCreateQueryResourceObject} obj Optional instance to populate.
   * @return {module:model/CatalogVariantDeleteJobCreateQueryResourceObject} The populated <code>CatalogVariantDeleteJobCreateQueryResourceObject</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CatalogVariantDeleteJobCreateQueryResourceObject();
      if (data.hasOwnProperty('type'))
        obj.type = CatalogVariantBulkDeleteJobEnum.constructFromObject(data['type']);
      if (data.hasOwnProperty('attributes'))
        obj.attributes = CatalogVariantDeleteJobCreateQueryResourceObjectAttributes.constructFromObject(data['attributes']);
    }
    return obj;
  }
}

/**
 * @member {module:model/CatalogVariantBulkDeleteJobEnum} type
 */
CatalogVariantDeleteJobCreateQueryResourceObject.prototype.type = undefined;

/**
 * @member {module:model/CatalogVariantDeleteJobCreateQueryResourceObjectAttributes} attributes
 */
CatalogVariantDeleteJobCreateQueryResourceObject.prototype.attributes = undefined;

