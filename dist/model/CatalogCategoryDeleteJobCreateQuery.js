"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CatalogCategoryDeleteJobCreateQuery = void 0;
var _ApiClient = require("../ApiClient.js");
var _CatalogCategoryDeleteJobCreateQueryResourceObject = require("./CatalogCategoryDeleteJobCreateQueryResourceObject.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /*
                                                                                                                                                                                                                                                                                                                                                                                               * Klaviyo API
                                                                                                                                                                                                                                                                                                                                                                                               * The Klaviyo REST API. Please visit https://developers.klaviyo.com for more details.
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               * OpenAPI spec version: 2023-02-22
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
/**
 * The CatalogCategoryDeleteJobCreateQuery model module.
 * @module model/CatalogCategoryDeleteJobCreateQuery
 * @version 2023-02-22
 */
var CatalogCategoryDeleteJobCreateQuery = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CatalogCategoryDeleteJobCreateQuery</code>.
   * @alias module:model/CatalogCategoryDeleteJobCreateQuery
   * @class
   * @param data {module:model/CatalogCategoryDeleteJobCreateQueryResourceObject} 
   */
  function CatalogCategoryDeleteJobCreateQuery(data) {
    _classCallCheck(this, CatalogCategoryDeleteJobCreateQuery);
    this.data = data;
  }

  /**
   * Constructs a <code>CatalogCategoryDeleteJobCreateQuery</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CatalogCategoryDeleteJobCreateQuery} obj Optional instance to populate.
   * @return {module:model/CatalogCategoryDeleteJobCreateQuery} The populated <code>CatalogCategoryDeleteJobCreateQuery</code> instance.
   */
  _createClass(CatalogCategoryDeleteJobCreateQuery, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CatalogCategoryDeleteJobCreateQuery();
        if (data.hasOwnProperty('data')) obj.data = _CatalogCategoryDeleteJobCreateQueryResourceObject.CatalogCategoryDeleteJobCreateQueryResourceObject.constructFromObject(data['data']);
      }
      return obj;
    }
  }]);
  return CatalogCategoryDeleteJobCreateQuery;
}();
/**
 * @member {module:model/CatalogCategoryDeleteJobCreateQueryResourceObject} data
 */
exports.CatalogCategoryDeleteJobCreateQuery = CatalogCategoryDeleteJobCreateQuery;
CatalogCategoryDeleteJobCreateQuery.prototype.data = undefined;