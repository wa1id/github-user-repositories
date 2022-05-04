import { CommitItemProperties } from "./CommitItem.namespace";

export const CommitItem: React.FC<CommitItemProperties> = ({ commit }) => {
  const {
    commit: { message, committer },
  } = commit;

  return (
    <div className="border-b border-gray-200 py-4">
      <div className="font-bold">{message}</div>
      <div className="italic text-sm">
        Committed by {committer.name} on{" "}
        {new Date(committer.date).toLocaleDateString("nl-BE")}
      </div>
    </div>
  );
};
