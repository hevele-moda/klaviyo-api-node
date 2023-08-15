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
import {FlowEnum} from './FlowEnum.js';
import {FlowUpdateQueryResourceObjectAttributes} from './FlowUpdateQueryResourceObjectAttributes.js';

/**
 * The FlowUpdateQueryResourceObject model module.
 * @module model/FlowUpdateQueryResourceObject
 * @version 2023-08-15
 */
export class FlowUpdateQueryResourceObject {
  /**
   * Constructs a new <code>FlowUpdateQueryResourceObject</code>.
   * @alias module:model/FlowUpdateQueryResourceObject
   * @class
   * @param type {module:model/FlowEnum} 
   * @param id {String} ID of the Flow to update. Ex: XVTP5Q
   * @param attributes {module:model/FlowUpdateQueryResourceObjectAttributes} 
   */
  constructor(type, id, attributes) {
    this.type = type;
    this.id = id;
    this.attributes = attributes;
  }

  /**
   * Constructs a <code>FlowUpdateQueryResourceObject</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FlowUpdateQueryResourceObject} obj Optional instance to populate.
   * @return {module:model/FlowUpdateQueryResourceObject} The populated <code>FlowUpdateQueryResourceObject</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new FlowUpdateQueryResourceObject();
      if (data.hasOwnProperty('type'))
        obj.type = FlowEnum.constructFromObject(data['type']);
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('attributes'))
        obj.attributes = FlowUpdateQueryResourceObjectAttributes.constructFromObject(data['attributes']);
    }
    return obj;
  }
}

/**
 * @member {module:model/FlowEnum} type
 */
FlowUpdateQueryResourceObject.prototype.type = undefined;

/**
 * ID of the Flow to update. Ex: XVTP5Q
 * @member {String} id
 */
FlowUpdateQueryResourceObject.prototype.id = undefined;

/**
 * @member {module:model/FlowUpdateQueryResourceObjectAttributes} attributes
 */
FlowUpdateQueryResourceObject.prototype.attributes = undefined;

