import { useShoppingCart } from "../context/ShoppingCartContext";
import { Stack, Button } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";

type CartItemProps = {
  id: number;
  quantity: number;
};

export function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart, storeItems } = useShoppingCart();

  const item = storeItems.find((i) => i.id === id);
  if (item == null) return null;

  return (
    <Stack direction="horizontal" gap={2} className="d-flex alin-items-center">
      <img src={item.image} style={{ width: "125px", height: "75px", objectFit: "contain" }} />
      <div className="me-auto">
        <div>
          {item.title}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: ".65rem", marginLeft: "5px" }}>
              x{quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: ".75rem" }}>
          {formatCurrency(item.price)}
        </div>
        <Button variant="outline-danger" size="sm" onClick={() => removeFromCart(item.id)}>
          &times;
        </Button>
      </div>
    </Stack>
  );
}
