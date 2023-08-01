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

export class SMSMarketing {
    /**
    * The consent status for SMS marketing.
    */
    'consent': string;
    /**
    * Additional details about the method which the profile was subscribed to SMS marketing. This may be empty if no details were provided.
    */
    'methodDetail': string;
    /**
    * The method by which the profile was subscribed to SMS marketing.
    */
    'method': string;
    /**
    * The timestamp when consent record or updated for SMS marketing, in ISO 8601 format (YYYY-MM-DDTHH:MM:SS.mmmmmm).
    */
    'timestamp': Date;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "consent",
            "baseName": "consent",
            "type": "string"
        },
        {
            "name": "methodDetail",
            "baseName": "method_detail",
            "type": "string"
        },
        {
            "name": "method",
            "baseName": "method",
            "type": "string"
        },
        {
            "name": "timestamp",
            "baseName": "timestamp",
            "type": "Date"
        }    ];

    static getAttributeTypeMap() {
        return SMSMarketing.attributeTypeMap;
    }
}

