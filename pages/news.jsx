import Link from "next/link";
import { client } from "../libs/client";

export async function getStaticProps() {
  const data = await client.get({
    endpoint: "news",
  });

  return {
    props: {
      news: data.contents,
    },
  };
}

export default function News({ news }) {
  return (
    <div className="min-h-screen">
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

      <section className=" pb-8 ">
        <div className="block pt-16 lg:px-0 px-5">
          <h2 className="text-center text-white text-3xl font-bold">
            {" "}
            News一覧
          </h2>
          <div className=" mx-auto lg:px-12 px-5 container" data-aos="fade-up">
            <div className="mt-14">
              {news.map((news) => (
                <div className="border-b border-white" key={news.id}>
                  <div className="py-2 px-1 mx-auto flex">
                    <div className="flex justify-center items-center bg-white">
                      <time className=" text-sm px-6 py1">2023.3.11</time>
                    </div>
                    <p className="text-white ml-7 lg:text-base text-sm ">
                      <Link href={`news/${news.id}`} className="">
                        {news.title}
                      </Link>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
