/**
 * Klaviyo API
 * The Klaviyo REST API. Please visit https://developers.klaviyo.com for more details.
 *
 * Contact: developers@klaviyo.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { AudiencesSubObject } from './audiencesSubObject';
import { CampaignResponseObjectResourceAttributesSendOptions } from './campaignResponseObjectResourceAttributesSendOptions';
import { CampaignResponseObjectResourceAttributesTrackingOptions } from './campaignResponseObjectResourceAttributesTrackingOptions';
import { SendStrategySubObject } from './sendStrategySubObject';

export class CampaignResponseObjectResourceAttributes {
    /**
    * The campaign name
    */
    'name': string;
    /**
    * The current status of the campaign
    */
    'status': string;
    /**
    * Whether the campaign has been archived or not
    */
    'archived': boolean;
    'audiences': AudiencesSubObject;
    'sendOptions': CampaignResponseObjectResourceAttributesSendOptions;
    'trackingOptions': CampaignResponseObjectResourceAttributesTrackingOptions;
    'sendStrategy': SendStrategySubObject;
    /**
    * The datetime when the campaign was created
    */
    'createdAt': Date;
    /**
    * The datetime when the campaign was scheduled for future sending
    */
    'scheduledAt': Date;
    /**
    * The datetime when the campaign was last updated by a user or the system
    */
    'updatedAt': Date;
    /**
    * The datetime when the campaign will be / was sent or None if not yet scheduled by a send_job.
    */
    'sendTime': Date;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string"
        },
        {
            "name": "archived",
            "baseName": "archived",
            "type": "boolean"
        },
        {
            "name": "audiences",
            "baseName": "audiences",
            "type": "AudiencesSubObject"
        },
        {
            "name": "sendOptions",
            "baseName": "send_options",
            "type": "CampaignResponseObjectResourceAttributesSendOptions"
        },
        {
            "name": "trackingOptions",
            "baseName": "tracking_options",
            "type": "CampaignResponseObjectResourceAttributesTrackingOptions"
        },
        {
            "name": "sendStrategy",
            "baseName": "send_strategy",
            "type": "SendStrategySubObject"
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "Date"
        },
        {
            "name": "scheduledAt",
            "baseName": "scheduled_at",
            "type": "Date"
        },
        {
            "name": "updatedAt",
            "baseName": "updated_at",
            "type": "Date"
        },
        {
            "name": "sendTime",
            "baseName": "send_time",
            "type": "Date"
        }    ];

    static getAttributeTypeMap() {
        return CampaignResponseObjectResourceAttributes.attributeTypeMap;
    }
}

