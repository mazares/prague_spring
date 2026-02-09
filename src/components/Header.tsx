import Navbar from "./Navbar";
import { ThemeToggler } from "./ThemeToggler";
import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <header className="grid  self-start">
      <ThemeToggler />
      <h1 className="text-xl">She sells sea shells on a sea shore</h1>
      <div className="flex  justify-between items-center w-full">
        <Navbar />
        <SearchBar />
      </div>
    </header>
  );
}
