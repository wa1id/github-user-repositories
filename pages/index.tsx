import type { NextPage } from "next";
import { Button, TextField } from "components/atoms";

const Home: NextPage = () => {
  const handleSubmit = () => {
    console.log("test");
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="m-auto">
        <video className="mb-8 mx-auto h-32" loop autoPlay muted>
          <source src="/assets/github-logo.mp4" type="video/mp4" />
        </video>

        <h1 className="text-4xl text-center capitalize mb-4">
          Github repository finder
        </h1>

        <form onSubmit={handleSubmit}>
          <TextField className="mr-2 w-80" placeholder="Github username" />
          <Button text="Get repositories" submit />
        </form>
      </div>
    </div>
  );
};

export default Home;
