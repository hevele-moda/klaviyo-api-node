/*
 * Klaviyo API
 * The Klaviyo REST API. Please visit https://developers.klaviyo.com for more details.
 *
 * OpenAPI spec version: 2023-01-24
 * Contact: developers@klaviyo.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.32
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from '../ApiClient.js';
import {CatalogItemDeleteJobCreateQueryAsSubResourceAttributes} from './CatalogItemDeleteJobCreateQueryAsSubResourceAttributes.js';

/**
 * The CatalogItemDeleteJobCreateQueryAsSubResource model module.
 * @module model/CatalogItemDeleteJobCreateQueryAsSubResource
 * @version 2023-01-24
 */
export class CatalogItemDeleteJobCreateQueryAsSubResource {
  /**
   * Constructs a new <code>CatalogItemDeleteJobCreateQueryAsSubResource</code>.
   * @alias module:model/CatalogItemDeleteJobCreateQueryAsSubResource
   * @class
   * @param type {module:model/CatalogItemDeleteJobCreateQueryAsSubResource.TypeEnum} 
   * @param attributes {module:model/CatalogItemDeleteJobCreateQueryAsSubResourceAttributes} 
   */
  constructor(type, attributes) {
    this.type = type;
    this.attributes = attributes;
  }

  /**
   * Constructs a <code>CatalogItemDeleteJobCreateQueryAsSubResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CatalogItemDeleteJobCreateQueryAsSubResource} obj Optional instance to populate.
   * @return {module:model/CatalogItemDeleteJobCreateQueryAsSubResource} The populated <code>CatalogItemDeleteJobCreateQueryAsSubResource</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CatalogItemDeleteJobCreateQueryAsSubResource();
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('attributes'))
        obj.attributes = CatalogItemDeleteJobCreateQueryAsSubResourceAttributes.constructFromObject(data['attributes']);
    }
    return obj;
  }
}

/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
CatalogItemDeleteJobCreateQueryAsSubResource.TypeEnum = {
  /**
   * value: "catalog-item-bulk-delete-job"
   * @const
   */
  catalogItemBulkDeleteJob: "catalog-item-bulk-delete-job"
};
/**
 * @member {module:model/CatalogItemDeleteJobCreateQueryAsSubResource.TypeEnum} type
 */
CatalogItemDeleteJobCreateQueryAsSubResource.prototype.type = undefined;

/**
 * @member {module:model/CatalogItemDeleteJobCreateQueryAsSubResourceAttributes} attributes
 */
CatalogItemDeleteJobCreateQueryAsSubResource.prototype.attributes = undefined;

