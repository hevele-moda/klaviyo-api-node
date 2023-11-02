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
import { CatalogItemBulkDeleteJobEnum } from './catalogItemBulkDeleteJobEnum';
import { CouponCodeCreateJobResponseObjectResourceAttributes } from './couponCodeCreateJobResponseObjectResourceAttributes';
import { ObjectLinks } from './objectLinks';

export class CatalogItemDeleteJobResponseObjectResource {
    'type': CatalogItemBulkDeleteJobEnum | 'catalog-item-bulk-delete-job';
    'attributes': CouponCodeCreateJobResponseObjectResourceAttributes;
    'links': ObjectLinks;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "CatalogItemBulkDeleteJobEnum"
        },
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "CouponCodeCreateJobResponseObjectResourceAttributes"
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "ObjectLinks"
        }    ];

    static getAttributeTypeMap() {
        return CatalogItemDeleteJobResponseObjectResource.attributeTypeMap;
    }
}

export namespace CatalogItemDeleteJobResponseObjectResource {
}
