//importing modules
import React from "react";
import "./style.css";

// This component exports both the List and ListItem components

export const List = ({ children }) => (
  <ul className="list-group">
    {children}
  </ul>
);

//exporting function so it accessible somewhere else
export function ListItem({ children }) {
  return <li className="list-group-item">{children}</li>;
}
