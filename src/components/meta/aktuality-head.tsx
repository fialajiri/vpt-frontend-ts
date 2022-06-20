import Head from "next/head";
import { AktualitaDoc } from "../../interfaces/models";

interface AktualityHeadProps {
  aktuality: AktualitaDoc[];
  title: string;
  description: string;
  url: string;
}

const AktualityHead: React.FC<AktualityHeadProps> = (props) => {
  let loadedNewsMeta = "";
  props.aktuality.map((aktualita) => {
    loadedNewsMeta += `${aktualita.title} - ${aktualita.subtitle}, `;
  });

  return (
    <Head>
      <title>{props.title}</title>
      <meta name="description" content={props.description} />
      <meta name="keywords" content={loadedNewsMeta} />
      <meta
        property="og:url"
        content={`${process.env.HOST_URL}/${props.url}`}
      />
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.description} />
    </Head>
  );
};

export default AktualityHead;
