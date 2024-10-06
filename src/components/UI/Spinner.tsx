import { Box, CircularProgress } from "@mui/material";
const Spinner = () => {
  return (
    <Box
      className="flex"
      height="100%"
      width="100%"
      position="absolute"
      bgcolor={"#fff9"}
      top={0}
      justifyContent={"center"}
      left={0}
    >
      <CircularProgress />
    </Box>
  );
};
export default Spinner;
