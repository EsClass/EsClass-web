import EmptyComp from "@/components/EmptyComp";
import Spinner from "@/components/UI/Spinner";
import { getResources } from "@/redux/actions/course";
import { Box, Button, Typography } from "@mui/material";
import { FC, useEffect, useState } from "react";
import AddNewResource from "./AddResource";
import ResourceListItem from "./ResourceListItem";
import { Resource } from "@/types/data-types";

interface Props {
  course?: string;
}

const Resources: FC<Props> = ({ course }) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<Resource[]>([]);
  const [showAddResource, setShowAddResource] = useState(false);

  const loadData = async () => {
    setLoading(true);
    const res = await getResources(course!);
    if (res.success) setData(res.data);
    setLoading(false);
  };
  useEffect(() => {
    if (course) loadData();
  }, [course]);

  return (
    <>
      <Box className="flex" mb={4}>
        <Typography variant="h6" fontWeight={500} flex={1}>
          Learning Materials
        </Typography>

        <Button onClick={() => setShowAddResource(true)} variant="outlined">
          Upload Resource
        </Button>
      </Box>

      {data.map((cur) => (
        <ResourceListItem {...cur} key={cur._id} />
      ))}
      {loading && <Spinner />}
      {data.length === 0 && !loading && <EmptyComp />}
      <AddNewResource
        course={course!}
        onSuccess={loadData}
        onClose={() => setShowAddResource(false)}
        open={showAddResource}
      />
    </>
  );
};

export default Resources;
