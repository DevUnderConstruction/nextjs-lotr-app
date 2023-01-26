import { lotrBooks } from "../../lib/data";

export default function Books() {
  const books = lotrBooks.map((book) => <li key={book.slug}>{book.title}</li>);
  return (
    <>
      <ul>{books}</ul>
    </>
  );
}
