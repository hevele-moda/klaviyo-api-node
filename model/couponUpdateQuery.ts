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
import { CouponUpdateQueryResourceObject } from './couponUpdateQueryResourceObject';

export class CouponUpdateQuery {
    'data': CouponUpdateQueryResourceObject;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "CouponUpdateQueryResourceObject"
        }    ];

    static getAttributeTypeMap() {
        return CouponUpdateQuery.attributeTypeMap;
    }
}

