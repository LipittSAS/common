import { MediaStepStatus } from "./media-step-status.enum";
import { MediaStepType } from "./media-step-type.enum";

export interface MediaStep {
    id: string;

    mediaId: string;

    type: MediaStepType;
    status: MediaStepStatus;

    retries: number;

    start: Date;
    end: Date;
  
    updatedAt: Date;
    createdAt: Date;
}