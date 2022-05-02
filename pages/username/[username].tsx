import type { GetServerSideProps, NextPage } from "next";

interface Props {
  username: string;
}

const Username: NextPage<Props> = ({ username }) => {
  return <h1>test {username}</h1>;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const username = context.query.username;

  return { props: { username } };
};

export default Username;
