import React, { memo, useState } from "react";
import CustomText from "./CustomText";
import CustomInput from "./CustomInput";
import { emailRules, passwordRules } from "utils/constant";
import CustomButton from "./CustomButton";
import { Form, message } from "antd";
import { GoogleOutlined, PhoneOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "store/zustand-store";
import PhoneNumberPage from "../features/PhoneNumberPage";

function CustomForm({ isSignUp }) {
  const [isLoginShow, setLoginShow] = useState();
  const { register, login, google } = useAuthStore();
  const [form] = Form.useForm();

  const onSubmit = async (data) => {
    const { email, password, c_password } = data ?? {};

    if (isSignUp) {
      if (password !== c_password) {
        message.error("Passwords do not match!");
        return;
      }
      await register({ email, password });
      form.resetFields();
    } else {
      await login({ email, password });
      form.resetFields();
    }
  };

  const navigateGoogleHandler = async () => await google();

  return (
    <div className="flex flex-col items-start justify-center w-full px-10 pt-4">
      {isLoginShow ? (
        <PhoneNumberPage
          isLoginShow={isLoginShow}
          setLoginShow={setLoginShow}
        />
      ) : (
        <>
          <CustomText
            type="title"
            text={isSignUp ? "Create Account" : "Login"}
            className="!text-white"
          />

          <Form className="w-full h-full" onFinish={onSubmit} form={form}>
            <CustomText text="Email" type="text" />
            <CustomInput
              type="email"
              name="email"
              rules={emailRules}
              placeholder="Enter Your Email"
              className="mt-2"
            />

            <CustomText text="Password" type="text" />
            <CustomInput
              type="password"
              name="password"
              rules={passwordRules}
              placeholder="Enter Your Password"
              className="mt-2"
            />

            {isSignUp && (
              <>
                <CustomText text="Confirm Password" type="text" />
                <CustomInput
                  type="password"
                  name="c_password"
                  rules={passwordRules}
                  placeholder="Enter Your Confirm Password"
                  className="mt-2"
                />
              </>
            )}

            <CustomButton
              htmlType="submit"
              className="w-full !text-white border-none text-lg  bg-blue2 hover:!bg-blue3 py-5 font-medium"
            >
              {isSignUp ? "Create Account" : "Log in"}
            </CustomButton>
          </Form>

          <hr className="w-full h-[1px] text-white my-8" />

          <CustomButton
            className="w-full !text-white bg-transparent hover:!bg-black2 font-semibold py-5 text-lg flex items-center justify-center gap-2"
            onClick={navigateGoogleHandler}
          >
            <GoogleOutlined className="text-lg" />
            Login With Google
          </CustomButton>

          <CustomButton
            onClick={() => setLoginShow(true)}
            className="w-full mt-4 !text-white bg-transparent hover:!bg-black2 font-semibold py-5 text-lg flex items-center justify-center gap-2"
          >
            <PhoneOutlined className="text-lg rotate-[100deg]" />
            Login With Phone Number
          </CustomButton>

          {!isSignUp ? (
            <>
              <CustomText
                text="Forget Your Password ?"
                type="link"
                className="my-2 mt-4"
              />
              <CustomText to="/singup" text="Create New Account" type="link" />
            </>
          ) : (
            <CustomText
              text="Already Have An Account?"
              type="link"
              to="/login"
              className="mt-4"
            />
          )}
        </>
      )}
    </div>
  );
}

export default memo(CustomForm);
