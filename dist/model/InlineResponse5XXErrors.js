"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InlineResponse5XXErrors = void 0;
var _ApiClient = require("../ApiClient.js");
var _InlineResponse5XXSource = require("./InlineResponse5XXSource.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /*
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
/**
 * The InlineResponse5XXErrors model module.
 * @module model/InlineResponse5XXErrors
 * @version 2023-07-15
 */
var InlineResponse5XXErrors = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse5XXErrors</code>.
   * @alias module:model/InlineResponse5XXErrors
   * @class
   * @param detail {String} 
   * @param code {String} 
   * @param id {String} 
   * @param title {String} 
   */
  function InlineResponse5XXErrors(detail, code, id, title) {
    _classCallCheck(this, InlineResponse5XXErrors);
    this.detail = detail;
    this.code = code;
    this.id = id;
    this.title = title;
  }

  /**
   * Constructs a <code>InlineResponse5XXErrors</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse5XXErrors} obj Optional instance to populate.
   * @return {module:model/InlineResponse5XXErrors} The populated <code>InlineResponse5XXErrors</code> instance.
   */
  _createClass(InlineResponse5XXErrors, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse5XXErrors();
        if (data.hasOwnProperty('source')) obj.source = _InlineResponse5XXSource.InlineResponse5XXSource.constructFromObject(data['source']);
        if (data.hasOwnProperty('detail')) obj.detail = _ApiClient.ApiClient.convertToType(data['detail'], 'String');
        if (data.hasOwnProperty('code')) obj.code = _ApiClient.ApiClient.convertToType(data['code'], 'String');
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
        if (data.hasOwnProperty('title')) obj.title = _ApiClient.ApiClient.convertToType(data['title'], 'String');
      }
      return obj;
    }
  }]);
  return InlineResponse5XXErrors;
}();
/**
 * @member {module:model/InlineResponse5XXSource} source
 */
exports.InlineResponse5XXErrors = InlineResponse5XXErrors;
InlineResponse5XXErrors.prototype.source = undefined;

/**
 * @member {String} detail
 */
InlineResponse5XXErrors.prototype.detail = undefined;

/**
 * @member {String} code
 */
InlineResponse5XXErrors.prototype.code = undefined;

/**
 * @member {String} id
 */
InlineResponse5XXErrors.prototype.id = undefined;

/**
 * @member {String} title
 */
InlineResponse5XXErrors.prototype.title = undefined;