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
import { CatalogCategoryEnum } from './catalogCategoryEnum';
import { CatalogCategoryUpdateQueryResourceObjectAttributes } from './catalogCategoryUpdateQueryResourceObjectAttributes';
import { CatalogCategoryUpdateQueryResourceObjectRelationships } from './catalogCategoryUpdateQueryResourceObjectRelationships';

export class CatalogCategoryUpdateQueryResourceObject {
    'relationships'?: CatalogCategoryUpdateQueryResourceObjectRelationships;
    'attributes': CatalogCategoryUpdateQueryResourceObjectAttributes;
    'type': CatalogCategoryEnum;
    /**
    * The catalog category ID is a compound ID (string), with format: `{integration}:::{catalog}:::{external_id}`. Currently, the only supported integration type is `$custom`, and the only supported catalog is `$default`.
    */
    'id': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "relationships",
            "baseName": "relationships",
            "type": "CatalogCategoryUpdateQueryResourceObjectRelationships"
        },
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "CatalogCategoryUpdateQueryResourceObjectAttributes"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "CatalogCategoryEnum"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CatalogCategoryUpdateQueryResourceObject.attributeTypeMap;
    }
}

export namespace CatalogCategoryUpdateQueryResourceObject {
}
