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
    exports.TextReplacementMode = exports.MediaFlowType = void 0;
    var MediaFlowType;
    (function (MediaFlowType) {
        MediaFlowType["translation"] = "translation";
        MediaFlowType["translation_v2"] = "translation_v2";
        MediaFlowType["translation_no_lipsync"] = "translation_no_lipsync";
        MediaFlowType["translation_no_lipsync_v2"] = "translation_no_lipsync_v2";
        MediaFlowType["translation_caption"] = "translation_caption";
        MediaFlowType["translation_caption_no_lipsync"] = "translation_caption_no_lipsync";
        MediaFlowType["translation_with_check"] = "translation_check";
        MediaFlowType["translation_check_no_lipsync"] = "translation_check_no_lipsync";
    })(MediaFlowType || (exports.MediaFlowType = MediaFlowType = {}));
    var TextReplacementMode;
    (function (TextReplacementMode) {
        TextReplacementMode["technicalTerms"] = "technical_terms";
        TextReplacementMode["properNames"] = "proper_names";
    })(TextReplacementMode || (exports.TextReplacementMode = TextReplacementMode = {}));
});
//# sourceMappingURL=media.interface.js.map