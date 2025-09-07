import { useAuthStore } from "@/store";
import { useEffect } from "react";

export const useInitAuth = () => {
  const { checkAuth, isLoading } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);
  return { isLoading };
};