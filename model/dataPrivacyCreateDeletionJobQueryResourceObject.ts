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
import { DataPrivacyCreateDeletionJobQueryResourceObjectAttributes } from './dataPrivacyCreateDeletionJobQueryResourceObjectAttributes';
import { DataPrivacyDeletionJobEnum } from './dataPrivacyDeletionJobEnum';

export class DataPrivacyCreateDeletionJobQueryResourceObject {
    'attributes': DataPrivacyCreateDeletionJobQueryResourceObjectAttributes;
    'type': DataPrivacyDeletionJobEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "DataPrivacyCreateDeletionJobQueryResourceObjectAttributes"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "DataPrivacyDeletionJobEnum"
        }    ];

    static getAttributeTypeMap() {
        return DataPrivacyCreateDeletionJobQueryResourceObject.attributeTypeMap;
    }
}

export namespace DataPrivacyCreateDeletionJobQueryResourceObject {
}
