import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useUser } from "../../contexts/UserContext";
import Button from "../../ui/components/Button";
import Form from "../../ui/components/Form";
import FormWrapper from "../../ui/components/FormWrapper";
import Heading from "../../ui/components/Heading";
import Hr from "../../ui/components/Hr";
import Input from "../../ui/components/Input";
import callApi from "../../utils/callApi";
import styles from "./Signin.module.css";

const useUserSignIn = ({ setUser, navigate, setResponseError }) => {
  return useMutation({
    mutationFn: (formData) => {
      const requestOptions = {
        method: "POST",
        url: "auth/signin",
        data: {
          email: formData.email,
          password: formData.password,
        },
      };
      return callApi(requestOptions);
    },
    onSuccess: (data) => {
      if (data?.status === "fail") {
        setResponseError(data.message);
      } else {
        localStorage.setItem("accessToken", data.data.accessToken);
        localStorage.setItem("refreshToken", data.data.refreshToken);
        localStorage.setItem("user", JSON.stringify(data.data.user));
        setUser(data.data.user);
        navigate(`/user/self/${data.data.user.id}`);
      }
    },
    onError: (err) => {
      setResponseError(err.message);
    },
  });
};

const schema = yup
  .object({
    email: yup
      .string()
      .email("Provide a valid email")
      .required("Email is required"),
    password: yup.string().required("Password is required"),
  })
  .required();

function Signin({ lang_data }) {
  const [responseError, setResponseError] = useState(null);
  const navigate = useNavigate();
  const { setUser } = useUser();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const { mutate, isPending, isError, error, data } = useUserSignIn({
    setUser,
    navigate,
    setResponseError,
  });

  const onSubmit = (formData) => {
    mutate(formData);
  };

  return (
    <FormWrapper>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Heading title="Sign In" />
        <Hr />
        <Input
          id="email"
          type="text"
          name="email"
          required={true}
          placeholder={`${lang_data.email}`}
          register={register}
          error={errors.email}
        />
        <Input
          id="password"
          type="password"
          name="password"
          required={true}
          placeholder={`${lang_data.password}`}
          register={register}
          error={errors.password}
        />
        {responseError ? (
          <p className={styles.err_cl}>{responseError}</p>
        ) : null}
        <Button size="md" type="submit">
          {lang_data.proceed}
        </Button>
      </Form>
      <div className={styles.b_links}>
        <Link to="/recover">{lang_data.forgot_password_link}</Link>
        <Link to="/signup">{lang_data.create_account_link}</Link>
      </div>
    </FormWrapper>
  );
}

export default Signin;
