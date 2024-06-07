import { StripeSubscriptionRecurring } from "./enums/stripe-subscription-recurring.enum";
import { StripeSubscriptionStatus } from "./enums/stripe-subscription-status.enum";
export declare class StripeSubscription {
    id: string;
    recurring: StripeSubscriptionRecurring;
    status: StripeSubscriptionStatus;
    end: Date;
    createdAt: Date;
    updatedAt: Date;
}
