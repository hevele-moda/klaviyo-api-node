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
import { ProfileLocation } from './profileLocation';

export class OnsiteProfileCreateQueryResourceObjectAttributes {
    /**
    * Individual\'s email address
    */
    'email'?: string;
    /**
    * Individual\'s phone number in E.164 format
    */
    'phoneNumber'?: string;
    /**
    * A unique identifier used by customers to associate Klaviyo profiles with profiles in an external system, such as a point-of-sale system. Format varies based on the external system.
    */
    'externalId'?: string;
    'anonymousId'?: string;
    /**
    * Also known as the `exchange_id`, this is an encrypted identifier used for identifying a profile by Klaviyo\'s web tracking.  You can use this field as a filter when retrieving profiles via the Get Profiles endpoint.
    */
    'kx'?: string;
    /**
    * Individual\'s first name
    */
    'firstName'?: string;
    /**
    * Individual\'s last name
    */
    'lastName'?: string;
    /**
    * Name of the company or organization within the company for whom the individual works
    */
    'organization'?: string;
    /**
    * Individual\'s job title
    */
    'title'?: string;
    /**
    * URL pointing to the location of a profile image
    */
    'image'?: string;
    'location'?: ProfileLocation;
    /**
    * An object containing key/value pairs for any custom properties assigned to this profile
    */
    'properties'?: object;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "email",
            "baseName": "email",
            "type": "string"
        },
        {
            "name": "phoneNumber",
            "baseName": "phone_number",
            "type": "string"
        },
        {
            "name": "externalId",
            "baseName": "external_id",
            "type": "string"
        },
        {
            "name": "anonymousId",
            "baseName": "anonymous_id",
            "type": "string"
        },
        {
            "name": "kx",
            "baseName": "_kx",
            "type": "string"
        },
        {
            "name": "firstName",
            "baseName": "first_name",
            "type": "string"
        },
        {
            "name": "lastName",
            "baseName": "last_name",
            "type": "string"
        },
        {
            "name": "organization",
            "baseName": "organization",
            "type": "string"
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "string"
        },
        {
            "name": "image",
            "baseName": "image",
            "type": "string"
        },
        {
            "name": "location",
            "baseName": "location",
            "type": "ProfileLocation"
        },
        {
            "name": "properties",
            "baseName": "properties",
            "type": "object"
        }    ];

    static getAttributeTypeMap() {
        return OnsiteProfileCreateQueryResourceObjectAttributes.attributeTypeMap;
    }
}

