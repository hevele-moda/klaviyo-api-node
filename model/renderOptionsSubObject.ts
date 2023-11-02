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

export class RenderOptionsSubObject {
    'shortenLinks'?: boolean = true;
    'addOrgPrefix'?: boolean = true;
    'addInfoLink'?: boolean = true;
    'addOptOutLanguage'?: boolean = false;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "shortenLinks",
            "baseName": "shorten_links",
            "type": "boolean"
        },
        {
            "name": "addOrgPrefix",
            "baseName": "add_org_prefix",
            "type": "boolean"
        },
        {
            "name": "addInfoLink",
            "baseName": "add_info_link",
            "type": "boolean"
        },
        {
            "name": "addOptOutLanguage",
            "baseName": "add_opt_out_language",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return RenderOptionsSubObject.attributeTypeMap;
    }
}

