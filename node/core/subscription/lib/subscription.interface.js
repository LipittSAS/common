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
    exports.SubscriptionPlan = void 0;
    var SubscriptionPlan;
    (function (SubscriptionPlan) {
        SubscriptionPlan["premium"] = "premium";
        SubscriptionPlan["master"] = "master";
        SubscriptionPlan["entreprise"] = "enterprise";
        SubscriptionPlan["custom"] = "custom";
    })(SubscriptionPlan || (exports.SubscriptionPlan = SubscriptionPlan = {}));
});
//# sourceMappingURL=subscription.interface.js.map