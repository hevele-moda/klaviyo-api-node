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
import {IncludedVariantsAttributes} from './IncludedVariantsAttributes.js';
import {IncludedVariantsLinks} from './IncludedVariantsLinks.js';

/**
 * The IncludedVariants model module.
 * @module model/IncludedVariants
 * @version 2023-01-24
 */
export class IncludedVariants {
  /**
   * Constructs a new <code>IncludedVariants</code>.
   * @alias module:model/IncludedVariants
   * @class
   * @param type {module:model/IncludedVariants.TypeEnum} 
   * @param id {String} 
   * @param attributes {module:model/IncludedVariantsAttributes} 
   * @param links {module:model/IncludedVariantsLinks} 
   */
  constructor(type, id, attributes, links) {
    this.type = type;
    this.id = id;
    this.attributes = attributes;
    this.links = links;
  }

  /**
   * Constructs a <code>IncludedVariants</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IncludedVariants} obj Optional instance to populate.
   * @return {module:model/IncludedVariants} The populated <code>IncludedVariants</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new IncludedVariants();
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('attributes'))
        obj.attributes = IncludedVariantsAttributes.constructFromObject(data['attributes']);
      if (data.hasOwnProperty('links'))
        obj.links = IncludedVariantsLinks.constructFromObject(data['links']);
    }
    return obj;
  }
}

/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
IncludedVariants.TypeEnum = {
  /**
   * value: "catalog-variant"
   * @const
   */
  catalogVariant: "catalog-variant"
};
/**
 * @member {module:model/IncludedVariants.TypeEnum} type
 */
IncludedVariants.prototype.type = undefined;

/**
 * @member {String} id
 */
IncludedVariants.prototype.id = undefined;

/**
 * @member {module:model/IncludedVariantsAttributes} attributes
 */
IncludedVariants.prototype.attributes = undefined;

/**
 * @member {module:model/IncludedVariantsLinks} links
 */
IncludedVariants.prototype.links = undefined;

