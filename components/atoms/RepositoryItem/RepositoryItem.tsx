import { RepositoryItemProperties } from "./RepositoryItem.namespace";

export const RepositoryItem: React.FC<RepositoryItemProperties> = ({
  repository,
}) => {
  const { name, description } = repository;

  return (
    <div className="bg-gray-200 h-full p-4 rounded-xl cursor-pointer hover:shadow-md transition duration-200 hover:bg-gray-300">
      <h2 className="text-xl font-bold">{name}</h2>
      <div className="italic text-sm">{description}</div>
    </div>
  );
};
