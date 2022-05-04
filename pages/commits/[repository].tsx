import type { GetServerSideProps, NextPage } from "next";
import { Spacer } from "components/atoms";
import { Size } from "components/atoms/Spacer/Size";
import { Commits } from "components/molecules";

interface Props {
  repository: string;
  commitsData: any; // TODO: types
}

const Repository: NextPage<Props> = ({ repository, commitsData }) => {
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold mt-6 text-center">Commits</h1>
      <div className="text-center text-sm">Commits found for {repository}</div>

      <Spacer size={Size.MEDIUM} />
      <Commits commits={commitsData} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const username = context.query.username;
  const repository = context.query.repository;

  const fetchCommits = await fetch(
    `https://api.github.com/repos/${username}/${repository}/commits?per_page=20`
  );
  const commitsData = await fetchCommits.json();

  return { props: { repository, commitsData } };
};

export default Repository;
