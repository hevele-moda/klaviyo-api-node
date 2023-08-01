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
import { EmailMessageContent } from './emailMessageContent';
import { SMSMessageContent } from './sMSMessageContent';

export class FlowMessageResponseObjectResourceAttributesContent {
    'previewText': string;
    'fromEmail': string;
    'fromLabel': string;
    'subject': string;
    'body': string;
    'mediaUrl'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "previewText",
            "baseName": "preview_text",
            "type": "string"
        },
        {
            "name": "fromEmail",
            "baseName": "from_email",
            "type": "string"
        },
        {
            "name": "fromLabel",
            "baseName": "from_label",
            "type": "string"
        },
        {
            "name": "subject",
            "baseName": "subject",
            "type": "string"
        },
        {
            "name": "body",
            "baseName": "body",
            "type": "string"
        },
        {
            "name": "mediaUrl",
            "baseName": "media_url",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return FlowMessageResponseObjectResourceAttributesContent.attributeTypeMap;
    }
}

