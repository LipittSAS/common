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
  selectedFaces?: string[];
  faces?: string[];
  words: MediaTranscriptionSegmentWord[];
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

  transcription: MediaTranscription


  steps: MediaStep[];

  credits?: number;
  duration?: number;

  previewUrl?: string;

  updatedAt: Date;
  createdAt: Date;
}

export enum MediaFlowType {
  translation = 'translation',
  translation_v2 = 'translation_v2',
  translation_no_lipsync = 'translation_no_lipsync',
  translation_no_lipsync_v2 = 'translation_no_lipsync_v2',
  translation_caption = 'translation_caption',
  translation_caption_no_lipsync = 'translation_caption_no_lipsync',
  translation_with_check  = 'translation_check',
  translation_check_no_lipsync  = 'translation_check_no_lipsync',
}

export interface S3UploadTemporaryUrlRequest {
  size: number,
  duration: number,
  extension: string,
  mimeType: string,
}

export interface S3UploadTemporaryUrlResponse {
  key: string, 
  url: string
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
  unverifiedMediaKey: string;
  withCaptions: boolean;
  checkTranslation: boolean
}


