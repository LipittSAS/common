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
    exports.UserState = void 0;
    var UserState;
    (function (UserState) {
        UserState["active"] = "active";
        UserState["inactive"] = "inactive";
    })(UserState || (exports.UserState = UserState = {}));
});
//# sourceMappingURL=user-state.enum.js.map