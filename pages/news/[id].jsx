import { client } from "../../libs/client";
import styles from "../../styles/Home.module.scss";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "news", contentId: id });

  return {
    props: {
      news: data,
    },
  };
};

export async function getStaticPaths() {
  const data = await client.get({ endpoint: "news" });
  const paths = data.contents.map((content) => `/news/${content.id}`);
  return {
    paths,
    fallback: false,
  };
}

export default function NewsId({ news, convertDate }) {
  const publishedAt = dayjs(convertDate).format("YYYY.MM.DD");
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
          <span> News &gt;</span>
          <span> {news.title}</span>
        </div>
      </div>
      <div className="text-sm text-white mx-auto px-4 container ">
        <time className="block pt-5" dateTime={convertDate}>
          {publishedAt}
        </time>
        <h1 className="text-4xl mb-3 pb-2 border-b-2 border-white mt-5">
          {news.title}{" "}
        </h1>
        <div
          className={styles.container}
          dangerouslySetInnerHTML={{ __html: `${news.content}` }}
        ></div>
      </div>
    </div>
  );
}
