import { SupportedLanguages } from "../../../common";
import { User } from "../../user";
import { MediaStatus } from "./media-status.enum";
import { MediaStep } from "./media-step.interface";
export interface MediaTranscriptionSegmentWord {
    word: string;
    start: number;
    end: number;
    probability: number;
}
export interface MediaTranscriptionSegment {
    speaker: string;
    text: string;
    timestamp: number[];
    words: MediaTranscriptionSegmentWord[];
}
export interface MediaTranscription {
    speakers: MediaTranscriptionSegment[];
}
export type MediaTranscriptionUpdateType = Partial<MediaTranscription>;
export interface Media {
    id: string;
    name: string;
    originalSize: number;
    originalExt: string;
    status: MediaStatus;
    estimation: number;
    to: SupportedLanguages;
    plan?: string;
    start?: Date;
    end?: Date;
    ownerId: string;
    owner?: User;
    transcription: MediaTranscription;
    steps: MediaStep[];
    credits?: number;
    duration?: number;
    previewUrl?: string;
    updatedAt: Date;
    createdAt: Date;
}
export interface S3UploadTemporaryUrlRequest {
    size: number;
    duration: number;
    extension: string;
    mimeType: string;
}
export interface S3UploadTemporaryUrlResponse {
    key: string;
    url: string;
}
export interface CreateMediaRequest {
    name: string;
    target: SupportedLanguages;
    shouldLipSync: boolean;
    unverifiedMediaKey: string;
}
