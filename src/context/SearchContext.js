/** @format */
import React from "react";
const SearchContext = React.createContext({
  handleSearchClick: () => {},
  handleAddClick: () => {},
  handleCancel: () => {},
  handleRefresh: () => {},
  handleRemove: () => {},
  // drawerOpen: open,
});
export default SearchContext;
