import { SupportedLanguages } from "../../../common";
import { User } from "../../user";
import { MediaStatus } from "./media-status.enum";
import { MediaStep } from "./media-step.interface";

export interface Media {
  id: string;

  name: string;

  originalSize: number;
  originalExt: string;

  status: MediaStatus;

  estimation: number;

  to: SupportedLanguages;

  start: Date;
  end: Date;

  ownerId: string;
  owner?: User;

  transcription?: { 
    speakers: { 
      speaker: string, 
      nickname?: string,
      timestamp: number[], 
      text: string,
      words: {
        word: string,
        start: number,
        end: number,
        probability: number
      }[]
    }[] 
  };

  steps: MediaStep[];

  credits?: number;
  duration?: number;

  previewUrl?: string;

  updatedAt: Date;
  createdAt: Date;
}

export interface CreateMediaRequest {
  name: string;
  target: SupportedLanguages;
}
