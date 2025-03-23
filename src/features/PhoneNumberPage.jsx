import React, { memo, useState } from "react";
import { Flex, Input, Steps, message } from "antd";
import CustomText from "components/CustomText";
import CustomInput from "components/CustomInput";
import CustomButton from "components/CustomButton";
import { auth } from "config/firebase.config";
import { useAuthStore } from "../store/zustand-store";

const { Step } = Steps;

const PhoneNumberPage = () => {
  const [current, setCurrent] = useState(0);
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { number, verifyOtp } = useAuthStore();

  const validatePhone = (value) => {
    const phoneRegex = /^\+92\d{10}$/;
    setError(
      phoneRegex.test(value)
        ? ""
        : "Invalid phone number! Format: +92XXXXXXXXXX"
    );
  };

  const handleSendOtp = async () => {
    if (!phone || error) {
      message.error("Please enter a valid phone number");
      return;
    }
    setLoading(true);
    await number({ phone });
    validatePhone("");
    setCurrent(1);
    setPhone("");
    setLoading(false);
  };

  const handleVerifyOtp = async () => {
    setPhone("");
    if (!otp || otp.length !== 6) {
      message.error("Please enter a valid 6-digit OTP");
      return;
    }
    setLoading(true);
    await verifyOtp(otp);
    setOtp("");
    setCurrent(2);
    setLoading(false);
  };

  const steps = [
    {
      title: <CustomText type="text" text="Enter Phone Number" />,
      content: (
        <>
          <CustomText text="Phone Number" type="text" />
          <CustomInput
            type="tel"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
              validatePhone(e.target.value);
            }}
            placeholder="Enter Your Phone Number"
            className="mt-2"
          />
          {error && <p className="text-red-500">{error}</p>}
          <div id="recaptcha-container"></div>
          <CustomButton
            onClick={handleSendOtp}
            className="w-full mt-4 bg-blue2 !text-white hover:!bg-purple-500 border-none text-lg py-5 font-medium disabled"
            disabled={!!error || !phone}
            loading={loading}
          >
            Send OTP
          </CustomButton>
        </>
      ),
    },
    {
      title: <CustomText type="text" text="Enter OTP" />,
      content: (
        <Flex align="start" gap={6} vertical>
          <CustomText text="Enter OTP" type="text" />
          <Input.OTP
            formatter={(str) => str.toUpperCase()}
            onChange={(value) => setOtp(value)}
            value={otp}
            className="!bg-transparent"
          />
          <CustomButton
            onClick={handleVerifyOtp}
            className="w-full mt-4 bg-blue2 !text-white hover:!bg-purple-500 border-none text-lg py-5 font-medium disabled"
            disabled={otp.trim().length !== 6}
            loading={loading}
          >
            Verify OTP
          </CustomButton>
        </Flex>
      ),
    },
  ];

  return (
    <div className="w-full h-full">
      <Steps current={current}>
        {steps.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>

      <div className="mt-6">{steps[current].content}</div>
    </div>
  );
};

export default memo(PhoneNumberPage);
