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
import { ObjectLinks } from './objectLinks';
import { SegmentEnum } from './segmentEnum';
import { SegmentResponseObjectResourceAttributes } from './segmentResponseObjectResourceAttributes';

export class SegmentResponseObjectResource {
    'attributes': SegmentResponseObjectResourceAttributes;
    'type': SegmentEnum;
    'id': string;
    'links': ObjectLinks;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "SegmentResponseObjectResourceAttributes"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "SegmentEnum"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "ObjectLinks"
        }    ];

    static getAttributeTypeMap() {
        return SegmentResponseObjectResource.attributeTypeMap;
    }
}

export namespace SegmentResponseObjectResource {
}
