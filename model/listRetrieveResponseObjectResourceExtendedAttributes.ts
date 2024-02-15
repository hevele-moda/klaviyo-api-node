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
import { ListRetrieveResponseObjectResourceAttributes } from './listRetrieveResponseObjectResourceAttributes';

export class ListRetrieveResponseObjectResourceExtendedAttributes extends ListRetrieveResponseObjectResourceAttributes {
    'profileCount'?: number;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "profileCount",
            "baseName": "profile_count",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ListRetrieveResponseObjectResourceExtendedAttributes.attributeTypeMap);
    }
}

export namespace ListRetrieveResponseObjectResourceExtendedAttributes {
}
