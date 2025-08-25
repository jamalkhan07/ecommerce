// import { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { useGetProductsQuery } from "../slices/productApiSlice";
// import axios from "axios";

// import products from "../products";
import Product from "../components/Product";
import Loader from "../components/Loader";
import Message from "../components/Message";

function HomeScreen() {
  //   const [products, setProducts] = useState([]);

  //   useEffect(() => {
  //     const fetchProducts = async () => {
  //       const { data } = await axios("http://localhost:5000/api/products");

  //       setProducts(data);
  //     };

  //     fetchProducts();
  //   }, []);

  const { data: products, isLoading, error } = useGetProductsQuery();
  return (
    <>
      {isLoading ? (
        // <h2>Loading...</h2>
        <Loader />
      ) : error ? (
        <Message variant='danger'>
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <>
          <h1>Latest Products</h1>
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
        </>
      )}
    </>
  );
}

export default HomeScreen;
