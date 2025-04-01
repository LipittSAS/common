import { Credits } from "../../credits";


export interface Organization {
  id: string;
  name: string;
  customerId: string;
  ownerId: string;
  credits: Credits[];
  requireAdminValidation?: boolean;
  validator?: string;
}