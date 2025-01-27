"use server";
import axiosService from "@/api/axiosServer";
import Footer from "@/components/navs/Footer";
import Header from "@/components/navs/Header";
import QuestionScreen from "@/components/QuestionDisplay/QuestionScreen";
import SearchBar from "@/components/Search/Searchbar";
import { Box } from "@mui/material";
import { notFound } from "next/navigation";
import { Suspense } from "react";

async function getQuestion(id: string) {
  try {
    const res = (await axiosService.get(`questions/${id}`)).data?.data;
    return res;
  } catch (error: any) {
    console.error(
      "Error fetching question:",
      error.response?.data || error.message
    );
    return notFound();
  }
}
const QuestionResultPage = async ({ params }: any) => {
  const questionId = params.id;
  const question = await getQuestion(questionId); // Fetch question using Axios

  return (
    <>
      <Header />
      <section className="section" style={{ paddingTop: 20 }}>
        <Box className="section-inner">
          <SearchBar />

          <Suspense fallback={<div>Loading...</div>}>
            <QuestionScreen data={question} />
          </Suspense>
        </Box>
      </section>

      <Footer />
    </>
  );
};

export default QuestionResultPage;
