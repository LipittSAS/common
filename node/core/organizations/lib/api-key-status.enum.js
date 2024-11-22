(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ApiKeyStatus = void 0;
    var ApiKeyStatus;
    (function (ApiKeyStatus) {
        ApiKeyStatus["active"] = "active";
        ApiKeyStatus["disabled"] = "disabled";
    })(ApiKeyStatus || (exports.ApiKeyStatus = ApiKeyStatus = {}));
    ;
});
//# sourceMappingURL=api-key-status.enum.js.map