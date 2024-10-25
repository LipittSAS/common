import { SupportedLanguages } from "src/common";
import { MediaStepStatus } from "./media-step-status.enum";
import { MediaStepType } from "./media-step-type.enum";
export interface MediaStep {
    id: string;
    mediaId: string;
    order: number;
    type: MediaStepType;
    status: MediaStepStatus;
    errorCode?: string;
    retries: number;
    target?: SupportedLanguages;
    start?: Date;
    end?: Date;
    failure?: string;
    updatedAt: Date;
    createdAt: Date;
}
