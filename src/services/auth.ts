import { api } from "./api";

interface LoginRequest {
  username: string;
  password: string;
}

interface LoginResponse {
  token: string;
}

export interface UserResponse {
  username: string;
  role: string;
}

export async function login(credentials: LoginRequest): Promise<LoginResponse> {
  const response = await api.post<LoginResponse>("/auth/login", credentials);

  return response.data;
}

export async function me(): Promise<UserResponse> {
  const response = await api.get<UserResponse>("/auth/me");

  return response.data;
}
