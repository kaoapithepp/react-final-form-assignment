import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";

// Models
import useProfileFormModel from "../common/useProfileFormModel";

// Utils
import useValidation from "../../utils/useValidation";
import { CrewDTO, getCrewById, updateCrew } from "../../services/Crews";

const useEditProfileViewController = () => {
  const [crewInfo, setCrewInfo] = useState<CrewDTO | null>();

  const { name } = useParams();
  
  const { profileFormValidationSchema } = useProfileFormModel();
  const { validation } = useValidation(profileFormValidationSchema);

  const getCrewData = useCallback(async () => { 
    const crewData = await getCrewById(String(name));
    setCrewInfo(crewData);
  }, []);

  const updateCrewData = async (crewData: CrewDTO) => {
    await updateCrew(crewData);
  }

  useEffect(() => {
      getCrewData();  
  },[getCrewData]);

  async function handleOnSubmit(values: any) {
    console.log(values);
    updateCrewData(values);
  }

  const crewInitialValues = {
    firstname: crewInfo?.firstname || '',
    lastname: crewInfo?.lastname || '',
    email: crewInfo?.email || '',
    company: crewInfo?.company || '',
    phonenumber: crewInfo?.phonenumber || '',
    department: crewInfo?.department || '',
    colors: crewInfo?.colors || [],
    position: crewInfo?.position || '',
  }

  return {
    crewInitialValues,
    validation,
    handleOnSubmit,
  };
};

export default useEditProfileViewController;
