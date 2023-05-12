import React, { useEffect } from "react";
import { useLoginMutation } from "../../actions/User/Login";

const Logintest = () => {
  const loginMutation = useLoginMutation();

  useEffect(() => {
    handleLogin();
  }, []);

  const handleLogin = async () => {
    await loginMutation.mutateAsync({
        email: "rrsonawnse@gmail.com",
        password: "sunil123",
        rememberMe: true
      });
  };

  return <></>;
};

export default Logintest;
