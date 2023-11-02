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
import { ObjectLinks } from './objectLinks';
import { TemplateEnum } from './templateEnum';
import { TemplateResponseObjectResourceAttributes } from './templateResponseObjectResourceAttributes';

export class TemplateResponseObjectResource {
    'type': TemplateEnum | 'template';
    /**
    * The ID of template
    */
    'id': string;
    'attributes': TemplateResponseObjectResourceAttributes;
    'links': ObjectLinks;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "TemplateEnum"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "TemplateResponseObjectResourceAttributes"
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "ObjectLinks"
        }    ];

    static getAttributeTypeMap() {
        return TemplateResponseObjectResource.attributeTypeMap;
    }
}

export namespace TemplateResponseObjectResource {
}
