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
import { DataPrivacyProfileQueryResourceObjectAttributes } from './dataPrivacyProfileQueryResourceObjectAttributes';
import { ProfileEnum } from './profileEnum';

export class DataPrivacyProfileQueryResourceObject {
    'attributes': DataPrivacyProfileQueryResourceObjectAttributes;
    'type': ProfileEnum;
    /**
    * Primary key that uniquely identifies this profile. Generated by Klaviyo.
    */
    'id'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "DataPrivacyProfileQueryResourceObjectAttributes"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "ProfileEnum"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return DataPrivacyProfileQueryResourceObject.attributeTypeMap;
    }
}

export namespace DataPrivacyProfileQueryResourceObject {
}
