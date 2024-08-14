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
    exports.StripeSubscriptionRecurring = void 0;
    var StripeSubscriptionRecurring;
    (function (StripeSubscriptionRecurring) {
        StripeSubscriptionRecurring["monthly"] = "month";
        StripeSubscriptionRecurring["yearly"] = "year";
    })(StripeSubscriptionRecurring || (exports.StripeSubscriptionRecurring = StripeSubscriptionRecurring = {}));
});
//# sourceMappingURL=stripe-subscription-recurring.enum.js.map