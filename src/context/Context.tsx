import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

// Define context type
type AppContextType = {
  temperature: string;
  setTemperature: React.Dispatch<React.SetStateAction<string>>;
  windSpeed: string;
  setWindSpeed: React.Dispatch<React.SetStateAction<string>>;
  precipitation: string;
  setPrecipitation: React.Dispatch<React.SetStateAction<string>>;
};

// Props type for provider
type AppProviderProps = {
  children: ReactNode;
};

// Create context with default undefined
const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: AppProviderProps) {
  const [temperature, setTemperature] = useState<string>("celsius");
  const [windSpeed, setWindSpeed] = useState<string>("km/h");
  const [precipitation, setPrecipitation] = useState<string>("millimeters");

  return (
    <AppContext.Provider
      value={{
        temperature,
        setTemperature,
        windSpeed,
        setWindSpeed,
        precipitation,
        setPrecipitation,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

// Custom hook
export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used inside AppProvider");
  }
  return context;
}
