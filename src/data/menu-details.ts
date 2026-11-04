import type { MenuItem } from "./menu";
type Overview = {
  image: string;
  story: string;
  ingredients: string;
  serving: string;
};
const drinkDetails: Record<number, Overview> = {
  101: {
    image: "coffee-closeup",
    story:
      "The heart of our coffee menu. A short, full-bodied double shot with a rich aroma and a lingering finish.",
    ingredients: "House-blend espresso",
    serving: "Served hot in a small cup",
  },
  102: {
    image: "coffee-closeup",
    story:
      "All the character of espresso with a little more room to linger. Choose a warming cup or a refreshing glass over ice.",
    ingredients: "Double espresso and filtered water",
    serving: "Hot or iced",
  },
  103: {
    image: "latte-art",
    story:
      "A softer side of our house blend. Silky milk rounds out the espresso for an easy, balanced everyday favorite.",
    ingredients: "Double espresso and milk",
    serving: "Hot or iced. Oat milk available",
  },
  104: {
    image: "latte-art",
    story:
      "Gentle vanilla brings a mellow sweetness to a creamy espresso latte. A lovely companion to an unhurried morning.",
    ingredients: "Double espresso, milk, and vanilla",
    serving: "Hot or iced. Oat milk available",
  },
  105: {
    image: "cappuccino",
    story:
      "For the days when coffee and chocolate both sound right. A rich, comforting cup with a smooth milk finish.",
    ingredients: "Double espresso, chocolate, and milk",
    serving: "Hot or iced",
  },
  106: {
    image: "raum-coffee",
    story:
      "Caramel sweetness, creamy milk, and a bold espresso finish. Stir it together or enjoy the changing layers sip by sip.",
    ingredients: "Double espresso, milk, and caramel",
    serving: "Hot or iced",
  },
  107: {
    image: "coffee-editorial",
    story:
      "Coffee takes a little tropical detour. Creamy coconut softens the roast for a refreshing, indulgent afternoon drink.",
    ingredients: "House coffee and a coconut milk blend",
    serving: "Iced only",
  },
  108: {
    image: "matcha",
    story:
      "A smooth, rich pairing of avocado and coffee. Mellow fruit and a deeper roast come together in one cool glass.",
    ingredients: "Avocado, house coffee, and milk",
    serving: "Iced only",
  },
  109: {
    image: "coffee-editorial",
    story:
      "Bold coffee beneath a soft layer of cream. Sip through the top to enjoy the contrast of dark roast and gentle sweetness.",
    ingredients: "House coffee and whipped cream",
    serving: "Iced only",
  },
  110: {
    image: "raum-coffee",
    story:
      "A creamy latte with a nutty almond finish. Slowly sip through the almond cream and let the coffee come through.",
    ingredients: "Double espresso, milk, and almond cream",
    serving: "Iced only. Contains almonds",
  },
  111: {
    image: "coffee-closeup",
    story:
      "A Vietnamese coffee classic, simply served over ice. Deep, direct coffee flavor with a clean, refreshing finish.",
    ingredients: "Vietnamese-style black coffee and ice",
    serving: "Iced",
  },
  112: {
    image: "raum-coffee",
    story:
      "Strong coffee and sweet condensed milk, poured over ice. Stir well for a balanced sip of a familiar Vietnamese favorite.",
    ingredients: "Vietnamese-style coffee, condensed milk, and ice",
    serving: "Iced",
  },
  113: {
    image: "cappuccino",
    story:
      "A cozy chocolate drink with all the creamy comfort and none of the espresso. Just as lovely over ice.",
    ingredients: "Chocolate and milk. No coffee",
    serving: "Hot or iced",
  },
  114: {
    image: "matcha",
    story:
      "Earthy green tea meets a smooth milk finish. A gentle change of pace when you feel like something beyond coffee.",
    ingredients: "Matcha green tea and milk",
    serving: "Hot or iced. Oat milk available",
  },
  115: {
    image: "dessert",
    story:
      "A bright, creamy berry treat with a playful sweet-tart finish. Made for a warm afternoon and a little time to yourself.",
    ingredients: "Berry blend and milk. No coffee",
    serving: "Iced only",
  },
  116: {
    image: "cappuccino",
    story:
      "A café classic with a generous cap of soft foam. A double espresso keeps its character beneath warm, textured milk.",
    ingredients: "Double espresso, steamed milk, and milk foam",
    serving: "Served hot. Oat milk available",
  },
};
export function getMenuOverview(item: MenuItem): Overview {
  if (drinkDetails[item.id]) return drinkDetails[item.id];
  if (item.id <= 7)
    return {
      image: "breakfast",
      story: `${item.description} A comforting start to the day, equally at home beside a quick coffee or a leisurely breakfast.`,
      ingredients: item.description,
      serving: "Prepared for breakfast. Ask us about dietary preferences",
    };
  if (item.id >= 21)
    return {
      image: "dessert",
      story: `${item.description} Take a sweet little pause, share a bite, or make it a lovely ending to your visit.`,
      ingredients: item.description,
      serving: "Pair with an espresso or your favorite latte",
    };
  return {
    image: "cafe-lunch",
    story: `${item.description} A satisfying café favorite for a lunch break, a catch-up, or a relaxed meal with good company.`,
    ingredients: item.description,
    serving: "Made for an easy lunch or dinner",
  };
}
