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
import {PushTokenCreateQueryResourceObjectAttributes} from './PushTokenCreateQueryResourceObjectAttributes.js';
import {PushTokenEnum} from './PushTokenEnum.js';

/**
 * The PushTokenCreateQueryResourceObject model module.
 * @module model/PushTokenCreateQueryResourceObject
 * @version 2023-08-15
 */
export class PushTokenCreateQueryResourceObject {
  /**
   * Constructs a new <code>PushTokenCreateQueryResourceObject</code>.
   * @alias module:model/PushTokenCreateQueryResourceObject
   * @class
   * @param type {module:model/PushTokenEnum} 
   * @param attributes {module:model/PushTokenCreateQueryResourceObjectAttributes} 
   */
  constructor(type, attributes) {
    this.type = type;
    this.attributes = attributes;
  }

  /**
   * Constructs a <code>PushTokenCreateQueryResourceObject</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PushTokenCreateQueryResourceObject} obj Optional instance to populate.
   * @return {module:model/PushTokenCreateQueryResourceObject} The populated <code>PushTokenCreateQueryResourceObject</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PushTokenCreateQueryResourceObject();
      if (data.hasOwnProperty('type'))
        obj.type = PushTokenEnum.constructFromObject(data['type']);
      if (data.hasOwnProperty('attributes'))
        obj.attributes = PushTokenCreateQueryResourceObjectAttributes.constructFromObject(data['attributes']);
    }
    return obj;
  }
}

/**
 * @member {module:model/PushTokenEnum} type
 */
PushTokenCreateQueryResourceObject.prototype.type = undefined;

/**
 * @member {module:model/PushTokenCreateQueryResourceObjectAttributes} attributes
 */
PushTokenCreateQueryResourceObject.prototype.attributes = undefined;

