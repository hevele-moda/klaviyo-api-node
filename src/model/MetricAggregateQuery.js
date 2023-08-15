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
import {MetricAggregateQueryResourceObject} from './MetricAggregateQueryResourceObject.js';

/**
 * The MetricAggregateQuery model module.
 * @module model/MetricAggregateQuery
 * @version 2023-08-15
 */
export class MetricAggregateQuery {
  /**
   * Constructs a new <code>MetricAggregateQuery</code>.
   * @alias module:model/MetricAggregateQuery
   * @class
   * @param data {module:model/MetricAggregateQueryResourceObject} 
   */
  constructor(data) {
    this.data = data;
  }

  /**
   * Constructs a <code>MetricAggregateQuery</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MetricAggregateQuery} obj Optional instance to populate.
   * @return {module:model/MetricAggregateQuery} The populated <code>MetricAggregateQuery</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MetricAggregateQuery();
      if (data.hasOwnProperty('data'))
        obj.data = MetricAggregateQueryResourceObject.constructFromObject(data['data']);
    }
    return obj;
  }
}

/**
 * @member {module:model/MetricAggregateQueryResourceObject} data
 */
MetricAggregateQuery.prototype.data = undefined;

