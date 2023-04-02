import Head from "next/head";
export const appName = "Sample App";

function Layout({ children }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>{children}</main>
    </div>
  );
}

export default Layout;
