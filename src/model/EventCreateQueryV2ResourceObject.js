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
import {EventCreateQueryV2ResourceObjectAttributes} from './EventCreateQueryV2ResourceObjectAttributes.js';
import {EventEnum} from './EventEnum.js';

/**
 * The EventCreateQueryV2ResourceObject model module.
 * @module model/EventCreateQueryV2ResourceObject
 * @version 2023-07-15
 */
export class EventCreateQueryV2ResourceObject {
  /**
   * Constructs a new <code>EventCreateQueryV2ResourceObject</code>.
   * @alias module:model/EventCreateQueryV2ResourceObject
   * @class
   * @param attributes {module:model/EventCreateQueryV2ResourceObjectAttributes} 
   * @param type {module:model/EventEnum} 
   */
  constructor(attributes, type) {
    this.attributes = attributes;
    this.type = type;
  }

  /**
   * Constructs a <code>EventCreateQueryV2ResourceObject</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EventCreateQueryV2ResourceObject} obj Optional instance to populate.
   * @return {module:model/EventCreateQueryV2ResourceObject} The populated <code>EventCreateQueryV2ResourceObject</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new EventCreateQueryV2ResourceObject();
      if (data.hasOwnProperty('attributes'))
        obj.attributes = EventCreateQueryV2ResourceObjectAttributes.constructFromObject(data['attributes']);
      if (data.hasOwnProperty('type'))
        obj.type = EventEnum.constructFromObject(data['type']);
    }
    return obj;
  }
}

/**
 * @member {module:model/EventCreateQueryV2ResourceObjectAttributes} attributes
 */
EventCreateQueryV2ResourceObject.prototype.attributes = undefined;

/**
 * @member {module:model/EventEnum} type
 */
EventCreateQueryV2ResourceObject.prototype.type = undefined;

