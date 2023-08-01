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
import { CatalogItemEnum } from './catalogItemEnum';
import { GetCatalogItemResponseCollectionCompoundDocumentDataInnerAllOfRelationships } from './getCatalogItemResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
import { ObjectLinks } from './objectLinks';
import { PatchCatalogItemResponseDataAttributes } from './patchCatalogItemResponseDataAttributes';

export class PatchCatalogItemResponseData {
    'relationships'?: GetCatalogItemResponseCollectionCompoundDocumentDataInnerAllOfRelationships;
    'attributes': PatchCatalogItemResponseDataAttributes;
    'type': CatalogItemEnum;
    /**
    * The catalog item ID is a compound ID (string), with format: `{integration}:::{catalog}:::{external_id}`. Currently, the only supported integration type is `$custom`, and the only supported catalog is `$default`.
    */
    'id': string;
    'links': ObjectLinks;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "relationships",
            "baseName": "relationships",
            "type": "GetCatalogItemResponseCollectionCompoundDocumentDataInnerAllOfRelationships"
        },
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "PatchCatalogItemResponseDataAttributes"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "CatalogItemEnum"
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
        return PatchCatalogItemResponseData.attributeTypeMap;
    }
}

export namespace PatchCatalogItemResponseData {
}
