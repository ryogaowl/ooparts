import { Html, Head, Main, NextScript } from "next/document";
import { useState } from "react";

export default function Document() {
  const [openMenu, setOpenMenu] = useState(false);
  const handleMenuOpen = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <Html lang="ja">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
