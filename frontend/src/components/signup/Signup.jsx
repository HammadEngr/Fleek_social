import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import Modal from "antd/es/modal/Modal";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import * as yup from "yup";
import Button from "../../ui/components/Button";
import FlexContainer from "../../ui/components/FlexContainer";
import Form from "../../ui/components/Form";
import FormWrapper from "../../ui/components/FormWrapper";
import Heading from "../../ui/components/Heading";
import Hr from "../../ui/components/Hr";
import Input from "../../ui/components/Input";
import Label from "../../ui/components/Label";
import Loader from "../../ui/components/Loader";
import callApi from "../../utils/callApi";
import styles from "./signup.module.css";

const useUserSignUp = (setUserMsg, setOpenModal) => {
  return useMutation({
    mutationFn: (formData) => {
      const requestObject = {
        method: "POST",
        url: "auth/signup",
        data: {
          ...formData,
        },
      };
      return callApi(requestObject);
    },
    onSuccess: (data) => {
      setOpenModal(true);
      setUserMsg(data.message);
    },
    onError: (err) => {
      throw err;
    },
  });
};

// form validation schema
const schema = yup.object({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  userName: yup.string().required("User name is required"),
  dateOfBirth: yup.date().required("Date of birth is required"),
  email: yup.string().email("Provide a valid email").required(),
  password: yup
    .string()
    .min(8, "Password must be atleast 8 characters long")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/\d/, "Password must contain at least one number")
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password must contain at least one special character",
    )
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
  gender: yup.string().required("Select your gender"),
  TOC: yup
    .boolean()
    .oneOf([true], "You must agree with terms and conditions to signup"),
});

// Signup component
function Signup({ lang_data }) {
  const [openModal, setOpenModal] = useState(false);
  const [userMsg, setUserMsg] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const navigate = useNavigate();

  const { mutate, isPending, isError } = useUserSignUp(
    setUserMsg,
    setOpenModal,
  );

  const onSubmit = (formData) => {
    mutate(formData);
  };

  const closeModal = () => {
    navigate("/");
    setOpenModal(false);
  };

  return (
    <FlexContainer direction="v" className={styles._fl_container}>
      <Modal
        title="Success"
        open={openModal}
        onCancel={closeModal}
        onOk={closeModal}
      >
        <p>{userMsg}</p>
      </Modal>
      {isPending ? <Loader /> : null}
      <FormWrapper>
        <Heading title={lang_data.title} size="lg" />
        <Hr />
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Input
            id="f-name"
            type="text"
            name="firstName"
            placeholder={lang_data.first_name}
            register={register}
            error={errors.firstName}
            autoFocus={true}
          />
          <Input
            id="l-name"
            type="text"
            name="lastName"
            placeholder={lang_data.last_name}
            register={register}
            error={errors.lastName}
          />
          <Input
            id="u-name"
            type="text"
            name="userName"
            placeholder={lang_data.user_name}
            register={register}
            error={errors.userName}
          />
          <Input
            id="dob"
            type="date"
            name="dateOfBirth"
            placeholder="Date of Birth"
            register={register}
            error={errors.dateOfBirth}
          />
          <Input
            id="email"
            type="text"
            name="email"
            placeholder={lang_data.email_address}
            register={register}
            error={errors.email}
          />
          <Input
            id="password"
            type="password"
            name="password"
            placeholder={lang_data.password}
            register={register}
            error={errors.password}
          />
          <Input
            id="c-password"
            type="password"
            name="confirmPassword"
            placeholder={lang_data.confirm_password}
            register={register}
            error={errors.confirmPassword}
          />
          <div className={styles.gender_cl}>
            <div className={styles.gender_cl_type}>
              <Label htmlFor="male">{lang_data.male}</Label>
              <Input
                id="male"
                type="radio"
                name="gender"
                value="male"
                register={register}
                error={errors.gender}
              />
            </div>
            <div className={styles.gender_cl_type}>
              <Label htmlFor="female">{lang_data.female}</Label>
              <Input
                type="radio"
                id="female"
                name="gender"
                value="female"
                register={register}
                error={errors.gender}
              />
            </div>
          </div>
          <div className={styles.terms_cl}>
            <Input
              id="terms"
              type="checkbox"
              // value={true}
              name="TOC"
              register={register}
              error={errors.TOC}
            />
            <Label htmlFor="terms">{lang_data.toc}</Label>
          </div>
          <Button title={lang_data.title} size="md" type="submit" />
        </Form>
      </FormWrapper>
    </FlexContainer>
  );
}

export default Signup;
