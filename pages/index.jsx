import Head from "next/head";
import Image from "next/image";
import pic from "public/images/about.jpg";
import hp from "public/images/hp.png";
import ec from "public/images/ec.png";
import cms from "public/images/cms.png";
import works from "public/images/works.png";
import works2 from "public/images/works2.png";
import works3 from "public/images/works3.png";
import Layout from "./components/Layout";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <section className="md:bg-cover  lg:bg-mv bg-mv2  h-screen w-screen">
        <div className="relative flex items-center  lg:top-72 top-56 ">
          <h1 className="text-center absolute inset-0 m-auto text-white lg:text-7xl md:text-6xl text-5xl font-serif ">
            Think creative and logically
          </h1>
        </div>
      </section>
      {/* mvセクション */}

      <section className="bg-black">
        <div className="mx-auto px-4 container text-white lg:flex  justify-between  lg:pt-16">
          <div>
            <h1 className="pt-10  text-5xl font-bold ">About</h1>
            <div className="lg:hidden block mt-10">
              <Image src={pic} alt="LOGO" className="block w-420 h-72" />
            </div>
            <p className="lg:pt-8 pt-12 lg:leading-5 leading-7">
              OOPARTS
              DESIGNは、創造性と論理性を融合させたウェブデザインを提供する会社です。
              <br />
              Think creative and
              logicallyをモットーに、常に新しいアイデアとテクノロジーを取り入れながら、
              <br className="lg:block hidden" />
              お客様のビジネスやブランドの成長を支援しています。
              <br />
            </p>

            <p>
              お客様のビジネスやブランドの成長を支援するために、OOPARTS
              DESIGNは常に最高のパ
              <br className="lg:block hidden" />
              フォーマンスを発揮します。私たちは、お客様と協力して、目標を達成するために最善を尽
              <br className="lg:block hidden" />
              くします。
            </p>
          </div>
          <div className="lg:block hidden">
            <Image src={pic} alt="LOGO" className="block w-420 h-72" />
          </div>
        </div>

        <div className="mt-14 pb-8 flex justify-center">
          <a
            href="#"
            class="w-fit text-white hover:text-gray-900 font-medium transition duration-300 ease-in-out border hover:border-gray-900 border-white rounded-full py-2 px-4 flex items-center"
          >
            View More →
          </a>
        </div>
      </section>
      {/* Aboutセクション */}

      <section>
        <div className="mx-auto px-4 container mt-16">
          <h1 className=" text-5xl font-bold">Service</h1>

          <div className="lg:flex justify-between mt-12">
            <div className="lg:w-1/4">
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
                <p>
                  お客様の情報や要望をヒアリング
                  <br />
                  させていただき、それをもとにデ
                  <br />
                  ザインを１から作成いたします。
                </p>
              </div>
            </div>
            <div className="lg:w-1/4">
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
                <p>
                  お客様の情報や要望をヒアリング
                  <br />
                  させていただき、それをもとにデ
                  <br />
                  ザインを１から作成いたします。
                </p>
              </div>
            </div>
            <div className="lg:w-1/4">
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
                <p>
                  お客様の情報や要望をヒアリング
                  <br />
                  させていただき、それをもとにデ
                  <br />
                  ザインを１から作成いたします。
                </p>
              </div>
            </div>
          </div>
          <div class="mt-14 pb-8 flex justify-center">
            <Link
              href="#"
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
          <div className="bg-white mx-auto lg:px-12 px-5 container">
            <h1 className="pt-10  text-5xl font-bold">News</h1>
            <div className="mt-10">
              <div className="border-b border-black">
                <div className="py-2 px-1 mx-auto flex">
                  <div className="flex justify-center items-center bg-black">
                    <time className="text-white text-sm px-6 py1">
                      2023.3.11
                    </time>
                  </div>
                  <p className="ml-7 lg:text-base text-sm">
                    ホームページを制作しました！！
                  </p>
                </div>
              </div>
              <div className="border-b border-black">
                <div className="py-2 px-1 mx-auto flex">
                  <div className="flex justify-center items-center bg-black">
                    <time className="text-white text-sm px-6 py1">
                      2023.3.11
                    </time>
                  </div>
                  <p className="ml-7 lg:text-base text-sm">
                    ホームページを制作しました！！
                  </p>
                </div>
              </div>
              <div className="border-b border-black">
                <div className="py-2 px-1 mx-auto flex">
                  <div className="flex justify-center items-center bg-black">
                    <time className="text-white text-sm px-6 py1">
                      2023.3.11
                    </time>
                  </div>
                  <p className="ml-7 lg:text-base text-sm">
                    ホームページを制作しました！！
                  </p>
                </div>
              </div>
              <div className="border-b border-black">
                <div className="py-2 px-1 mx-auto flex">
                  <div className="flex justify-center items-center bg-black">
                    <time className="text-white text-sm px-6 py1">
                      2023.3.11
                    </time>
                  </div>
                  <p className="ml-7 lg:text-base text-sm">
                    ホームページを制作しました！！
                  </p>
                </div>
              </div>
            </div>
            <div class="mt-10 pb-8 flex justify-center">
              <Link
                href="/"
                className="block  w-fit text-black hover:text-gray-900 font-medium transition duration-300 ease-in-out border hover:border-gray-900 border-black rounded-full py-2 px-4  items-center "
              >
                View More →
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Newsセクション */}
      <section className="w-screen bg-contact">
        <div>
          <h3 className="text-center text-4xl pt-11 text-white font-bold">
            無料相談はこちら！！
          </h3>
          <div className="mt-14 pb-8 flex justify-center">
            <a
              href="#"
              class="text-white hover:text-gray-900 font-medium transition duration-300 ease-in-out border hover:border-gray-900 border-white rounded-full py-2 px-7 flex items-center"
            >
              お問い合わせ
            </a>
          </div>
        </div>
      </section>
      {/* Contactセクション */}
      <section>
        <div className="mx-auto px-4 container mt-16 pb-36">
          <h1 className=" text-5xl font-bold">Works</h1>
          <div className=" mt-10 lg:flex justify-between">
            <div className="relative hover:cursor-pointer ">
              <Image
                src={works}
                alt="制作実績"
                className="block w-full mt-7 lg:w-80 h-full lg:h-52"
              />
              <div className="absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-90 bg-black transition ease-in-out duration-300 flex items-center justify-center">
                <p className="text-white text-center">詳細を見る</p>
              </div>
            </div>
            <div className="relative hover:cursor-pointer">
              <Image
                src={works2}
                alt="制作実績"
                className="block mt-7 w-full lg:w-80 h-full lg:h-52"
              />
              <div className="absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-90 bg-black transition ease-in-out duration-300 flex items-center justify-center">
                <p className="text-white text-center">詳細を見る</p>
              </div>
            </div>
            <div className="relative hover:cursor-pointer">
              <Image
                src={works3}
                alt="制作実績"
                className="block mt-7 w-full lg:w-80 h-full lg:h-52"
              />
              <div className="absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-90 bg-black transition ease-in-out duration-300 flex items-center justify-center">
                <p className="text-white text-center">詳細を見る</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
