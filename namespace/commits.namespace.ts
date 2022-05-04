export interface CommitsInterface {
  sha: string;
  commit: {
    message: string;
    committer: {
      name: string;
      date: Date;
    };
  };
  children?: React.ReactNode;
}
