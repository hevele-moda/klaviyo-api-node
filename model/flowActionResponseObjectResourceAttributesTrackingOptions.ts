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
import { EmailTrackingOptions } from './emailTrackingOptions';
import { SMSTrackingOptions } from './sMSTrackingOptions';
import { UtmParamInfo } from './utmParamInfo';

export class FlowActionResponseObjectResourceAttributesTrackingOptions {
    'isTrackingClicks': boolean;
    'utmParams': Array<UtmParamInfo>;
    'isTrackingOpens': boolean;
    'addUtm': boolean;

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
            "type": "Array<UtmParamInfo>"
        },
        {
            "name": "isTrackingOpens",
            "baseName": "is_tracking_opens",
            "type": "boolean"
        },
        {
            "name": "addUtm",
            "baseName": "add_utm",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return FlowActionResponseObjectResourceAttributesTrackingOptions.attributeTypeMap;
    }
}

