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
import { GetCampaignMessageResponseCompoundDocumentDataAllOfRelationshipsCampaign } from './getCampaignMessageResponseCompoundDocumentDataAllOfRelationshipsCampaign';
import { GetCampaignMessageResponseCompoundDocumentDataAllOfRelationshipsTemplate } from './getCampaignMessageResponseCompoundDocumentDataAllOfRelationshipsTemplate';

export class GetCampaignMessageResponseCompoundDocumentDataAllOfRelationships {
    'campaign'?: GetCampaignMessageResponseCompoundDocumentDataAllOfRelationshipsCampaign;
    'template'?: GetCampaignMessageResponseCompoundDocumentDataAllOfRelationshipsTemplate;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "campaign",
            "baseName": "campaign",
            "type": "GetCampaignMessageResponseCompoundDocumentDataAllOfRelationshipsCampaign"
        },
        {
            "name": "template",
            "baseName": "template",
            "type": "GetCampaignMessageResponseCompoundDocumentDataAllOfRelationshipsTemplate"
        }    ];

    static getAttributeTypeMap() {
        return GetCampaignMessageResponseCompoundDocumentDataAllOfRelationships.attributeTypeMap;
    }
}

