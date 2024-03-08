import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client";

export interface Screensshot {
  id: number;
  image: string;
  width: number;
  height: number;
}

const useScreenshots = (gameId: number) => {
  const apiClient = new ApiClient<Screensshot>(`/games/${gameId}/screenshots`);

  return useQuery({
    queryKey: ["screenshots", gameId],
    queryFn: apiClient.getAll,
  });
};

export default useScreenshots;
