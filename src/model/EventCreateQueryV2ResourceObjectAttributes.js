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
import {EventCreateQueryV2ResourceObjectAttributesMetric} from './EventCreateQueryV2ResourceObjectAttributesMetric.js';
import {EventCreateQueryV2ResourceObjectAttributesProfile} from './EventCreateQueryV2ResourceObjectAttributesProfile.js';

/**
 * The EventCreateQueryV2ResourceObjectAttributes model module.
 * @module model/EventCreateQueryV2ResourceObjectAttributes
 * @version 2023-08-15
 */
export class EventCreateQueryV2ResourceObjectAttributes {
  /**
   * Constructs a new <code>EventCreateQueryV2ResourceObjectAttributes</code>.
   * @alias module:model/EventCreateQueryV2ResourceObjectAttributes
   * @class
   * @param properties {Object} Properties of this event. Any top level property (that are not objects) can be used to create segments. The $extra property is a special property. This records any non-segmentable values that can be references later. For example, HTML templates are useful on a segment, but itself is not used in creating a segment. There are limits placed onto the size of the data present. This must not exceed 5 MB. This must not exceed 300 event properties. A single string cannot be larger than 100 KB. Each array must not exceed 4000 elements. The properties cannot contain more than 10 nested levels.
   * @param metric {module:model/EventCreateQueryV2ResourceObjectAttributesMetric} 
   * @param profile {module:model/EventCreateQueryV2ResourceObjectAttributesProfile} 
   */
  constructor(properties, metric, profile) {
    this.properties = properties;
    this.metric = metric;
    this.profile = profile;
  }

  /**
   * Constructs a <code>EventCreateQueryV2ResourceObjectAttributes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EventCreateQueryV2ResourceObjectAttributes} obj Optional instance to populate.
   * @return {module:model/EventCreateQueryV2ResourceObjectAttributes} The populated <code>EventCreateQueryV2ResourceObjectAttributes</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new EventCreateQueryV2ResourceObjectAttributes();
      if (data.hasOwnProperty('properties'))
        obj.properties = ApiClient.convertToType(data['properties'], Object);
      if (data.hasOwnProperty('time'))
        obj.time = ApiClient.convertToType(data['time'], 'Date');
      if (data.hasOwnProperty('value'))
        obj.value = ApiClient.convertToType(data['value'], 'Number');
      if (data.hasOwnProperty('unique_id'))
        obj.uniqueId = ApiClient.convertToType(data['unique_id'], 'String');
      if (data.hasOwnProperty('metric'))
        obj.metric = EventCreateQueryV2ResourceObjectAttributesMetric.constructFromObject(data['metric']);
      if (data.hasOwnProperty('profile'))
        obj.profile = EventCreateQueryV2ResourceObjectAttributesProfile.constructFromObject(data['profile']);
    }
    return obj;
  }
}

/**
 * Properties of this event. Any top level property (that are not objects) can be used to create segments. The $extra property is a special property. This records any non-segmentable values that can be references later. For example, HTML templates are useful on a segment, but itself is not used in creating a segment. There are limits placed onto the size of the data present. This must not exceed 5 MB. This must not exceed 300 event properties. A single string cannot be larger than 100 KB. Each array must not exceed 4000 elements. The properties cannot contain more than 10 nested levels.
 * @member {Object} properties
 */
EventCreateQueryV2ResourceObjectAttributes.prototype.properties = undefined;

/**
 * When this event occurred. By default, the time the request was received will be used. The time is truncated to the second. The time must be after the year 2000 and can only be up to 1 year in the future.
 * @member {Date} time
 */
EventCreateQueryV2ResourceObjectAttributes.prototype.time = undefined;

/**
 * A numeric value to associate with this event. For example, the dollar amount of a purchase.
 * @member {Number} value
 */
EventCreateQueryV2ResourceObjectAttributes.prototype.value = undefined;

/**
 * A unique identifier for an event. If the unique_id is repeated for the same profile and metric, only the first processed event will be recorded. If this is not present, this will use the time to the second. Using the default, this limits only one event per profile per second.
 * @member {String} uniqueId
 */
EventCreateQueryV2ResourceObjectAttributes.prototype.uniqueId = undefined;

/**
 * @member {module:model/EventCreateQueryV2ResourceObjectAttributesMetric} metric
 */
EventCreateQueryV2ResourceObjectAttributes.prototype.metric = undefined;

/**
 * @member {module:model/EventCreateQueryV2ResourceObjectAttributesProfile} profile
 */
EventCreateQueryV2ResourceObjectAttributes.prototype.profile = undefined;

