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

/**
 * The CampaignSendJobPartialUpdateQueryResourceObjectAttributes model module.
 * @module model/CampaignSendJobPartialUpdateQueryResourceObjectAttributes
 * @version 2023-08-15
 */
export class CampaignSendJobPartialUpdateQueryResourceObjectAttributes {
  /**
   * Constructs a new <code>CampaignSendJobPartialUpdateQueryResourceObjectAttributes</code>.
   * @alias module:model/CampaignSendJobPartialUpdateQueryResourceObjectAttributes
   * @class
   * @param action {String} The action you would like to take with this send job from among 'cancel' and 'revert'
   */
  constructor(action) {
    this.action = action;
  }

  /**
   * Constructs a <code>CampaignSendJobPartialUpdateQueryResourceObjectAttributes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CampaignSendJobPartialUpdateQueryResourceObjectAttributes} obj Optional instance to populate.
   * @return {module:model/CampaignSendJobPartialUpdateQueryResourceObjectAttributes} The populated <code>CampaignSendJobPartialUpdateQueryResourceObjectAttributes</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CampaignSendJobPartialUpdateQueryResourceObjectAttributes();
      if (data.hasOwnProperty('action'))
        obj.action = ApiClient.convertToType(data['action'], 'String');
    }
    return obj;
  }
}

/**
 * The action you would like to take with this send job from among 'cancel' and 'revert'
 * @member {String} action
 */
CampaignSendJobPartialUpdateQueryResourceObjectAttributes.prototype.action = undefined;

