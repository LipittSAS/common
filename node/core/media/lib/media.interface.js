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
    exports.MediaFlowType = void 0;
    var MediaFlowType;
    (function (MediaFlowType) {
        MediaFlowType["translation"] = "translation";
        MediaFlowType["translation_no_lipsync"] = "translation_no_lipsync";
    })(MediaFlowType || (exports.MediaFlowType = MediaFlowType = {}));
});
//# sourceMappingURL=media.interface.js.map