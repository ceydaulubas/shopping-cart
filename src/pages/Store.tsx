import React, { useState } from "react";
import { Col, Row, Form } from "react-bootstrap";
import { StoreItem } from "../components/StoreItem";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { SearchStoreItems } from "../components/SearchStoreItems";

export function Store() {
  const { storeItems } = useShoppingCart();

  const [filteredStoreItems, setFilteredStoreItems] = useState(storeItems);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleSearch = (searchInput: string) => {
    const filteredItems = storeItems.filter((item) => item.title.toLowerCase().includes(searchInput.toLowerCase()));
    setFilteredStoreItems(filteredItems);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedCategory(value);
    console.log("selectedCategory", selectedCategory);
    if (value === "all") {
      setFilteredStoreItems(storeItems);
    } else {
      const filteredItems = storeItems.filter((item) => item.category === value);
      setFilteredStoreItems(filteredItems);
    }
  };

  return (
    <div>
      <h1>Store</h1>
      <div style={{ display: "flex" }}>
        <SearchStoreItems onSearch={handleSearch} />
        <Form.Select size="sm" style={{ width: "50%", height: "38px" }} onChange={handleCategoryChange}>
          <option value="all">Select by Category</option>
          <option value="men's clothing">Men's clothing</option>
          <option value="women's clothing">Women's clothing</option>
          <option value="jewelery">Jewelery</option>
          <option value="electronics">Electronics</option>
        </Form.Select>
      </div>
      {filteredStoreItems.length ? (
        <>
          <Row md={3} xs={1} lg={4} className="g-3">
            {filteredStoreItems.map((item) => (
              <Col key={item.id}>
                <StoreItem {...item} />
              </Col>
            ))}
          </Row>
        </>
      ) : (
        <div>Loading... </div>
      )}
    </div>
  );
}
