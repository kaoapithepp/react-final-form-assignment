import { useNavigate } from "react-router-dom"

const useViewModel = () => {
  const navigate = useNavigate();
  
  const navigateToProfile = (lastname: string) => {
    navigate(`/detail/${lastname}`, { replace: false });
  }

  return {
    navigateToProfile,
  }
}

export default useViewModel;