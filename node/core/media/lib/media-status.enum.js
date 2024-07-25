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
    exports.MediaStatus = void 0;
    var MediaStatus;
    (function (MediaStatus) {
        MediaStatus["uploaded"] = "uploaded";
        MediaStatus["awaitingProcessing"] = "awaiting_process";
        MediaStatus["processing"] = "processing";
        MediaStatus["ready"] = "ready";
        MediaStatus["downloaded"] = "downloaded";
        MediaStatus["stopped"] = "stopped";
        MediaStatus["error"] = "error";
        MediaStatus["partiallyFailed"] = "partially_failed";
    })(MediaStatus || (exports.MediaStatus = MediaStatus = {}));
});
//# sourceMappingURL=media-status.enum.js.map