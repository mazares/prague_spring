import Card from "../components/Card";

export default function Products() {
  const cards: number[] = [];

  for (let i = 0; i < 100; i++) {
    cards.push(i);
  }

  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
      {cards.map((card) => {
        return <Card key={card} id={card} />;
      })}
    </div>
  );
}
