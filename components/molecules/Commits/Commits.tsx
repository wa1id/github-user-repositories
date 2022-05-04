import { ChangeEvent, useState } from "react";
import { CommitItem, Spacer, TextField } from "components/atoms";
import { NOT_FOUND_MESSAGE } from "constants/common";
import { Size } from "components/atoms/Spacer/Size";
import { CommitsProperties } from "./Commits.namespace";
import { CommitsInterface } from "namespace/commits.namespace";

export const Commits: React.FC<CommitsProperties> = ({ commits }) => {
  const [search, setSearch] = useState<string>("");
  const { message: serverMessage } = commits;

  const setSearchText = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const displayCommits = () => {
    return commits
      .filter((data: CommitsInterface) =>
        data.commit.message.toLowerCase().includes(search.toLowerCase())
      )
      .map((commit: CommitsInterface) => (
        <CommitItem key={commit.sha} commit={commit} />
      ));
  };

  return (
    <>
      <TextField
        value={search}
        onChange={setSearchText}
        className="w-full lg:w-80 lg:mr-2"
        placeholder="Search commit"
      />
      <Spacer size={Size.EXTRA_SMALL} />

      <div className="flex flex-col">
        {serverMessage === NOT_FOUND_MESSAGE && <div>Not found...</div>}
        {serverMessage !== NOT_FOUND_MESSAGE && displayCommits()}
      </div>
    </>
  );
};
