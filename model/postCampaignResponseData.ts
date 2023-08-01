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
import { CampaignEnum } from './campaignEnum';
import { CampaignResponseObjectResourceAttributes } from './campaignResponseObjectResourceAttributes';
import { ObjectLinks } from './objectLinks';
import { PostCampaignResponseDataRelationships } from './postCampaignResponseDataRelationships';

export class PostCampaignResponseData {
    'relationships'?: PostCampaignResponseDataRelationships;
    'attributes': CampaignResponseObjectResourceAttributes;
    'type': CampaignEnum;
    /**
    * The campaign ID
    */
    'id': string;
    'links': ObjectLinks;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "relationships",
            "baseName": "relationships",
            "type": "PostCampaignResponseDataRelationships"
        },
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "CampaignResponseObjectResourceAttributes"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "CampaignEnum"
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
        return PostCampaignResponseData.attributeTypeMap;
    }
}

export namespace PostCampaignResponseData {
}
