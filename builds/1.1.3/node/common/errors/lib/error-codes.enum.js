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
    exports.ErrorCode = void 0;
    var ErrorCode;
    (function (ErrorCode) {
        ErrorCode["redisError"] = "REDIS_ERROR";
        ErrorCode["dbError"] = "DB_ERROR";
        ErrorCode["stripeError"] = "STRIPE_ERROR";
        ErrorCode["invalidAuthCode"] = "INVALID_AUTH_CODE";
        ErrorCode["invalidTokenType"] = "INVALID_TOKEN_TYPE";
        ErrorCode["userNotFound"] = "USER_NOT_FOUND";
        ErrorCode["tokenRevoked"] = "TOKEN_REVOKED";
        ErrorCode["unknownCoreError"] = "UNKNOWN_CORE_ERROR";
        ErrorCode["onlyOwner"] = "ONLY_OWNER";
    })(ErrorCode || (exports.ErrorCode = ErrorCode = {}));
});
//# sourceMappingURL=error-codes.enum.js.map