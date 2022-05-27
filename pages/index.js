import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Entry from "../components/Entry"; //追加のentryコンポーメント
import Footer from "../components/Footer";
import styles from "../styles/Home.module.css";

export default function Home(props) {
  console.log(props);
  return (
    <div>
      <Head>
        <title>ポートフォリオ</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        {/* 取得した記事分回してEntryコンポーネント表示する */}
        {props.entries.contents.map((entry) => {
          return <Entry entry={entry} key={entry.id}></Entry>;
        })}
      </main>

      <Footer />
    </div>
  );
}

import { client } from "../utils/client";

export const getStaticProps = async () => {
  const [entries] = await Promise.all([
    client.get({
      endpoint: "entries",

      queries: {
        orders: "-publishedAt",

        offset: 0,

        limit: 10,

        // fields: 'id,title,categories,tags,publishedAt,image,description'
      },
    }),
  ]);

  return {
    props: {
      entries,
    },
  };
};
