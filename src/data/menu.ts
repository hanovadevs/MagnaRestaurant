export type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: string;
  price_numerical: number;
  popular?: boolean;
};

export const menuData: Record<string, MenuItem[]> = {
  breakfast: [
    { id: 1, name: "Two Eggs Any Style", description: "Served with hash brown potatoes & white or whole wheat toast.", price: "$5.95", price_numerical: 5.95, popular: true },
    { id: 2, name: "Fresh Fruit Salad", description: "Seasonal variety. Large bowl.", price: "$5.95", price_numerical: 5.95, popular: false },
    { id: 3, name: "Magna's Breakfast Special", description: "Hot & Cold Buffet: Scrambled eggs, french toast, bacon, sausage, cereals, and more.", price: "$21.99", price_numerical: 21.99, popular: true },
    { id: 4, name: "Egg White Omelet", description: "With sliced mushrooms & herbs, served with hash browns and toast.", price: "$12", price_numerical: 12.00, popular: false },
    { id: 5, name: "Bagel Sandwich", description: "With bacon, egg & cheese on a fresh bagel.", price: "$8.75", price_numerical: 8.75, popular: true },
    { id: 6, name: "Golden Brown Pancakes", description: "Three fluffy pancakes served with syrup and butter.", price: "$7.50", price_numerical: 7.50, popular: false },
    { id: 7, name: "Western Omelet", description: "Two fresh eggs with onions, peppers & ham.", price: "$12", price_numerical: 12.00, popular: false },
    { id: 8, name: "Espresso", description: "Authentic Italian dark roast espresso.", price: "$3.50", price_numerical: 3.50, popular: true },
  ],
  lunch: [
    { id: 9, name: "Pollo Alla Parmigiana Sandwich", description: "Breaded chicken, marinara, and melted mozzarella on ciabatta.", price: "$16", price_numerical: 16.00, popular: true },
    { id: 10, name: "Insalata di Cesare", description: "Romaine, croutons, parmesan, and house-made Caesar dressing.", price: "$12", price_numerical: 12.00, popular: false },
    { id: 11, name: "Panino al Prosciutto", description: "Prosciutto di Parma, arugula, and balsamic vinegar.", price: "$17", price_numerical: 17.00, popular: false },
    { id: 12, name: "Pasta al Pomodoro", description: "Spaghetti with fresh tomato sauce and basil.", price: "$18", price_numerical: 18.00, popular: true },
  ],
  dinner: [
    { id: 13, name: "Spaghetti Carbonara", description: "Pancetta, eggs, pecorino romano, and black pepper.", price: "$24", price_numerical: 24.00, popular: true },
    { id: 14, name: "Lasagna Classica", description: "Traditional Bolognese sauce, béchamel, and lasagna noodles.", price: "$26", price_numerical: 26.00, popular: true },
    { id: 15, name: "Grilled Salmon", description: "Fresh Atlantic salmon with seasonal vegetables.", price: "$32", price_numerical: 32.00, popular: false },
    { id: 16, name: "Bistecca alla Fiorentina", description: "T-bone steak seasoned with herbs and olive oil.", price: "$45", price_numerical: 45.00, popular: false },
  ],
  drinks: [
    { id: 17, name: "Signature Negroni", description: "Gin, Campari, and sweet vermouth.", price: "$16", price_numerical: 16.00, popular: true },
    { id: 18, name: "Aperol Spritz", description: "Aperol, prosecco, and soda water.", price: "$14", price_numerical: 14.00, popular: true },
    { id: 19, name: "Italian Craft Beer", description: "Selection of local and imported Italian brews.", price: "$9", price_numerical: 9.00, popular: false },
    { id: 20, name: "Toscana Red Wine", description: "Glass of full-bodied Chianti.", price: "$15", price_numerical: 15.00, popular: false },
  ],
  desserts: [
    { id: 21, name: "Tiramisu", description: "Ladyfingers soaked in espresso with mascarpone cream.", price: "$10", price_numerical: 10.00, popular: true },
    { id: 22, name: "Cannoli Siciliani", description: "Crispy shell with sweet ricotta and chocolate chips.", price: "$8", price_numerical: 8.00, popular: true },
    { id: 23, name: "Panna Cotta", description: "Vanilla bean custard with berry coulis.", price: "$9", price_numerical: 9.00, popular: false },
    { id: 24, name: "Affogato", description: "Vanilla gelato 'drowned' in a shot of warm espresso.", price: "$7", price_numerical: 7.00, popular: false },
  ],
};
