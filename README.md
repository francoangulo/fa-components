# FA Products Components

This is a testing package about npm deploy

## Example

```
import { ProductImage, ProductTitle, ProductButtons } from "fa-components"
```

```
<ProductCard
          product={product}
          initialValues={{
            count: 4,
            maxCount: 10,
          }}
        >
          {({
            reset,
            increaseBy,
            count,
            isMaxCountReached,
            isMinCountReached,
            maxCount,
          }) => (
            <>
              <ProductImage />
              <ProductTitle />
              <ProductButtons />
            </>
          )}
</ProductCard>

```

### Franco Angulo
