
import { User } from '../../user';

export abstract class RegisterRequest {
  abstract email: string;
  abstract locale: string;
  abstract affiliate?: string;
  abstract name?: string;
}

export interface RegisterResponse {
  securityToken: string;
  shouldUseMFA: boolean;
}

export abstract class VerifyRequest {
  abstract code: string;
  abstract securityToken: string;
  abstract mfaCode?: string;
  abstract deviceId?: string;
}

export interface VerifyResponse {
  user: User;
  
  accessToken: string;
  refreshToken: string;
}

export abstract class RefreshTokenRequest {
  abstract refreshToken: string;
  abstract deviceId?: string;
}

export interface RefreshTokenResponse {
  refreshToken: string;
  accessToken: string;
}

export interface LogoutResponse {
  ok: boolean;
}
