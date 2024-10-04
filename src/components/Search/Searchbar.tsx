import { Height, Padding, SearchOutlined } from "@mui/icons-material";
import { GlobalStyles, IconButton } from "@mui/material";

const styles = (
  <GlobalStyles
    styles={{
      ".search-bar": {
        height: 50,
        background: "#fff",
        border: "1px solid var(--primary)",
        width: "100%",
        maxWidth: 800,
        borderRadius: 20,
        boxShadow: "0 5px 20px #0001",
        ["@media (min-width : 760px)"]: {
          height: 60,
        },
      },
      ".search-input": {
        padding: "5px 20px",
        Height: "100%",
        fontSize: 16,
        flex: 1,
        "&::placeholder": {
          color: "#bbb",
        },
      },
    }}
  />
);

const SearchBar = () => {
  return (
    <>
      {styles}
      <form className="search-bar flex">
        <input
          className="search-input"
          placeholder="Search for resources / questions"
        />
        <IconButton size="large">
          <SearchOutlined />
        </IconButton>
      </form>
    </>
  );
};
export default SearchBar;
