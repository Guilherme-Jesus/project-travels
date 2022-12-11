import "../App.css";
import img1 from "../assets/img-1.jpg";


function Products() {
  return <h1 className="products"
    style={{ backgroundImage: `url(${img1})` }}
  >Produtos</h1>
}

export default Products