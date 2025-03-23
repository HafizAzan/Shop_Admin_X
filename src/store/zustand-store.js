import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Authentication } from "services/auth.service";
import { message } from "antd";

export const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      token: null,
      confirmResult: null,

      login: async ({ email, password }) => {
        try {
          const { user } = await Authentication.LoginWithEmail({
            email,
            password,
          });
          const token = await user.getIdToken();

          set({ user, token });
          return token;
        } catch (error) {
          throw new Error(error?.message || "Login failed!");
        }
      },

      register: async ({ email, password }) => {
        try {
          const { user } = await Authentication.SignUpWithEmail({
            email,
            password,
          });
          const token = await user.getIdToken();

          set({ user, token });
          return token;
        } catch (error) {
          throw new Error(error?.message || "Registration failed!");
        }
      },

      google: async () => {
        try {
          const { user } = await Authentication.loginWithGoogle();
          const token = await user.getIdToken();

          set({ user, token });
          return token;
        } catch (error) {
          throw new Error(error?.message || "Google login failed!");
        }
      },

      number: async ({ phone }) => {
        try {
          if (!phone) message.error("Phone number is required");

          const confirmation = await Authentication.loginWithPhoneNumber({
            phone,
          });

          set({ confirmResult: confirmation });
          return confirmation;
        } catch (error) {
          message.error(error?.message || "Failed to send OTP!");
          throw error;
        }
      },

      verifyOtp: async (otp) => {
        try {
          const { confirmResult } = useAuthStore.getState();
          if (!confirmResult) message.error("OTP confirmation not found!");

          const userCredential = await confirmResult.confirm(otp);
          const token = await userCredential.user.getIdToken();

          set({
            user: userCredential.user,
            token,
            confirmResult: null,
          });
          message.success("logged in Successfully!");
          return token;
        } catch (error) {
          message.error(error?.message || "Invalid OTP!");
          throw error;
        }
      },

      logout: () => {
        const removeUser = Authentication.logout();
        set({ user: null, token: null, confirmResult: null });
        return removeUser;
      },
    }),
    {
      name: "auth-storage",
    }
  )
);
