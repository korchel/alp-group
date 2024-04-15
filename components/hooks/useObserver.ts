import { useContext, useEffect } from "react";
import { useIntersectionObserver } from "usehooks-ts";
import { ObserverContext } from "../../context/obeserverContext";

export const useObserver = (
  id: string,
): ((node?: Element | null | undefined) => void) => {
  const { setActiveTab } = useContext(ObserverContext);

  const { isIntersecting, ref } = useIntersectionObserver({
    threshold: 1,
  });

  useEffect(() => {
    if (setActiveTab) {
      setActiveTab(isIntersecting ? id : null);
    }
  }, [isIntersecting]);

  return ref;
};
