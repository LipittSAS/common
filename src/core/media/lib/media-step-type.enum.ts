export enum MediaStepType {
    splitAudioAndVideo = "split_audio_video",
    dissociateVoicesFromBackgroundNoise = "dissociate_voices_from_background",
    voicesAndTranscriptionsBySpeaker = "voices_and_transcriptions_by_speaker",
    fixTranscriptions = "fix_transcription",
    translateTranscriptions = "translate_transcription",
    cloneVoices = "clone_voices",
    generateVoices = "generate_voices",
    assembleAudio = 'assemble_audio',
    associateSpeakersToFaces = "associate_speakers_to_faces",
    syncLips = "lip_sync",
    assembleMedia = "assemble_media",
}