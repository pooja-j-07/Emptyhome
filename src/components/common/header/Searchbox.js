import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import "bootstrap/dist/css/bootstrap.css";
import React from "react";

class Searchbox extends React.Component {
  render() {
    return (
      <form class="input-icons">
        <div class="input-container">
          <SearchOutlinedIcon />
          <input
            type="text"
            class="control"
            placeholder="Search "
            name="search"
          />
        </div>
      </form>
    );
  }
}
export default Searchbox;
