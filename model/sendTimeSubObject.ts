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

export class SendTimeSubObject {
    /**
    * The datetime that the message is to be sent
    */
    'datetime': Date;
    /**
    * Whether that datetime is to be a local datetime for the recipient
    */
    'isLocal': boolean;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "datetime",
            "baseName": "datetime",
            "type": "Date"
        },
        {
            "name": "isLocal",
            "baseName": "is_local",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return SendTimeSubObject.attributeTypeMap;
    }
}

