// export enum StripeSubscriptionStatus {
//   ongoing = 'ongoing',
//   canceled = 'canceled',
// }
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
        StripeSubscriptionStatus["Trialing"] = "trialing";
        StripeSubscriptionStatus["Active"] = "active";
        StripeSubscriptionStatus["PastDue"] = "past_due";
        StripeSubscriptionStatus["Canceled"] = "canceled";
        StripeSubscriptionStatus["Unpaid"] = "unpaid";
        StripeSubscriptionStatus["Incomplete"] = "incomplete";
        StripeSubscriptionStatus["IncompleteExpired"] = "incomplete_expired";
    })(StripeSubscriptionStatus || (exports.StripeSubscriptionStatus = StripeSubscriptionStatus = {}));
});
//# sourceMappingURL=stripe-subscription-status.enum.js.map