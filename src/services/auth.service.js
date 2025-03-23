import {
  createUserWithEmailAndPassword,
  RecaptchaVerifier,
  signInWithEmailAndPassword,
  signInWithPhoneNumber,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth, googleProvider } from "config/firebase.config";
import { message } from "antd";

auth.useDeviceLanguage();

const LoginWithEmail = async ({ email = null, password = null }) => {
  return await signInWithEmailAndPassword(auth, email, password)
    .then((login) => {
      message.success("Logged in Successfully!");
      return login;
    })
    .catch((error) => {
      message.error(error.message || "Login failed!");
      throw error;
    });
};

const SignUpWithEmail = async ({ email = null, password = null }) => {
  return await await createUserWithEmailAndPassword(auth, email, password)
    .then((singup) => {
      message.success("User Created Successfully!");
      return singup;
    })
    .catch((error) => {
      message.error(error.message || "Registeraition failed!");
      throw error;
    });
};

const loginWithGoogle = async () => {
  try {
    const userCredential = await signInWithPopup(auth, googleProvider);

    const { _tokenResponse } = userCredential;

    if (_tokenResponse?.isNewUser) {
      message.success("Welcome! Your account has been created.");
    } else {
      message.success("Logged in successfully!");
    }

    return userCredential;
  } catch (error) {
    message.error(error.message || "Google login failed!");
    throw error;
  }
};

const loginWithPhoneNumber = async ({ phone = null }) => {
  try {
    if (window.recaptchaVerifier) {
      window.recaptchaVerifier.clear();
      window.recaptchaVerifier = null;
    }

    window.recaptchaVerifier = new RecaptchaVerifier(
      auth,
      "recaptcha-container",
      {
        size: "invisible",
        callback: (response) => {
          console.log("reCAPTCHA resolved:", response);
        },
        "expired-callback": () => {
          message.error("reCAPTCHA expired. Please try again.");
        },
      }
    );

    const num = await signInWithPhoneNumber(
      auth,
      phone,
      window.recaptchaVerifier
    );

    message.success("OTP sent successfully!");
    return num;
  } catch (error) {
    message.error(error.message || "Logout failed!");
    window.recaptchaVerifier = null;
    throw error;
  }
};

const logout = async () => {
  try {
    await signOut(auth);
    message.success("Logged out Successfully!");
  } catch (error) {
    message.error(error.message || "Logout failed!");
    throw error;
  }
};

const removeAccount = async () => {
  try {
    if (auth.currentUser) {
      await auth.currentUser.delete();
      message.success("Account deleted successfully!");
    } else {
      message.warning("No user is logged in.");
    }
  } catch (error) {
    message.error(error.message || "Failed to delete account!");
    throw error;
  }
};

export const Authentication = {
  LoginWithEmail,
  loginWithGoogle,
  SignUpWithEmail,
  loginWithPhoneNumber,
  logout,
  removeAccount,
};
