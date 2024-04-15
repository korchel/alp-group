import { useContext } from "react";
import { ObserverContext } from "../../context/obeserverContext";

export const useVisibility = (id: string) => {
  const { setActiveTab } = useContext(ObserverContext);
  const handleVisibility = (isVisible: boolean) => {
    if (setActiveTab && isVisible) {
      setActiveTab(id);
    }
  };
  return handleVisibility;
};
