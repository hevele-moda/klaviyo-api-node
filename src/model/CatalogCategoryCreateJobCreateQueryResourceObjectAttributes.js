/*
 * Klaviyo API
 * The Klaviyo REST API. Please visit https://developers.klaviyo.com for more details.
 *
 * OpenAPI spec version: 2023-08-15
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
import {CatalogCategoryCreateJobCreateQueryResourceObjectAttributesCategories} from './CatalogCategoryCreateJobCreateQueryResourceObjectAttributesCategories.js';

/**
 * The CatalogCategoryCreateJobCreateQueryResourceObjectAttributes model module.
 * @module model/CatalogCategoryCreateJobCreateQueryResourceObjectAttributes
 * @version 2023-08-15
 */
export class CatalogCategoryCreateJobCreateQueryResourceObjectAttributes {
  /**
   * Constructs a new <code>CatalogCategoryCreateJobCreateQueryResourceObjectAttributes</code>.
   * @alias module:model/CatalogCategoryCreateJobCreateQueryResourceObjectAttributes
   * @class
   * @param categories {module:model/CatalogCategoryCreateJobCreateQueryResourceObjectAttributesCategories} 
   */
  constructor(categories) {
    this.categories = categories;
  }

  /**
   * Constructs a <code>CatalogCategoryCreateJobCreateQueryResourceObjectAttributes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CatalogCategoryCreateJobCreateQueryResourceObjectAttributes} obj Optional instance to populate.
   * @return {module:model/CatalogCategoryCreateJobCreateQueryResourceObjectAttributes} The populated <code>CatalogCategoryCreateJobCreateQueryResourceObjectAttributes</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CatalogCategoryCreateJobCreateQueryResourceObjectAttributes();
      if (data.hasOwnProperty('categories'))
        obj.categories = CatalogCategoryCreateJobCreateQueryResourceObjectAttributesCategories.constructFromObject(data['categories']);
    }
    return obj;
  }
}

/**
 * @member {module:model/CatalogCategoryCreateJobCreateQueryResourceObjectAttributesCategories} categories
 */
CatalogCategoryCreateJobCreateQueryResourceObjectAttributes.prototype.categories = undefined;

