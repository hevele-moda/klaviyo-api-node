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

export class AudiencesSubObject {
    /**
    * A list of included audiences
    */
    'included'?: Array<string>;
    /**
    * An optional list of excluded audiences
    */
    'excluded'?: Array<string>;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "included",
            "baseName": "included",
            "type": "Array<string>"
        },
        {
            "name": "excluded",
            "baseName": "excluded",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return AudiencesSubObject.attributeTypeMap;
    }
}

