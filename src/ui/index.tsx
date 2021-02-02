import "./style.css";

import * as React from "react";
import * as ReactDOM from "react-dom";
import { GeneratorComponent } from "./GeneratorComponent";
import { Generator } from "@generator/Generator";
import { StandardRule } from "@grid/rules/StandardRule";
import { DiagonalRule } from "@grid/rules/DiagonalRule";
import { KnigthsMoveRule } from "@grid/rules/KnigthsMoveRule";

const div = document.createElement("div");
document.body.appendChild(div);

const generator = new Generator([
  new StandardRule(),
  new DiagonalRule(),
  new KnigthsMoveRule(),
]);

ReactDOM.render(
  <GeneratorComponent generator={generator} />,
  div,
);
