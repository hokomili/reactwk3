import Header from "../components/Header"
import Footer from "../components/Footer"
import ProductList from "../components/ProductList";
import Navbar from "../components/Navbar"

function Home() {
  return (
    <div className="bg-color">
        <div className="container grid-container">
            <Header />
            <Navbar />
            <ProductList />
            <Footer />
        </div>
    </div>
  );
}

export default Home;
