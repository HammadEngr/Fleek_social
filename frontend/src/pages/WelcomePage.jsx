import Welcome from "../components/Welcome/Welcome";
import { useQuery } from "@tanstack/react-query";
import callApi from "../utils/callApi";
import { useLanguage } from "../contexts/LanguageContext";

function WelcomePage() {
  const { language } = useLanguage();
  const { data, isLoading, error } = useQuery({
    queryKey: ["welcom_language", language],
    queryFn: () =>
      callApi({
        method: "GET",
        url: `tr?module=welcome`,
      }),
  });
  console.log(error);
  console.log(data);
  return <>{isLoading ? null : <Welcome lang_data={data.data} />}</>;
}

export default WelcomePage;
