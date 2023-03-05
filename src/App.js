//react
import { useEffect } from "react";

//components
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import productsJSON from "./data/products.json";

//redux
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "./redux/selectors";
import { receiveProducts, receiveCart } from "./redux/actions";

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(receiveProducts(productsJSON))
    dispatch(receiveCart(productsJSON));
  }, [dispatch]);
  
  const products = useSelector(getProducts)

  return (
    <div className="App">
      <Navbar />
      <div className="flex flex-wrap gap-2 m-1 justify-center">
        {products.map(item => 
          <ProductCard key={item.id} {...item}
          />
        )}
      </div>
    </div>
  );
}

export default App;
