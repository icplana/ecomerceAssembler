import { user } from "../types";

export const users: user[] = [
      {
        id: 1,
        name: "Juan",
        password: "123",
        email: "example@example.com",
        cart: [
            '2','3'
        ],//product Ids
        wishlist: [
            '1','2','4'
        ] //product Ids
      },
      {
        id: 2,
        name: "Maria",
        password: "RandomPassword123!",
        email: "random_user_123@example.com",
        cart: [
            '1'
        ],//product Ids
        wishlist: [
            '3','4'
        ] //product Ids
      },
    ]
  