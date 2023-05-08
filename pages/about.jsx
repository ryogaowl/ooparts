import pic from "public/images/logo2.png";
export default function About() {
  return (
    <div>
      <section>
        <div className="pt-20 mx-auto px-4 container">
          <h1 className="pt-14 pb-14 text-white text-6xl font-bold">About</h1>
        </div>
      </section>
      <div className="bg-gray-700 relative">
        <div className="pt-3 pb-3 text-white mx-auto px-4 container font-bold">
          <span>Home &gt;</span>
          <span> About</span>
        </div>
      </div>
      <section>
        <div className="text-white mx-auto px-4 container pb-20">
          <h2 className="text-xl font-mono pt-9 pb-5" data-aos="fade-up">
            Think creative and logically
          </h2>
          <p className="lg:leading-loose leading-normal" data-aos="fade-down">
            創造的でかつ論理的な思考をモットーに、私たちはWebを通じて、クライアント一人一人の問題を解決するための提案を行います。
            <br />
            私たちの使命は、案件の規模に関係なく、全ての仕事に情熱を注ぎ、クライアントと協力して素晴らしいプロダクトを生み出すことです。
          </p>
        </div>
      </section>
      <section>
        <div className="bg-white pb-20">
          <div className=" mx-auto px-4 container">
            <h1 className="pt-10  text-4xl font-bold" data-aos="fade-up">
              Company
            </h1>
          </div>
          <table className=" mx-auto px-4 container mt-12 border-collapse border border-gray-200 lg:w-9/12 w-11/12">
            <tbody>
              <tr>
                <td className="py-7 border-2 border-white p-2 text-center w-3/12 text-lg bg-table">
                  屋号
                </td>
                <td className="pl-2">OOPARTS DESIGN</td>
              </tr>

              <tr>
                <td className="py-7 border-2 border-white p-2 text-center w-3/12 text-lg bg-table">
                  創業
                </td>
                <td className="border border-gray-200 p-2">2023年1月〜</td>
              </tr>
              <tr>
                <td className="py-7 border border-white p-2 text-center w-3/12 text-lg bg-table">
                  所在地
                </td>
                <td className="border border-gray-200 p-2">
                  大阪府堺市北区金岡町312−2
                </td>
              </tr>
              <tr>
                <td className="py-7 border-2 border-white p-2 text-center w-3/12 text-lg bg-table">
                  電話番号
                </td>
                <td className="border border-gray-200 p-2">080-3135-6179</td>
              </tr>
              <tr>
                <td className="py-7 border border-white p-2 text-center w-3/12 text-lg bg-table">
                  代表
                </td>
                <td className="border border-gray-200 p-2">佐々木 凌河</td>
              </tr>
              <tr>
                <td className="py-7 border border-white p-2 text-center w-3/12 text-lg bg-table">
                  事業内容
                </td>
                <td className="border border-gray-200 p-2">
                  Webサイトのデザイン及び構築
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section>
        <div></div>
      </section>
    </div>
  );
}
