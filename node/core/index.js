(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "tslib", "./auth", "./user", "./media", "./subscription", "./usage", "./credits", "./organizations", "./streams"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const tslib_1 = require("tslib");
    tslib_1.__exportStar(require("./auth"), exports);
    tslib_1.__exportStar(require("./user"), exports);
    tslib_1.__exportStar(require("./media"), exports);
    tslib_1.__exportStar(require("./subscription"), exports);
    tslib_1.__exportStar(require("./usage"), exports);
    tslib_1.__exportStar(require("./credits"), exports);
    tslib_1.__exportStar(require("./organizations"), exports);
    tslib_1.__exportStar(require("./streams"), exports);
});
//# sourceMappingURL=index.js.map