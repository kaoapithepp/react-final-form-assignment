// Interfaces
import {
  CrewDTO,
  CrewsListRepositoryAble,
  CrewsListServiceAble,
} from "../datasources/interfaces/crewslist";

// Utils
import mapperCrewsListData from "./mapper";

export class CrewsListRepository implements CrewsListRepositoryAble {
  private service: CrewsListServiceAble;

  constructor(service: CrewsListServiceAble) {
    this.service = service;
  }

  getAllCrewsList = async (): Promise<CrewDTO[]> => {
    return mapperCrewsListData(await this.service.reqGetAllCrewsList());    
  };
}
