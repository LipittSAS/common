export interface StripeProductInterface {
    metadata: {
        [key: string]: string;
    };
    name: string;
}
export interface StripePriceInterface {
    id: string;
    recurring: {
        interval?: string;
    };
    unit_amount: number;
    currency: string;
    product: StripeProductInterface;
    current?: boolean;
}
