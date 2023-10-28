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

    steps: MediaStep[];
  
    updatedAt: Date;
    createdAt: Date;
}

export interface CreateMediaRequest {
    name: string;
    target: SupportedLanguages;
}