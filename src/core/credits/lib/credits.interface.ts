import { User } from "../../user";
import { CreditsStatus } from "./credits.enum";

export interface Credits {
  id: string;
  credits?: number;
  pendingCredits?: number;
  usedCredits?: number;

  status?: CreditsStatus;
  start?: Date;
  end?: Date;

  userId?: string;
  user?: User;

  createdAt?: Date;
  updatedAt?: Date;
}
