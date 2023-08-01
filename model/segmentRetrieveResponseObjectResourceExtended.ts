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
import { SegmentRetrieveResponseObjectResourceExtendedAttributes } from './segmentRetrieveResponseObjectResourceExtendedAttributes';

export class SegmentRetrieveResponseObjectResourceExtended {
    'attributes': SegmentRetrieveResponseObjectResourceExtendedAttributes;
    'type': SegmentEnum;
    'id': string;
    'links': ObjectLinks;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "SegmentRetrieveResponseObjectResourceExtendedAttributes"
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
        return SegmentRetrieveResponseObjectResourceExtended.attributeTypeMap;
    }
}

export namespace SegmentRetrieveResponseObjectResourceExtended {
}
