(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "tslib", "./lib/stripe-subscription.interface", "./lib/stripe-prices.interface", "./lib/enums/stripe-subscription-recurring.enum", "./lib/enums/stripe-subscription-status.enum"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const tslib_1 = require("tslib");
    tslib_1.__exportStar(require("./lib/stripe-subscription.interface"), exports);
    tslib_1.__exportStar(require("./lib/stripe-prices.interface"), exports);
    tslib_1.__exportStar(require("./lib/enums/stripe-subscription-recurring.enum"), exports);
    tslib_1.__exportStar(require("./lib/enums/stripe-subscription-status.enum"), exports);
});
//# sourceMappingURL=index.js.map