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
import { CatalogVariantCreateQueryResourceObject } from './catalogVariantCreateQueryResourceObject';

/**
* Array of catalog variants to create.
*/
export class CatalogVariantCreateJobCreateQueryResourceObjectAttributesVariants {
    'data': Array<CatalogVariantCreateQueryResourceObject>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<CatalogVariantCreateQueryResourceObject>"
        }    ];

    static getAttributeTypeMap() {
        return CatalogVariantCreateJobCreateQueryResourceObjectAttributesVariants.attributeTypeMap;
    }
}

