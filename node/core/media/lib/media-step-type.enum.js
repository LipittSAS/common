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
        MediaStepType["splitAudioAndVideo"] = "split_audio_video";
        MediaStepType["dissociateVoicesFromBackgroundNoise"] = "dissociate_voices_from_background";
        MediaStepType["voicesAndTranscriptionsBySpeaker"] = "voices_and_transcriptions_by_speaker";
        MediaStepType["fixTranscriptions"] = "fix_transcription";
        MediaStepType["translateTranscriptions"] = "translate_transcription";
        MediaStepType["fixTranslatedTranscriptions"] = "fix_translated_transcription";
        MediaStepType["diarizationByTarget"] = "diarization_by_target";
        MediaStepType["addSubtitles"] = "add_subtitles";
        MediaStepType["cloneVoices"] = "clone_voices";
        MediaStepType["generateVoices"] = "generate_voices";
        MediaStepType["assembleAudio"] = "assemble_audio";
        MediaStepType["associateSpeakersToFaces"] = "associate_speakers_to_faces";
        MediaStepType["syncLips"] = "lip_sync";
        MediaStepType["syncLabsLipSync"] = "sync_labs_lip_sync";
        MediaStepType["assembleMedia"] = "assemble_media";
    })(MediaStepType || (exports.MediaStepType = MediaStepType = {}));
});
//# sourceMappingURL=media-step-type.enum.js.map