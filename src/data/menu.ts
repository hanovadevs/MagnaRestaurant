export type MenuItem = {
  id: number;
  name: string;
  description: string;
  price_numerical: number;
  group?: string;
  popular?: boolean;
};
export const formatPrice = (amount: number) =>
  `${new Intl.NumberFormat("en-US").format(amount)} ₫`;
export const menuCategories = [
  { id: "drinks", label: "Coffee & drinks" },
  { id: "breakfast", label: "Breakfast" },
  { id: "lunch", label: "Lunch" },
  { id: "dinner", label: "Dinner" },
  { id: "desserts", label: "Something sweet" },
] as const;
export type MenuCategory = (typeof menuCategories)[number]["id"];
// Drink prices are from the reference. Food prices are VND demo values.
export const menuData: Record<MenuCategory, MenuItem[]> = {
  drinks: [
    {
      id: 101,
      name: "Espresso",
      description: "Our house blend, pulled as a double shot.",
      price_numerical: 45000,
      group: "Espresso coffee",
    },
    {
      id: 102,
      name: "Americano",
      description: "Espresso and water. Hot or iced.",
      price_numerical: 60000,
      group: "Espresso coffee",
    },
    {
      id: 103,
      name: "Latte",
      description: "Espresso with silky milk. Hot or iced.",
      price_numerical: 70000,
      group: "Espresso coffee",
    },
    {
      id: 104,
      name: "Vanilla Latte",
      description: "A gentle touch of vanilla. Hot or iced.",
      price_numerical: 75000,
      group: "Espresso coffee",
    },
    {
      id: 105,
      name: "Cafe Mocha",
      description: "Coffee, chocolate, and milk. Hot or iced.",
      price_numerical: 79000,
      group: "Espresso coffee",
    },
    {
      id: 106,
      name: "Caramel Macchiato",
      description: "Espresso, milk, and caramel. Hot or iced.",
      price_numerical: 85000,
      group: "Espresso coffee",
    },
    {
      id: 107,
      name: "Coconut Coffee",
      description: "A creamy coconut coffee, served iced.",
      price_numerical: 85000,
      group: "Specialty coffee",
      popular: true,
    },
    {
      id: 108,
      name: "Avocado Coffee",
      description: "Smooth avocado meets our house coffee. Iced only.",
      price_numerical: 85000,
      group: "Specialty coffee",
    },
    {
      id: 109,
      name: "Einspänner",
      description: "Deep coffee beneath a cloud of cream. Iced only.",
      price_numerical: 90000,
      group: "Specialty coffee",
      popular: true,
    },
    {
      id: 110,
      name: "Almond Cream Latte",
      description: "An espresso latte crowned with almond cream. Iced only.",
      price_numerical: 100000,
      group: "Specialty coffee",
      popular: true,
    },
    {
      id: 111,
      name: "Cà Phê Đá",
      description: "Vietnamese black coffee over ice.",
      price_numerical: 50000,
      group: "Vietnamese coffee",
    },
    {
      id: 112,
      name: "Cà Phê Sữa Đá",
      description: "Vietnamese iced coffee with condensed milk.",
      price_numerical: 55000,
      group: "Vietnamese coffee",
    },
    {
      id: 113,
      name: "Chocolate Latte",
      description: "Comforting chocolate and milk. Hot or iced.",
      price_numerical: 80000,
      group: "Non-coffee",
    },
    {
      id: 114,
      name: "Matcha Latte",
      description: "Earthy green tea and smooth milk. Hot or iced.",
      price_numerical: 80000,
      group: "Non-coffee",
      popular: true,
    },
    {
      id: 115,
      name: "Berry Berry Latte",
      description: "A bright berry and milk pairing. Iced only.",
      price_numerical: 90000,
      group: "Non-coffee",
      popular: true,
    },
  ],
  breakfast: [
    {
      id: 1,
      name: "Two Eggs Any Style",
      description: "Hash brown potatoes and your choice of toast.",
      price_numerical: 55000,
    },
    {
      id: 2,
      name: "Fresh Fruit Bowl",
      description: "A generous bowl of the season’s fruit.",
      price_numerical: 65000,
    },
    {
      id: 3,
      name: "The Raum Breakfast",
      description: "Scrambled eggs, French toast, bacon, and sausage.",
      price_numerical: 125000,
      popular: true,
    },
    {
      id: 4,
      name: "Mushroom Egg White Omelet",
      description: "Mushrooms, herbs, hash browns, and toast.",
      price_numerical: 85000,
    },
    {
      id: 5,
      name: "Breakfast Bagel",
      description: "A fresh bagel with bacon, egg, and cheese.",
      price_numerical: 75000,
    },
    {
      id: 6,
      name: "Golden Pancakes",
      description: "Three fluffy pancakes, butter, and maple syrup.",
      price_numerical: 80000,
      popular: true,
    },
    {
      id: 7,
      name: "Western Omelet",
      description: "Eggs folded around sweet peppers, onion, and ham.",
      price_numerical: 85000,
    },
  ],
  lunch: [
    {
      id: 9,
      name: "Chicken Parmigiana Sandwich",
      description: "Breaded chicken, marinara, and mozzarella on ciabatta.",
      price_numerical: 115000,
    },
    {
      id: 10,
      name: "Caesar Salad",
      description: "Crisp romaine, croutons, parmesan, and Caesar dressing.",
      price_numerical: 95000,
    },
    {
      id: 11,
      name: "Prosciutto Panino",
      description: "Prosciutto, arugula, and a little balsamic.",
      price_numerical: 120000,
    },
    {
      id: 12,
      name: "Pasta al Pomodoro",
      description: "Spaghetti, slow-cooked tomato, and fresh basil.",
      price_numerical: 110000,
      popular: true,
    },
  ],
  dinner: [
    {
      id: 13,
      name: "Spaghetti Carbonara",
      description: "Pancetta, egg, pecorino, and freshly cracked pepper.",
      price_numerical: 145000,
    },
    {
      id: 14,
      name: "Classic Lasagna",
      description: "Layers of pasta, Bolognese, and creamy béchamel.",
      price_numerical: 155000,
    },
    {
      id: 15,
      name: "Grilled Salmon",
      description: "Grilled salmon with seasonal vegetables.",
      price_numerical: 195000,
    },
    {
      id: 16,
      name: "Herb-Grilled Steak",
      description: "Grilled steak, olive oil, and fragrant herbs.",
      price_numerical: 245000,
    },
  ],
  desserts: [
    {
      id: 21,
      name: "Tiramisu",
      description: "Espresso-soaked ladyfingers and mascarpone cream.",
      price_numerical: 75000,
      popular: true,
    },
    {
      id: 22,
      name: "Sicilian Cannoli",
      description: "A crisp shell, sweet ricotta, and chocolate chips.",
      price_numerical: 65000,
    },
    {
      id: 23,
      name: "Panna Cotta",
      description: "Soft vanilla cream with a bright berry coulis.",
      price_numerical: 65000,
    },
    {
      id: 24,
      name: "Affogato",
      description: "Vanilla gelato with a fresh shot of espresso.",
      price_numerical: 70000,
    },
  ],
};
export const coffeeExtras = [
  {
    id: 201,
    name: "Extra espresso shot",
    description: "One additional shot for your drink.",
    price_numerical: 10000,
  },
  {
    id: 202,
    name: "Oat milk upgrade",
    description: "Change the milk in one drink to oat milk.",
    price_numerical: 10000,
  },
];
export const allMenuItems = [
  ...Object.values(menuData).flat(),
  ...coffeeExtras,
];
