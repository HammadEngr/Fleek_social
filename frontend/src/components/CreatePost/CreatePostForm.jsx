import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useUser } from "../../contexts/UserContext";
import Button from "../../ui/components/Button";
import Form from "../../ui/components/Form";
import FormWrapper from "../../ui/components/FormWrapper";
import styles from "./CreatePostForm.module.css";
import callApi from "../../utils/callApi";
import { useNavigate } from "react-router";

const schema = yup
  .object({
    content: yup
      .string()
      .required("Post can not be empty")
      .max(500, "Post can not exceed 500 characters"),
  })
  .required();

const usePost = (userid, navigate) => {
  return useMutation({
    mutationFn: (formData) => {
      const requestOptions = {
        method: "POST",
        url: `posts/post/${userid}`,
        data: {
          content: formData.content,
        },
      };
      return callApi(requestOptions);
    },
    onSuccess: (data) => {
      if (data.status) {
        navigate("/user/self/" + userid);
      }
    },
    onError: (err) => {
      console.log(err);
    },
  });
};

function CreatePostForm() {
  const [content, setContent] = useState(null);
  const { user } = useUser();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({ resolver: yupResolver(schema) });

  const { mutate, isPending, isError, error, data } = usePost(
    user.id,
    navigate
  );

  const handleInput = (e) => {
    const value = e.target.innerText;
    setContent(value);
    setValue("content", value, { shouldValidate: true });
  };

  const onSubmit = (formData) => {
    mutate(formData);
  };

  const editableRef = useRef(null);

  return (
    <FormWrapper className={styles.wrapper}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" hidden {...register("content")} />
        <div className={styles.wrapper}>
          <div
            ref={editableRef}
            className={`${styles.post_content}`}
            role="textbox"
            contentEditable="true"
            onInput={handleInput}
            suppressContentEditableWarning={true}
            autoFocus={true}
          />
          {!content && (
            <span className={styles.placeholder}>Share your thoughts</span>
          )}
        </div>
        <Button type="submit" size="sm">
          Post
        </Button>
      </Form>
    </FormWrapper>
  );
}

export default CreatePostForm;
