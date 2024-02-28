import { product } from "../types";

export const products: product[] = [
      {
        id: "1",
        name: "Product_1",
        price: 10,
        stock: 50,
        images: [
          "/src/assets/images/productsSmall/product_1.webp",
          "/src/assets/images/productsMedium/product_1.webp"
        ],
        description: "This is Product 1. It's a great product for your needs.",
        category: "Electronics",
        brand: "Brand_XYZ",
        rating: 4.5,
        reviews: [
          {
            id: 1,
            userId: 1,
            rating: 5,
            comment: "Great product! I love it.",
            date: "2023-08-01"
          },
          {
            id: 2,
            userId: 2,
            rating: 4,
            comment: "Good product. Recommended.",
            date: "2023-08-02"
          }
        ],
        filters: [
          "topsales",
          "ait premium"
        ]
      },
    ]

  