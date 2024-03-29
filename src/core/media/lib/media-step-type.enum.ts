export enum MediaStepType {
    splitAudioAndVideo = "split_audio_and_video",
    dissociateVoicesFromBackgroundNoise = "dissociate_voices_from_background_noise",
    voicesAndTranscriptionsBySpeaker = "voices_and_transcriptions_by_speaker",
    fixTranscriptions = "fix_transcriptions",
    translateTranscriptions = "translate_transcriptions",
    cloneVoices = "clone_voices",
    generateTranslatedVoices = "generate_translated_voices",
    assembleAudio = 'assemble_audio',
    associateSpeakersToFaces = "associate_speakers_to_faces",
    syncLips = "sync_lips",
    assembleMedia = "assemble_media",
    blend_lip_sync = "blend_lip_sync"
}