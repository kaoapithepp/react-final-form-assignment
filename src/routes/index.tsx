import { createBrowserRouter } from "react-router-dom";

// Pages
import CrewsList from "../pages/CrewsList";
import EditProfile from "../pages/EditProfile";
import Error from "../pages/Error";

// Services
import { ProfileRepository } from "../services/editprofile";
import { ProfileService } from "../services/datasources/remotes/profile";

const useRouteModel = () => {
  const profileServiceLoader = new ProfileRepository(new ProfileService());

  const router = createBrowserRouter([
    {
      path: "/",
      element: <CrewsList />,
      errorElement: <Error />
    },
    {
      path: "/detail/:name",
      element: <EditProfile />,
      loader: ({ params }) =>
      profileServiceLoader.getCrewById(String(params.name)),
      errorElement: <Error />,
    },
  ]);

  return {
    router,
  };
};

export default useRouteModel;
