import { api } from "./api";

interface LoginRequest {
  username: string;
  password: string;
}

interface LoginResponse {
  token: string;
}

interface UserResponse {
  username: string;
  role: string;
}

export const authApi = {
  async login(data: LoginRequest): Promise<LoginResponse> {
    const response = await api.post<LoginResponse>("/auth/login", data);

    return response.data;
  },

  async me(): Promise<UserResponse> {
    const response = await api.get<UserResponse>("/auth/me");

    return response.data;
  },
};
