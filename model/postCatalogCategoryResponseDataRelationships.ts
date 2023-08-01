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
import { PostCatalogCategoryResponseDataRelationshipsItems } from './postCatalogCategoryResponseDataRelationshipsItems';

export class PostCatalogCategoryResponseDataRelationships {
    'items'?: PostCatalogCategoryResponseDataRelationshipsItems;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "items",
            "baseName": "items",
            "type": "PostCatalogCategoryResponseDataRelationshipsItems"
        }    ];

    static getAttributeTypeMap() {
        return PostCatalogCategoryResponseDataRelationships.attributeTypeMap;
    }
}

