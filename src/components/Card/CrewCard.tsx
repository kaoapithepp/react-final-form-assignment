import { find } from "lodash";
import deptOptions from "../../data/department";
import positionOptions from "../../data/position";

// Interfaces
import { CrewDTO } from "../../services/datasources/interfaces/crewslist";
import useViewModel from "./viewModel";

export const CrewCard = ({ data }: { data: CrewDTO }) => {
  const { navigateToProfile } = useViewModel();
  
  return (
    <div
      onClick={() =>  navigateToProfile(data.lastname)}
      className="transition-transform duration-300 rounded-md bg-white shadow-lg p-6 w-full flex flex-col justify-between items-center cursor-pointer hover:scale-105"
    >
      <img className="h-28 rounded-full" src={data.image} alt="" />
      <h2 className="text-lg text-center truncate">
        {data.firstname} {data.lastname}
      </h2>
      <p className="text-gray-400 font-light my-2 text-center">
        {find(deptOptions, { value: data.department })?.label}
      </p>
      <span className="bg-amber-100 text-amber-500 ring-1 ring-amber-500 px-2 py-1 rounded-full text-xs">
        {find(positionOptions, { value: data.position })?.label}
      </span>
    </div>
  );
};
