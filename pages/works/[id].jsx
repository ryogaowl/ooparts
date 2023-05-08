import { client } from "../../libs/client";
import styles from "../../styles/Home.module.scss";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import Link from "next/link";

dayjs.extend(utc);
dayjs.extend(timezone);

export const getStaticProps = async (context) => {
  const worksId = context.params.id;
  const worksData = await client.get({ endpoint: "works", contentId: worksId });

  return {
    props: {
      works: worksData,
    },
  };
};

export async function getStaticPaths() {
  const worksData = await client.get({ endpoint: "works" });
  const paths = worksData.contents.map((content) => `/works/${content.id}`);
  return {
    paths,
    fallback: false,
  };
}

export default function WorksId({ works, convertDate }) {
  const publishedAt = dayjs(convertDate).format("YYYY.MM.DD");
  return (
    <div className="min-h-screen">
      <section>
        <div className="pt-20 mx-auto px-4 container">
          <h1 className="pt-14 pb-14 text-white text-6xl font-bold">Works</h1>
        </div>
      </section>
      <div className="bg-gray-700 relative">
        <div className="pt-3 pb-3 text-white mx-auto px-4 container font-bold">
          <spans>Home &gt;</spans>
          <span> Works &gt;</span>
          <span> {works.title}</span>
        </div>
      </div>
      <div className="text-sm text-white mx-auto px-4 container ">
        <div className="flex pt-5">
          <time className="block pr-3" dateTime={convertDate}>
            {publishedAt} :
          </time>
          <a href={works.url} target={"_blank"}>
            {works.url}
          </a>
        </div>
        <h1 className="text-3xl mb-3 pb-2 border-b-2 border-white mt-5">
          {works.title}{" "}
        </h1>

        <img
          src={works.thumbnail.url}
          alt=""
          className="lg:w-4/5 w-full mx-auto pt-9"
        />
        <div className="pt-5 pb-10">
          <div
            className={styles.works_container}
            dangerouslySetInnerHTML={{ __html: `${works.body}` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
