export declare abstract class RegisterRequest {
    abstract email: string;
    abstract locale: string;
    abstract affiliate?: string;
    abstract name?: string;
    abstract referralCode?: string;
}
export interface OkResponse {
    ok: boolean;
}
