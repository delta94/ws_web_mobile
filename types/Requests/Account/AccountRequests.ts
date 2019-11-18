export interface LoginRequest {
  username: string;
  password: string;
}

export interface RegisterReq {
  name: string;
  phone: string;
  email: string;
  password: string;
  password_confirmation: string;
  gender: number;
  birthday: string;
}

export interface ForgetPasswordReq {
  email: string;
}

interface Interface {
  blocks: [
    {
      start: string;
      end: string;
    }
  ];
}
