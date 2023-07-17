/*
 * Klaviyo API
 * The Klaviyo REST API. Please visit https://developers.klaviyo.com for more details.
 *
 * OpenAPI spec version: 2023-07-15
 * Contact: developers@klaviyo.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.41
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from '../ApiClient.js';
import {CatalogVariantUpdateJobCreateQueryResourceObjectAttributesVariants} from './CatalogVariantUpdateJobCreateQueryResourceObjectAttributesVariants.js';

/**
 * The CatalogVariantUpdateJobCreateQueryResourceObjectAttributes model module.
 * @module model/CatalogVariantUpdateJobCreateQueryResourceObjectAttributes
 * @version 2023-07-15
 */
export class CatalogVariantUpdateJobCreateQueryResourceObjectAttributes {
  /**
   * Constructs a new <code>CatalogVariantUpdateJobCreateQueryResourceObjectAttributes</code>.
   * @alias module:model/CatalogVariantUpdateJobCreateQueryResourceObjectAttributes
   * @class
   * @param variants {module:model/CatalogVariantUpdateJobCreateQueryResourceObjectAttributesVariants} 
   */
  constructor(variants) {
    this.variants = variants;
  }

  /**
   * Constructs a <code>CatalogVariantUpdateJobCreateQueryResourceObjectAttributes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CatalogVariantUpdateJobCreateQueryResourceObjectAttributes} obj Optional instance to populate.
   * @return {module:model/CatalogVariantUpdateJobCreateQueryResourceObjectAttributes} The populated <code>CatalogVariantUpdateJobCreateQueryResourceObjectAttributes</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CatalogVariantUpdateJobCreateQueryResourceObjectAttributes();
      if (data.hasOwnProperty('variants'))
        obj.variants = CatalogVariantUpdateJobCreateQueryResourceObjectAttributesVariants.constructFromObject(data['variants']);
    }
    return obj;
  }
}

/**
 * @member {module:model/CatalogVariantUpdateJobCreateQueryResourceObjectAttributesVariants} variants
 */
CatalogVariantUpdateJobCreateQueryResourceObjectAttributes.prototype.variants = undefined;

