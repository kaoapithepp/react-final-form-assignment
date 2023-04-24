import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";

// Ss
import useProfileFormModel from "../common/useProfileFormModel";

// Services
import { EditProfileService } from "../../services/EditProfile";

// Utils
import useValidation from "../../utils/useValidation";

// Interfaces
import { CrewDTO } from "../../services/common/interfaces/IServiceContext";

const useEditProfileViewModel = () => {
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
  const editProfileService = new EditProfileService(import.meta.env.VITE_API_URL);

  const getCrewData = useCallback(async () => {
    const crewData = await editProfileService.getCrewById(String(name));
    setCrewInfo(crewData);
  }, []);

  useEffect(() => {
    getCrewData();
  }, [getCrewData]);

  const updateCrewData = async (crewUpdatedData: CrewDTO) => {
    const res = await editProfileService.updateCrew(crewUpdatedData);
    if (res.status === 200) {
      setCrewInfo(crewUpdatedData);
      alert("Updated successfully!");
    } else {
      alert("Unknown error occurs!");
    }
  };

  const handleOnSubmit = async (values: any) => {
    console.log(values);
    updateCrewData(values);
  };

  const { profileFormValidationSchema } = useProfileFormModel();
  const { validation } = useValidation(profileFormValidationSchema);

  return {
    crewInitialValues,
    handleOnSubmit,
    validation,
  };
};

export default useEditProfileViewModel;
