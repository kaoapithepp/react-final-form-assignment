import { CrewCard } from "../../components/Card/CrewCard";
import { CrewDTO } from "../../services/common/interfaces/IServiceContext";
import useCrewsListViewModel from "./useCrewsListViewModel";

const CrewsList = () => {
  const { crewsList } = useCrewsListViewModel();
  
  return (
    <div className="p-6">
      <div className="grid grid-cols-4 gap-4 max-[900px]:grid-cols-2">
        {crewsList?.map((crewData: CrewDTO, key: number) => {
          return <CrewCard key={key} data={crewData} />
        })}
      </div>
    </div>
  );
}

export default CrewsList;