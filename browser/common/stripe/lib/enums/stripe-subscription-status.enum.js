// export enum StripeSubscriptionStatus {
//   ongoing = 'ongoing',
//   canceled = 'canceled',
// }
export var StripeSubscriptionStatus;
(function (StripeSubscriptionStatus) {
    StripeSubscriptionStatus["Trialing"] = "trialing";
    StripeSubscriptionStatus["Active"] = "active";
    StripeSubscriptionStatus["PastDue"] = "past_due";
    StripeSubscriptionStatus["Canceled"] = "canceled";
    StripeSubscriptionStatus["Unpaid"] = "unpaid";
    StripeSubscriptionStatus["Incomplete"] = "incomplete";
    StripeSubscriptionStatus["IncompleteExpired"] = "incomplete_expired";
})(StripeSubscriptionStatus || (StripeSubscriptionStatus = {}));
//# sourceMappingURL=stripe-subscription-status.enum.js.map