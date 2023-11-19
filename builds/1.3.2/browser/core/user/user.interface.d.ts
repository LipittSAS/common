import { UserRole } from "./user-role.enum";
import { UserState } from "./user-state.enum";
export interface User {
    id: string;
    email: string;
    state: UserState;
    role: UserRole;
    mfa: boolean;
    firstName?: string;
    lastName?: string;
    avatarUrl?: string;
    preferredLanguage?: string;
    credits?: number;
    pendingCredits?: number;
    usedCredits?: number;
    updatedAt?: Date;
    createdAt?: Date;
}