import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import MainVisual from "../components/MainVisual";
import Entry from "../components/Entry"; //追加のentryコンポーメント
import Entries from "../components/Entries";
import Footer from "../components/Footer";
import Profile from "../components/Profile";

export default function Home(props) {
  return (
    <div>
      <Head>
        <title>ポートフォリオ</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Profile />

      <main>
        {/* 取得した記事分回してEntryコンポーネント表示する */}
        <Entries>
          {props.entries.contents.map((entry) => {
            return <Entry entry={entry} key={entry.id}></Entry>
          })}
        </Entries>
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
