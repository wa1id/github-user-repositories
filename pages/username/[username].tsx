import type { GetServerSideProps, NextPage } from "next";
import { Spacer } from "components/atoms";
import { Size } from "components/atoms/Spacer/Size";
import { Repositories } from "components/molecules";

interface Props {
  username: string;
  userReposData: any; // TODO: types
}

const Username: NextPage<Props> = ({ username, userReposData }) => {
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
  const username = context.query.username;

  const fetchUserRepos = await fetch(
    `https://api.github.com/users/${username}/repos`
  );
  const userReposData = await fetchUserRepos.json();

  return { props: { username, userReposData } };
};

export default Username;
