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
    exports.QueryParam = void 0;
    var QueryParam;
    (function (QueryParam) {
        QueryParam["code"] = "code";
        QueryParam["redirectUrl"] = "redirect-url";
        QueryParam["take"] = "take";
        QueryParam["skip"] = "skip";
        QueryParam["filters"] = "filters";
    })(QueryParam || (exports.QueryParam = QueryParam = {}));
});
//# sourceMappingURL=query-param.enum.js.map