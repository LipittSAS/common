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
    exports.MediaStepStatus = void 0;
    var MediaStepStatus;
    (function (MediaStepStatus) {
        MediaStepStatus["awaiting"] = "awaiting";
        MediaStepStatus["processing"] = "processing";
        MediaStepStatus["error"] = "error";
        MediaStepStatus["done"] = "done";
    })(MediaStepStatus || (exports.MediaStepStatus = MediaStepStatus = {}));
});
//# sourceMappingURL=media-step-status.enum.js.map