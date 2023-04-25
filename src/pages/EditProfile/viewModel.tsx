import { useState, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";

// Schema
import profileFormSchema from "../common/profileFormSchema";

// Services
import { ProfileRepository } from "../../services/editprofile";

// Utils
import useValidation from "../../utils/useValidation";

// Interfaces
import { CrewDTO } from "../../services/datasources/interfaces/crewslist";
import { ProfileService } from "../../services/datasources/remotes/profile";

const useViewModel = () => {
  const [crewInfo, setCrewInfo] = useState<CrewDTO | null>();

  const crewInitialValues = {
    firstname: crewInfo?.firstname || "",
    lastname: crewInfo?.lastname || "",
    email: crewInfo?.email || "",
    company: crewInfo?.company || "",
    phonenumber: crewInfo?.phonenumber || "",
    department: crewInfo?.department || "",
    colors: crewInfo?.colors || [],
    position: crewInfo?.position || "",
  };

  const { name } = useParams();

  const profileService: ProfileRepository = useMemo(() => {
    return new ProfileRepository(new ProfileService());
  }, []);

  useEffect(() => {
    profileService
      .getCrewById(String(name))
      .then((res) => {
        setCrewInfo(res);
      })
      .catch((err) => {
        console.error(err.message);
      });
  }, []);

  const updateCrewData = async (crewUpdatedData: CrewDTO) => {
    const res = await profileService.updateCrewById(crewUpdatedData);
    if (res.status === 200) {
      setCrewInfo(crewUpdatedData);
      alert("Updated successfully!");
    } else {
      alert("Unknown error occurs!");
    }
  };

  const handleOnSubmit = async (values: CrewDTO) => {
    console.log(values);
    updateCrewData(values);
  };

  const { profileFormValidationSchema } = profileFormSchema();
  const { validation } = useValidation(profileFormValidationSchema);

  return {
    crewInitialValues,
    handleOnSubmit,
    validation,
  };
};

export default useViewModel;
