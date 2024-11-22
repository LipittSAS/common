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
        MediaStepType["detectFaces"] = "detect_faces";
        MediaStepType["diarization"] = "diarization";
        MediaStepType["registerGladia"] = "register_gladia";
        MediaStepType["webhookGladia"] = "webhook_gladia";
        MediaStepType["mergeGladia"] = "merge_gladia";
        MediaStepType["activeSpeakerDetection"] = "active_speaker_detection";
        MediaStepType["fixTranscriptions"] = "fix_transcription";
        MediaStepType["translateTranscriptions"] = "translate_transcription";
        MediaStepType["fixTranslatedTranscriptions"] = "fix_translated_transcription";
        MediaStepType["registerGladiaSubtitles"] = "register_gladia_subtitles";
        MediaStepType["webhookGladiaSubtitles"] = "webhook_gladia_subtitles";
        MediaStepType["mergeGladiaSubtitles"] = "merge_gladia_subtitles";
        MediaStepType["diarizationByTarget"] = "diarization_by_target";
        MediaStepType["addSubtitles"] = "add_subtitles";
        MediaStepType["textInpainting"] = "text_inpainting";
        MediaStepType["detectTexts"] = "detect_texts";
        MediaStepType["cloneVoices"] = "clone_voices";
        MediaStepType["generateVoices"] = "generate_voices";
        MediaStepType["assembleAudio"] = "assemble_audio";
        MediaStepType["syncLips"] = "lip_sync";
        MediaStepType["syncLabsLipSync"] = "sync_labs_lip_sync";
        MediaStepType["registerSynclabs"] = "register_synclabs";
        MediaStepType["webhookSynclabs"] = "webhook_synclabs";
        MediaStepType["mergeSynclabs"] = "merge_synclabs";
        MediaStepType["assembleMedia"] = "assemble_media";
    })(MediaStepType || (exports.MediaStepType = MediaStepType = {}));
});
//# sourceMappingURL=media-step-type.enum.js.map