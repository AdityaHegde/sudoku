import "module-alias/register";
import { Generator } from "@generator/Generator";
import { StandardRule } from "@grid/rules/StandardRule";
import { DiagonalRule } from "@grid/rules/DiagonalRule";
import { KnigthsMoveRule } from "@grid/rules/KnigthsMoveRule";

const generator = new Generator([
  new StandardRule(),
  new DiagonalRule(),
  new KnigthsMoveRule(),
]);
const generatorData = generator.createGeneratorData();
generator.generate(generatorData);

console.log(generatorData.grid.toString());
