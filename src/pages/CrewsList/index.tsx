import { CrewCard } from "../../components/Card/CrewCard";
import { CrewDTO } from "../../services/datasources/interfaces/crewslist";
import useViewModel from "./viewModel";

const CrewsList = () => {
  const { crewsList } = useViewModel();
  
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