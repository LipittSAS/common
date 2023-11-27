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
    exports.StripeSubscriptionStatus = void 0;
    var StripeSubscriptionStatus;
    (function (StripeSubscriptionStatus) {
        StripeSubscriptionStatus["ongoing"] = "ongoing";
        StripeSubscriptionStatus["canceled"] = "canceled";
    })(StripeSubscriptionStatus || (exports.StripeSubscriptionStatus = StripeSubscriptionStatus = {}));
});
//# sourceMappingURL=stripe-subscription-status.enum.js.map