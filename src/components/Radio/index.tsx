import useViewModel from "./viewModel";

type InputRadioProps = {
  name: string;
  data: any[];
  label: string;
  type?: string;
};

export const InputRadio = ({ name, label, data }: InputRadioProps) => {
  const { onChange, type } = useViewModel(name, "radio");
  const positions = data;

  return (
    <div className="my-4">
      <label className="block text-sm font-medium leading-6 text-gray-900">
        {label}
      </label>
      <div className="mt-2 space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
        {positions.map(
          (position: { id: string; name: string }, key: number) => {
            return (
              <div key={key} className="flex items-center">
                <input
                  type={type}
                  name={name}
                  value={position.id}
                  onChange={onChange}
                  className="radio-input"
                />
                <label
                  htmlFor={position.id}
                  className="ml-2 block text-sm font-medium leading-6 text-gray-900"
                >
                  {position.name}
                </label>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};
