import { Credits } from "../credits";
import { Organization } from "../organizations";
import { Vocabulary } from "../vocabulary";
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

  customerId?: string;

  avatarUrl?: string;
  preferredLanguage?: string;

  credits?: Credits[]
  vocabulary?: Vocabulary

  updatedAt?: Date;
  createdAt?: Date;
  organizations?: Organization[]
}

export interface UserCreationInput {
  email: string,
  preferredLanguage: string,
}


export interface UserCreationDTO extends UserCreationInput {
    role: UserRole,
    state: UserState.inactive,
}