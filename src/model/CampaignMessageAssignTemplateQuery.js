/*
 * Klaviyo API
 * The Klaviyo REST API. Please visit https://developers.klaviyo.com for more details.
 *
 * OpenAPI spec version: 2023-02-22
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
import {CampaignMessageAssignTemplateQueryResourceObject} from './CampaignMessageAssignTemplateQueryResourceObject.js';

/**
 * The CampaignMessageAssignTemplateQuery model module.
 * @module model/CampaignMessageAssignTemplateQuery
 * @version 2023-02-22
 */
export class CampaignMessageAssignTemplateQuery {
  /**
   * Constructs a new <code>CampaignMessageAssignTemplateQuery</code>.
   * @alias module:model/CampaignMessageAssignTemplateQuery
   * @class
   * @param data {module:model/CampaignMessageAssignTemplateQueryResourceObject} 
   */
  constructor(data) {
    this.data = data;
  }

  /**
   * Constructs a <code>CampaignMessageAssignTemplateQuery</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CampaignMessageAssignTemplateQuery} obj Optional instance to populate.
   * @return {module:model/CampaignMessageAssignTemplateQuery} The populated <code>CampaignMessageAssignTemplateQuery</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CampaignMessageAssignTemplateQuery();
      if (data.hasOwnProperty('data'))
        obj.data = CampaignMessageAssignTemplateQueryResourceObject.constructFromObject(data['data']);
    }
    return obj;
  }
}

/**
 * @member {module:model/CampaignMessageAssignTemplateQueryResourceObject} data
 */
CampaignMessageAssignTemplateQuery.prototype.data = undefined;

