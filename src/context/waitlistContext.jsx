import { useContext, createContext, useState, useEffect } from "react";

export const WaitlistContext = createContext();

export const WaitlistContextProvider = ({ children }) => {
    const [showJoinwaitlist, setShowJoinwaitlist] = useState(false);
  
  return (
    <WaitlistContext.Provider
      value={{ showJoinwaitlist, setShowJoinwaitlist }}
    >
      {children}
    </WaitlistContext.Provider>
  );
};
