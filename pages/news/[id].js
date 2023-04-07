import { BLOCKED_PAGES } from "next/dist/shared/lib/constants";
import { client } from "../../libs/client";

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

export default function NewsId({ news }) {
  return (
    <div>
      <h1>{news.title}</h1>
      <p>{news.publishedAt}</p>
      <div
        className="text-white"
        dangerouslySetInnerHTML={{ __html: `${news.content}` }}
      ></div>
    </div>
  );
}
