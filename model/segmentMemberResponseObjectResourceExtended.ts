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
import { ProfileEnum } from './profileEnum';
import { SegmentMemberResponseObjectResourceExtendedAttributes } from './segmentMemberResponseObjectResourceExtendedAttributes';

export class SegmentMemberResponseObjectResourceExtended {
    'type': ProfileEnum | 'profile';
    /**
    * Primary key that uniquely identifies this profile. Generated by Klaviyo.
    */
    'id'?: string;
    'attributes': SegmentMemberResponseObjectResourceExtendedAttributes;
    'links': ObjectLinks;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "ProfileEnum"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "SegmentMemberResponseObjectResourceExtendedAttributes"
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "ObjectLinks"
        }    ];

    static getAttributeTypeMap() {
        return SegmentMemberResponseObjectResourceExtended.attributeTypeMap;
    }
}

export namespace SegmentMemberResponseObjectResourceExtended {
}
