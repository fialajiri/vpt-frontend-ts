import Head from 'next/head'

interface SimpleHeadProps {
  title: string;
  description: string;
  url: string;
}

const SimpleHead: React.FC<SimpleHeadProps> = (props) => {
  return (
    <Head>
      <title>{props.title}</title>
      <meta name="description" content={props.description} />
      <meta property="og:url" content={`${process.env.HOST_URL}/${props.url}`} />
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.description} />
    </Head>
  );
};

export default SimpleHead;
