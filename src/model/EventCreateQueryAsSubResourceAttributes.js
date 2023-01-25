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
import {MetricCreateQuery} from './MetricCreateQuery.js';

/**
 * The EventCreateQueryAsSubResourceAttributes model module.
 * @module model/EventCreateQueryAsSubResourceAttributes
 * @version 2023-01-24
 */
export class EventCreateQueryAsSubResourceAttributes {
  /**
   * Constructs a new <code>EventCreateQueryAsSubResourceAttributes</code>.
   * @alias module:model/EventCreateQueryAsSubResourceAttributes
   * @class
   * @param profile {Object}  Properties of the profile that triggered this event. The profile must contain an identifier. The $email and/or $phone_number can be used as the identify the profile. Other key value pairs can be used to create segments. For example, to create a list of people on trial plans, include a profile's plan type in the profile. The profile supports special fields. The fields include: $email (string), $first_name (string), $last_name (string), $phone_number (string), $city (string), $region (string; state or other region), $country (string), $zip (string), $image (string; url to a photo of a person), and $consent (list of strings; eg: ['sms', 'email', 'web', 'directmail', 'mobile']). 
   * @param metric {module:model/MetricCreateQuery} 
   * @param properties {Object}   Properties of this event. Any top level property (that are not objects) can be used to create segments. The $extra property is a special property. This records any non-segmentable values that can be references later. For example, HTML templates are useful on a segment, but itself is not used in creating a segment. There are limits placed onto the size of the data present. This must not exceed 5 MB. This must not exceed 300 event properties. A single string cannot be larger than 100 KB. Each array must not exceed 4000 elements. The properties cannot contain more than 10 nested levels. 
   */
  constructor(profile, metric, properties) {
    this.profile = profile;
    this.metric = metric;
    this.properties = properties;
  }

  /**
   * Constructs a <code>EventCreateQueryAsSubResourceAttributes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EventCreateQueryAsSubResourceAttributes} obj Optional instance to populate.
   * @return {module:model/EventCreateQueryAsSubResourceAttributes} The populated <code>EventCreateQueryAsSubResourceAttributes</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new EventCreateQueryAsSubResourceAttributes();
      if (data.hasOwnProperty('profile'))
        obj.profile = ApiClient.convertToType(data['profile'], Object);
      if (data.hasOwnProperty('metric'))
        obj.metric = MetricCreateQuery.constructFromObject(data['metric']);
      if (data.hasOwnProperty('properties'))
        obj.properties = ApiClient.convertToType(data['properties'], Object);
      if (data.hasOwnProperty('time'))
        obj.time = ApiClient.convertToType(data['time'], 'Date');
      if (data.hasOwnProperty('value'))
        obj.value = ApiClient.convertToType(data['value'], 'Number');
      if (data.hasOwnProperty('unique_id'))
        obj.uniqueId = ApiClient.convertToType(data['unique_id'], 'String');
    }
    return obj;
  }
}

/**
 *  Properties of the profile that triggered this event. The profile must contain an identifier. The $email and/or $phone_number can be used as the identify the profile. Other key value pairs can be used to create segments. For example, to create a list of people on trial plans, include a profile's plan type in the profile. The profile supports special fields. The fields include: $email (string), $first_name (string), $last_name (string), $phone_number (string), $city (string), $region (string; state or other region), $country (string), $zip (string), $image (string; url to a photo of a person), and $consent (list of strings; eg: ['sms', 'email', 'web', 'directmail', 'mobile']). 
 * @member {Object} profile
 */
EventCreateQueryAsSubResourceAttributes.prototype.profile = undefined;

/**
 * @member {module:model/MetricCreateQuery} metric
 */
EventCreateQueryAsSubResourceAttributes.prototype.metric = undefined;

/**
 *   Properties of this event. Any top level property (that are not objects) can be used to create segments. The $extra property is a special property. This records any non-segmentable values that can be references later. For example, HTML templates are useful on a segment, but itself is not used in creating a segment. There are limits placed onto the size of the data present. This must not exceed 5 MB. This must not exceed 300 event properties. A single string cannot be larger than 100 KB. Each array must not exceed 4000 elements. The properties cannot contain more than 10 nested levels. 
 * @member {Object} properties
 */
EventCreateQueryAsSubResourceAttributes.prototype.properties = undefined;

/**
 *  When this event occurred. By default, the time the request was received will be used. The time is truncated to the second. The time must be after the year 2000 and can only be up to 1 year in the future. 
 * @member {Date} time
 */
EventCreateQueryAsSubResourceAttributes.prototype.time = undefined;

/**
 * A numeric value to associate with this event. For example, the dollar amount of a purchase.
 * @member {Number} value
 */
EventCreateQueryAsSubResourceAttributes.prototype.value = undefined;

/**
 *  A unique identifier for an event. If the unique_id is repeated for the same profile and metric, only the first processed event will be recorded. If this is not present, this will use the time to the second. Using the default, this limits only one event per profile per second. 
 * @member {String} uniqueId
 */
EventCreateQueryAsSubResourceAttributes.prototype.uniqueId = undefined;

