import { useContext } from "react";
import { ObserverContext } from "../../context/obeserverContext";

export const useVisibility = (id: string) => {
  const { setActiveTab } = useContext(ObserverContext);
  const handleVisibility = (isVisible: boolean) => {
    if (setActiveTab) {
      setActiveTab((prevTab) => {
        if (prevTab === id) {
          return isVisible ? prevTab : null;
        } else if (isVisible) {
          return id
        }
        return prevTab
      });
    }
  };
  return handleVisibility;
};
