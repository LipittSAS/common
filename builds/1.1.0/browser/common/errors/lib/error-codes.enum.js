export var ErrorCode;
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
})(ErrorCode || (ErrorCode = {}));
//# sourceMappingURL=error-codes.enum.js.map