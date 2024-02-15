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
import { GetProfileResponseCompoundDocumentDataAllOfRelationshipsLists } from './getProfileResponseCompoundDocumentDataAllOfRelationshipsLists';
import { GetProfileResponseCompoundDocumentDataAllOfRelationshipsSegments } from './getProfileResponseCompoundDocumentDataAllOfRelationshipsSegments';
import { GetTagResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsTagGroup } from './getTagResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsTagGroup';
import { PostTagResponseDataRelationshipsCampaigns } from './postTagResponseDataRelationshipsCampaigns';
import { PostTagResponseDataRelationshipsFlows } from './postTagResponseDataRelationshipsFlows';

export class PostTagResponseDataRelationships {
    'tagGroup'?: GetTagResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsTagGroup;
    'lists'?: GetProfileResponseCompoundDocumentDataAllOfRelationshipsLists;
    'segments'?: GetProfileResponseCompoundDocumentDataAllOfRelationshipsSegments;
    'campaigns'?: PostTagResponseDataRelationshipsCampaigns;
    'flows'?: PostTagResponseDataRelationshipsFlows;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "tagGroup",
            "baseName": "tag-group",
            "type": "GetTagResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsTagGroup"
        },
        {
            "name": "lists",
            "baseName": "lists",
            "type": "GetProfileResponseCompoundDocumentDataAllOfRelationshipsLists"
        },
        {
            "name": "segments",
            "baseName": "segments",
            "type": "GetProfileResponseCompoundDocumentDataAllOfRelationshipsSegments"
        },
        {
            "name": "campaigns",
            "baseName": "campaigns",
            "type": "PostTagResponseDataRelationshipsCampaigns"
        },
        {
            "name": "flows",
            "baseName": "flows",
            "type": "PostTagResponseDataRelationshipsFlows"
        }    ];

    static getAttributeTypeMap() {
        return PostTagResponseDataRelationships.attributeTypeMap;
    }
}

