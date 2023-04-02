import Head from "next/head";
export const appName = "Sample App";

function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>{children}</main>
    </>
  );
}

export default Layout;
