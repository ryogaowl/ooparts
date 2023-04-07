import Link from "next/link";
import { client } from "../libs/client";
import { Pagination } from "./components/Pagination";

export const getStaticProps = async () => {
  const data = await client.get({
    endpoint: "news",
    queries: { offset: 0, limit: 5 },
  });
  console.log(data);
  return {
    props: {
      news: data.contents,
      totalCount: data.totalCount,
    },
  };
};
export default function News({ news, totalCount }) {
  return (
    <div>
      <section>
        <div className="pt-20 mx-auto px-4 container">
          <h1 className="pt-14 pb-14 text-white text-6xl font-bold">News</h1>
        </div>
      </section>
      <div className="bg-gray-700 relative">
        <div className="pt-3 pb-3 text-white mx-auto px-4 container font-bold">
          <span>Home &gt;</span>
          <span> News</span>
        </div>
      </div>

      <section className="bg-black pb-8">
        <div className="block pt-16 lg:px-0 px-5">
          <div
            className="bg-white mx-auto lg:px-12 px-5 container"
            data-aos="fade-up"
          >
            <h1 className="pt-10  text-5xl font-bold">News</h1>
            <div className="mt-10">
              {news.map((news) => (
                <div className="border-b border-black" key={news.id}>
                  <div className="py-2 px-1 mx-auto flex">
                    <div className="flex justify-center items-center bg-black">
                      <time className="text-white text-sm px-6 py1">
                        2023.3.11
                      </time>
                    </div>
                    <p className="ml-7 lg:text-base text-sm ">
                      <Link href={`news/${news.id}`} className="">
                        {news.title}
                      </Link>
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <Pagination totalCount={totalCount} />
          </div>
        </div>
      </section>
    </div>
  );
}
