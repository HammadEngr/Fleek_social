import React from "react";
import FlexContainer from "../ui/components/FlexContainer";

function GenericMessage({ msg, type }) {
  return (
    <FlexContainer>
      <p>{msg}</p>
    </FlexContainer>
  );
}

export default GenericMessage;
