/**
 * Klaviyo API
 * The Klaviyo REST API. Please visit https://developers.klaviyo.com for more details.
 *
 * The version of the OpenAPI document: 2023-07-15
 * Contact: developers@klaviyo.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { PatchCampaignMessageResponseDataAttributesContent } from './patchCampaignMessageResponseDataAttributesContent';
import { RenderOptionsSubObject } from './renderOptionsSubObject';
import { SendTimeSubObject } from './sendTimeSubObject';

export class PatchCampaignMessageResponseDataAttributes {
    'renderOptions'?: RenderOptionsSubObject;
    /**
    * The list of appropriate Send Time Sub-objects associated with the message
    */
    'sendTimes'?: Array<SendTimeSubObject>;
    /**
    * The datetime when the message was created
    */
    'createdAt'?: Date;
    /**
    * The datetime when the message was last updated
    */
    'updatedAt'?: Date;
    /**
    * The label or name on the message
    */
    'label': string;
    'content': PatchCampaignMessageResponseDataAttributesContent;
    /**
    * The channel the message is to be sent on
    */
    'channel': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "renderOptions",
            "baseName": "render_options",
            "type": "RenderOptionsSubObject"
        },
        {
            "name": "sendTimes",
            "baseName": "send_times",
            "type": "Array<SendTimeSubObject>"
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "Date"
        },
        {
            "name": "updatedAt",
            "baseName": "updated_at",
            "type": "Date"
        },
        {
            "name": "label",
            "baseName": "label",
            "type": "string"
        },
        {
            "name": "content",
            "baseName": "content",
            "type": "PatchCampaignMessageResponseDataAttributesContent"
        },
        {
            "name": "channel",
            "baseName": "channel",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return PatchCampaignMessageResponseDataAttributes.attributeTypeMap;
    }
}

