import React from "react";
import { GeneratorData } from "@generator/GeneratorData";

type GridCellComponentProps = {
  generatorData: GeneratorData,
  y: number, x: number,
}

export function GridCellComponent(
  { generatorData, y, x }: GridCellComponentProps
) {
  const num = generatorData.grid.get(y, x);
  const posibility = [...generatorData.gridPossibilityData.gridPossibility[y][x].possibility];
  return (
    <div className="flex h-16 w-16 items-center justify-center bg-blue-300 rounded-lg">
      {num ? num :
        <div className="grid grid-cols-3 gap-0 w-14 h-14">
          {posibility.map((posibilityEntry) =>
            <div key={posibilityEntry} className="h-3 w-3">{posibilityEntry}</div>)}
        </div>
      }
    </div>
  );
}
