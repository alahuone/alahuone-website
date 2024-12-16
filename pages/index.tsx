import Link from "next/link";
import Head from "next/head";

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>alahuone</title>
      </Head>
      <h2>alternative gaming community</h2>
      <h1>alahuone</h1>
      <div className="right">
        <a href="https://discord.gg/YBnU7cPJsF">your personal invitation 👈</a>
        <br />
        <a href="mailto:hello@alahuone.co">
          <small>or get in touch 💋</small>
        </a>
      </div>
    </>
  );
}
