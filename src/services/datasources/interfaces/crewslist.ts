import { AxiosResponse } from "axios";

export interface ICrew {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  phonenumber: string;
  department: string;
  position: string;
  color: string;
  image: string;
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

export interface CrewsListServiceAble {
  reqGetAllCrewsList(): Promise<ICrew[]>;
}

export interface CrewsListRepositoryAble {
  getAllCrewsList(): Promise<CrewDTO[]>;
}