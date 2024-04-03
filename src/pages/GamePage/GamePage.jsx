import { useParams } from "react-router-dom";

import { Cards } from "../../components/Cards/Cards";
import { CheckboxProvider } from "../SelectLevelPage/CheckboxContext";

export function GamePage() {
  const { pairsCount } = useParams();

  return (
    <>
      <CheckboxProvider>
        <Cards pairsCount={parseInt(pairsCount, 10)} previewSeconds={5}></Cards>
      </CheckboxProvider>
    </>
  );
}
