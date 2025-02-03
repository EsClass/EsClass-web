import Header from "@/components/navs/Header";
import Spinner from "@/components/UI/Spinner";
import { CircularProgress } from "@mui/material";

function Loading() {
  return (
    <>
      <Header />
      <Spinner />
    </>
  );
}
export default Loading;
