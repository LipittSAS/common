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
    exports.MediaType = exports.TextReplacementMode = exports.MediaFlowType = void 0;
    var MediaFlowType;
    (function (MediaFlowType) {
        MediaFlowType["translation"] = "translation";
        MediaFlowType["voiceIsolation"] = "voice_isolation";
        MediaFlowType["getSubtitles"] = "get_subtitles";
        MediaFlowType["subtitlesTranslation"] = "subtitlesTranslation";
        MediaFlowType["removeSubtitles"] = "remove_subtitles";
    })(MediaFlowType || (exports.MediaFlowType = MediaFlowType = {}));
    var TextReplacementMode;
    (function (TextReplacementMode) {
        TextReplacementMode["technicalTerms"] = "technical_terms";
        TextReplacementMode["properNames"] = "proper_names";
    })(TextReplacementMode || (exports.TextReplacementMode = TextReplacementMode = {}));
    var MediaType;
    (function (MediaType) {
        MediaType["audio"] = "audio";
        MediaType["video"] = "video";
        MediaType["text"] = "text";
    })(MediaType || (exports.MediaType = MediaType = {}));
});
//# sourceMappingURL=media.interface.js.map