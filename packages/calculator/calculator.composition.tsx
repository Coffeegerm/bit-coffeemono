import React from "react";
import { add } from "./calculator";

export function AddFunction() {
  return <div>1 + 1 = {add(1, 1)}</div>;
}
