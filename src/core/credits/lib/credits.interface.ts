import { User } from "../../user";
import { CreditsStatus } from "./credits.enum";

export interface Credits {
  id: string;
  plan: string;
  
  credits?: number;
  pendingCredits?: number;
  usedCredits?: number;

  status?: CreditsStatus;
  start?: Date;
  end?: Date;

  customerId: string;
  userId?: string;
  user?: User;

  createdAt?: Date;
  updatedAt?: Date;
}
