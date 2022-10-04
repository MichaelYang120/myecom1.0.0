import Header from "./myEcom/Header";
import Footer from "./myEcom/Footer";
import Content from "./myEcom/Content";
import { render } from "@testing-library/react";
import FeatureContent from "./myEcom/FeatureContent";
// @import "custom";


function App() {
    return (
  <div>
    <Header />
    {/* <Content /> */}
    <FeatureContent />
    <Footer />
  </div>
  )
}
const app = document.getElementById("app");
export default App;