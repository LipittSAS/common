(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "tslib", "./user-role.enum", "./user-state.enum", "./user.interface"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const tslib_1 = require("tslib");
    tslib_1.__exportStar(require("./user-role.enum"), exports);
    tslib_1.__exportStar(require("./user-state.enum"), exports);
    tslib_1.__exportStar(require("./user.interface"), exports);
});
//# sourceMappingURL=index.js.map