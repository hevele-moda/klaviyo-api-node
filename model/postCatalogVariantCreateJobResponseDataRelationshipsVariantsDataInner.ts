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
import { CatalogVariantEnum } from './catalogVariantEnum';

export class PostCatalogVariantCreateJobResponseDataRelationshipsVariantsDataInner {
    'type': CatalogVariantEnum;
    'id': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "CatalogVariantEnum"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return PostCatalogVariantCreateJobResponseDataRelationshipsVariantsDataInner.attributeTypeMap;
    }
}

export namespace PostCatalogVariantCreateJobResponseDataRelationshipsVariantsDataInner {
}
