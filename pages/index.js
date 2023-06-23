import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import MainVisual from "../components/MainVisual";
import Entry from "../components/Entry"; //追加のentryコンポーメント
import Entries from "../components/Entries";
import Footer from "../components/Footer";
import Profile from "../components/Profile";

export default function Home(props) {
  const entries = props.entries.contents
  const graphicEntries = entries.filter((entry) => entry.category[0] === 'Graphic')
  const webEntries = entries.filter((entry) => entry.category[0] === 'Web')
  const photoEntries = entries.filter((entry) => entry.category[0] === 'Photo')
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
        <Entries title="Graphic">
          {graphicEntries.map((entry) => {
            return <Entry entry={entry} key={entry.id}></Entry>
          })}
        </Entries>

        <Entries title="Web">
          {webEntries.map((entry) => {
            console.log(entry)
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

        limit: 99,

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
