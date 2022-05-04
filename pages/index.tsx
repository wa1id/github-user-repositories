import type { NextPage } from "next";
import { useRouter } from "next/router";
import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { Button, Spacer, Spinner, TextField } from "components/atoms";
import { isEmptyString } from "utils/common";
import { Size } from "components/atoms/Spacer/Size";
import AppContext from "context/state";

const Home: NextPage = () => {
  const router = useRouter();
  const { username, setUsername } = useContext(AppContext);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const handleOnChange = (givenUsername: string) => {
    setError("");
    setUsername(givenUsername);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (isEmptyString(username)) {
      setError("Please fill in a Github username");
    } else {
      router.push(`username/${username}`);
    }
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="m-auto">
        <video className="mb-8 mx-auto h-32" loop autoPlay muted playsInline>
          <source src="/assets/github-logo.mp4" type="video/mp4" />
        </video>

        <h1 className="text-4xl text-center capitalize mb-4">
          Github repository finder
        </h1>

        <form
          className="flex flex-col items-center mx-1 lg:inline-flex lg:flex-row "
          onSubmit={handleSubmit}
        >
          <TextField
            value={username}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleOnChange(e.target.value)
            }
            className="w-full lg:w-80 lg:mr-2"
            placeholder="Github username"
          />
          <Spacer size={Size.EXTRA_SMALL} />
          <Button text="Get repositories" submit />
        </form>
        {loading && (
          <div className="flex justify-center mt-2">
            <Spinner />
          </div>
        )}
        {error && <div className="mt-1 text-red-500">{error}</div>}
      </div>
    </div>
  );
};

export default Home;
