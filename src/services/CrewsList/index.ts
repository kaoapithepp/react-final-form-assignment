import axios from "axios";

// Interfaces
import {
  CrewDTO,
  ICrew,
  IServiceContext,
} from "../common/interfaces/IServiceContext";

export class CrewsListService implements IServiceContext {
  API_URL: string;

  constructor(API_URL: string) {
    this.API_URL = API_URL;
  }

  getAllCrews = async (): Promise<CrewDTO[] | void> => {
    const response = await axios.get(this.API_URL + "/employee");

    if (response.status !== 200) {
      throw new Error("Failed to get all crews");
    }

    const { data } = response;

    // Mapper
    return data.map((elem: ICrew) => {
      return {
        firstname: elem.firstName,
        lastname: elem.lastName,
        company: elem.company,
        email: elem.email,
        phonenumber: elem.phonenumber,
        department: elem.department,
        position: elem.position,
        colors: [elem.color],
        image: elem.image,
      };
    });
  };
}
