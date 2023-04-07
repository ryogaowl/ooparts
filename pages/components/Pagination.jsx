import Link from "next/link";

function Pagination({ totalCount }) {
  const PER_PAGE = 5;

  const range = (start, end) =>
    [...Array(end - start + 1)].map((_, i) => start + i);

  return (
    <ul className="mt-10 text-center pb-5">
      {range(1, Math.ceil(totalCount / PER_PAGE)).map((number, index) => (
        <li key={index}>
          <Link href={`/news/page/${number}`}>{number}</Link>
        </li>
      ))}
    </ul>
  );
}
export default Pagination;
