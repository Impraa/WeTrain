export interface UserRegister {
  fname: string;
  lname: string;
  username: string;
  email: string;
  birthday: Date;
  gender: "male" | "female";
  password: string;
}

export interface User extends UserRegister {
  image: string;
  private: boolean;
  role: "user" | "trainer" | "employee" | "admin";
}

export interface UserLogin {
  username: string;
  password: string;
}
