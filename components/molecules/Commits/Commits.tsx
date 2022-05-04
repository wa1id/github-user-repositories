import { ChangeEvent, useState } from "react";
import { CommitItem, Spacer, TextField } from "components/atoms";
import { CommitsProperties } from "./Commits.properties";
import { NOT_FOUND_MESSAGE } from "constants/common";
import { Size } from "components/atoms/Spacer/Size";

export const Commits: React.FC<CommitsProperties> = ({ commits }) => {
  const [search, setSearch] = useState("");
  const { message: serverMessage } = commits;

  return (
    <>
      <TextField
        value={search}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setSearch(e.target.value)
        }
        className="w-full lg:w-80 lg:mr-2"
        placeholder="Search commit"
      />
      <Spacer size={Size.EXTRA_SMALL} />

      <div className="flex flex-col">
        {serverMessage === NOT_FOUND_MESSAGE && <div>Not found...</div>}
        {serverMessage !== NOT_FOUND_MESSAGE &&
          commits
            .filter((data: any) =>
              data.commit.message.toLowerCase().includes(search.toLowerCase())
            )
            .map((commit: any) => (
              <CommitItem key={commit.sha} commitData={commit} />
            ))}
      </div>
    </>
  );
};
