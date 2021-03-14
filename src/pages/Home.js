import Header from "../components/Header"
import Footer from "../components/Footer"
import ProductList from "../components/ProductList";
import Navigator from "../components/Navigator"

function Home() {
  return (
    <div className="bg-color">
        <div className="container grid-container">
            <Header />
            <Navigator />
            <ProductList />
            <Footer />
        </div>
    </div>
  );
}

export default Home;
