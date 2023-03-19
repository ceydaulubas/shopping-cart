import { Col, Row } from "react-bootstrap";
import { StoreItem } from "../components/StoreItem";
import { useShoppingCart } from "../context/ShoppingCartContext";

export function Store() {
  const { storeItems } = useShoppingCart();

  return (
    <div>
      <h1>Store</h1>
      {storeItems.length ? (
        <>
          <Row md={3} xs={1} lg={4} className="g-3">
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
