import test from "node:test";
import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { menuData, menuCategories, allMenuItems, coffeeExtras, formatPrice } from "../src/data/menu.ts";
import { getMenuOverview } from "../src/data/menu-details.ts";
import { validateSubmission, reservationTimes } from "../src/lib/validation.ts";

test("the 15 source drink prices and both extras are preserved", () => {
  const source = { 101: 45000, 102: 60000, 103: 70000, 104: 75000, 105: 79000, 106: 85000, 107: 85000, 108: 85000, 109: 90000, 110: 100000, 111: 50000, 112: 55000, 113: 80000, 114: 80000, 115: 90000 };
  for (const [id, price] of Object.entries(source)) assert.equal(allMenuItems.find((item) => item.id === Number(id))?.price_numerical, price);
  assert.deepEqual(coffeeExtras.map((item) => item.price_numerical), [10000, 10000]);
});
test("requested coffees and Cold Drinks exist alongside all PDF food categories", () => {
  const coffee = menuData.drinks.map((item) => item.name);
  for (const name of ["Espresso", "Cappuccino", "Café Latte", "Americano", "Mocha", "Caramel Macchiato"]) assert.ok(coffee.includes(name), name);
  assert.ok(menuCategories.some((category) => category.label === "Cold Drinks"));
  for (const id of ["breakfast", "lunch", "dinner", "desserts", "cold"]) assert.ok(menuData[id].length);
});
test("menu items have unique IDs, integer VND prices, and local overview images", () => {
  assert.equal(new Set(allMenuItems.map((item) => item.id)).size, allMenuItems.length);
  for (const item of Object.values(menuData).flat()) {
    assert.ok(Number.isInteger(item.price_numerical) && item.price_numerical > 0);
    const overview = getMenuOverview(item);
    assert.ok(overview.story.length > item.description.length);
    assert.ok(overview.ingredients && overview.serving);
    assert.ok(existsSync(new URL(`../public/images/${overview.image}.jpg`, import.meta.url)));
  }
  assert.equal(formatPrice(100000), "100,000 ₫");
});
test("contact form trims valid samples and rejects incomplete or oversized inputs", () => {
  const input = { name: "  Demo Guest ", email: "demo@example.com", message: "A synthetic café enquiry.", subject: "Hello" };
  assert.equal(validateSubmission("contact", input).name, "Demo Guest");
  for (const invalid of [null, [], {}, { ...input, email: "invalid" }, { ...input, message: "short" }, { ...input, message: "x".repeat(2001) }, { ...input, name: " " }, { ...input, subject: "x".repeat(81) }]) assert.throws(() => validateSubmission("contact", invalid));
});
test("reservations enforce valid future dates, seating slots, and guest counts", () => {
  const input = { name: "Demo Guest", email: "demo@example.com", date: "2099-01-10", time: "10:00", guests: "2" };
  assert.equal(validateSubmission("reservation", input).guests, 2);
  assert.equal(reservationTimes[0], "06:30"); assert.equal(reservationTimes.at(-1), "22:00");
  for (const invalid of [{ ...input, date: "2020-01-01" }, { ...input, date: "2099-02-30" }, { ...input, time: "03:00" }, { ...input, time: "10:01" }, { ...input, guests: 0 }, { ...input, guests: 11 }, { ...input, guests: 2.5 }]) assert.throws(() => validateSubmission("reservation", invalid));
});
