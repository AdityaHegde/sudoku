import React, { useState } from "react";
import { Generator } from "@generator/Generator";
import { GeneratorData } from "@generator/GeneratorData";
import { GridComponent } from "./components/GridComponent";

type GeneratorComponentProps = {
  generator: Generator,
}

export function GeneratorComponent(
  { generator }: GeneratorComponentProps
) {
  const [generatorData, setGeneratorData] = useState<GeneratorData>();

  const onClick = () => {
    const data = generator.createGeneratorData();
    try {
      generator.generate(data);
    } catch (err) {
      console.log(err);
    }
    setGeneratorData(data);
  };

  return (
    <>
      <button onClick={onClick}>Generate</button><br />
      {generatorData ? <GridComponent generatorData={generatorData} /> : ""}
    </>
  );
}
