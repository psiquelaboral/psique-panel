import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { notification } from "antd";

import { login } from "@apis/psique/psiqueAuthApi";
import { persistLoginData } from "@service/localStorage";
import { getAsyncUser } from "@store/slices/user/thunks";

const useLogin = (email, password, flag) => {
  let [isLoading, setIsLoading] = useState(false);
  const [api, contextHolder] = notification.useNotification();

  const dispatch = useDispatch();
  const navigation = useNavigate();

  const error = () => {
    api.error({
      message: `Error al iniciar sesion`,
      description: "Las credenciales no son correctas",
      placement: "topLeft",
    });
  };

  const loginExecutor = async (email, password) => {
    if (!email && !password) return;
    try {
      setIsLoading(true);
      let response = await login({ email, password });
      let { data } = response;
      persistLoginData(data.accessToken, data.id);
      dispatch(getAsyncUser(data.id));
      navigation("/");
    } catch (e) {
      setIsLoading(false);
      error();
    }
  };

  useEffect(() => {
    loginExecutor(email, password);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [flag]);

  return [isLoading, contextHolder];
};

export default useLogin;
