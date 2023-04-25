// Classes
import { RemoteA } from "../../remote.a";

// Interfaces
import { CrewsListServiceAble, ICrew } from "../interfaces/crewslist";

export class CrewsListService extends RemoteA implements CrewsListServiceAble {
  reqGetAllCrewsList = async (): Promise<ICrew[]> => {
    const response = await this.getInstance().get<ICrew[]>("/employee");

    if (response.status !== 200) {
      throw new Error("Failed to get all crews");
    }

    const { data } = response;

    return data;
  };
}
