import EmptyComp from "@/components/EmptyComp";
import { Box, Button, Typography } from "@mui/material";
import AddNewResource from "./AddResource";
import { useState } from "react";

const Resources = () => {
  const [showAddResource, setShowAddResource] = useState(false);

  return (
    <>
      <Box className="flex">
        <Typography variant="h6" fontWeight={500} flex={1}>
          Learning Materials
        </Typography>

        <Button onClick={() => setShowAddResource(true)} variant="outlined">
          Upload Resource
        </Button>
      </Box>

      <EmptyComp />
      <AddNewResource
        onClose={() => setShowAddResource(false)}
        open={showAddResource}
      />
    </>
  );
};

export default Resources;
