import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { DatePicker } from "antd";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import * as yup from "yup";
import { useUser } from "../../contexts/UserContext";
import Button from "../../ui/components/Button";
import FlexContainer from "../../ui/components/FlexContainer";
import Form from "../../ui/components/Form";
import FormWrapper from "../../ui/components/FormWrapper";
import Heading from "../../ui/components/Heading";
import Hr from "../../ui/components/Hr";
import Input from "../../ui/components/Input";
import callApi from "../../utils/callApi";
import styles from "./AddEducation.module.css";

const useAddEducation = (userid, navigate) => {
  return useMutation({
    mutationFn: (formData) => {
      const requestOptions = {
        method: "POST",
        url: `user/education/${userid}`,
        data: {
          institution: formData.institution,
          degree: formData.degree,
          startDate: formData.startDate,
          endDate: formData.endDate,
          fieldOfStudy: formData.fieldOfStudy,
        },
      };
      return callApi(requestOptions);
    },
    onSuccess: (data) => {
      navigate(`/user/self/${userid}`);
    },
    onError: (error) => {
      console.log(error);
    },
  });
};

const schema = yup
  .object({
    institution: yup.string().required("Institution is required"),
    degree: yup.string().required("Degree is required"),
    startDate: yup.date().required("Start date is required"),
    endDate: yup.date(),
    fieldOfStudy: yup.string(),
  })
  .required();

function AddEducation() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const navigate = useNavigate();
  const { user } = useUser();

  const { mutate, isPending, isError, error, data } = useAddEducation(
    user.id,
    navigate,
  );

  const onSubmit = (formData) => {
    console.log(formData);
    mutate(formData);
  };

  return (
    <FormWrapper title="Add Education">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Heading size="lg" className={styles.heading}>
          Add Education
        </Heading>
        <Hr />
        <FlexContainer direction="v" className={styles.flex_container}>
          <Input
            id="institution"
            type="text"
            name="institution"
            required={true}
            placeholder="Institution name"
            register={register}
            error={errors.institution}
          />
          <Input
            id="degree"
            type="text"
            name="degree"
            required={true}
            placeholder="Degree"
            register={register}
            error={errors.degree}
          />
          <Controller
            name="startDate"
            control={control}
            render={({ field }) => (
              <DatePicker
                placeholder="Select start date"
                size="large"
                {...field}
                onChange={(date) => field.onChange(date)}
              />
            )}
          />
          <Controller
            name="endDate"
            control={control}
            render={({ field }) => (
              <DatePicker
                placeholder="Select end date"
                size="large"
                {...field}
                onChange={(date) => field.onChange(date)}
              />
            )}
          />
          <Input
            id="fieldOfStudy"
            type="text"
            name="fieldOfStudy"
            placeholder="Field of study"
            register={register}
            error={errors.fieldOfStudy}
          />
        </FlexContainer>
        <Button size="md" type="submit" className={styles.submit_button}>
          Proceed
        </Button>
      </Form>
    </FormWrapper>
  );
}

export default AddEducation;
