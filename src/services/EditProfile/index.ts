import axios from "axios";
import { findIndex } from "lodash";
import { CrewDTO, IServiceContext } from "../common/interfaces/IServiceContext";

export class EditProfileService implements IServiceContext {
  API_URL: string;

  constructor(API_URL: string) {
    this.API_URL = API_URL;
  }

  getCrewById = async (name: string): Promise<CrewDTO | undefined> => {
    const response = await axios.get(this.API_URL + "/employee");

    if (response.status !== 200) {
      throw new Error("Failed to get all crews");
    }

    const index = findIndex(response.data, (res: any) => res.lastName === name);
    const data = response.data[index];

    return {
      firstname: data.firstName,
      lastname: data.lastName,
      company: data.company,
      email: data.email,
      phonenumber: data.phonenumber,
      department: data.department,
      position: data.position,
      colors: [data.color],
      image: data.image,
    };
  };

  updateCrew = async (request: CrewDTO) => {
    const response = await axios.put(
      this.API_URL + "/update-employee",
      request
    );

    return response;
  };
}
