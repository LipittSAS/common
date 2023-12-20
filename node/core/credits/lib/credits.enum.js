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
    exports.CreditsStatus = void 0;
    var CreditsStatus;
    (function (CreditsStatus) {
        CreditsStatus["active"] = "active";
        CreditsStatus["ended"] = "ended";
        CreditsStatus["scheduled"] = "scheduled";
    })(CreditsStatus || (exports.CreditsStatus = CreditsStatus = {}));
});
//# sourceMappingURL=credits.enum.js.map