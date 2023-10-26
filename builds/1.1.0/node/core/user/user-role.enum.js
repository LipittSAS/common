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
    exports.UserRole = void 0;
    var UserRole;
    (function (UserRole) {
        UserRole["user"] = "user";
        UserRole["staff"] = "staff";
        UserRole["admin"] = "admin";
    })(UserRole || (exports.UserRole = UserRole = {}));
});
//# sourceMappingURL=user-role.enum.js.map