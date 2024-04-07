import * as React from "react";
import { ProductImage } from "../../src/components";

import renderer from "react-test-renderer";
import { ProductCard } from "../../src/components/ProductCard";
import { product2 } from "../data/products";

describe("ProductImage", () => {
  test("Renders ProductImage with a custom image without crashing", () => {
    const wrapper = renderer.create(
      <ProductImage img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQDGQ55_znshhGDlxv5sDZz96tD3hxPc5j8CVWMKvJcw&s" />
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});

describe("ProductImage", () => {
  test("Renders ProductImage with a the image of the product without crashing", () => {
    const wrapper = renderer.create(
      <ProductCard product={product2}>{() => <ProductImage />}</ProductCard>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
