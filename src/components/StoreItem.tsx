import { Card, Button } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";

type StoreItemProps = {
  id: number;
  category: string;
  image: string;
  price: number;
  rating: {
    rate: number;
    count: number;
  };
  title: string;
};

export function StoreItem({ id, category, price, image, rating, title }: StoreItemProps) {
  const { getItemQuantatiy, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart();
  const quantity = getItemQuantatiy(id);

  return (
    <Card className="h-100">
      <Card.Img variant="top" src={image} height="200px" style={{ objectFit: "contain" }} />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-space-between align-items-baseline mb-4"></Card.Title>
        <span className="fs-10">{title}</span>
        <span className="ms-2 text-muted">{formatCurrency(price)}</span>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button className="w-100" onClick={() => increaseCartQuantity(id)}>
              {" "}
              + Add To Cart{" "}
            </Button>
          ) : (
            <div className="d-flex align-items-center flex-column" style={{ gap: ".5rem" }}>
              <div className="d-flex align-items-center justify-content-center" style={{ gap: ".5rem" }}>
                <Button onClick={() => decreaseCartQuantity(id)}> -</Button>
                <div>
                  <span className="fs-3">{quantity} </span>
                  in chart
                </div>
                <Button onClick={() => increaseCartQuantity(id)}> +</Button>
              </div>

              <Button variant="danger" size="sm" onClick={() => removeFromCart(id)}>
                Remove
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
