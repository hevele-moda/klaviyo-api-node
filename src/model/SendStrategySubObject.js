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
import {STOScheduleOptions} from './STOScheduleOptions.js';
import {StaticScheduleOptions} from './StaticScheduleOptions.js';
import {ThrottledScheduleOptions} from './ThrottledScheduleOptions.js';

/**
 * The SendStrategySubObject model module.
 * @module model/SendStrategySubObject
 * @version 2023-08-15
 */
export class SendStrategySubObject {
  /**
   * Constructs a new <code>SendStrategySubObject</code>.
   * @alias module:model/SendStrategySubObject
   * @class
   * @param method {String} Describes the shape of the options object. Allowed values: ['static', 'throttled', 'immediate', 'smart_send_time']
   */
  constructor(method) {
    this.method = method;
  }

  /**
   * Constructs a <code>SendStrategySubObject</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SendStrategySubObject} obj Optional instance to populate.
   * @return {module:model/SendStrategySubObject} The populated <code>SendStrategySubObject</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new SendStrategySubObject();
      if (data.hasOwnProperty('method'))
        obj.method = ApiClient.convertToType(data['method'], 'String');
      if (data.hasOwnProperty('options_static'))
        obj.optionsStatic = StaticScheduleOptions.constructFromObject(data['options_static']);
      if (data.hasOwnProperty('options_throttled'))
        obj.optionsThrottled = ThrottledScheduleOptions.constructFromObject(data['options_throttled']);
      if (data.hasOwnProperty('options_sto'))
        obj.optionsSto = STOScheduleOptions.constructFromObject(data['options_sto']);
    }
    return obj;
  }
}

/**
 * Describes the shape of the options object. Allowed values: ['static', 'throttled', 'immediate', 'smart_send_time']
 * @member {String} method
 */
SendStrategySubObject.prototype.method = undefined;

/**
 * @member {module:model/StaticScheduleOptions} optionsStatic
 */
SendStrategySubObject.prototype.optionsStatic = undefined;

/**
 * @member {module:model/ThrottledScheduleOptions} optionsThrottled
 */
SendStrategySubObject.prototype.optionsThrottled = undefined;

/**
 * @member {module:model/STOScheduleOptions} optionsSto
 */
SendStrategySubObject.prototype.optionsSto = undefined;

