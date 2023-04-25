import { AxiosResponse } from "axios";
import { findIndex } from "lodash";

// Interfaces
import { CrewDTO, ICrew } from "../interfaces/crewslist";
import { ProfileServiceAble } from "../interfaces/profile";
import { RemoteA } from "../../remote.a";

export class ProfileService extends RemoteA implements ProfileServiceAble {
  reqGetCrewById = async (lastname: string): Promise<ICrew> => {
    const response = await this.getInstance().get<ICrew[]>("/employee");

    if (response.status !== 200) {
      throw new Error("Not Found");
    }

    const index = findIndex(response.data, (res: any) => res.lastName === lastname);
    const data = response.data[index];

    if (data === undefined) {
      throw new Response("Profile Not Found", { status: 404 });
    }

    return data;
  };

  reqUpdateCrewById = async (body: CrewDTO): Promise<AxiosResponse> => {
    const response = await this.updateInstance().put("/update-employee", body);

    return response;
  };
}
