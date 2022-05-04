import type { GetServerSideProps, NextPage } from "next";
import { Spacer } from "components/atoms";
import { Size } from "components/atoms/Spacer/Size";
import { Commits } from "components/molecules";

interface Props {
  repository: string;
  commitsData: any; // TODO: types
}

const Repository: NextPage<Props> = ({ repository, commitsData }) => {
  console.log("commitsData", commitsData);

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold mt-6 text-center">Commits</h1>
      <div className="text-center text-sm">Commits found for {repository}</div>

      <Spacer size={Size.MEDIUM} />
      <Commits commits={commitsData} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const username = context.query.username;
  const repository = context.query.repository;

  //   const fetchCommits = await fetch(
  //     `https://api.github.com/repos/${username}/${repository}/commits?per_page=20`
  //   );
  //   const commitsData = await fetchCommits.json();

  const commitsData = [
    {
      sha: "d6cbacdea65531f843a77994b9ce64bfb0fb0bff",
      node_id:
        "MDY6Q29tbWl0Mjk1MTMzNzQ0OmQ2Y2JhY2RlYTY1NTMxZjg0M2E3Nzk5NGI5Y2U2NGJmYjBmYjBiZmY=",
      commit: {
        author: {
          name: "Walid",
          email: "walid@Walids-iMac.local",
          date: "2020-09-16T21:27:29Z",
        },
        committer: {
          name: "Walid",
          email: "walid@Walids-iMac.local",
          date: "2020-09-16T21:27:29Z",
        },
        message: "button",
        tree: {
          sha: "675fee265ac77578234234ad32085e4b2f7c9827",
          url: "https://api.github.com/repos/wa1id/airbnb-clone-react/git/trees/675fee265ac77578234234ad32085e4b2f7c9827",
        },
        url: "https://api.github.com/repos/wa1id/airbnb-clone-react/git/commits/d6cbacdea65531f843a77994b9ce64bfb0fb0bff",
        comment_count: 0,
        verification: {
          verified: false,
          reason: "unsigned",
          signature: null,
          payload: null,
        },
      },
      url: "https://api.github.com/repos/wa1id/airbnb-clone-react/commits/d6cbacdea65531f843a77994b9ce64bfb0fb0bff",
      html_url:
        "https://github.com/wa1id/airbnb-clone-react/commit/d6cbacdea65531f843a77994b9ce64bfb0fb0bff",
      comments_url:
        "https://api.github.com/repos/wa1id/airbnb-clone-react/commits/d6cbacdea65531f843a77994b9ce64bfb0fb0bff/comments",
      author: null,
      committer: null,
      parents: [
        {
          sha: "c3a5e722ac9706c7608ceda21250d21600d6cced",
          url: "https://api.github.com/repos/wa1id/airbnb-clone-react/commits/c3a5e722ac9706c7608ceda21250d21600d6cced",
          html_url:
            "https://github.com/wa1id/airbnb-clone-react/commit/c3a5e722ac9706c7608ceda21250d21600d6cced",
        },
      ],
    },
    {
      sha: "c3a5e722ac9706c7608ceda21250d21600d6cced",
      node_id:
        "MDY6Q29tbWl0Mjk1MTMzNzQ0OmMzYTVlNzIyYWM5NzA2Yzc2MDhjZWRhMjEyNTBkMjE2MDBkNmNjZWQ=",
      commit: {
        author: {
          name: "Walid",
          email: "walid@Walids-iMac.local",
          date: "2020-09-16T21:24:21Z",
        },
        committer: {
          name: "Walid",
          email: "walid@Walids-iMac.local",
          date: "2020-09-16T21:24:21Z",
        },
        message: "disable outline for number of guests input",
        tree: {
          sha: "80b50169b8524fc294c5f6c47975b4220077a607",
          url: "https://api.github.com/repos/wa1id/airbnb-clone-react/git/trees/80b50169b8524fc294c5f6c47975b4220077a607",
        },
        url: "https://api.github.com/repos/wa1id/airbnb-clone-react/git/commits/c3a5e722ac9706c7608ceda21250d21600d6cced",
        comment_count: 0,
        verification: {
          verified: false,
          reason: "unsigned",
          signature: null,
          payload: null,
        },
      },
      url: "https://api.github.com/repos/wa1id/airbnb-clone-react/commits/c3a5e722ac9706c7608ceda21250d21600d6cced",
      html_url:
        "https://github.com/wa1id/airbnb-clone-react/commit/c3a5e722ac9706c7608ceda21250d21600d6cced",
      comments_url:
        "https://api.github.com/repos/wa1id/airbnb-clone-react/commits/c3a5e722ac9706c7608ceda21250d21600d6cced/comments",
      author: null,
      committer: null,
      parents: [
        {
          sha: "ee523484d961f0408caac8f843e2ae7f918c0f07",
          url: "https://api.github.com/repos/wa1id/airbnb-clone-react/commits/ee523484d961f0408caac8f843e2ae7f918c0f07",
          html_url:
            "https://github.com/wa1id/airbnb-clone-react/commit/ee523484d961f0408caac8f843e2ae7f918c0f07",
        },
      ],
    },
    {
      sha: "ee523484d961f0408caac8f843e2ae7f918c0f07",
      node_id:
        "MDY6Q29tbWl0Mjk1MTMzNzQ0OmVlNTIzNDg0ZDk2MWYwNDA4Y2FhYzhmODQzZTJhZTdmOTE4YzBmMDc=",
      commit: {
        author: {
          name: "Walid",
          email: "walid@Walids-iMac.local",
          date: "2020-09-15T22:59:08Z",
        },
        committer: {
          name: "Walid",
          email: "walid@Walids-iMac.local",
          date: "2020-09-15T22:59:08Z",
        },
        message: "materialui icons dependency",
        tree: {
          sha: "350739589fa5610a918ed43ae88ff2b62280d5e8",
          url: "https://api.github.com/repos/wa1id/airbnb-clone-react/git/trees/350739589fa5610a918ed43ae88ff2b62280d5e8",
        },
        url: "https://api.github.com/repos/wa1id/airbnb-clone-react/git/commits/ee523484d961f0408caac8f843e2ae7f918c0f07",
        comment_count: 0,
        verification: {
          verified: false,
          reason: "unsigned",
          signature: null,
          payload: null,
        },
      },
      url: "https://api.github.com/repos/wa1id/airbnb-clone-react/commits/ee523484d961f0408caac8f843e2ae7f918c0f07",
      html_url:
        "https://github.com/wa1id/airbnb-clone-react/commit/ee523484d961f0408caac8f843e2ae7f918c0f07",
      comments_url:
        "https://api.github.com/repos/wa1id/airbnb-clone-react/commits/ee523484d961f0408caac8f843e2ae7f918c0f07/comments",
      author: null,
      committer: null,
      parents: [
        {
          sha: "0c081b1f2a84ed81f7b47aaafeae01d1181a71b4",
          url: "https://api.github.com/repos/wa1id/airbnb-clone-react/commits/0c081b1f2a84ed81f7b47aaafeae01d1181a71b4",
          html_url:
            "https://github.com/wa1id/airbnb-clone-react/commit/0c081b1f2a84ed81f7b47aaafeae01d1181a71b4",
        },
      ],
    },
  ];

  return { props: { repository, commitsData } };
};

export default Repository;
