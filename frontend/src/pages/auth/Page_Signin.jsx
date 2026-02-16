import { useQuery } from "@tanstack/react-query";
import Signin from "../../components/signin/Signin";
import { useLanguage } from "../../contexts/LanguageContext";
import callApi from "../../utils/callApi";

function Page_Signin() {
  const { language } = useLanguage();

  const { data, isLoading, error } = useQuery({
    queryKey: ["signin_language", language],
    queryFn: () =>
      callApi({
        method: "GET",
        url: `tr?module=signin`,
      }),
  });

  if (error) {
    throw error;
  }
  return <>{isLoading ? null : <Signin lang_data={data?.data} />}</>;
}

export default Page_Signin;
