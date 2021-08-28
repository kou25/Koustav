import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Koustav Manna is a full stack web developer building websites and applications"
      />
      <meta
        name="keywords"
        content="koustav, Koustav Manna, manna, web developer, koustav web developer, koustav developer, mern stack, koustav portfolio"
      />
      <meta property="og:title" content="Koustav Manna's Portfolio" />
      <meta
        property="og:description"
        content="A full-stack developer building websites with various JS technologies."
      />
      <meta property="og:image" content="https://imgur.com/4zi5KkQ.png" />
      <meta property="og:url" content="https://vscode-portfolio.vercel.app" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Koustav Manna',
};
