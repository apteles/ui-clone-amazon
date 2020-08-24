import React, { useContext } from "react";
import { Context } from "../modules/rootContext";

export default function (Component) {
  return (props) => {
    const { ...data } = useContext(Context);
    return <Component {...props} context={data} />;
  };
}
