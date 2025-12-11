import { yupResolver } from "@hookform/resolvers/yup";
import { Checkbox, DatePicker } from "antd";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import Button from "../../ui/components/Button";
import FlexContainer from "../../ui/components/FlexContainer";
import Form from "../../ui/components/Form";
import FormWrapper from "../../ui/components/FormWrapper";
import Heading from "../../ui/components/Heading";
import Hr from "../../ui/components/Hr";
import Input from "../../ui/components/Input";
import styles from "./AddExperience.module.css";
import { useMutation } from "@tanstack/react-query";
import callApi from "../../utils/callApi";
import { useUser } from "../../contexts/UserContext";

const useAddExp = (userid) => {
  return useMutation({
    mutationFn: (formData) => {
      console.log(formData);
      const requestOptions = {
        method: "POST",
        url: `exp/${userid}`,
        data: {
          title: formData.job_title,
          employer: formData.employer,
          startDate: formData.startDate,
          endDate: formData.endDate,
          currentlyWorking: formData.currentlyWorking,
        },
      };
      return callApi(requestOptions);
    },
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.log(error);
    },
  });
};

const schema = yup
  .object({
    job_title: yup.string().required("Job title is required"),
    employer: yup.string().required("company name or employer is required"),
    startDate: yup.date().required("start date is required"),
    endDate: yup.date(),
    currentlyWorking: yup.boolean(),
  })
  .required();

function AddExperience() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const { user } = useUser();

  const { mutate, isPending, isError, error, data } = useAddExp(user.id);

  const onSubmit = (formData) => {
    console.log(formData);
    mutate(formData);
  };

  return (
    <FormWrapper className={styles.wrapper}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Heading>Add Experience</Heading>
        <Hr />
        <FlexContainer direction="v" className={styles.flex_container}>
          <Input
            id="job-title"
            type="text"
            name="job_title"
            required={true}
            placeholder="job title"
            register={register}
            error={errors.job_title}
          />
          <Input
            id="employer"
            type="text"
            name="employer"
            required={true}
            placeholder="company name or employer"
            register={register}
            error={errors.employer}
          />
          <FlexContainer className={styles.flex_container}>
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
                  placeholder="Select start date"
                  size="large"
                  {...field}
                  onChange={(date) => field.onChange(date)}
                />
              )}
            />
            <Controller
              name="currentlyWorking"
              control={control}
              defaultValue={false}
              render={({ field }) => (
                <Checkbox
                  checked={field.value}
                  onChange={(e) => field.onChange(e.target.checked)}
                />
              )}
            />
            <Checkbox onChange={() => {}}>Currently working</Checkbox>
          </FlexContainer>
        </FlexContainer>
        <Button size="md" type="submit">
          Proceed
        </Button>
      </Form>
    </FormWrapper>
  );
}

export default AddExperience;
