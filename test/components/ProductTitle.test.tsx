import * as React from "react";

import { ProductTitle } from "../../src/components/";
import renderer from "react-test-renderer";
import { ProductCard } from "../../src/components/ProductCard";
import { product1 } from "../data/products";

describe("ProductTitle", () => {
  test("Renders ProcutTitle with a custom title without crashing", () => {
    const wrapper = renderer.create(
      <ProductTitle title="Custom title" className="custom-class" />
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});

describe("ProductTitle", () => {
  test("Renders ProcutTitle with a the title of the product without crashing", () => {
    const wrapper = renderer.create(
      <ProductCard product={product1}>{() => <ProductTitle />}</ProductCard>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
