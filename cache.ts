import * as SecureStore from "expo-secure-store";
import { Platform } from "react-native";
import type { TokenCache } from "@clerk/clerk-expo";

const createTokenCache = (): TokenCache => ({
  getToken: async (key: string) => {
    try {
      return await SecureStore.getItemAsync(key);
    } catch (error) {
      console.error("SecureStore getItemAsync error:", error);
      await SecureStore.deleteItemAsync(key);
      return null;
    }
  },
  saveToken: async (key: string, token: string) => {
    try {
      await SecureStore.setItemAsync(key, token);
    } catch (error) {
      console.error("SecureStore setItemAsync error:", error);
    }
  },
});

export const tokenCache =
  Platform.OS !== "web" ? createTokenCache() : undefined;
