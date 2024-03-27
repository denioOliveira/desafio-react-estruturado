import "./styles.css";
import ButtonInverse from "../../../components/ButtonInverse";
import ButtonPrimary from "../../../components/ButtonPrimary";
import ProductDetailsCard from "../../../components/ProductDetailsCard";
import * as productService from "../../../services/product-service";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ProductDTO } from "../../../models/product";
import * as cartService from "../../../services/cart-service";
import { ContextCartCount } from "../../../utils/context-cart";

export default function Productdetails() {
  const params = useParams();

  const navigate = useNavigate();

  const{setContextCartCount} = useContext(ContextCartCount);

  const [product, setProduct] = useState<ProductDTO>();

  useEffect(() => {
    productService
      .findById(Number(params.productId))
      .then((response) => {
        setProduct(response.data);
      })
      .catch(() => {
        navigate("/");
      });
  }, []);

  function handleByClick() {
    if (product) {
      cartService.addProduct(product);
      setContextCartCount(cartService.getCart().items.length);
      navigate("/cart");
    }
  }

  return (
    <main>
      <section id="product-details-section" className="dsc-container">
        {product && <ProductDetailsCard product={product} />}
        <div className="dsc-btn-page-container">
          <div onClick={handleByClick}>
            <ButtonPrimary name="Comprar" />
          </div>
          <Link to="/">
            <ButtonInverse name="Início" />
          </Link>
        </div>
      </section>
    </main>
  );
}
