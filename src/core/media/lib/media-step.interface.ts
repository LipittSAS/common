import { MediaStepStatus } from "./media-step-status.enum";
import { MediaStepType } from "./media-step-type.enum";

export interface MediaStep {
    id: string;

    mediaId: string;

    order: number;

    type: MediaStepType;
    status: MediaStepStatus;

    retries: number;

    start: Date;
    end: Date;

    failure?: string
  
    updatedAt: Date;
    createdAt: Date;
}