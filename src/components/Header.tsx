import Navbar from "./Navbar";
import { ThemeToggler } from "./ThemeToggler";
import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <header className="grid border self-start">
      <ThemeToggler />
      <h1>header</h1>
      <div className="flex border justify-between items-center w-full">
        <Navbar />
        <SearchBar />
      </div>
    </header>
  );
}
