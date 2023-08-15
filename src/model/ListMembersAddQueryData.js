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
import {ProfileEnum} from './ProfileEnum.js';

/**
 * The ListMembersAddQueryData model module.
 * @module model/ListMembersAddQueryData
 * @version 2023-08-15
 */
export class ListMembersAddQueryData {
  /**
   * Constructs a new <code>ListMembersAddQueryData</code>.
   * @alias module:model/ListMembersAddQueryData
   * @class
   * @param type {module:model/ProfileEnum} 
   * @param id {String} 
   */
  constructor(type, id) {
    this.type = type;
    this.id = id;
  }

  /**
   * Constructs a <code>ListMembersAddQueryData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ListMembersAddQueryData} obj Optional instance to populate.
   * @return {module:model/ListMembersAddQueryData} The populated <code>ListMembersAddQueryData</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ListMembersAddQueryData();
      if (data.hasOwnProperty('type'))
        obj.type = ProfileEnum.constructFromObject(data['type']);
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
    }
    return obj;
  }
}

/**
 * @member {module:model/ProfileEnum} type
 */
ListMembersAddQueryData.prototype.type = undefined;

/**
 * @member {String} id
 */
ListMembersAddQueryData.prototype.id = undefined;

