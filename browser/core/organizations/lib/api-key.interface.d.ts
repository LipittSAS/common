import { ApiKeyStatus } from "./api-key-status.enum";
export type ApiKey = {
    id: string;
    name: string;
    firstChars: string;
    lastChars: string;
    hash: string;
    createdAt: string;
    status: ApiKeyStatus;
};
