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
  id: string;
  speaker: string;
  text: string;
  timestamp: number[];
  selectedFaces?: string[];
  faces?: string[];
  words: MediaTranscriptionSegmentWord[];
  ignore?: boolean;
}

export interface MediaTranscription {
  speakers: MediaTranscriptionSegment[];
  listOfSpeakers: string[];
}

export type MediaTranscriptionUpdateType = Partial<MediaTranscription>;


export interface Media {
  id: string;

  name: string;

  originalSize: number;
  originalExt: string;

  status: MediaStatus;

  estimation: number;
  srcLanguage?: SupportedLanguages;

  to: SupportedLanguages;
  plan?: string;

  start?: Date;
  end?: Date;
  flowType: MediaFlowType;

  ownerId: string;
  owner?: User;

  specific_content: {
    transcription?: MediaTranscription,
    translation?: {
        [key: string]: MediaTranscription;
    }
  }


  steps: MediaStep[];

  credits?: number;
  duration?: number;

  previewUrl?: string;

  updatedAt: Date;
  createdAt: Date;
}

export enum MediaFlowType {
  translation = 'translation',
  voiceIsolation='voice_isolation',
  getSubtitles= 'get_subtitles',
  removeSubtitles= 'remove_subtitles',
}

export interface S3MediaUploadTemporaryUrlRequest {
  size: number,
  duration: number,
  extension: string,
  mimeType: string,
}

export interface S3UploadTemporaryUrlResponse {
  key: string, 
  path: string,
  uploadId?: string;
  urls: string[]
}

export enum TextReplacementMode {
  technicalTerms = 'technical_terms',
  properNames = 'proper_names'
}

export interface CreateMediaRequest {
  name: string;
  sourceLanguage?: SupportedLanguages;
  nbrOfSpeakers?: number;
  targets: SupportedLanguages[];
  shouldLipSync: boolean;
  unverifiedMediaKey?: string;
  extension?: string;
  withCaptions: boolean;
  checkTranslation: boolean;
  transcription?: {
    speakers: {
      speaker: string;
      text: string;
      timestamp: number[];
      words: { word: string; start: number; end: number; probability: number; }[];
    }[];
    listOfSpeakers: string[]
  }
  mediaType?: 'audio' | 'video'
  srt?: string;
}


export interface MultipartUploadRequest {
  mediaPath: string;
  uploadId: string;
  parts: { ETag: string; PartNumber: number }[];
}


