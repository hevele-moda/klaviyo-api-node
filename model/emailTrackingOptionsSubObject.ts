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
import { UTMParamsSubObject } from './uTMParamsSubObject';

export class EmailTrackingOptionsSubObject {
    /**
    * Whether the campaign is tracking click events. If not specified, uses company defaults.
    */
    'isTrackingClicks'?: boolean;
    /**
    * A list of UTM parameters. If an empty list is given and is_add_utm is True, uses company defaults.
    */
    'utmParams'?: Array<UTMParamsSubObject>;
    /**
    * Whether the campaign is tracking open events. If not specified, uses company defaults.
    */
    'isTrackingOpens'?: boolean;
    /**
    * Whether the campaign needs UTM parameters. If set to False, UTM params will not be used.
    */
    'isAddUtm'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "isTrackingClicks",
            "baseName": "is_tracking_clicks",
            "type": "boolean"
        },
        {
            "name": "utmParams",
            "baseName": "utm_params",
            "type": "Array<UTMParamsSubObject>"
        },
        {
            "name": "isTrackingOpens",
            "baseName": "is_tracking_opens",
            "type": "boolean"
        },
        {
            "name": "isAddUtm",
            "baseName": "is_add_utm",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return EmailTrackingOptionsSubObject.attributeTypeMap;
    }
}

