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
import {CatalogVariantEnum} from './CatalogVariantEnum.js';

/**
 * The CatalogVariantDeleteQueryResourceObject model module.
 * @module model/CatalogVariantDeleteQueryResourceObject
 * @version 2023-07-15
 */
export class CatalogVariantDeleteQueryResourceObject {
  /**
   * Constructs a new <code>CatalogVariantDeleteQueryResourceObject</code>.
   * @alias module:model/CatalogVariantDeleteQueryResourceObject
   * @class
   * @param type {module:model/CatalogVariantEnum} 
   * @param id {String} The catalog variant ID is a compound ID (string), with format: `{integration}:::{catalog}:::{external_id}`. Currently, the only supported integration type is `$custom`, and the only supported catalog is `$default`.
   */
  constructor(type, id) {
    this.type = type;
    this.id = id;
  }

  /**
   * Constructs a <code>CatalogVariantDeleteQueryResourceObject</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CatalogVariantDeleteQueryResourceObject} obj Optional instance to populate.
   * @return {module:model/CatalogVariantDeleteQueryResourceObject} The populated <code>CatalogVariantDeleteQueryResourceObject</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CatalogVariantDeleteQueryResourceObject();
      if (data.hasOwnProperty('type'))
        obj.type = CatalogVariantEnum.constructFromObject(data['type']);
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
    }
    return obj;
  }
}

/**
 * @member {module:model/CatalogVariantEnum} type
 */
CatalogVariantDeleteQueryResourceObject.prototype.type = undefined;

/**
 * The catalog variant ID is a compound ID (string), with format: `{integration}:::{catalog}:::{external_id}`. Currently, the only supported integration type is `$custom`, and the only supported catalog is `$default`.
 * @member {String} id
 */
CatalogVariantDeleteQueryResourceObject.prototype.id = undefined;

