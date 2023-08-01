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
import { GetFlowResponseCompoundDocumentDataAllOfRelationshipsTagsDataInner } from './getFlowResponseCompoundDocumentDataAllOfRelationshipsTagsDataInner';

export class GetFlowTagRelationshipListResponseCollection {
    'data': Array<GetFlowResponseCompoundDocumentDataAllOfRelationshipsTagsDataInner>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<GetFlowResponseCompoundDocumentDataAllOfRelationshipsTagsDataInner>"
        }    ];

    static getAttributeTypeMap() {
        return GetFlowTagRelationshipListResponseCollection.attributeTypeMap;
    }
}

