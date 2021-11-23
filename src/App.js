import { PrimaryButton } from "./conponents/atoms/button/PrimaryButton";
import { SecondaryButton } from "./conponents/atoms/button/SecondaryButton";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <PrimaryButton>検索</PrimaryButton>
      <SecondaryButton>検索</SecondaryButton>
    </div>
  );
}
