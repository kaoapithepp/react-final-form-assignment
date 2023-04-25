import { ICrew, CrewDTO } from "../datasources/interfaces/crewslist";

const mapper = (data: ICrew[]) => {
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

export default mapper;