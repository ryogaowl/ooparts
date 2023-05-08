import Head from "next/head";
import Image from "next/image";
import pic from "public/images/about.jpg";
import hp from "public/images/hp.png";
import ec from "public/images/ec.png";
import cms from "public/images/cms.png";
import works1 from "public/images/works.png";
import works2 from "public/images/works2.png";
import works3 from "public/images/works3.png";
import Layout from "./components/Layout";
import Link from "next/link";
import Typewriter from "typewriter-effect";
import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { client } from "../libs/client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination } from "swiper";
import "swiper/css/navigation"; // スタイルをインポート
import "swiper/css/pagination";

dayjs.extend(utc);
dayjs.extend(timezone);

export async function getStaticProps() {
  const data = await client.get({
    endpoint: "news",
  });
  const worksData = await client.get({
    endpoint: "works",
  });

  return {
    props: {
      news: data.contents,
      works: worksData.contents,
    },
  };
}
export default function Home({ news, works, convertDate }) {
  React.useEffect(() => {
    // 追加
    AOS.init({
      offset: 120,
      duration: 500,
      delay: 200,
      once: true,
    });
  }, []);
  const publishedAt = dayjs(convertDate).format("YYYY.MM.DD");
  return (
    <Layout>
      <section className="lg:bg-cover  lg:bg-mv bg-mv2  h-screen w-screen">
        <div className="relative flex items-center  lg:top-72 top-56 ">
          <h1 className="text-center absolute inset-0 m-auto text-white  lg:text-7xl md:text-6xl text-5xl font-serif ">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Think creative and logically")
                  .pauseFor()
                  .start();
              }}
            />
          </h1>
        </div>
      </section>
      {/* mvセクション */}

      <section className="bg-black">
        <div className="mx-auto px-4 container text-white lg:flex  justify-between  lg:pt-16 ">
          <div>
            <h1 className="pt-10  text-5xl font-bold" data-aos="fade-up">
              About
            </h1>
            <div className="lg:hidden block mt-10 ">
              <Image
                src={pic}
                alt="LOGO"
                className="block w-420 h-72"
                data-aos="fade-up"
              />
            </div>

            <p
              className="lg:pt-7 pt-7 lg:leading-5 leading-7"
              data-aos="fade-up"
            >
              OOPARTS
              DESIGNは、創造性と論理性を融合させたウェブデザインを提供する会社です。
              <br />
              Think creative and
              logicallyをモットーに、常に新しいアイデアとテクノロジーを取り入れながら、
              <br className="lg:block hidden" />
              お客様のビジネスやブランドの成長を支援しています。
              <br />
              お客様のビジネスやブランドの成長を支援するために、OOPARTS
              DESIGNは常に最高のパ
              <br className="lg:block hidden" />
              フォーマンスを発揮します。私たちは、お客様と協力して、目標を達成するために最善を尽
              <br className="lg:block hidden" />
              くします。
            </p>
          </div>
          <div className="">
            <Image
              src={pic}
              alt="LOGO"
              className="lg:block hidden w-420 h-72 "
            />
          </div>
        </div>

        <div className="mt-14 pb-8 flex justify-center" data-aos="zoom-in-up">
          <Link
            href="/about"
            class="w-fit text-white hover:text-gray-900 font-medium transition duration-300 ease-in-out border hover:border-gray-900 border-white rounded-full py-2 px-4 flex items-center"
          >
            View More →
          </Link>
        </div>
      </section>
      {/* Aboutセクション */}

      <section className="bg-white">
        <div className="mx-auto px-4 container pt-16">
          <h1 className=" text-5xl font-bold" data-aos="fade-up">
            Service
          </h1>

          <div className="lg:flex justify-between mt-12">
            <div className="lg:w-1/4" data-aos="fade-right">
              <h2 className="text-xl text-center font-bold">
                ホームページ制作
              </h2>
              <div className="flex justify-center mt-5">
                <Image
                  src={hp}
                  alt="ホームページ制作"
                  className="block  lg:w-52 w-40 lg:h-52 h-40"
                />
              </div>
              <div className="flex justify-center mt-3">
                <p className="text-center">
                  お客様の情報や要望をヒアリング
                  <br />
                  させていただき、それをもとにデ
                  <br />
                  ザインを１から作成いたします。
                </p>
              </div>
            </div>
            <div className="lg:w-1/4" data-aos="fade-right">
              <h2 className="lg:pt-0 pt-10 text-xl text-center font-bold">
                ECサイト制作
              </h2>
              <div className="flex justify-center mt-5">
                <Image
                  src={ec}
                  alt="ECサイト制作"
                  className="block  lg:w-52 w-40 lg:h-52 h-40"
                />
              </div>
              <div className="flex justify-center mt-3">
                <p className="text-center">
                  Shopifyの既存テーマを使用した
                  <br />
                  ECサイトを制作いたします。
                  <br />
                  テンプレートのみではなくカスタ
                  <br />
                  マイズも対応可能です。
                </p>
              </div>
            </div>
            <div className="lg:w-1/4" data-aos="fade-right">
              <h2 className="lg:pt-0 pt-10 text-xl text-center font-bold">
                CMS導入
              </h2>
              <div className="flex justify-center mt-5">
                <Image
                  src={cms}
                  alt="CMS導入"
                  className="block lg:w-52 w-40 lg:h-52 h-40"
                />
              </div>
              <div className="flex justify-center mt-3">
                <p className="text-center">
                  ブログやコーポレートサイト運用
                  <br />
                  をお客様で簡単に行えるCMSを導
                  <br />
                  入したサイトを制作いたします。
                  <br />
                  Wordpressはもちろん、
                  <br />
                  Jamstackでの構築も可能です。
                </p>
              </div>
            </div>
          </div>
          <div class="mt-14 pb-8 flex justify-center" data-aos="zoom-in-up">
            <Link
              href="/service"
              class="w-fit text-black hover:text-gray-900 font-medium transition duration-300 ease-in-out border hover:border-gray-900 border-black rounded-full py-2 px-4 flex items-center"
            >
              View More →
            </Link>
          </div>
        </div>
      </section>
      {/* Serviceセクション */}
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
                      <time
                        className="text-white text-sm px-6 py1 "
                        dateTime={convertDate}
                      >
                        {publishedAt}
                      </time>
                    </div>
                    <p className="ml-7 lg:text-base text-sm">
                      <Link href={`news/${news.id}`} className="">
                        {news.title}
                      </Link>
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div class="mt-10 pb-8 flex justify-center">
              <Link
                href="/news"
                className="block  w-fit text-black hover:text-gray-900 font-medium transition duration-300 ease-in-out border hover:border-gray-900 border-black rounded-full py-2 px-4  items-center "
              >
                View More →
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Newsセクション */}
      <section className="w-screen bg-contact" data-aos="fade-up">
        <div>
          <h3 className="text-center text-4xl pt-11 text-white font-bold">
            無料相談はこちら！！
          </h3>
          <div className="mt-14 pb-8 flex justify-center">
            <Link
              href="/contact"
              class="text-white hover:text-gray-900 font-medium transition duration-300 ease-in-out border hover:border-gray-900 border-white rounded-full py-2 px-7 flex items-center"
            >
              お問い合わせ
            </Link>
          </div>
        </div>
      </section>
      {/* Contactセクション */}

      <section className="bg-white" id="works">
        <div className="mx-auto px-4 container pt-16 pb-20">
          <h1 className=" text-5xl font-bold" data-aos="fade-up">
            Works
          </h1>
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            className="
            mt-10
            [&_.swiper-pagination]:relative
            [&_.swiper-pagination]:mt-5
            [&_.swiper-pagination-bullet-active]:!bg-black
            [&_.swiper-pagination-bullet]:h-[11px]
            [&_.swiper-pagination-bullet]:w-[11px]
            [&_.swiper-pagination-bullet]:bg-[#888]
            lg:w-10/12 w-full
            "
          >
            {works.map((work) => (
              <div key={work}>
                <SwiperSlide>
                  <Link href={`works/${work.id}`}>
                    <img src={work.thumbnail.url} alt="" />
                  </Link>
                </SwiperSlide>
              </div>
            ))}
          </Swiper>
        </div>
      </section>
    </Layout>
  );
}
