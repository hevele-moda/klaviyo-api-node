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
import { CampaignMessageEnum } from './campaignMessageEnum';
import { ObjectLinks } from './objectLinks';
import { PatchCampaignMessageResponseDataAttributes } from './patchCampaignMessageResponseDataAttributes';
import { PatchCampaignMessageResponseDataRelationships } from './patchCampaignMessageResponseDataRelationships';

export class PatchCampaignMessageResponseData {
    'relationships'?: PatchCampaignMessageResponseDataRelationships;
    'attributes': PatchCampaignMessageResponseDataAttributes;
    'type': CampaignMessageEnum;
    /**
    * The message ID
    */
    'id': string;
    'links': ObjectLinks;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "relationships",
            "baseName": "relationships",
            "type": "PatchCampaignMessageResponseDataRelationships"
        },
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "PatchCampaignMessageResponseDataAttributes"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "CampaignMessageEnum"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "ObjectLinks"
        }    ];

    static getAttributeTypeMap() {
        return PatchCampaignMessageResponseData.attributeTypeMap;
    }
}

export namespace PatchCampaignMessageResponseData {
}
