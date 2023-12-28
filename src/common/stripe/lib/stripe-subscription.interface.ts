import { StripeSubscriptionRecurring } from "./enums/stripe-subscription-recurring.enum";
import { StripeSubscriptionStatus } from "./enums/stripe-subscription-status.enum";

// In theory not used
export class StripeSubscription {
  id: string;

  recurring: StripeSubscriptionRecurring;
  status: StripeSubscriptionStatus;

  end: Date;

  createdAt: Date;
  updatedAt: Date;
}
