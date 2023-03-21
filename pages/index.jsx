import Head from "next/head";
import Image from "next/image";
import pic from "public/images/about.jpg";
import hp from "public/images/hp.png";
import ec from "public/images/ec.png";
import cms from "public/images/cms.png";
import Layout from "./components/Layout";
import { Fade } from "react-reveal";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <section className=" bg-cover bg-mv h-screen w-screen">
        <div className="relative flex items-center  top-72  ">
          <h1 className="text-center absolute inset-0 m-auto text-white text-7xl font-serif ">
            Think Creative and Logicaly
          </h1>
        </div>
      </section>
      {/* mvセクション */}

      <section className="bg-black">
        <div className="mx-auto px-4 container text-white flex justify-between  pt-16">
          <div>
            <Fade>
              <h1 className="pt-4 text-5xl font-bold">About</h1>
            </Fade>
            <Fade delay={500}>
              <p className="pt-8">
                OOPARTS
                DESIGNは、創造性と論理性を融合させたウェブデザインを提供する会社です。
                <br />
                Think creative and
                logicalyをモットーに、常に新しいアイデアとテクノロジーを取り入れながら、
                <br />
                お客様のビジネスやブランドの成長を支援しています。
                <br />
              </p>
            </Fade>
            <Fade delay={800}>
              <p>
                お客様のビジネスやブランドの成長を支援するために、OOPARTS
                DESIGNは常に最高のパ
                <br />
                フォーマンスを発揮します。私たちは、お客様と協力して、目標を達成するために最善を尽
                <br />
                くします。
              </p>
            </Fade>
          </div>
          <Fade delay={1000}>
            <div>
              <Image src={pic} alt="LOGO" className="block w-420 h-72" />
            </div>
          </Fade>
        </div>
        <div className="mt-14 pb-8 flex justify-center">
          <a
            href="#"
            class="w-fit text-white hover:text-gray-900 font-medium transition duration-300 ease-in-out border hover:border-gray-900 border-white rounded-full py-2 px-4 flex items-center"
          >
            <Fade delay={1000}>
              More
              <svg
                class="inline-block
 ml-1 w-4 h-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M6.175 13.567l1.292-1.293 3.175 3.175 3.175-3.175 1.292 1.293-4.467 4.467-4.467-4.467z" />
              </svg>
            </Fade>
          </a>
        </div>
      </section>
      {/* Aboutセクション */}

      <section>
        <div className="mx-auto px-4 container mt-16">
          <Fade>
            <h1 className=" text-5xl font-bold">Service</h1>
          </Fade>
          <div className="flex justify-between mt-12">
            <div className="w-1/4">
              <h2 className="text-xl text-center font-bold">
                ホームページ制作
              </h2>
              <div className="flex justify-center mt-5">
                <Image
                  src={hp}
                  alt="ホームページ制作"
                  className="block w-52 h-52"
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
            <div className="w-1/4">
              <h2 className="text-xl text-center font-bold">ECサイト制作</h2>
              <div className="flex justify-center mt-5">
                <Image
                  src={ec}
                  alt="ECサイト制作"
                  className="block w-52 h-52"
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
            <div className="w-1/4">
              <h2 className="text-xl text-center font-bold">CMS導入</h2>
              <div className="flex justify-center mt-5">
                <Image src={cms} alt="CMS導入" className="block w-52 h-52" />
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
              href="/"
              className="block  w-fit text-black hover:text-gray-900 font-medium transition duration-300 ease-in-out border hover:border-gray-900 border-black rounded-full py-2 px-4  items-center "
            >
              <Fade delay={1000}>More &gt;</Fade>
            </Link>
          </div>
        </div>
      </section>
      {/* Serviceセクション */}
      <section className="bg-black pb-8">
        <div className="block pt-16">
          <div className="bg-white mx-auto px-12 container">
            <h1 className="pt-10  text-5xl font-bold">News</h1>
            <div className="mt-10">
              <div className="border-b border-black">
                <div className="py-2 px-1 mx-auto flex">
                  <div className="bg-black">
                    <time className="text-white text-sm px-6 py1">
                      2023.3.11
                    </time>
                  </div>
                  <p className="ml-7">ホームページを制作しました！！</p>
                </div>
              </div>
              <div className="border-b border-black">
                <div className="py-2 px-1 mx-auto flex">
                  <div className="bg-black">
                    <time className="text-white text-sm px-6 py1">
                      2023.3.11
                    </time>
                  </div>
                  <p className="ml-7">ホームページを制作しました！！</p>
                </div>
              </div>
              <div className="border-b border-black">
                <div className="py-2 px-1 mx-auto flex">
                  <div className="bg-black">
                    <time className="text-white text-sm px-6 py1">
                      2023.3.11
                    </time>
                  </div>
                  <p className="ml-7">ホームページを制作しました！！</p>
                </div>
              </div>
              <div className="border-b border-black">
                <div className="py-2 px-1 mx-auto flex">
                  <div className="bg-black">
                    <time className="text-white text-sm px-6 py1">
                      2023.3.11
                    </time>
                  </div>
                  <p className="ml-7">ホームページを制作しました！！</p>
                </div>
              </div>
            </div>
            <div class="mt-10 pb-8 flex justify-center">
              <Link
                href="/"
                className="block  w-fit text-black hover:text-gray-900 font-medium transition duration-300 ease-in-out border hover:border-gray-900 border-black rounded-full py-2 px-4  items-center "
              >
                <Fade delay={1000}>More &gt;</Fade>
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
              <Fade delay={1000}>お問い合わせ</Fade>
            </a>
          </div>
        </div>
      </section>
      {/* Contactセクション */}
      <section>
        <div className="mx-auto px-4 container mt-16">
          <h1 className=" text-5xl font-bold">Works</h1>
        </div>
      </section>
    </Layout>
  );
}
