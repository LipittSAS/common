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
    exports.MediaStepType = void 0;
    var MediaStepType;
    (function (MediaStepType) {
        MediaStepType["splitAudioAndVideo"] = "split_audio_and_video";
        MediaStepType["dissociateVoicesFromBackgroundNoise"] = "dissociate_voices_from_background_noise";
        MediaStepType["convertAudioToSubtitles"] = "convert_audio_to_subtitles";
        MediaStepType["translateSubtitles"] = "translate_subtitles";
        MediaStepType["cloneVoices"] = "clone_voices";
        MediaStepType["translateVoices"] = "translate_voices";
        MediaStepType["stretchVoices"] = "stretch_voices";
        MediaStepType["detectFaces"] = "detect_faces";
        MediaStepType["associateSpeakersToFaces"] = "associate_speakers_to_faces";
        MediaStepType["syncLips"] = "sync_lips";
        MediaStepType["upgradeQuality"] = "upgrade_quality";
    })(MediaStepType || (exports.MediaStepType = MediaStepType = {}));
});
//# sourceMappingURL=media-step-type.enum.js.map