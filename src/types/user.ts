export interface IUserTypes {
  id: number;
  username: string;
  password: string;
  email: string;
  role: "admin" | "user";
}
