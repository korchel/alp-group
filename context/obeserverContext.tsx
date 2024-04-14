"use client";
import {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

interface IObserverProps {
  children: ReactNode[];
}

export const ObserverContext = createContext<{
  activeTab: string | null;
  setActiveTab: Dispatch<SetStateAction<string | null>> | null;
}>({ activeTab: null, setActiveTab: null });

export const Observer: FC<IObserverProps> = ({ children }) => {
  const [activeTab, setActiveTab] = useState<string | null>(null);

  return (
    <ObserverContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </ObserverContext.Provider>
  );
};
