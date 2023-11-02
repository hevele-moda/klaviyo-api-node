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

export class ProfileLocation {
    /**
    * First line of street address
    */
    'address1'?: string;
    /**
    * Second line of street address
    */
    'address2'?: string;
    /**
    * City name
    */
    'city'?: string;
    /**
    * Country name
    */
    'country'?: string;
    /**
    * Latitude coordinate. We recommend providing a precision of four decimal places.
    */
    'latitude'?: string;
    /**
    * Longitude coordinate. We recommend providing a precision of four decimal places.
    */
    'longitude'?: string;
    /**
    * Region within a country, such as state or province
    */
    'region'?: string;
    /**
    * Zip code
    */
    'zip'?: string;
    /**
    * Time zone name. We recommend using time zones from the IANA Time Zone Database.
    */
    'timezone'?: string;
    /**
    * IP Address
    */
    'ip'?: string;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "address1",
            "baseName": "address1",
            "type": "string"
        },
        {
            "name": "address2",
            "baseName": "address2",
            "type": "string"
        },
        {
            "name": "city",
            "baseName": "city",
            "type": "string"
        },
        {
            "name": "country",
            "baseName": "country",
            "type": "string"
        },
        {
            "name": "latitude",
            "baseName": "latitude",
            "type": "string"
        },
        {
            "name": "longitude",
            "baseName": "longitude",
            "type": "string"
        },
        {
            "name": "region",
            "baseName": "region",
            "type": "string"
        },
        {
            "name": "zip",
            "baseName": "zip",
            "type": "string"
        },
        {
            "name": "timezone",
            "baseName": "timezone",
            "type": "string"
        },
        {
            "name": "ip",
            "baseName": "ip",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ProfileLocation.attributeTypeMap;
    }
}

