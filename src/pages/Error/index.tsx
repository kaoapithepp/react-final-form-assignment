import { useRouteError, isRouteErrorResponse } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  
  return (
    <div className="h-screen flex justify-center items-center flex-col">
      {isRouteErrorResponse(error) && (
        <>
          <h1 className="text-6xl text-amber-600">
            {error.status}
          </h1>
          <h2 className="font-medium text-gray-800">{error.data}</h2>
          <p className="text-gray-400">It's nothing here...</p>
        </>
      )}
    </div>
  );
};

export default Error;
