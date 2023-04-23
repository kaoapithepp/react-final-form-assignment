import axios from "axios";
import { findIndex } from "lodash";

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

const API_URL = "https://demo2176628.mockable.io";

export const getAllCrews = async (): Promise<CrewDTO[] | null> => {
  const response = await axios.get(API_URL + "/employee");

  if (response.status !== 200) {
    throw new Error("Failed to get all crews");
  }

  const data = response.data;
  return data;
};

export const getCrewById = async (
  name: string
): Promise<CrewDTO | undefined> => {
  const response = await axios.get(API_URL + "/employee");

  if (response.status !== 200) {
    throw new Error("Failed to get all crews");
  }

  const index = findIndex(response.data, (res: any) => res.lastName === name);
  if (index < 0) {
    alert("Data not found!");
  } else {
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
  }
};

export const updateCrew = async (request: CrewDTO) => {
  const response = await axios.put(API_URL + "/update-employee", request);

  alert(`Updated sucessfully! (status: ${response.status})`);
};
