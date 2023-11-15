import "./styles.css";
import { Grid } from "../../components/Grid";
import { cards } from "../../data/cards";

/* const handleClick = (id: string) => {
  console.log(id);
  console.log("deu certo");
}; */

export function App() {
  return (
    <div className="app">
      <Grid cards={cards} />;
    </div>
  );
}
