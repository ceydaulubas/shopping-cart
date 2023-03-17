import { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import axios from "axios";
import { StoreItem } from "../components/StoreItem";

interface Item {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export function Store() {
  const [storeItems, setStoreItems] = useState<Item[]>([]);

  useEffect(() => {
    async function getStoreItems() {
      try {
        const data = await axios.get("https://fakestoreapi.com/products/");
        setStoreItems(data.data);
      } catch (e) {
        return e;
      }
    }
    getStoreItems();
    console.log(storeItems);
  }, []);

  return (
    <div>
      <h1>Store</h1>
      {storeItems.length ? (
        <>
          <Row md={2} xs={1} lg={4} className="g-3">
            {storeItems.map((item) => (
              <Col key={item.id}>
                <StoreItem {...item} />
              </Col>
            ))}
          </Row>
        </>
      ) : (
        <div>Loading </div>
      )}
    </div>
  );
}
