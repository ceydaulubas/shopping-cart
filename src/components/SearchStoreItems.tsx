import React, { useState } from "react";
import { InputGroup, Form } from "react-bootstrap";

export function SearchStoreItems({ onSearch }: { onSearch: (searchInput: string) => void }) {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const value = e.target.value;
    setSearchInput(value);
    onSearch(value);
  };

  return (
    <InputGroup className="mb-3" style={{ width: "50%" }}>
      <Form.Control
        aria-label="Default"
        aria-describedby="inputGroup-sizing-default"
        placeholder="Search for your item..."
        onChange={handleChange}
        value={searchInput}
      />
    </InputGroup>
  );
}
