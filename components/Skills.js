import Frameworks from "./skills/Frameworks";
import Lenguajes from "./skills/Lenguajes";

export default function Skills() {
  return (
    <>
      <div className="flex flex-wrap items-center space-x-2"></div>

      <div className="flex flex-col">
        <Lenguajes />
        <Frameworks />
      </div>
    </>
  );
}
