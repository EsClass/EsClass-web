import client from "@/api/client";
import { Question, Resource } from "@/types/data-types";
import { errorMessage, showMessage } from "@/utils/utility";
import { Typography } from "@mui/material";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import ResultResource, { ResultQuestion } from "./Result";

const AllSearchResult = () => {
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const [resources, setResources] = useState<any[]>([]);
  const [questions, setQuestions] = useState<any[]>([]);

  const loadData = async () => {
    setLoading(true);
    try {
      const res = (await client.get("search?keyword=" + params.search)).data;
      setResources(res.resources);
      setQuestions(res.questions);
      console.log("res", res);
    } catch (error) {
      showMessage({
        variant: "error",
        message: errorMessage(error),
      });
    }
    setLoading(false);
  };

  useEffect(() => {
    if (params.search) loadData();
  }, [params.search]);

  return (
    <>
      {loading ? (
        <Typography>Loading .....</Typography>
      ) : (
        <Typography className="text" mb={6}>
          We found {questions.length} similar questions that have already been
          answered! and {resources.length} similar resources
        </Typography>
      )}

      {questions.map((cur) => (
        <ResultQuestion {...cur} key={cur._id} />
      ))}
      {resources.map((cur) => (
        <ResultResource {...cur} key={cur._id} />
      ))}
    </>
  );
};

export default AllSearchResult;
