import Header from "../../components/Header";
import Head from "next/head";
import Footer from "../../components/Footer";
import EntryDetail from"../../components/EntryDetail";
import { client } from "../../utils/client";

export function EntryDetailView(props) {
  console.log(props.entry);
  return (
    <div>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <EntryDetail entry={props.entry}/>
      </main>

      <Footer />
    </div>
  );
}

export const getStaticPaths = async () => {
  const { totalCount } = await client.get({
    endpoint: "entries",
    queries: {
      offset: 0,
      limit: 0,
      fields: "id",
    },
  });
  const e = await client.get({
    endpoint: "entries",
    queries: {
      limit: totalCount,
    },
  });
  const paths = e.contents.map((content) => `/entry/${content.id}`);

  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const id = context.params?.id;
  const entry = await client.get({ endpoint: "entries", contentId: id });

  return {
    props: {
      entry,
    },
  };
};

export default EntryDetailView;
