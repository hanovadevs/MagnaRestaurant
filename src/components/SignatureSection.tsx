import Link from "next/link";
import CafeImage from "./CafeImage";
import Arrow from "./Arrow";
const favorites = [
  {
    name: "Almond Cream Latte",
    detail: "Nutty, creamy, wonderfully slow.",
    price: "100,000 ₫",
    image: "/images/raum-coffee.jpg",
    position: "favorite-photo--almond",
  },
  {
    name: "The Raum Breakfast",
    detail: "An easy start, with all your favorites.",
    price: "125,000 ₫",
    image: "/images/breakfast.jpg",
    position: "favorite-photo--breakfast",
  },
  {
    name: "Coconut Coffee",
    detail: "A little tropical. A lot to love.",
    price: "85,000 ₫",
    image: "/images/coffee-editorial.jpg",
    position: "favorite-photo--coconut",
  },
];
export default function SignatureSection() {
  return (
    <section className="section favorites">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">A few good places to start</p>
            <h2>
              Come for a coffee.
              <br />
              <em>Stay for your favorite.</em>
            </h2>
          </div>
          <Link href="/menu" className="text-link">
            Explore the menu <Arrow diagonal />
          </Link>
        </div>
        <div className="favorites-grid">
          {favorites.map((item) => (
            <Link href="/menu" className="favorite" key={item.name}>
              <CafeImage
                src={item.image}
                alt={
                  item.name === "Almond Cream Latte"
                    ? "Our coffee still-life, inspired by the Raum drinks menu"
                    : item.name === "Coconut Coffee"
                      ? "An iced coffee inspiration for a slow afternoon"
                      : "Fresh breakfast on a café table"
                }
                className={`favorite-photo ${item.position}`}
                sizes="(max-width: 550px) 86vw, (max-width: 800px) 45vw, 32vw"
              />
              <div className="favorite-title">
                <h3>{item.name}</h3>
                <span>{item.price}</span>
              </div>
              <p>{item.detail}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
