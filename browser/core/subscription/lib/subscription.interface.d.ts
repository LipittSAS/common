import { StripeSubscriptionStatus } from "src/common";
import { User } from "../../user";
export interface SubscriptionLipitt {
    id: string;
    plan: string;
    subscriptionId: string;
    subscriptionStatus: StripeSubscriptionStatus;
    customerId: string;
    productId: string;
    userId: string;
    user?: User;
    createdAt?: Date;
    updatedAt?: Date;
}
