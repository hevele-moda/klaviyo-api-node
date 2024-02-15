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
import { ListEnum } from './listEnum';
import { ListListResponseObjectResourceAttributes } from './listListResponseObjectResourceAttributes';
import { ObjectLinks } from './objectLinks';
import { PostListCreateResponseDataRelationships } from './postListCreateResponseDataRelationships';

export class PostListCreateResponseData {
    'type': ListEnum | 'list';
    /**
    * Primary key that uniquely identifies this list. Generated by Klaviyo.
    */
    'id': string;
    'attributes': ListListResponseObjectResourceAttributes;
    'relationships'?: PostListCreateResponseDataRelationships;
    'links': ObjectLinks;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "ListEnum"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "ListListResponseObjectResourceAttributes"
        },
        {
            "name": "relationships",
            "baseName": "relationships",
            "type": "PostListCreateResponseDataRelationships"
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "ObjectLinks"
        }    ];

    static getAttributeTypeMap() {
        return PostListCreateResponseData.attributeTypeMap;
    }
}

export namespace PostListCreateResponseData {
}
