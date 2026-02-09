import { IoSearch } from "react-icons/io5";

import { useRef } from "react";

export default function SearchBar() {
  const handleSearch = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(inputRef.current?.value);
  };

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={handleSearch}
      className="flex border rounded-2xl p-2 gap-2 backdrop-blur-xs"
    >
      <input
        type="text"
        placeholder="Search..."
        ref={inputRef}
        className="pl-2 appearance-none border-none outline-none focus:outline-none "
      />
      <button type="submit">
        <IoSearch />
      </button>
    </form>
  );
}
