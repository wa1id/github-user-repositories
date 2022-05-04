import type { GetServerSideProps, NextPage } from "next";
import { Spacer } from "components/atoms";
import { Size } from "components/atoms/Spacer/Size";
import { Commits } from "components/molecules";
import { CommitsInterface } from "namespace/commits.namespace";

interface Props {
  repository: string;
  commitsData: CommitsInterface[];
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
  const { username, repository } = context.query;

  try {
    const fetchCommits = await fetch(
      `https://api.github.com/repos/${username}/${repository}/commits?per_page=20`
    );
    const commitsData = await fetchCommits.json();

    if (!commitsData) {
      return { notFound: true };
    }

    return { props: { repository, commitsData } };
  } catch (error) {
    return { notFound: true, error };
  }
};

export default Repository;
