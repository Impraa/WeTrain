export interface UserRegister {
  fName: string;
  lName: string;
  username: string;
  email: string;
  birthday: Date;
  gender: "male" | "female";
  password: string;
}

export interface User extends UserRegister {
  id: string;
  verified: boolean;
  image: string;
  private: boolean;
  role: "user" | "trainer" | "employee" | "admin";
  qrCode: string;
}

export interface UserLogin {
  email: string;
  password: string;
}

export interface UserChangeBasicInfo {
  email: string;
  fName: string;
  lName: string;
  id: string;
}
