import type { NextPage } from "next";
import { useRouter } from "next/router";
import { ChangeEvent, FormEvent, useState } from "react";
import { Button, TextField } from "components/atoms";
import { isEmptyString } from "utils/common";

const Home: NextPage = () => {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleOnChange = (username: string) => {
    setError("");
    setUsername(username);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (isEmptyString(username)) {
      setError("Please fill in a Github username");
    } else {
      router.push(`username/${username}`);
    }
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
          <TextField
            value={username}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleOnChange(e.target.value)
            }
            className="mr-2 w-80"
            placeholder="Github username"
          />
          <Button text="Get repositories" submit />
        </form>
        {error && <div className="mt-1 text-red-500">{error}</div>}
      </div>
    </div>
  );
};

export default Home;
