// pizadata.js

const pizzas = [
  {
    _id: 1,
    name: "PEPPER BARBECUE CHICKEN",
    variants: ["small", "medium", "large"],  // Fixed typo here
    prices: [
      {
        small: 200,
        medium: 350,
        large: 400,
      },
    ],
    category: "nonveg",
    image: "https://www.dominos.co.in/files/items/PepperBarbecueChicken.jpg",
    description: "Pepper Barbecue Chicken I Cheese",
  },
  {
    _id: 2,
    name: "Non Veg Supreeme",
    variants: ["small", "medium", "large"],  // Fixed typo here
    prices: [
      {
        small: 200,
        medium: 350,
        large: 400,
      },
    ],
    category: "nonveg",
    image: "https://www.dominos.co.in/theme2/front/images/menu-images/my-nonveg.webp",
    description: "Bite into supreme delight of Black Olives",
  },
  {
    _id: 3,
    name: "Golden Corn Pizza",
    variants: ["small", "medium", "large"],  // Fixed typo here
    prices: [
      {
        small: 200,
        medium: 350,
        large: 400,
      },
    ],
    category: "veg",
    image: "https://www.dominos.co.in/files/items/PrimeCheesyL.jpg",
    description: "Corn over the base makes it look beautiful",
  },
  {
    _id: 4,
    name: "jalapeno & Red Paprika Pizza",
    variants: ["small", "medium", "large"],  // Fixed typo here
    prices: [
      {
        small: 200,
        medium: 350,
        large: 400,
      },
    ],
    category: "nonveg",
    image: "https://cdn.vox-cdn.com/thumbor/0rOBWYZsqF51sLtmXhMVwaDxDBc=/0x0:2000x1994/1200x800/filters:focal(840x837:1160x1157)/cdn.vox-cdn.com/uploads/chorus_image/image/70215520/neony_pizza_works.0.jpg",
    description: "Drizzle with Cholula. Bacon and cream cheese",
  },
  {
    _id: 5,
    name: "Margherita Pizza",
    variants: ["small", "medium", "large"],  // Fixed typo here
    prices: [
      {
        small: 200,
        medium: 350,
        large: 400,
      },
    ],
    category: "nonveg",
    image: "https://media.istockphoto.com/id/1168754685/photo/pizza-margarita-with-cheese-top-view-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=psLRwd-hX9R-S_iYU-sihB4Jx2aUlUr26fkVrxGDfNg=",  // Replace with a valid image URL
    description: "Tomato sauce with fresh tomatoes, mozzarella cheese and basil",
  },
  {
    _id: 6,
    name: "Double Cheese Margherita Pizza",
    variants: ["small", "medium", "large"],  // Fixed typo here
    prices: [
      {
        small: 200,
        medium: 350,
        large: 400,
      },
    ],
    category: "veg",
    image: "https://qph.cf2.quoracdn.net/main-qimg-778af4a88aa744125f1b2dae0a1368c5.webp",
    description: "Comes with the goodness of extra cheese",
  },
];

export default pizzas;
