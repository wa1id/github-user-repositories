import type { GetServerSideProps, NextPage } from "next";
import { Spacer } from "components/atoms";
import { Size } from "components/atoms/Spacer/Size";
import { Repositories } from "components/molecules";
import { Repository } from "namespace/repository.namespace";
import { useContext } from "react";
import AppContext from "context/state";

interface Props {
  username: string;
  userReposData: Repository[];
}

const Username: NextPage<Props> = ({ userReposData }) => {
  const { username } = useContext(AppContext);

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold mt-6 text-center">Repositories</h1>
      <div className="text-center text-sm">
        Public repositories found for {username}
      </div>

      <Spacer size={Size.MEDIUM} />
      <Repositories repos={userReposData} username={username} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { username } = context.query;

  try {
    const fetchUserRepos = await fetch(
      `https://api.github.com/users/${username}/repos`
    );
    const userReposData = await fetchUserRepos.json();

    if (!userReposData) {
      return { notFound: true };
    }

    return { props: { userReposData } };
  } catch (error) {
    return { notFound: true, error };
  }
};

export default Username;
