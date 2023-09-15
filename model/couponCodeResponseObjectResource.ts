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
import { CouponCodeEnum } from './couponCodeEnum';
import { CouponCodeResponseObjectResourceAttributes } from './couponCodeResponseObjectResourceAttributes';
import { ObjectLinks } from './objectLinks';

export class CouponCodeResponseObjectResource {
    'type': CouponCodeEnum;
    /**
    * The id of a coupon code is a combination of its unique code and the id of the coupon it is associated with.
    */
    'id': string;
    'attributes': CouponCodeResponseObjectResourceAttributes;
    'links': ObjectLinks;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "CouponCodeEnum"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "CouponCodeResponseObjectResourceAttributes"
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "ObjectLinks"
        }    ];

    static getAttributeTypeMap() {
        return CouponCodeResponseObjectResource.attributeTypeMap;
    }
}

export namespace CouponCodeResponseObjectResource {
}
