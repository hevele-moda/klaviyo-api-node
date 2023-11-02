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
import { CollectionLinks } from './collectionLinks';
import { GetCatalogCategoryCreateJobResponseCollectionCompoundDocumentDataInner } from './getCatalogCategoryCreateJobResponseCollectionCompoundDocumentDataInner';

export class GetCatalogCategoryCreateJobResponseCollectionCompoundDocument {
    'data': Array<GetCatalogCategoryCreateJobResponseCollectionCompoundDocumentDataInner>;
    'links': CollectionLinks;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<GetCatalogCategoryCreateJobResponseCollectionCompoundDocumentDataInner>"
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "CollectionLinks"
        }    ];

    static getAttributeTypeMap() {
        return GetCatalogCategoryCreateJobResponseCollectionCompoundDocument.attributeTypeMap;
    }
}

