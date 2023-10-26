(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "tslib", "./http", "./stripe", "./errors", "./utils"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const tslib_1 = require("tslib");
    tslib_1.__exportStar(require("./http"), exports);
    tslib_1.__exportStar(require("./stripe"), exports);
    tslib_1.__exportStar(require("./errors"), exports);
    tslib_1.__exportStar(require("./utils"), exports);
});
//# sourceMappingURL=index.js.map