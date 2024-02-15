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
import { CustomTimeframe } from './customTimeframe';
import { Timeframe } from './timeframe';

/**
* The timeframe to query for data within. The max length a timeframe can be is 1 year
*/
export class CampaignValuesRequestDTOResourceObjectAttributesTimeframe {
    /**
    * Pre-defined key that represents a set timeframe
    */
    'key': CampaignValuesRequestDTOResourceObjectAttributesTimeframe.KeyEnum | 'last_12_months' | 'last_30_days' | 'last_365_days' | 'last_3_months' | 'last_7_days' | 'last_90_days' | 'last_month' | 'last_week' | 'last_year' | 'this_month' | 'this_week' | 'this_year' | 'today' | 'yesterday';
    'start': Date;
    'end': Date;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "key",
            "baseName": "key",
            "type": "CampaignValuesRequestDTOResourceObjectAttributesTimeframe.KeyEnum"
        },
        {
            "name": "start",
            "baseName": "start",
            "type": "Date"
        },
        {
            "name": "end",
            "baseName": "end",
            "type": "Date"
        }    ];

    static getAttributeTypeMap() {
        return CampaignValuesRequestDTOResourceObjectAttributesTimeframe.attributeTypeMap;
    }
}

export namespace CampaignValuesRequestDTOResourceObjectAttributesTimeframe {
    export enum KeyEnum {
        Last12Months = <any> 'last_12_months',
        Last30Days = <any> 'last_30_days',
        Last365Days = <any> 'last_365_days',
        Last3Months = <any> 'last_3_months',
        Last7Days = <any> 'last_7_days',
        Last90Days = <any> 'last_90_days',
        LastMonth = <any> 'last_month',
        LastWeek = <any> 'last_week',
        LastYear = <any> 'last_year',
        ThisMonth = <any> 'this_month',
        ThisWeek = <any> 'this_week',
        ThisYear = <any> 'this_year',
        Today = <any> 'today',
        Yesterday = <any> 'yesterday'
    }
}
