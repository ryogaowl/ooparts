import React from "react";
import hp from "public/images/code.jpg";
import ec from "public/images/service-ec.jpg";
import cms from "public/images/cms-2.jpg";

import Image from "next/image";

export default function service() {
  return (
    <div>
      <section>
        <div className="pt-20 mx-auto px-4 container">
          <h1 className="pt-14 pb-14 text-white text-6xl font-bold">Service</h1>
        </div>
      </section>
      <div className="bg-gray-700 relative">
        <div className="pt-3 pb-3 text-white mx-auto px-4 container font-bold">
          <span>Home &gt;</span>
          <span> Service</span>
        </div>
      </div>
      <section>
        <div className=" mx-auto px-4 container lg:mt-36 mt-20 text-white">
          <div className="lg:flex block justify-between flex-row-reverse">
            <Image
              src={hp}
              alt="ホームページ制作"
              className="block   lg:w-6/12 w-full md:h-96 h-64"
            />
            <div className=" lg:w-6/12 w-full pr-0 lg:pr-5">
              <h2 className="lg:text-center text-left mt-5  text-2xl font-bold">
                ホームページ制作
              </h2>
              <p className="lg:mt-10 mt-5 lg:leading-8 leading-normal flex justify-center">
                OOPARTS
                DESIGNでは、お客様のニーズに合わせた最適なホームページ制作をご提案します。
                お客様の情報や要望をヒアリングさせていただき、それをもとにデザインを１から作成いたします。
              </p>
            </div>
          </div>
          <div className="lg:flex block justify-between  mt-20 ">
            <Image
              src={ec}
              alt="ECサイト制作"
              className="block w-full  lg:w-6/12 md:h-96 h-64"
            />
            <div className="lg:w-6/12 w-full pl-0 lg:pl-5">
              <h2 className="lg:text-center text-left mt-5 text-2xl font-bold">
                ECサイト制作
              </h2>
              <p className="lg:mt-10 mt-5 lg:leading-8 leading-normal flex justify-center">
                ただきれいなデザインなだけではなく、お客様の強みや特性を活かした売れるデザインを心がけて制作いたします。
                <br />
              </p>
            </div>
          </div>
          <div className="lg:flex block justify-between  mt-20 flex-row-reverse">
            <Image
              src={cms}
              alt="CMS導入"
              className="block  w-full lg:w-6/12 md:h-96 h-64"
            />
            <div className="w-full lg:w-6/12 pr-0 lg:pr-5">
              <h2 className="lg:text-center text-left mt-5 text-2xl font-bold">
                CMS導入
              </h2>
              <p className="lg:mt-10 mt-5 leading-normal lg:leading-8 flex justify-center">
                お客様のホームページをお客様で簡単に更新できるCMSを導入いたします。
                Wordpressはもちろん、Jamstackという最新の技術を使用したページ遷移が高速なサイトの構築も可能です。
                <br />
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-36 w-screen bg-contact" data-aos="fade-up">
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
    </div>
  );
}
