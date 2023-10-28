import { User } from "../../user";
import { MediaStatus } from "./media-status.enum";
import { MediaStep } from "./media-step.interface";
export interface Media {
    id: string;
    name: string;
    originalSize: number;
    originalName: string;
    status: MediaStatus;
    estimation: number;
    to: string;
    includeSubtitles: boolean;
    start: Date;
    end: Date;
    ownerId: string;
    owner?: User;
    steps: MediaStep[];
    updatedAt: Date;
    createdAt: Date;
}
export interface CreateMediaRequest {
    name: string;
    target: string;
    includeSubTitles: boolean;
}
