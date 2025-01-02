import React, { useCallback } from "react";
import { FlagIcon } from "@heroicons/react/24/solid";
import { Button } from "../components/shared";
import { useNavigate } from "react-router-dom";

export const ErrorSection: React.FC = () => {
  const token = sessionStorage.getItem("token");
  const navigate = useNavigate();

  const onClickHandler = useCallback(() => {
    if (token) {
      navigate("/home");
      return;
    }
    navigate("/login");
  }, [navigate, token]);

  return (
    <div className="h-screen mx-auto grid place-items-center text-center px-8">
      <div>
        <FlagIcon className="w-20 h-20 mx-auto" />
        <h1
          color="blue-gray"
          className="mt-10 !text-3xl !leading-snug md:!text-4xl"
        >
          Error 404 <br /> It looks like this page doesn't exist.
        </h1>
        <div className="mt-8 mb-14 text-[18px] font-normal text-gray-500 mx-auto md:max-w-sm">
          Don&apos;t worry, our little Klimbo will work on it.
        </div>
        <Button
          color="gray"
          className="w-full px-4 md:w-[8rem]"
          onClick={onClickHandler}
        >
          <p>Back {!token ? "to login" : "Home"}</p>
        </Button>
      </div>
    </div>
  );
};
