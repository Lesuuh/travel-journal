import "./App.css";
import Card from "./assets/components/Card";
import Footer from "./assets/components/Footer";
import Navbar from "./assets/components/Navbar";
import Data from "./data";

function App() {
  const cards = Data.map((item) => {
    return <Card key={item.key} {...item} />;
  });

  return (
    <>
      <Navbar />
      <div className="card-container">{cards}</div>
      <Footer />
    </>
  );
}

export default App;
