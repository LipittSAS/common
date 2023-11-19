import { MediaStep, MediaStepStatus } from "../../media";
export interface Usage {
    id: string;
    start?: Date;
    end?: Date;
    status?: MediaStepStatus;
    cuConsumed?: number;
    mediaStepId?: string;
    mediaStep?: MediaStep;
    createdAt?: Date;
    updatedAt?: Date;
}
