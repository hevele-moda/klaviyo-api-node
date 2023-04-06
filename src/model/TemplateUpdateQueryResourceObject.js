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
import {TemplateEnum} from './TemplateEnum.js';
import {TemplateUpdateQueryResourceObjectAttributes} from './TemplateUpdateQueryResourceObjectAttributes.js';

/**
 * The TemplateUpdateQueryResourceObject model module.
 * @module model/TemplateUpdateQueryResourceObject
 * @version 2023-02-22
 */
export class TemplateUpdateQueryResourceObject {
  /**
   * Constructs a new <code>TemplateUpdateQueryResourceObject</code>.
   * @alias module:model/TemplateUpdateQueryResourceObject
   * @class
   * @param type {module:model/TemplateEnum} 
   * @param id {String} The ID of template
   * @param attributes {module:model/TemplateUpdateQueryResourceObjectAttributes} 
   */
  constructor(type, id, attributes) {
    this.type = type;
    this.id = id;
    this.attributes = attributes;
  }

  /**
   * Constructs a <code>TemplateUpdateQueryResourceObject</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TemplateUpdateQueryResourceObject} obj Optional instance to populate.
   * @return {module:model/TemplateUpdateQueryResourceObject} The populated <code>TemplateUpdateQueryResourceObject</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TemplateUpdateQueryResourceObject();
      if (data.hasOwnProperty('type'))
        obj.type = TemplateEnum.constructFromObject(data['type']);
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('attributes'))
        obj.attributes = TemplateUpdateQueryResourceObjectAttributes.constructFromObject(data['attributes']);
    }
    return obj;
  }
}

/**
 * @member {module:model/TemplateEnum} type
 */
TemplateUpdateQueryResourceObject.prototype.type = undefined;

/**
 * The ID of template
 * @member {String} id
 */
TemplateUpdateQueryResourceObject.prototype.id = undefined;

/**
 * @member {module:model/TemplateUpdateQueryResourceObjectAttributes} attributes
 */
TemplateUpdateQueryResourceObject.prototype.attributes = undefined;

