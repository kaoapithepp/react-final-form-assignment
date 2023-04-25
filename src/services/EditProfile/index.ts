import axios, { AxiosResponse } from "axios";

// Interfaces
import { CrewDTO } from "../datasources/interfaces/crewslist";
import {
  ProfileRepositoryAble,
  ProfileServiceAble,
} from "../datasources/interfaces/profile";

// Utils
import mapperCrewData from "./mapper";

export class ProfileRepository implements ProfileRepositoryAble {
  service: ProfileServiceAble;

  constructor(service: ProfileServiceAble) {
    this.service = service;
  }

  getCrewById = async (lastname: string): Promise<CrewDTO> => {
    return mapperCrewData(await this.service.reqGetCrewById(lastname));
  };

  updateCrewById = async (body: CrewDTO): Promise<AxiosResponse> => {
    return await this.service.reqUpdateCrewById(body);
  };
}
