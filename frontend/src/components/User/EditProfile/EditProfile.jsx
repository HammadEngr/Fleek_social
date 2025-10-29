import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Button from "../../../ui/components/Button";
import Container from "../../../ui/components/Container";
import Form from "../../../ui/components/Form";
import FormWrapper from "../../../ui/components/FormWrapper";
import Hr from "../../../ui/components/Hr";
import Input from "../../../ui/components/Input";
import Label from "../../../ui/components/Label";
import styles from "./EditProfile.module.css";
import callApi from "../../../utils/callApi";
import { useState, useRef } from "react";
import { useUser } from "../../../contexts/UserContext";

const schema = yup.object({
  bio: yup.string().max(500, "Only 500 characters allowed"),
  fname: yup.string(),
  lname: yup.string(),
  uname: yup.string(),
  profession: yup.string(),
  region: yup.string(),
  languages: yup.string(),
  cover_pic: yup.mixed(),
  profile_pic: yup.mixed(),
});

function EditProfile() {
  const [coverPreview, setCoverPreview] = useState(null);
  const [profilePicPreview, setProfilePicPreview] = useState(null);
  const coverPicRef = useRef();
  const profilePicRef = useRef();

  const { user } = useUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const changeCover = () => {
    setCoverPreview(URL.createObjectURL(coverPicRef.current.files[0]));
  };

  const changeProfilePic = () => {
    setProfilePicPreview(URL.createObjectURL(profilePicRef.current.files[0]));
  };

  const onSubmit = async (formData) => {
    const fd = new FormData();

    for (const key in formData) {
      if (key === "cover_pic" || key === "profile_pic") {
        if (formData[key]?.[0]) {
          fd.append(key, formData[key][0]);
        }
      } else {
        fd.append(key, formData[key]);
      }
    }

    const requestObject = {
      method: "POST",
      url: `/user/${user.id}/update`,
      data: fd,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    console.log(fd);
    const response = await callApi(requestObject);
    console.log(response);
  };

  return (
    <Container>
      <FormWrapper className={styles.edit_form_wrapper}>
        <Form className={styles.edit_form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.images_box}>
            <div className={styles._cp}>
              <Input
                id="_cp"
                type="file"
                name="cover_pic"
                register={register}
                error={errors.cover_pic}
                ref={coverPicRef}
                onChange={changeCover}
                className={styles._cp_input}
              ></Input>
              <img src={coverPreview} alt="cover image" />
            </div>
            <div className={styles._pp}>
              <Input
                id="_pp"
                type="file"
                name="profile_pic"
                error={errors.profile_pic}
                register={register}
                ref={profilePicRef}
                onChange={changeProfilePic}
                className={styles._pp_input}
              ></Input>
              <img src={profilePicPreview} alt="profile image" />
            </div>
          </div>
          <Hr />
          <div className={styles._fullname}>
            <div className={styles._fname}>
              <Label className={styles.label_name}>First Name</Label>
              <Input
                id="_fname"
                type="text"
                name="fname"
                register={register}
                error={errors.fname}
              ></Input>
            </div>
            <div className={styles._lname}>
              <Label className={styles.label_name}>Last Name</Label>
              <Input
                id="_lname"
                type="text"
                name="lname"
                register={register}
                error={errors.lname}
              ></Input>
            </div>
            <div className={styles._uname}>
              <Label className={styles.label_name}>User Name</Label>
              <Input
                id="_uname"
                type="text"
                name="uname"
                register={register}
                error={errors.uname}
              ></Input>
            </div>
          </div>
          <Hr />
          <div className={styles._prof_region_lang}>
            <div className={styles._prof}>
              <Label>Profession</Label>
              <Input
                id="profession"
                type="text"
                name="profession"
                register={register}
                error={errors.profession}
              ></Input>
            </div>
            <div className={styles._region}>
              <Label>Region</Label>
              <Input
                id="region"
                type="text"
                name="region"
                register={register}
                error={errors.region}
              ></Input>
            </div>
            <div className={styles._lang}>
              <Label>Languages</Label>
              <Input
                id="languages"
                type="text"
                name="languages"
                register={register}
                error={errors.languages}
              ></Input>
            </div>
          </div>
          <Hr />
          <div className={styles._bio}>
            <Label className={styles._bio_label}>Bio</Label>
            <textarea
              name="bio"
              id="bio"
              placeholder="Write your bio..."
              className={styles.bio_textarea}
              {...register("bio")}
            ></textarea>
          </div>
          <Button type="submit" size="md">
            Save
          </Button>
        </Form>
      </FormWrapper>
    </Container>
  );
}

export default EditProfile;
