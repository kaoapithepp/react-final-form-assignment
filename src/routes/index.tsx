import { createBrowserRouter } from "react-router-dom";

// Pages
import CrewsList from "../pages/CrewsList";
import EditProfile from "../pages/EditProfile";
import Error from "../pages/Error";

// Services
import { EditProfileService } from "../services/EditProfile";

const useRouteModel = () => {
  const editProfileLoader = new EditProfileService(
    import.meta.env.VITE_API_URL
  );

  const router = createBrowserRouter([
    {
      path: "/",
      element: <CrewsList />,
    },
    {
      path: "/detail/:name",
      element: <EditProfile />,
      loader: ({ params }) => editProfileLoader.getCrewById(String(params.name)),
      errorElement: <Error />,
    },
  ]);

  return {
    router,
  };
};

export default useRouteModel;
