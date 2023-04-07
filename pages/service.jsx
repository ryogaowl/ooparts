import React from "react";
import hp from "public/images/code.jpg";
import ec from "public/images/service-ec.jpg";
import Image from "next/image";
function service() {
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
        <div className=" mx-auto px-4 container mt-36 text-white">
          <div className="flex justify-between flex-row-reverse">
            <Image
              src={hp}
              alt="ホームページ制作"
              className="block   w-6/12 h-72"
            />
            <div className="w-6/12 pr-5">
              <h2 className="text-center mt-5 text-2xl font-bold">
                ホームページ制作
              </h2>
              <p className="mt-10 leading-8 flex justify-center">
                お客様のニーズに合わせた最適なホームページ制作をご提案します。
                <br />
                お客様の情報や要望をヒアリングさせていただき、それをもとにデザインを１から作成いたします。
                <br />
              </p>
            </div>
          </div>
          <div className="flex justify-between  mt-20 ">
            <Image
              src={ec}
              alt="ECサイト制作"
              className="block   w-6/12 h-72"
            />
            <div className="w-6/12 pl-5">
              <h2 className="text-center mt-5 text-2xl font-bold">
                ECサイト制作
              </h2>
              <p className="mt-10 leading-8 flex justify-center">
                OOPARTS
                DESIGNでは、お客様のニーズに合わせた最適なホームページ制作をご提案します。
                お客様の情報や要望をヒアリングさせていただき、それをもとにデザインを１から作成いたします。
                <br />
              </p>
            </div>
          </div>
          <div className="flex justify-between  mt-20 flex-row-reverse">
            <Image
              src={hp}
              alt="ホームページ制作"
              className="block   w-6/12 h-72"
            />
            <div className="w-6/12 pr-5">
              <h2 className="text-center mt-5 text-2xl font-bold">
                ホームページ制作
              </h2>
              <p className="mt-10 leading-8 flex justify-center">
                OOPARTS
                DESIGNでは、お客様のニーズに合わせた最適なホームページ制作をご提案します。
                お客様の情報や要望をヒアリングさせていただき、それをもとにデザインを１から作成いたします。
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

export default service;
