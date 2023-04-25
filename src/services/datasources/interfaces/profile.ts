import { AxiosResponse } from "axios";
import { ICrew, CrewDTO } from "./crewslist";

export interface ProfileServiceAble {
  reqGetCrewById(lastname: string): Promise<ICrew>;
  reqUpdateCrewById(body: CrewDTO): Promise<AxiosResponse>;
}

export interface ProfileRepositoryAble {
  getCrewById(lastname: string): Promise<CrewDTO>;
  updateCrewById(body: CrewDTO): Promise<AxiosResponse>;
}