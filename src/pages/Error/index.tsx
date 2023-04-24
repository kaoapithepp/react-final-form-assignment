import { useRouteError, isRouteErrorResponse } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  console.log(error);

  return (
    <div className="h-screen flex justify-center items-center flex-col">
      {isRouteErrorResponse(error) && (
        <>
          <h1 className="text-xl text-amber-600">{error.status} {error.data}</h1>
          <p className="text-gray-400">It's nothing here...</p>
        </>
      )}
    </div>
  );
};

export default Error;
