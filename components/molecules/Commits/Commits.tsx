import { CommitItem } from "components/atoms";
import { CommitsProperties } from "./Commits.properties";
import { NOT_FOUND_MESSAGE } from "constants/common";

export const Commits: React.FC<CommitsProperties> = ({ commits }) => {
  return (
    <div className="flex flex-col">
      {commits.message === NOT_FOUND_MESSAGE && <div>Not found...</div>}
      {commits.message !== NOT_FOUND_MESSAGE &&
        commits.map((commit: any) => (
          <CommitItem key={commit.sha} commitData={commit} />
        ))}
    </div>
  );
};
