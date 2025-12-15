import React from "react";
import CreatePost from "../../components/CreatePost/CreatePost";
import Authenticate from "../../Authenticate";
import CreatePostForm from "../../components/CreatePost/CreatePostForm";

function Page_CreatePost() {
  return (
    <Authenticate>
      <CreatePostForm />
    </Authenticate>
  );
}

export default Page_CreatePost;
