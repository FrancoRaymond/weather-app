import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";


type AppContextType = {
  temperature: string;
  setTemperature: React.Dispatch<React.SetStateAction<string>>;
  windSpeed: string;
  setWindSpeed: React.Dispatch<React.SetStateAction<string>>;
  precipitation: string;
  setPrecipitation: React.Dispatch<React.SetStateAction<string>>;
  day: string;
  setDay: React.Dispatch<React.SetStateAction<string>>;
  city: string;
  setCity: React.Dispatch<React.SetStateAction<string>>;
};

type AppProviderProps = {
  children: ReactNode;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: AppProviderProps) {
  const [city, setCity ] = useState<string>("");
  const [temperature, setTemperature] = useState<string>("celsius");
  const [windSpeed, setWindSpeed] = useState<string>("km/h");
  const [precipitation, setPrecipitation] = useState<string>("millimeters");
  const [day, setDay] = useState<string>("Monday");


  return (
    <AppContext.Provider
      value={{
        city,
        setCity,
        temperature,
        setTemperature,
        windSpeed,
        setWindSpeed,
        precipitation,
        setPrecipitation,
        day, 
        setDay
      }}
    >
      {children}
    </AppContext.Provider>
  );
}


export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used inside AppProvider");
  }
  return context;
}
