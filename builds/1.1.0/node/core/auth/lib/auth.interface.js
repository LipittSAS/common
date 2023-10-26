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
    exports.RefreshTokenRequest = exports.VerifyRequest = exports.RegisterRequest = void 0;
    class RegisterRequest {
    }
    exports.RegisterRequest = RegisterRequest;
    class VerifyRequest {
    }
    exports.VerifyRequest = VerifyRequest;
    class RefreshTokenRequest {
    }
    exports.RefreshTokenRequest = RefreshTokenRequest;
});
//# sourceMappingURL=auth.interface.js.map