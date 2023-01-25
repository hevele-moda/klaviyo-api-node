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
import {InlineResponse4XXSource} from './InlineResponse4XXSource.js';

/**
 * The InlineResponse4XXErrors model module.
 * @module model/InlineResponse4XXErrors
 * @version 2023-01-24
 */
export class InlineResponse4XXErrors {
  /**
   * Constructs a new <code>InlineResponse4XXErrors</code>.
   * @alias module:model/InlineResponse4XXErrors
   * @class
   * @param id {String} 
   * @param code {String} 
   * @param title {String} 
   * @param detail {String} 
   */
  constructor(id, code, title, detail) {
    this.id = id;
    this.code = code;
    this.title = title;
    this.detail = detail;
  }

  /**
   * Constructs a <code>InlineResponse4XXErrors</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse4XXErrors} obj Optional instance to populate.
   * @return {module:model/InlineResponse4XXErrors} The populated <code>InlineResponse4XXErrors</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new InlineResponse4XXErrors();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('code'))
        obj.code = ApiClient.convertToType(data['code'], 'String');
      if (data.hasOwnProperty('title'))
        obj.title = ApiClient.convertToType(data['title'], 'String');
      if (data.hasOwnProperty('detail'))
        obj.detail = ApiClient.convertToType(data['detail'], 'String');
      if (data.hasOwnProperty('source'))
        obj.source = InlineResponse4XXSource.constructFromObject(data['source']);
    }
    return obj;
  }
}

/**
 * @member {String} id
 */
InlineResponse4XXErrors.prototype.id = undefined;

/**
 * @member {String} code
 */
InlineResponse4XXErrors.prototype.code = undefined;

/**
 * @member {String} title
 */
InlineResponse4XXErrors.prototype.title = undefined;

/**
 * @member {String} detail
 */
InlineResponse4XXErrors.prototype.detail = undefined;

/**
 * @member {module:model/InlineResponse4XXSource} source
 */
InlineResponse4XXErrors.prototype.source = undefined;

