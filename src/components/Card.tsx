export default function Card({ id }: { id: number }) {
  return (
    <div className="grid border rounded-2xl p-2 w-[90vw] aspect-square md:w-[20vw] lg:w-[15vw] backdrop-blur-xs z-0 drop-shadow-xl/100 drop-shadow-current">
      <h1> Card {id}</h1>
    </div>
  );
}
