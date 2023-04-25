import { useMemo, useEffect, useState } from "react";
import {
  CrewDTO,
} from "../../services/datasources/interfaces/crewslist";
import { CrewsListRepository } from "../../services/crewslist";
import { CrewsListService } from "../../services/datasources/remotes/crewslist";

const useViewModel = () => {
  const [crewsList, setCrewsList] = useState<CrewDTO[]>();

  const crewsListRepo: CrewsListRepository = useMemo(() => {
    return new CrewsListRepository(new CrewsListService());
  }, []);

  useEffect(() => {
    crewsListRepo
      .getAllCrewsList()
      .then((res) => {
        setCrewsList(res);
      })
      .catch((err) => {
        console.error(err.message);
      });
  }, []);

  return {
    crewsList,
  };
};

export default useViewModel;
