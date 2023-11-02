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
import { StreetAddress } from './streetAddress';

export class ContactInformation {
    /**
    * This field is used to auto-populate the default sender name on flow and campaign emails.
    */
    'defaultSenderName': string;
    /**
    * This field is used to auto-populate the default sender email address on flow and campaign emails.
    */
    'defaultSenderEmail': string;
    'websiteUrl': string;
    'organizationName': string;
    'streetAddress': StreetAddress;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "defaultSenderName",
            "baseName": "default_sender_name",
            "type": "string"
        },
        {
            "name": "defaultSenderEmail",
            "baseName": "default_sender_email",
            "type": "string"
        },
        {
            "name": "websiteUrl",
            "baseName": "website_url",
            "type": "string"
        },
        {
            "name": "organizationName",
            "baseName": "organization_name",
            "type": "string"
        },
        {
            "name": "streetAddress",
            "baseName": "street_address",
            "type": "StreetAddress"
        }    ];

    static getAttributeTypeMap() {
        return ContactInformation.attributeTypeMap;
    }
}

