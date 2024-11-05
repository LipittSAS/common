(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "tslib", "./lib/stream.interface", "./lib/stream-group.interace", "./lib/stream-state.enum"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const tslib_1 = require("tslib");
    tslib_1.__exportStar(require("./lib/stream.interface"), exports);
    tslib_1.__exportStar(require("./lib/stream-group.interace"), exports);
    tslib_1.__exportStar(require("./lib/stream-state.enum"), exports);
});
//# sourceMappingURL=index.js.map