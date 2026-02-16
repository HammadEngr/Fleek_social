import { useQuery } from "@tanstack/react-query";
import Welcome from "../components/Welcome/Welcome";
import { useLanguage } from "../contexts/LanguageContext";
import callApi from "../utils/callApi";

function Page_Welcome() {
  const { language } = useLanguage();
  const { data, isLoading, error } = useQuery({
    queryKey: ["welcom_language", language],
    queryFn: () =>
      callApi({
        method: "GET",
        url: `tr?module=welcome`,
      }),
  });

  if (error) {
    throw error;
  }

  return <>{isLoading ? null : <Welcome lang_data={data?.data} />}</>;
}

export default Page_Welcome;
