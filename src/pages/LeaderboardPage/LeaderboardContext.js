import React, { createContext, useContext, useState } from "react";

const LeaderboardContext = createContext();

export const useLeaderboard = () => {
  return useContext(LeaderboardContext);
};

export const LeaderboardProvider = ({ children }) => {
  const [leaderboard, setLeaderboard] = useState([]);

  return <LeaderboardContext.Provider value={{ leaderboard, setLeaderboard }}>{children}</LeaderboardContext.Provider>;
};
