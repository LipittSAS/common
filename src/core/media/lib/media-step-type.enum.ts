export enum MediaStepType {
    splitAudioAndVideo = "split_audio_video",
    dissociateVoicesFromBackgroundNoise = "dissociate_voices_from_background",
    detectFaces = "detect_faces",
    diarization = "diarization",
    activeSpeakerDetection = "active_speaker_detection",
    fixTranscriptions = "fix_transcription",
    translateTranscriptions = "translate_transcription",
    fixTranslatedTranscriptions = "fix_translated_transcription",
    diarizationByTarget = "diarization_by_target",
    addSubtitles = "add_subtitles",
    cloneVoices = "clone_voices",
    generateVoices = "generate_voices",
    assembleAudio = 'assemble_audio',
    syncLips = "lip_sync",
    syncLabsLipSync = "sync_labs_lip_sync",
    assembleMedia = "assemble_media",
}

