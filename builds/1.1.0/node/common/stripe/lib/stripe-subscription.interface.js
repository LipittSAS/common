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
    exports.StripeSubscription = void 0;
    class StripeSubscription {
    }
    exports.StripeSubscription = StripeSubscription;
});
//# sourceMappingURL=stripe-subscription.interface.js.map