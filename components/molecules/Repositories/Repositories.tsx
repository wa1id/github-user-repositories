import Link from "next/link";
import { RepositoryItem } from "components/atoms";
import { RepositoriesProperties } from "./Repositories.properties";
import { NOT_FOUND_MESSAGE } from "constants/common";

export const Repositories: React.FC<RepositoriesProperties> = ({
  repos,
  username,
}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mx-2 justify-center">
      {/* TODO: implement a not found component */}
      {repos.message === NOT_FOUND_MESSAGE && <div>Not found...</div>}
      {repos.message !== NOT_FOUND_MESSAGE &&
        repos.map((repo: any) => (
          <Link
            key={repo.id}
            href={`/commits/${repo.name}?username=${username}`}
            passHref
          >
            <a>
              <RepositoryItem repository={repo} />
            </a>
          </Link>
        ))}
    </div>
  );
};
