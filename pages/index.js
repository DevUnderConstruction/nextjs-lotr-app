import { lotrBooks } from "../lib/data.js";
import Image from "next/image";
import Books from "./Books/index.js";
export default function HomePage() {
  const book = lotrBooks.find(({ slug }) => slug === "the-two-towers");
  return (
    <div>
      <main>
        <h1>{book.title}</h1>
        <p>{book.description}</p>
        <Image src={book.cover} width={600} height={400} />
        <Books />
      </main>
    </div>
  );
}
