import { Typography } from "@mui/material";
import { FC } from "react";
import ResultResource, { ResultQuestion } from "./Result";

interface Props {
  resources: any[];
  questions: any[];
  loading: boolean;
  mode?: "question" | "resource";
}

const AllSearchResult: FC<Props> = ({
  mode,
  questions,
  loading,
  resources,
}) => {
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

      {mode !== "resource" &&
        questions.map((cur) => <ResultQuestion {...cur} key={cur._id} />)}
      {mode !== "question" &&
        resources.map((cur) => <ResultResource {...cur} key={cur._id} />)}
    </>
  );
};

export default AllSearchResult;
