export interface IServiceContext {
  API_URL: string;
}

export interface CrewDTO {
  firstname: string;
  lastname: string;
  company: string;
  email: string;
  phonenumber: string;
  department: string;
  position: string;
  colors: string[];
  image: string;
}