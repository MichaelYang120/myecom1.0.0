import Header from "./myEcom/Header";
import Footer from "./myEcom/Footer";
import Content from "./myEcom/Content";
import { render } from "@testing-library/react";

function App() {
    return (
  <div>
    <Header />
    <Content />
    <Footer />
  </div>
  )
}
const app = document.getElementById("app");
export default App;
