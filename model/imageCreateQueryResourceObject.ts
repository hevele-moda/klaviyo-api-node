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
import { ImageCreateQueryResourceObjectAttributes } from './imageCreateQueryResourceObjectAttributes';
import { ImageEnum } from './imageEnum';

export class ImageCreateQueryResourceObject {
    'type': ImageEnum;
    'attributes': ImageCreateQueryResourceObjectAttributes;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "ImageEnum"
        },
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "ImageCreateQueryResourceObjectAttributes"
        }    ];

    static getAttributeTypeMap() {
        return ImageCreateQueryResourceObject.attributeTypeMap;
    }
}

export namespace ImageCreateQueryResourceObject {
}
