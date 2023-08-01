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
import { CatalogItemBulkCreateJobEnum } from './catalogItemBulkCreateJobEnum';
import { CatalogVariantUpdateJobResponseObjectResourceAttributes } from './catalogVariantUpdateJobResponseObjectResourceAttributes';
import { ObjectLinks } from './objectLinks';

export class CatalogItemCreateJobResponseObjectResource {
    'attributes': CatalogVariantUpdateJobResponseObjectResourceAttributes;
    'type': CatalogItemBulkCreateJobEnum;
    'links': ObjectLinks;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "CatalogVariantUpdateJobResponseObjectResourceAttributes"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "CatalogItemBulkCreateJobEnum"
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "ObjectLinks"
        }    ];

    static getAttributeTypeMap() {
        return CatalogItemCreateJobResponseObjectResource.attributeTypeMap;
    }
}

export namespace CatalogItemCreateJobResponseObjectResource {
}
