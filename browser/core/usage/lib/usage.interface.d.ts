import { MediaStep } from "../../media";
export interface Usage {
    id: string;
    start?: Date;
    end?: Date;
    status?: string;
    cuConsumed?: number;
    mediaStepId?: string;
    mediaStep?: MediaStep;
    createdAt?: Date;
    updatedAt?: Date;
}
