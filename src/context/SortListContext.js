/** @format */
// SortListContext.js
import React from "react";

const SortListContext = React.createContext({
  handleAddClick: () => {},
  handleRemove: () => {},
  handleRefresh: () => {},
  handleCancel: () => {},
});

export default SortListContext;
