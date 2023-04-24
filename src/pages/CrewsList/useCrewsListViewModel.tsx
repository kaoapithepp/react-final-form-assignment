import { useCallback, useEffect, useState } from "react";
import { CrewDTO } from "../../services/common/interfaces/IServiceContext";
import { CrewsListService } from "../../services/CrewsList";

const useCrewsListViewModel = () => {
  const [crewsList, setCrewsList] = useState<CrewDTO[] | null | void>();

  const getCrewsListService = new CrewsListService(import.meta.env.VITE_API_URL);

  const getCrewList = useCallback(async () => {
    const crewsListData = await getCrewsListService.getAllCrews();
    setCrewsList(crewsListData);
  },[]);

  useEffect(() => {
    getCrewList();
  },[getCrewList]);

  return {
    crewsList,
  };
}

export default useCrewsListViewModel;