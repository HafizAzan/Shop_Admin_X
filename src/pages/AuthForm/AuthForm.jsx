import React, { memo } from "react";
import { imageConstant } from "assets/imageConstant";
import CustomForm from "components/CustomForm";
import { useLocation } from "react-router-dom";
import { UN_AUTHENTICATED_ROUTES_URL } from "utils/routesConstant";

function AuthForm() {
  const { pathname } = useLocation();
  const isSignUp = pathname === UN_AUTHENTICATED_ROUTES_URL.SIGN_UP;

  return (
    <div className="flex items-center justify-center h-full py-10">
      <div className="bg-black1 h-full w-[70vw] flex items-start">
        <div className="h-full w-[45%]">
          <img
            src={imageConstant.laptopImg}
            alt="laptop-img-not-found"
            className="w-full h-full"
          />
        </div>
        <div className="w-[55%] h-full">
          <CustomForm isSignUp={isSignUp} />
        </div>
      </div>
    </div>
  );
}

export default memo(AuthForm);
