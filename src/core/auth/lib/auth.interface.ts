
export abstract class RegisterRequest {
  abstract email: string;
  abstract locale: string;
  abstract affiliate?: string;
  abstract name?: string;
  abstract referralCode?: string;
  abstract redirectUrl?: string;
}

export interface OkResponse {
  ok: boolean;
}
