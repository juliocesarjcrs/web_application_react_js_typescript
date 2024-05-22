export interface User {
  id: string;
  document: string;
  last_name: string;
  name: string;
  role: { id?: string; name?: string };
}
export interface CreateUserPayload {
  document: string;
  last_name: string;
  name: string;
  role: string;
}
