import React from "react";
import { GridCellComponent } from "./GridCellComponent";
import { GeneratorData } from "@generator/GeneratorData";

type GridProps = {
  generatorData: GeneratorData,
}

export function GridComponent(
  { generatorData }: GridProps
) {
  const rows = [];

  for (let y = 0; y < 9; y++) {
    const row = [];

    for (let x = 0; x < 9; x++) {
      row.push(<GridCellComponent key={`${y}-${x}`} generatorData={generatorData} y={y} x={x} />);
    }

    rows.push(row);
  }

  return (
    <div className="grid grid-cols-9 gap-1 w-154">
      {rows}
    </div>
  );
}
