(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "tslib", "./lib/media.interface", "./lib/media-status.enum", "./lib/media-step.interface", "./lib/media-step-status.enum", "./lib/media-step-type.enum"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const tslib_1 = require("tslib");
    tslib_1.__exportStar(require("./lib/media.interface"), exports);
    tslib_1.__exportStar(require("./lib/media-status.enum"), exports);
    tslib_1.__exportStar(require("./lib/media-step.interface"), exports);
    tslib_1.__exportStar(require("./lib/media-step-status.enum"), exports);
    tslib_1.__exportStar(require("./lib/media-step-type.enum"), exports);
});
//# sourceMappingURL=index.js.map