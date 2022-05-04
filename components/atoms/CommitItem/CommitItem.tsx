import { CommitItemProperties } from "./CommitItem.properties";

export const CommitItem: React.FC<CommitItemProperties> = ({ commitData }) => {
  const {
    commit: { message, committer },
  } = commitData;

  return (
    <div className="border-b border-gray-200 py-4 mx-4 w-full">
      <div className="font-bold">{message}</div>
      <div className="italic text-sm">
        Committed by {committer.name} on{" "}
        {new Date(committer.date).toLocaleDateString("nl-BE")}
      </div>
    </div>
  );
};
