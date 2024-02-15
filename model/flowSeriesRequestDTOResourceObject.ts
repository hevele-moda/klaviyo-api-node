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
import { FlowSeriesReportEnum } from './flowSeriesReportEnum';
import { FlowSeriesRequestDTOResourceObjectAttributes } from './flowSeriesRequestDTOResourceObjectAttributes';

export class FlowSeriesRequestDTOResourceObject {
    'type': FlowSeriesReportEnum | 'flow-series-report';
    'attributes': FlowSeriesRequestDTOResourceObjectAttributes;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "FlowSeriesReportEnum"
        },
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "FlowSeriesRequestDTOResourceObjectAttributes"
        }    ];

    static getAttributeTypeMap() {
        return FlowSeriesRequestDTOResourceObject.attributeTypeMap;
    }
}

export namespace FlowSeriesRequestDTOResourceObject {
}
