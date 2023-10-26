import { MediaStatus } from "./media-status.enum";
import { MediaStep } from "./media-step.interface";

export interface Media {
    id: string;

    name: string;

    originalSize: string;
    originalName: string;

    status: MediaStatus;

    estimation: number;

    to: string;

    includeSubtitles: boolean;

    start: Date;
    end: Date;

    steps: MediaStep[];
  
    updatedAt: Date;
    createdAt: Date;
}

export interface CreateMediaRequest {
    name: string;
    target: string;
    includeSubTitles: string;
}