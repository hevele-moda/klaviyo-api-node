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
import {ProfileEnum} from './ProfileEnum.js';
import {ProfileSubscriptionCreateQueryResourceObjectAttributes} from './ProfileSubscriptionCreateQueryResourceObjectAttributes.js';

/**
 * The ProfileSubscriptionCreateQueryResourceObject model module.
 * @module model/ProfileSubscriptionCreateQueryResourceObject
 * @version 2023-07-15
 */
export class ProfileSubscriptionCreateQueryResourceObject {
  /**
   * Constructs a new <code>ProfileSubscriptionCreateQueryResourceObject</code>.
   * @alias module:model/ProfileSubscriptionCreateQueryResourceObject
   * @class
   * @param attributes {module:model/ProfileSubscriptionCreateQueryResourceObjectAttributes} 
   * @param type {module:model/ProfileEnum} 
   */
  constructor(attributes, type) {
    this.attributes = attributes;
    this.type = type;
  }

  /**
   * Constructs a <code>ProfileSubscriptionCreateQueryResourceObject</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProfileSubscriptionCreateQueryResourceObject} obj Optional instance to populate.
   * @return {module:model/ProfileSubscriptionCreateQueryResourceObject} The populated <code>ProfileSubscriptionCreateQueryResourceObject</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ProfileSubscriptionCreateQueryResourceObject();
      if (data.hasOwnProperty('attributes'))
        obj.attributes = ProfileSubscriptionCreateQueryResourceObjectAttributes.constructFromObject(data['attributes']);
      if (data.hasOwnProperty('type'))
        obj.type = ProfileEnum.constructFromObject(data['type']);
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
    }
    return obj;
  }
}

/**
 * @member {module:model/ProfileSubscriptionCreateQueryResourceObjectAttributes} attributes
 */
ProfileSubscriptionCreateQueryResourceObject.prototype.attributes = undefined;

/**
 * @member {module:model/ProfileEnum} type
 */
ProfileSubscriptionCreateQueryResourceObject.prototype.type = undefined;

/**
 * The ID of the profile to subscribe. If provided, this will be used to perform the lookup.
 * @member {String} id
 */
ProfileSubscriptionCreateQueryResourceObject.prototype.id = undefined;

