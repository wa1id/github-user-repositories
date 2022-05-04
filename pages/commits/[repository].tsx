import type { GetServerSideProps, NextPage } from "next";
import { Spacer } from "components/atoms";
import { Size } from "components/atoms/Spacer/Size";
import { Commits } from "components/molecules";
import { CommitsInterface } from "namespace/commits.namespace";

interface Props {
  repository: string;
  commitsData: CommitsInterface[];
}

const Repository: NextPage<Props> = ({ repository, commitsData }) => {
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
  const { username, repository } = context.query;

  try {
    // const fetchCommits = await fetch(
    //   `https://api.github.com/repos/${username}/${repository}/commits?per_page=20`
    // );
    // const commitsData = await fetchCommits.json();

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
      {
        sha: "0c081b1f2a84ed81f7b47aaafeae01d1181a71b4",
        node_id:
          "MDY6Q29tbWl0Mjk1MTMzNzQ0OjBjMDgxYjFmMmE4NGVkODFmN2I0N2FhYWZlYWUwMWQxMTgxYTcxYjQ=",
        commit: {
          author: {
            name: "wa1id",
            email: "wa1id@users.noreply.github.com",
            date: "2020-09-13T11:06:39Z",
          },
          committer: {
            name: "wa1id",
            email: "wa1id@users.noreply.github.com",
            date: "2020-09-13T11:06:39Z",
          },
          message: "datepicker css",
          tree: {
            sha: "23f891b429c6ce8973bcecb597f01ed0664c1f3c",
            url: "https://api.github.com/repos/wa1id/airbnb-clone-react/git/trees/23f891b429c6ce8973bcecb597f01ed0664c1f3c",
          },
          url: "https://api.github.com/repos/wa1id/airbnb-clone-react/git/commits/0c081b1f2a84ed81f7b47aaafeae01d1181a71b4",
          comment_count: 0,
          verification: {
            verified: false,
            reason: "unsigned",
            signature: null,
            payload: null,
          },
        },
        url: "https://api.github.com/repos/wa1id/airbnb-clone-react/commits/0c081b1f2a84ed81f7b47aaafeae01d1181a71b4",
        html_url:
          "https://github.com/wa1id/airbnb-clone-react/commit/0c081b1f2a84ed81f7b47aaafeae01d1181a71b4",
        comments_url:
          "https://api.github.com/repos/wa1id/airbnb-clone-react/commits/0c081b1f2a84ed81f7b47aaafeae01d1181a71b4/comments",
        author: {
          login: "wa1id",
          id: 23665945,
          node_id: "MDQ6VXNlcjIzNjY1OTQ1",
          avatar_url: "https://avatars.githubusercontent.com/u/23665945?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/wa1id",
          html_url: "https://github.com/wa1id",
          followers_url: "https://api.github.com/users/wa1id/followers",
          following_url:
            "https://api.github.com/users/wa1id/following{/other_user}",
          gists_url: "https://api.github.com/users/wa1id/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/wa1id/starred{/owner}{/repo}",
          subscriptions_url: "https://api.github.com/users/wa1id/subscriptions",
          organizations_url: "https://api.github.com/users/wa1id/orgs",
          repos_url: "https://api.github.com/users/wa1id/repos",
          events_url: "https://api.github.com/users/wa1id/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/wa1id/received_events",
          type: "User",
          site_admin: false,
        },
        committer: {
          login: "wa1id",
          id: 23665945,
          node_id: "MDQ6VXNlcjIzNjY1OTQ1",
          avatar_url: "https://avatars.githubusercontent.com/u/23665945?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/wa1id",
          html_url: "https://github.com/wa1id",
          followers_url: "https://api.github.com/users/wa1id/followers",
          following_url:
            "https://api.github.com/users/wa1id/following{/other_user}",
          gists_url: "https://api.github.com/users/wa1id/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/wa1id/starred{/owner}{/repo}",
          subscriptions_url: "https://api.github.com/users/wa1id/subscriptions",
          organizations_url: "https://api.github.com/users/wa1id/orgs",
          repos_url: "https://api.github.com/users/wa1id/repos",
          events_url: "https://api.github.com/users/wa1id/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/wa1id/received_events",
          type: "User",
          site_admin: false,
        },
        parents: [
          {
            sha: "889b1f336c7d88badc0e3c1071bc49c248222c75",
            url: "https://api.github.com/repos/wa1id/airbnb-clone-react/commits/889b1f336c7d88badc0e3c1071bc49c248222c75",
            html_url:
              "https://github.com/wa1id/airbnb-clone-react/commit/889b1f336c7d88badc0e3c1071bc49c248222c75",
          },
        ],
      },
      {
        sha: "889b1f336c7d88badc0e3c1071bc49c248222c75",
        node_id:
          "MDY6Q29tbWl0Mjk1MTMzNzQ0Ojg4OWIxZjMzNmM3ZDg4YmFkYzBlM2MxMDcxYmM0OWMyNDgyMjJjNzU=",
        commit: {
          author: {
            name: "wa1id",
            email: "wa1id@users.noreply.github.com",
            date: "2020-09-05T00:46:07Z",
          },
          committer: {
            name: "wa1id",
            email: "wa1id@users.noreply.github.com",
            date: "2020-09-05T00:46:07Z",
          },
          message: "Add DateRangePicker",
          tree: {
            sha: "9d071aecf562dd4f4ca0eb6d1430a67d74d637e9",
            url: "https://api.github.com/repos/wa1id/airbnb-clone-react/git/trees/9d071aecf562dd4f4ca0eb6d1430a67d74d637e9",
          },
          url: "https://api.github.com/repos/wa1id/airbnb-clone-react/git/commits/889b1f336c7d88badc0e3c1071bc49c248222c75",
          comment_count: 0,
          verification: {
            verified: false,
            reason: "unsigned",
            signature: null,
            payload: null,
          },
        },
        url: "https://api.github.com/repos/wa1id/airbnb-clone-react/commits/889b1f336c7d88badc0e3c1071bc49c248222c75",
        html_url:
          "https://github.com/wa1id/airbnb-clone-react/commit/889b1f336c7d88badc0e3c1071bc49c248222c75",
        comments_url:
          "https://api.github.com/repos/wa1id/airbnb-clone-react/commits/889b1f336c7d88badc0e3c1071bc49c248222c75/comments",
        author: {
          login: "wa1id",
          id: 23665945,
          node_id: "MDQ6VXNlcjIzNjY1OTQ1",
          avatar_url: "https://avatars.githubusercontent.com/u/23665945?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/wa1id",
          html_url: "https://github.com/wa1id",
          followers_url: "https://api.github.com/users/wa1id/followers",
          following_url:
            "https://api.github.com/users/wa1id/following{/other_user}",
          gists_url: "https://api.github.com/users/wa1id/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/wa1id/starred{/owner}{/repo}",
          subscriptions_url: "https://api.github.com/users/wa1id/subscriptions",
          organizations_url: "https://api.github.com/users/wa1id/orgs",
          repos_url: "https://api.github.com/users/wa1id/repos",
          events_url: "https://api.github.com/users/wa1id/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/wa1id/received_events",
          type: "User",
          site_admin: false,
        },
        committer: {
          login: "wa1id",
          id: 23665945,
          node_id: "MDQ6VXNlcjIzNjY1OTQ1",
          avatar_url: "https://avatars.githubusercontent.com/u/23665945?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/wa1id",
          html_url: "https://github.com/wa1id",
          followers_url: "https://api.github.com/users/wa1id/followers",
          following_url:
            "https://api.github.com/users/wa1id/following{/other_user}",
          gists_url: "https://api.github.com/users/wa1id/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/wa1id/starred{/owner}{/repo}",
          subscriptions_url: "https://api.github.com/users/wa1id/subscriptions",
          organizations_url: "https://api.github.com/users/wa1id/orgs",
          repos_url: "https://api.github.com/users/wa1id/repos",
          events_url: "https://api.github.com/users/wa1id/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/wa1id/received_events",
          type: "User",
          site_admin: false,
        },
        parents: [
          {
            sha: "1a8b45f48e52a58befc63f06b959e1277fad5cde",
            url: "https://api.github.com/repos/wa1id/airbnb-clone-react/commits/1a8b45f48e52a58befc63f06b959e1277fad5cde",
            html_url:
              "https://github.com/wa1id/airbnb-clone-react/commit/1a8b45f48e52a58befc63f06b959e1277fad5cde",
          },
        ],
      },
      {
        sha: "1a8b45f48e52a58befc63f06b959e1277fad5cde",
        node_id:
          "MDY6Q29tbWl0Mjk1MTMzNzQ0OjFhOGI0NWY0OGU1MmE1OGJlZmM2M2YwNmI5NTllMTI3N2ZhZDVjZGU=",
        commit: {
          author: {
            name: "wa1id",
            email: "wa1id@users.noreply.github.com",
            date: "2020-09-05T00:34:31Z",
          },
          committer: {
            name: "wa1id",
            email: "wa1id@users.noreply.github.com",
            date: "2020-09-05T00:34:31Z",
          },
          message: "add datepicker component",
          tree: {
            sha: "a5f9ebaa919f4157532936dc1a41a9edc6cff000",
            url: "https://api.github.com/repos/wa1id/airbnb-clone-react/git/trees/a5f9ebaa919f4157532936dc1a41a9edc6cff000",
          },
          url: "https://api.github.com/repos/wa1id/airbnb-clone-react/git/commits/1a8b45f48e52a58befc63f06b959e1277fad5cde",
          comment_count: 0,
          verification: {
            verified: false,
            reason: "unsigned",
            signature: null,
            payload: null,
          },
        },
        url: "https://api.github.com/repos/wa1id/airbnb-clone-react/commits/1a8b45f48e52a58befc63f06b959e1277fad5cde",
        html_url:
          "https://github.com/wa1id/airbnb-clone-react/commit/1a8b45f48e52a58befc63f06b959e1277fad5cde",
        comments_url:
          "https://api.github.com/repos/wa1id/airbnb-clone-react/commits/1a8b45f48e52a58befc63f06b959e1277fad5cde/comments",
        author: {
          login: "wa1id",
          id: 23665945,
          node_id: "MDQ6VXNlcjIzNjY1OTQ1",
          avatar_url: "https://avatars.githubusercontent.com/u/23665945?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/wa1id",
          html_url: "https://github.com/wa1id",
          followers_url: "https://api.github.com/users/wa1id/followers",
          following_url:
            "https://api.github.com/users/wa1id/following{/other_user}",
          gists_url: "https://api.github.com/users/wa1id/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/wa1id/starred{/owner}{/repo}",
          subscriptions_url: "https://api.github.com/users/wa1id/subscriptions",
          organizations_url: "https://api.github.com/users/wa1id/orgs",
          repos_url: "https://api.github.com/users/wa1id/repos",
          events_url: "https://api.github.com/users/wa1id/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/wa1id/received_events",
          type: "User",
          site_admin: false,
        },
        committer: {
          login: "wa1id",
          id: 23665945,
          node_id: "MDQ6VXNlcjIzNjY1OTQ1",
          avatar_url: "https://avatars.githubusercontent.com/u/23665945?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/wa1id",
          html_url: "https://github.com/wa1id",
          followers_url: "https://api.github.com/users/wa1id/followers",
          following_url:
            "https://api.github.com/users/wa1id/following{/other_user}",
          gists_url: "https://api.github.com/users/wa1id/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/wa1id/starred{/owner}{/repo}",
          subscriptions_url: "https://api.github.com/users/wa1id/subscriptions",
          organizations_url: "https://api.github.com/users/wa1id/orgs",
          repos_url: "https://api.github.com/users/wa1id/repos",
          events_url: "https://api.github.com/users/wa1id/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/wa1id/received_events",
          type: "User",
          site_admin: false,
        },
        parents: [
          {
            sha: "7e92708b255ca4541a7ee0aa9330d3335468c13e",
            url: "https://api.github.com/repos/wa1id/airbnb-clone-react/commits/7e92708b255ca4541a7ee0aa9330d3335468c13e",
            html_url:
              "https://github.com/wa1id/airbnb-clone-react/commit/7e92708b255ca4541a7ee0aa9330d3335468c13e",
          },
        ],
      },
      {
        sha: "7e92708b255ca4541a7ee0aa9330d3335468c13e",
        node_id:
          "MDY6Q29tbWl0Mjk1MTMzNzQ0OjdlOTI3MDhiMjU1Y2E0NTQxYTdlZTBhYTkzMzBkMzMzNTQ2OGMxM2U=",
        commit: {
          author: {
            name: "wa1id",
            email: "wa1id@users.noreply.github.com",
            date: "2020-09-05T00:29:16Z",
          },
          committer: {
            name: "wa1id",
            email: "wa1id@users.noreply.github.com",
            date: "2020-09-05T00:29:16Z",
          },
          message: "clicking on button shows and hides h1",
          tree: {
            sha: "ecaddcbdba02b4af76a01ffe990007edde4db369",
            url: "https://api.github.com/repos/wa1id/airbnb-clone-react/git/trees/ecaddcbdba02b4af76a01ffe990007edde4db369",
          },
          url: "https://api.github.com/repos/wa1id/airbnb-clone-react/git/commits/7e92708b255ca4541a7ee0aa9330d3335468c13e",
          comment_count: 0,
          verification: {
            verified: false,
            reason: "unsigned",
            signature: null,
            payload: null,
          },
        },
        url: "https://api.github.com/repos/wa1id/airbnb-clone-react/commits/7e92708b255ca4541a7ee0aa9330d3335468c13e",
        html_url:
          "https://github.com/wa1id/airbnb-clone-react/commit/7e92708b255ca4541a7ee0aa9330d3335468c13e",
        comments_url:
          "https://api.github.com/repos/wa1id/airbnb-clone-react/commits/7e92708b255ca4541a7ee0aa9330d3335468c13e/comments",
        author: {
          login: "wa1id",
          id: 23665945,
          node_id: "MDQ6VXNlcjIzNjY1OTQ1",
          avatar_url: "https://avatars.githubusercontent.com/u/23665945?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/wa1id",
          html_url: "https://github.com/wa1id",
          followers_url: "https://api.github.com/users/wa1id/followers",
          following_url:
            "https://api.github.com/users/wa1id/following{/other_user}",
          gists_url: "https://api.github.com/users/wa1id/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/wa1id/starred{/owner}{/repo}",
          subscriptions_url: "https://api.github.com/users/wa1id/subscriptions",
          organizations_url: "https://api.github.com/users/wa1id/orgs",
          repos_url: "https://api.github.com/users/wa1id/repos",
          events_url: "https://api.github.com/users/wa1id/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/wa1id/received_events",
          type: "User",
          site_admin: false,
        },
        committer: {
          login: "wa1id",
          id: 23665945,
          node_id: "MDQ6VXNlcjIzNjY1OTQ1",
          avatar_url: "https://avatars.githubusercontent.com/u/23665945?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/wa1id",
          html_url: "https://github.com/wa1id",
          followers_url: "https://api.github.com/users/wa1id/followers",
          following_url:
            "https://api.github.com/users/wa1id/following{/other_user}",
          gists_url: "https://api.github.com/users/wa1id/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/wa1id/starred{/owner}{/repo}",
          subscriptions_url: "https://api.github.com/users/wa1id/subscriptions",
          organizations_url: "https://api.github.com/users/wa1id/orgs",
          repos_url: "https://api.github.com/users/wa1id/repos",
          events_url: "https://api.github.com/users/wa1id/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/wa1id/received_events",
          type: "User",
          site_admin: false,
        },
        parents: [
          {
            sha: "a7482212d48728f9f3fc0c3743ac62bbee69125c",
            url: "https://api.github.com/repos/wa1id/airbnb-clone-react/commits/a7482212d48728f9f3fc0c3743ac62bbee69125c",
            html_url:
              "https://github.com/wa1id/airbnb-clone-react/commit/a7482212d48728f9f3fc0c3743ac62bbee69125c",
          },
        ],
      },
      {
        sha: "a7482212d48728f9f3fc0c3743ac62bbee69125c",
        node_id:
          "MDY6Q29tbWl0Mjk1MTMzNzQ0OmE3NDgyMjEyZDQ4NzI4ZjlmM2ZjMGMzNzQzYWM2MmJiZWU2OTEyNWM=",
        commit: {
          author: {
            name: "wa1id",
            email: "wa1id@users.noreply.github.com",
            date: "2020-09-05T00:24:32Z",
          },
          committer: {
            name: "wa1id",
            email: "wa1id@users.noreply.github.com",
            date: "2020-09-05T00:24:32Z",
          },
          message: "Add search dates button with styling",
          tree: {
            sha: "4e6eea744ddf640f59094f7148105b632865fc62",
            url: "https://api.github.com/repos/wa1id/airbnb-clone-react/git/trees/4e6eea744ddf640f59094f7148105b632865fc62",
          },
          url: "https://api.github.com/repos/wa1id/airbnb-clone-react/git/commits/a7482212d48728f9f3fc0c3743ac62bbee69125c",
          comment_count: 0,
          verification: {
            verified: false,
            reason: "unsigned",
            signature: null,
            payload: null,
          },
        },
        url: "https://api.github.com/repos/wa1id/airbnb-clone-react/commits/a7482212d48728f9f3fc0c3743ac62bbee69125c",
        html_url:
          "https://github.com/wa1id/airbnb-clone-react/commit/a7482212d48728f9f3fc0c3743ac62bbee69125c",
        comments_url:
          "https://api.github.com/repos/wa1id/airbnb-clone-react/commits/a7482212d48728f9f3fc0c3743ac62bbee69125c/comments",
        author: {
          login: "wa1id",
          id: 23665945,
          node_id: "MDQ6VXNlcjIzNjY1OTQ1",
          avatar_url: "https://avatars.githubusercontent.com/u/23665945?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/wa1id",
          html_url: "https://github.com/wa1id",
          followers_url: "https://api.github.com/users/wa1id/followers",
          following_url:
            "https://api.github.com/users/wa1id/following{/other_user}",
          gists_url: "https://api.github.com/users/wa1id/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/wa1id/starred{/owner}{/repo}",
          subscriptions_url: "https://api.github.com/users/wa1id/subscriptions",
          organizations_url: "https://api.github.com/users/wa1id/orgs",
          repos_url: "https://api.github.com/users/wa1id/repos",
          events_url: "https://api.github.com/users/wa1id/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/wa1id/received_events",
          type: "User",
          site_admin: false,
        },
        committer: {
          login: "wa1id",
          id: 23665945,
          node_id: "MDQ6VXNlcjIzNjY1OTQ1",
          avatar_url: "https://avatars.githubusercontent.com/u/23665945?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/wa1id",
          html_url: "https://github.com/wa1id",
          followers_url: "https://api.github.com/users/wa1id/followers",
          following_url:
            "https://api.github.com/users/wa1id/following{/other_user}",
          gists_url: "https://api.github.com/users/wa1id/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/wa1id/starred{/owner}{/repo}",
          subscriptions_url: "https://api.github.com/users/wa1id/subscriptions",
          organizations_url: "https://api.github.com/users/wa1id/orgs",
          repos_url: "https://api.github.com/users/wa1id/repos",
          events_url: "https://api.github.com/users/wa1id/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/wa1id/received_events",
          type: "User",
          site_admin: false,
        },
        parents: [
          {
            sha: "468aeb246d3cfea73f7c7ced0dc73a41f6c459e3",
            url: "https://api.github.com/repos/wa1id/airbnb-clone-react/commits/468aeb246d3cfea73f7c7ced0dc73a41f6c459e3",
            html_url:
              "https://github.com/wa1id/airbnb-clone-react/commit/468aeb246d3cfea73f7c7ced0dc73a41f6c459e3",
          },
        ],
      },
      {
        sha: "468aeb246d3cfea73f7c7ced0dc73a41f6c459e3",
        node_id:
          "MDY6Q29tbWl0Mjk1MTMzNzQ0OjQ2OGFlYjI0NmQzY2ZlYTczZjdjN2NlZDBkYzczYTQxZjZjNDU5ZTM=",
        commit: {
          author: {
            name: "wa1id",
            email: "wa1id@users.noreply.github.com",
            date: "2020-09-05T00:19:06Z",
          },
          committer: {
            name: "wa1id",
            email: "wa1id@users.noreply.github.com",
            date: "2020-09-05T00:19:06Z",
          },
          message: "padding and button hover",
          tree: {
            sha: "6203ce2ca57b8fd59dab54136755b240f2af9282",
            url: "https://api.github.com/repos/wa1id/airbnb-clone-react/git/trees/6203ce2ca57b8fd59dab54136755b240f2af9282",
          },
          url: "https://api.github.com/repos/wa1id/airbnb-clone-react/git/commits/468aeb246d3cfea73f7c7ced0dc73a41f6c459e3",
          comment_count: 0,
          verification: {
            verified: false,
            reason: "unsigned",
            signature: null,
            payload: null,
          },
        },
        url: "https://api.github.com/repos/wa1id/airbnb-clone-react/commits/468aeb246d3cfea73f7c7ced0dc73a41f6c459e3",
        html_url:
          "https://github.com/wa1id/airbnb-clone-react/commit/468aeb246d3cfea73f7c7ced0dc73a41f6c459e3",
        comments_url:
          "https://api.github.com/repos/wa1id/airbnb-clone-react/commits/468aeb246d3cfea73f7c7ced0dc73a41f6c459e3/comments",
        author: {
          login: "wa1id",
          id: 23665945,
          node_id: "MDQ6VXNlcjIzNjY1OTQ1",
          avatar_url: "https://avatars.githubusercontent.com/u/23665945?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/wa1id",
          html_url: "https://github.com/wa1id",
          followers_url: "https://api.github.com/users/wa1id/followers",
          following_url:
            "https://api.github.com/users/wa1id/following{/other_user}",
          gists_url: "https://api.github.com/users/wa1id/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/wa1id/starred{/owner}{/repo}",
          subscriptions_url: "https://api.github.com/users/wa1id/subscriptions",
          organizations_url: "https://api.github.com/users/wa1id/orgs",
          repos_url: "https://api.github.com/users/wa1id/repos",
          events_url: "https://api.github.com/users/wa1id/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/wa1id/received_events",
          type: "User",
          site_admin: false,
        },
        committer: {
          login: "wa1id",
          id: 23665945,
          node_id: "MDQ6VXNlcjIzNjY1OTQ1",
          avatar_url: "https://avatars.githubusercontent.com/u/23665945?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/wa1id",
          html_url: "https://github.com/wa1id",
          followers_url: "https://api.github.com/users/wa1id/followers",
          following_url:
            "https://api.github.com/users/wa1id/following{/other_user}",
          gists_url: "https://api.github.com/users/wa1id/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/wa1id/starred{/owner}{/repo}",
          subscriptions_url: "https://api.github.com/users/wa1id/subscriptions",
          organizations_url: "https://api.github.com/users/wa1id/orgs",
          repos_url: "https://api.github.com/users/wa1id/repos",
          events_url: "https://api.github.com/users/wa1id/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/wa1id/received_events",
          type: "User",
          site_admin: false,
        },
        parents: [
          {
            sha: "f5f94c237561979320d2d6e1f3bfe04a67182e0a",
            url: "https://api.github.com/repos/wa1id/airbnb-clone-react/commits/f5f94c237561979320d2d6e1f3bfe04a67182e0a",
            html_url:
              "https://github.com/wa1id/airbnb-clone-react/commit/f5f94c237561979320d2d6e1f3bfe04a67182e0a",
          },
        ],
      },
      {
        sha: "f5f94c237561979320d2d6e1f3bfe04a67182e0a",
        node_id:
          "MDY6Q29tbWl0Mjk1MTMzNzQ0OmY1Zjk0YzIzNzU2MTk3OTMyMGQyZDZlMWYzYmZlMDRhNjcxODJlMGE=",
        commit: {
          author: {
            name: "wa1id",
            email: "wa1id@users.noreply.github.com",
            date: "2020-09-05T00:14:36Z",
          },
          committer: {
            name: "wa1id",
            email: "wa1id@users.noreply.github.com",
            date: "2020-09-05T00:14:36Z",
          },
          message: "add css comments",
          tree: {
            sha: "b3e81be2fca437e4f7daae6b0f140983dca68bee",
            url: "https://api.github.com/repos/wa1id/airbnb-clone-react/git/trees/b3e81be2fca437e4f7daae6b0f140983dca68bee",
          },
          url: "https://api.github.com/repos/wa1id/airbnb-clone-react/git/commits/f5f94c237561979320d2d6e1f3bfe04a67182e0a",
          comment_count: 0,
          verification: {
            verified: false,
            reason: "unsigned",
            signature: null,
            payload: null,
          },
        },
        url: "https://api.github.com/repos/wa1id/airbnb-clone-react/commits/f5f94c237561979320d2d6e1f3bfe04a67182e0a",
        html_url:
          "https://github.com/wa1id/airbnb-clone-react/commit/f5f94c237561979320d2d6e1f3bfe04a67182e0a",
        comments_url:
          "https://api.github.com/repos/wa1id/airbnb-clone-react/commits/f5f94c237561979320d2d6e1f3bfe04a67182e0a/comments",
        author: {
          login: "wa1id",
          id: 23665945,
          node_id: "MDQ6VXNlcjIzNjY1OTQ1",
          avatar_url: "https://avatars.githubusercontent.com/u/23665945?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/wa1id",
          html_url: "https://github.com/wa1id",
          followers_url: "https://api.github.com/users/wa1id/followers",
          following_url:
            "https://api.github.com/users/wa1id/following{/other_user}",
          gists_url: "https://api.github.com/users/wa1id/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/wa1id/starred{/owner}{/repo}",
          subscriptions_url: "https://api.github.com/users/wa1id/subscriptions",
          organizations_url: "https://api.github.com/users/wa1id/orgs",
          repos_url: "https://api.github.com/users/wa1id/repos",
          events_url: "https://api.github.com/users/wa1id/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/wa1id/received_events",
          type: "User",
          site_admin: false,
        },
        committer: {
          login: "wa1id",
          id: 23665945,
          node_id: "MDQ6VXNlcjIzNjY1OTQ1",
          avatar_url: "https://avatars.githubusercontent.com/u/23665945?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/wa1id",
          html_url: "https://github.com/wa1id",
          followers_url: "https://api.github.com/users/wa1id/followers",
          following_url:
            "https://api.github.com/users/wa1id/following{/other_user}",
          gists_url: "https://api.github.com/users/wa1id/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/wa1id/starred{/owner}{/repo}",
          subscriptions_url: "https://api.github.com/users/wa1id/subscriptions",
          organizations_url: "https://api.github.com/users/wa1id/orgs",
          repos_url: "https://api.github.com/users/wa1id/repos",
          events_url: "https://api.github.com/users/wa1id/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/wa1id/received_events",
          type: "User",
          site_admin: false,
        },
        parents: [
          {
            sha: "fe4568dd275f552483b5d704d9c79bcfd3e3226d",
            url: "https://api.github.com/repos/wa1id/airbnb-clone-react/commits/fe4568dd275f552483b5d704d9c79bcfd3e3226d",
            html_url:
              "https://github.com/wa1id/airbnb-clone-react/commit/fe4568dd275f552483b5d704d9c79bcfd3e3226d",
          },
        ],
      },
      {
        sha: "fe4568dd275f552483b5d704d9c79bcfd3e3226d",
        node_id:
          "MDY6Q29tbWl0Mjk1MTMzNzQ0OmZlNDU2OGRkMjc1ZjU1MjQ4M2I1ZDcwNGQ5Yzc5YmNmZDNlMzIyNmQ=",
        commit: {
          author: {
            name: "wa1id",
            email: "wa1id@users.noreply.github.com",
            date: "2020-09-05T00:10:11Z",
          },
          committer: {
            name: "wa1id",
            email: "wa1id@users.noreply.github.com",
            date: "2020-09-05T00:10:11Z",
          },
          message: "button banner styling",
          tree: {
            sha: "288f08047c3fd9dc9ce8ded49f2c201f0ae00df1",
            url: "https://api.github.com/repos/wa1id/airbnb-clone-react/git/trees/288f08047c3fd9dc9ce8ded49f2c201f0ae00df1",
          },
          url: "https://api.github.com/repos/wa1id/airbnb-clone-react/git/commits/fe4568dd275f552483b5d704d9c79bcfd3e3226d",
          comment_count: 0,
          verification: {
            verified: false,
            reason: "unsigned",
            signature: null,
            payload: null,
          },
        },
        url: "https://api.github.com/repos/wa1id/airbnb-clone-react/commits/fe4568dd275f552483b5d704d9c79bcfd3e3226d",
        html_url:
          "https://github.com/wa1id/airbnb-clone-react/commit/fe4568dd275f552483b5d704d9c79bcfd3e3226d",
        comments_url:
          "https://api.github.com/repos/wa1id/airbnb-clone-react/commits/fe4568dd275f552483b5d704d9c79bcfd3e3226d/comments",
        author: {
          login: "wa1id",
          id: 23665945,
          node_id: "MDQ6VXNlcjIzNjY1OTQ1",
          avatar_url: "https://avatars.githubusercontent.com/u/23665945?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/wa1id",
          html_url: "https://github.com/wa1id",
          followers_url: "https://api.github.com/users/wa1id/followers",
          following_url:
            "https://api.github.com/users/wa1id/following{/other_user}",
          gists_url: "https://api.github.com/users/wa1id/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/wa1id/starred{/owner}{/repo}",
          subscriptions_url: "https://api.github.com/users/wa1id/subscriptions",
          organizations_url: "https://api.github.com/users/wa1id/orgs",
          repos_url: "https://api.github.com/users/wa1id/repos",
          events_url: "https://api.github.com/users/wa1id/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/wa1id/received_events",
          type: "User",
          site_admin: false,
        },
        committer: {
          login: "wa1id",
          id: 23665945,
          node_id: "MDQ6VXNlcjIzNjY1OTQ1",
          avatar_url: "https://avatars.githubusercontent.com/u/23665945?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/wa1id",
          html_url: "https://github.com/wa1id",
          followers_url: "https://api.github.com/users/wa1id/followers",
          following_url:
            "https://api.github.com/users/wa1id/following{/other_user}",
          gists_url: "https://api.github.com/users/wa1id/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/wa1id/starred{/owner}{/repo}",
          subscriptions_url: "https://api.github.com/users/wa1id/subscriptions",
          organizations_url: "https://api.github.com/users/wa1id/orgs",
          repos_url: "https://api.github.com/users/wa1id/repos",
          events_url: "https://api.github.com/users/wa1id/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/wa1id/received_events",
          type: "User",
          site_admin: false,
        },
        parents: [
          {
            sha: "b037354ef794f5c27be6c96f4976d92c177e03c6",
            url: "https://api.github.com/repos/wa1id/airbnb-clone-react/commits/b037354ef794f5c27be6c96f4976d92c177e03c6",
            html_url:
              "https://github.com/wa1id/airbnb-clone-react/commit/b037354ef794f5c27be6c96f4976d92c177e03c6",
          },
        ],
      },
      {
        sha: "b037354ef794f5c27be6c96f4976d92c177e03c6",
        node_id:
          "MDY6Q29tbWl0Mjk1MTMzNzQ0OmIwMzczNTRlZjc5NGY1YzI3YmU2Yzk2ZjQ5NzZkOTJjMTc3ZTAzYzY=",
        commit: {
          author: {
            name: "wa1id",
            email: "wa1id@users.noreply.github.com",
            date: "2020-09-05T00:06:57Z",
          },
          committer: {
            name: "wa1id",
            email: "wa1id@users.noreply.github.com",
            date: "2020-09-05T00:06:57Z",
          },
          message: "banner info styling",
          tree: {
            sha: "da589a20351d4dc1ae2101d980ef7dac497e86ac",
            url: "https://api.github.com/repos/wa1id/airbnb-clone-react/git/trees/da589a20351d4dc1ae2101d980ef7dac497e86ac",
          },
          url: "https://api.github.com/repos/wa1id/airbnb-clone-react/git/commits/b037354ef794f5c27be6c96f4976d92c177e03c6",
          comment_count: 0,
          verification: {
            verified: false,
            reason: "unsigned",
            signature: null,
            payload: null,
          },
        },
        url: "https://api.github.com/repos/wa1id/airbnb-clone-react/commits/b037354ef794f5c27be6c96f4976d92c177e03c6",
        html_url:
          "https://github.com/wa1id/airbnb-clone-react/commit/b037354ef794f5c27be6c96f4976d92c177e03c6",
        comments_url:
          "https://api.github.com/repos/wa1id/airbnb-clone-react/commits/b037354ef794f5c27be6c96f4976d92c177e03c6/comments",
        author: {
          login: "wa1id",
          id: 23665945,
          node_id: "MDQ6VXNlcjIzNjY1OTQ1",
          avatar_url: "https://avatars.githubusercontent.com/u/23665945?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/wa1id",
          html_url: "https://github.com/wa1id",
          followers_url: "https://api.github.com/users/wa1id/followers",
          following_url:
            "https://api.github.com/users/wa1id/following{/other_user}",
          gists_url: "https://api.github.com/users/wa1id/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/wa1id/starred{/owner}{/repo}",
          subscriptions_url: "https://api.github.com/users/wa1id/subscriptions",
          organizations_url: "https://api.github.com/users/wa1id/orgs",
          repos_url: "https://api.github.com/users/wa1id/repos",
          events_url: "https://api.github.com/users/wa1id/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/wa1id/received_events",
          type: "User",
          site_admin: false,
        },
        committer: {
          login: "wa1id",
          id: 23665945,
          node_id: "MDQ6VXNlcjIzNjY1OTQ1",
          avatar_url: "https://avatars.githubusercontent.com/u/23665945?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/wa1id",
          html_url: "https://github.com/wa1id",
          followers_url: "https://api.github.com/users/wa1id/followers",
          following_url:
            "https://api.github.com/users/wa1id/following{/other_user}",
          gists_url: "https://api.github.com/users/wa1id/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/wa1id/starred{/owner}{/repo}",
          subscriptions_url: "https://api.github.com/users/wa1id/subscriptions",
          organizations_url: "https://api.github.com/users/wa1id/orgs",
          repos_url: "https://api.github.com/users/wa1id/repos",
          events_url: "https://api.github.com/users/wa1id/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/wa1id/received_events",
          type: "User",
          site_admin: false,
        },
        parents: [
          {
            sha: "3e25e2ac0e32801ff4bf7edd272c0dee7766bfd7",
            url: "https://api.github.com/repos/wa1id/airbnb-clone-react/commits/3e25e2ac0e32801ff4bf7edd272c0dee7766bfd7",
            html_url:
              "https://github.com/wa1id/airbnb-clone-react/commit/3e25e2ac0e32801ff4bf7edd272c0dee7766bfd7",
          },
        ],
      },
      {
        sha: "3e25e2ac0e32801ff4bf7edd272c0dee7766bfd7",
        node_id:
          "MDY6Q29tbWl0Mjk1MTMzNzQ0OjNlMjVlMmFjMGUzMjgwMWZmNGJmN2VkZDI3MmMwZGVlNzc2NmJmZDc=",
        commit: {
          author: {
            name: "wa1id",
            email: "wa1id@users.noreply.github.com",
            date: "2020-09-05T00:02:54Z",
          },
          committer: {
            name: "wa1id",
            email: "wa1id@users.noreply.github.com",
            date: "2020-09-05T00:02:54Z",
          },
          message: "add text and button on banner",
          tree: {
            sha: "f9cc86c45bd0a8f128e7d38d2b91d9e5c6b899ad",
            url: "https://api.github.com/repos/wa1id/airbnb-clone-react/git/trees/f9cc86c45bd0a8f128e7d38d2b91d9e5c6b899ad",
          },
          url: "https://api.github.com/repos/wa1id/airbnb-clone-react/git/commits/3e25e2ac0e32801ff4bf7edd272c0dee7766bfd7",
          comment_count: 0,
          verification: {
            verified: false,
            reason: "unsigned",
            signature: null,
            payload: null,
          },
        },
        url: "https://api.github.com/repos/wa1id/airbnb-clone-react/commits/3e25e2ac0e32801ff4bf7edd272c0dee7766bfd7",
        html_url:
          "https://github.com/wa1id/airbnb-clone-react/commit/3e25e2ac0e32801ff4bf7edd272c0dee7766bfd7",
        comments_url:
          "https://api.github.com/repos/wa1id/airbnb-clone-react/commits/3e25e2ac0e32801ff4bf7edd272c0dee7766bfd7/comments",
        author: {
          login: "wa1id",
          id: 23665945,
          node_id: "MDQ6VXNlcjIzNjY1OTQ1",
          avatar_url: "https://avatars.githubusercontent.com/u/23665945?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/wa1id",
          html_url: "https://github.com/wa1id",
          followers_url: "https://api.github.com/users/wa1id/followers",
          following_url:
            "https://api.github.com/users/wa1id/following{/other_user}",
          gists_url: "https://api.github.com/users/wa1id/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/wa1id/starred{/owner}{/repo}",
          subscriptions_url: "https://api.github.com/users/wa1id/subscriptions",
          organizations_url: "https://api.github.com/users/wa1id/orgs",
          repos_url: "https://api.github.com/users/wa1id/repos",
          events_url: "https://api.github.com/users/wa1id/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/wa1id/received_events",
          type: "User",
          site_admin: false,
        },
        committer: {
          login: "wa1id",
          id: 23665945,
          node_id: "MDQ6VXNlcjIzNjY1OTQ1",
          avatar_url: "https://avatars.githubusercontent.com/u/23665945?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/wa1id",
          html_url: "https://github.com/wa1id",
          followers_url: "https://api.github.com/users/wa1id/followers",
          following_url:
            "https://api.github.com/users/wa1id/following{/other_user}",
          gists_url: "https://api.github.com/users/wa1id/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/wa1id/starred{/owner}{/repo}",
          subscriptions_url: "https://api.github.com/users/wa1id/subscriptions",
          organizations_url: "https://api.github.com/users/wa1id/orgs",
          repos_url: "https://api.github.com/users/wa1id/repos",
          events_url: "https://api.github.com/users/wa1id/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/wa1id/received_events",
          type: "User",
          site_admin: false,
        },
        parents: [
          {
            sha: "849e902ae59974643212c27275b1e9e90b313195",
            url: "https://api.github.com/repos/wa1id/airbnb-clone-react/commits/849e902ae59974643212c27275b1e9e90b313195",
            html_url:
              "https://github.com/wa1id/airbnb-clone-react/commit/849e902ae59974643212c27275b1e9e90b313195",
          },
        ],
      },
      {
        sha: "849e902ae59974643212c27275b1e9e90b313195",
        node_id:
          "MDY6Q29tbWl0Mjk1MTMzNzQ0Ojg0OWU5MDJhZTU5OTc0NjQzMjEyYzI3Mjc1YjFlOWU5MGIzMTMxOTU=",
        commit: {
          author: {
            name: "wa1id",
            email: "wa1id@users.noreply.github.com",
            date: "2020-09-04T23:50:03Z",
          },
          committer: {
            name: "wa1id",
            email: "wa1id@users.noreply.github.com",
            date: "2020-09-04T23:50:03Z",
          },
          message: "Add basic banner",
          tree: {
            sha: "99ba261044e658bd637db63ead15a275ad37babe",
            url: "https://api.github.com/repos/wa1id/airbnb-clone-react/git/trees/99ba261044e658bd637db63ead15a275ad37babe",
          },
          url: "https://api.github.com/repos/wa1id/airbnb-clone-react/git/commits/849e902ae59974643212c27275b1e9e90b313195",
          comment_count: 0,
          verification: {
            verified: false,
            reason: "unsigned",
            signature: null,
            payload: null,
          },
        },
        url: "https://api.github.com/repos/wa1id/airbnb-clone-react/commits/849e902ae59974643212c27275b1e9e90b313195",
        html_url:
          "https://github.com/wa1id/airbnb-clone-react/commit/849e902ae59974643212c27275b1e9e90b313195",
        comments_url:
          "https://api.github.com/repos/wa1id/airbnb-clone-react/commits/849e902ae59974643212c27275b1e9e90b313195/comments",
        author: {
          login: "wa1id",
          id: 23665945,
          node_id: "MDQ6VXNlcjIzNjY1OTQ1",
          avatar_url: "https://avatars.githubusercontent.com/u/23665945?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/wa1id",
          html_url: "https://github.com/wa1id",
          followers_url: "https://api.github.com/users/wa1id/followers",
          following_url:
            "https://api.github.com/users/wa1id/following{/other_user}",
          gists_url: "https://api.github.com/users/wa1id/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/wa1id/starred{/owner}{/repo}",
          subscriptions_url: "https://api.github.com/users/wa1id/subscriptions",
          organizations_url: "https://api.github.com/users/wa1id/orgs",
          repos_url: "https://api.github.com/users/wa1id/repos",
          events_url: "https://api.github.com/users/wa1id/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/wa1id/received_events",
          type: "User",
          site_admin: false,
        },
        committer: {
          login: "wa1id",
          id: 23665945,
          node_id: "MDQ6VXNlcjIzNjY1OTQ1",
          avatar_url: "https://avatars.githubusercontent.com/u/23665945?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/wa1id",
          html_url: "https://github.com/wa1id",
          followers_url: "https://api.github.com/users/wa1id/followers",
          following_url:
            "https://api.github.com/users/wa1id/following{/other_user}",
          gists_url: "https://api.github.com/users/wa1id/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/wa1id/starred{/owner}{/repo}",
          subscriptions_url: "https://api.github.com/users/wa1id/subscriptions",
          organizations_url: "https://api.github.com/users/wa1id/orgs",
          repos_url: "https://api.github.com/users/wa1id/repos",
          events_url: "https://api.github.com/users/wa1id/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/wa1id/received_events",
          type: "User",
          site_admin: false,
        },
        parents: [
          {
            sha: "5005037b2e40b8bc7f963d5f99ed1b0cc24d10cb",
            url: "https://api.github.com/repos/wa1id/airbnb-clone-react/commits/5005037b2e40b8bc7f963d5f99ed1b0cc24d10cb",
            html_url:
              "https://github.com/wa1id/airbnb-clone-react/commit/5005037b2e40b8bc7f963d5f99ed1b0cc24d10cb",
          },
        ],
      },
      {
        sha: "5005037b2e40b8bc7f963d5f99ed1b0cc24d10cb",
        node_id:
          "MDY6Q29tbWl0Mjk1MTMzNzQ0OjUwMDUwMzdiMmU0MGI4YmM3Zjk2M2Q1Zjk5ZWQxYjBjYzI0ZDEwY2I=",
        commit: {
          author: {
            name: "wa1id",
            email: "wa1id@users.noreply.github.com",
            date: "2020-09-04T23:43:20Z",
          },
          committer: {
            name: "wa1id",
            email: "wa1id@users.noreply.github.com",
            date: "2020-09-04T23:43:20Z",
          },
          message: "Styling right side of header and add  Avatar",
          tree: {
            sha: "701f72f158de1a87f29bde5d8af811c2d40b839a",
            url: "https://api.github.com/repos/wa1id/airbnb-clone-react/git/trees/701f72f158de1a87f29bde5d8af811c2d40b839a",
          },
          url: "https://api.github.com/repos/wa1id/airbnb-clone-react/git/commits/5005037b2e40b8bc7f963d5f99ed1b0cc24d10cb",
          comment_count: 0,
          verification: {
            verified: false,
            reason: "unsigned",
            signature: null,
            payload: null,
          },
        },
        url: "https://api.github.com/repos/wa1id/airbnb-clone-react/commits/5005037b2e40b8bc7f963d5f99ed1b0cc24d10cb",
        html_url:
          "https://github.com/wa1id/airbnb-clone-react/commit/5005037b2e40b8bc7f963d5f99ed1b0cc24d10cb",
        comments_url:
          "https://api.github.com/repos/wa1id/airbnb-clone-react/commits/5005037b2e40b8bc7f963d5f99ed1b0cc24d10cb/comments",
        author: {
          login: "wa1id",
          id: 23665945,
          node_id: "MDQ6VXNlcjIzNjY1OTQ1",
          avatar_url: "https://avatars.githubusercontent.com/u/23665945?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/wa1id",
          html_url: "https://github.com/wa1id",
          followers_url: "https://api.github.com/users/wa1id/followers",
          following_url:
            "https://api.github.com/users/wa1id/following{/other_user}",
          gists_url: "https://api.github.com/users/wa1id/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/wa1id/starred{/owner}{/repo}",
          subscriptions_url: "https://api.github.com/users/wa1id/subscriptions",
          organizations_url: "https://api.github.com/users/wa1id/orgs",
          repos_url: "https://api.github.com/users/wa1id/repos",
          events_url: "https://api.github.com/users/wa1id/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/wa1id/received_events",
          type: "User",
          site_admin: false,
        },
        committer: {
          login: "wa1id",
          id: 23665945,
          node_id: "MDQ6VXNlcjIzNjY1OTQ1",
          avatar_url: "https://avatars.githubusercontent.com/u/23665945?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/wa1id",
          html_url: "https://github.com/wa1id",
          followers_url: "https://api.github.com/users/wa1id/followers",
          following_url:
            "https://api.github.com/users/wa1id/following{/other_user}",
          gists_url: "https://api.github.com/users/wa1id/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/wa1id/starred{/owner}{/repo}",
          subscriptions_url: "https://api.github.com/users/wa1id/subscriptions",
          organizations_url: "https://api.github.com/users/wa1id/orgs",
          repos_url: "https://api.github.com/users/wa1id/repos",
          events_url: "https://api.github.com/users/wa1id/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/wa1id/received_events",
          type: "User",
          site_admin: false,
        },
        parents: [
          {
            sha: "d4a5ab3875e5981d72b20b7f9290bec7765aaaec",
            url: "https://api.github.com/repos/wa1id/airbnb-clone-react/commits/d4a5ab3875e5981d72b20b7f9290bec7765aaaec",
            html_url:
              "https://github.com/wa1id/airbnb-clone-react/commit/d4a5ab3875e5981d72b20b7f9290bec7765aaaec",
          },
        ],
      },
      {
        sha: "d4a5ab3875e5981d72b20b7f9290bec7765aaaec",
        node_id:
          "MDY6Q29tbWl0Mjk1MTMzNzQ0OmQ0YTVhYjM4NzVlNTk4MWQ3MmIyMGI3ZjkyOTBiZWM3NzY1YWFhZWM=",
        commit: {
          author: {
            name: "wa1id",
            email: "wa1id@users.noreply.github.com",
            date: "2020-09-04T23:35:39Z",
          },
          committer: {
            name: "wa1id",
            email: "wa1id@users.noreply.github.com",
            date: "2020-09-04T23:35:39Z",
          },
          message: "style search input",
          tree: {
            sha: "a02cf94b1e1af716eb0b69aee5d82471da35f1f5",
            url: "https://api.github.com/repos/wa1id/airbnb-clone-react/git/trees/a02cf94b1e1af716eb0b69aee5d82471da35f1f5",
          },
          url: "https://api.github.com/repos/wa1id/airbnb-clone-react/git/commits/d4a5ab3875e5981d72b20b7f9290bec7765aaaec",
          comment_count: 0,
          verification: {
            verified: false,
            reason: "unsigned",
            signature: null,
            payload: null,
          },
        },
        url: "https://api.github.com/repos/wa1id/airbnb-clone-react/commits/d4a5ab3875e5981d72b20b7f9290bec7765aaaec",
        html_url:
          "https://github.com/wa1id/airbnb-clone-react/commit/d4a5ab3875e5981d72b20b7f9290bec7765aaaec",
        comments_url:
          "https://api.github.com/repos/wa1id/airbnb-clone-react/commits/d4a5ab3875e5981d72b20b7f9290bec7765aaaec/comments",
        author: {
          login: "wa1id",
          id: 23665945,
          node_id: "MDQ6VXNlcjIzNjY1OTQ1",
          avatar_url: "https://avatars.githubusercontent.com/u/23665945?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/wa1id",
          html_url: "https://github.com/wa1id",
          followers_url: "https://api.github.com/users/wa1id/followers",
          following_url:
            "https://api.github.com/users/wa1id/following{/other_user}",
          gists_url: "https://api.github.com/users/wa1id/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/wa1id/starred{/owner}{/repo}",
          subscriptions_url: "https://api.github.com/users/wa1id/subscriptions",
          organizations_url: "https://api.github.com/users/wa1id/orgs",
          repos_url: "https://api.github.com/users/wa1id/repos",
          events_url: "https://api.github.com/users/wa1id/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/wa1id/received_events",
          type: "User",
          site_admin: false,
        },
        committer: {
          login: "wa1id",
          id: 23665945,
          node_id: "MDQ6VXNlcjIzNjY1OTQ1",
          avatar_url: "https://avatars.githubusercontent.com/u/23665945?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/wa1id",
          html_url: "https://github.com/wa1id",
          followers_url: "https://api.github.com/users/wa1id/followers",
          following_url:
            "https://api.github.com/users/wa1id/following{/other_user}",
          gists_url: "https://api.github.com/users/wa1id/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/wa1id/starred{/owner}{/repo}",
          subscriptions_url: "https://api.github.com/users/wa1id/subscriptions",
          organizations_url: "https://api.github.com/users/wa1id/orgs",
          repos_url: "https://api.github.com/users/wa1id/repos",
          events_url: "https://api.github.com/users/wa1id/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/wa1id/received_events",
          type: "User",
          site_admin: false,
        },
        parents: [
          {
            sha: "d23ee59061860121837815ed8cd52170ca0628b5",
            url: "https://api.github.com/repos/wa1id/airbnb-clone-react/commits/d23ee59061860121837815ed8cd52170ca0628b5",
            html_url:
              "https://github.com/wa1id/airbnb-clone-react/commit/d23ee59061860121837815ed8cd52170ca0628b5",
          },
        ],
      },
      {
        sha: "d23ee59061860121837815ed8cd52170ca0628b5",
        node_id:
          "MDY6Q29tbWl0Mjk1MTMzNzQ0OmQyM2VlNTkwNjE4NjAxMjE4Mzc4MTVlZDhjZDUyMTcwY2EwNjI4YjU=",
        commit: {
          author: {
            name: "wa1id",
            email: "wa1id@users.noreply.github.com",
            date: "2020-09-04T23:32:18Z",
          },
          committer: {
            name: "wa1id",
            email: "wa1id@users.noreply.github.com",
            date: "2020-09-04T23:32:18Z",
          },
          message: "add right side + styling center etc",
          tree: {
            sha: "721cf845732d5a72fab99a05cba0bc681c6e8a98",
            url: "https://api.github.com/repos/wa1id/airbnb-clone-react/git/trees/721cf845732d5a72fab99a05cba0bc681c6e8a98",
          },
          url: "https://api.github.com/repos/wa1id/airbnb-clone-react/git/commits/d23ee59061860121837815ed8cd52170ca0628b5",
          comment_count: 0,
          verification: {
            verified: false,
            reason: "unsigned",
            signature: null,
            payload: null,
          },
        },
        url: "https://api.github.com/repos/wa1id/airbnb-clone-react/commits/d23ee59061860121837815ed8cd52170ca0628b5",
        html_url:
          "https://github.com/wa1id/airbnb-clone-react/commit/d23ee59061860121837815ed8cd52170ca0628b5",
        comments_url:
          "https://api.github.com/repos/wa1id/airbnb-clone-react/commits/d23ee59061860121837815ed8cd52170ca0628b5/comments",
        author: {
          login: "wa1id",
          id: 23665945,
          node_id: "MDQ6VXNlcjIzNjY1OTQ1",
          avatar_url: "https://avatars.githubusercontent.com/u/23665945?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/wa1id",
          html_url: "https://github.com/wa1id",
          followers_url: "https://api.github.com/users/wa1id/followers",
          following_url:
            "https://api.github.com/users/wa1id/following{/other_user}",
          gists_url: "https://api.github.com/users/wa1id/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/wa1id/starred{/owner}{/repo}",
          subscriptions_url: "https://api.github.com/users/wa1id/subscriptions",
          organizations_url: "https://api.github.com/users/wa1id/orgs",
          repos_url: "https://api.github.com/users/wa1id/repos",
          events_url: "https://api.github.com/users/wa1id/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/wa1id/received_events",
          type: "User",
          site_admin: false,
        },
        committer: {
          login: "wa1id",
          id: 23665945,
          node_id: "MDQ6VXNlcjIzNjY1OTQ1",
          avatar_url: "https://avatars.githubusercontent.com/u/23665945?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/wa1id",
          html_url: "https://github.com/wa1id",
          followers_url: "https://api.github.com/users/wa1id/followers",
          following_url:
            "https://api.github.com/users/wa1id/following{/other_user}",
          gists_url: "https://api.github.com/users/wa1id/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/wa1id/starred{/owner}{/repo}",
          subscriptions_url: "https://api.github.com/users/wa1id/subscriptions",
          organizations_url: "https://api.github.com/users/wa1id/orgs",
          repos_url: "https://api.github.com/users/wa1id/repos",
          events_url: "https://api.github.com/users/wa1id/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/wa1id/received_events",
          type: "User",
          site_admin: false,
        },
        parents: [
          {
            sha: "7c7ca229ae93fd6e8efc6c478129112e698c53b2",
            url: "https://api.github.com/repos/wa1id/airbnb-clone-react/commits/7c7ca229ae93fd6e8efc6c478129112e698c53b2",
            html_url:
              "https://github.com/wa1id/airbnb-clone-react/commit/7c7ca229ae93fd6e8efc6c478129112e698c53b2",
          },
        ],
      },
      {
        sha: "7c7ca229ae93fd6e8efc6c478129112e698c53b2",
        node_id:
          "MDY6Q29tbWl0Mjk1MTMzNzQ0OjdjN2NhMjI5YWU5M2ZkNmU4ZWZjNmM0NzgxMjkxMTJlNjk4YzUzYjI=",
        commit: {
          author: {
            name: "wa1id",
            email: "wa1id@users.noreply.github.com",
            date: "2020-09-04T23:21:54Z",
          },
          committer: {
            name: "wa1id",
            email: "wa1id@users.noreply.github.com",
            date: "2020-09-04T23:21:54Z",
          },
          message: "add input with search icon\ncenter with flex",
          tree: {
            sha: "87051c372d9962428c20ea8e3a8455bac25b3627",
            url: "https://api.github.com/repos/wa1id/airbnb-clone-react/git/trees/87051c372d9962428c20ea8e3a8455bac25b3627",
          },
          url: "https://api.github.com/repos/wa1id/airbnb-clone-react/git/commits/7c7ca229ae93fd6e8efc6c478129112e698c53b2",
          comment_count: 0,
          verification: {
            verified: false,
            reason: "unsigned",
            signature: null,
            payload: null,
          },
        },
        url: "https://api.github.com/repos/wa1id/airbnb-clone-react/commits/7c7ca229ae93fd6e8efc6c478129112e698c53b2",
        html_url:
          "https://github.com/wa1id/airbnb-clone-react/commit/7c7ca229ae93fd6e8efc6c478129112e698c53b2",
        comments_url:
          "https://api.github.com/repos/wa1id/airbnb-clone-react/commits/7c7ca229ae93fd6e8efc6c478129112e698c53b2/comments",
        author: {
          login: "wa1id",
          id: 23665945,
          node_id: "MDQ6VXNlcjIzNjY1OTQ1",
          avatar_url: "https://avatars.githubusercontent.com/u/23665945?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/wa1id",
          html_url: "https://github.com/wa1id",
          followers_url: "https://api.github.com/users/wa1id/followers",
          following_url:
            "https://api.github.com/users/wa1id/following{/other_user}",
          gists_url: "https://api.github.com/users/wa1id/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/wa1id/starred{/owner}{/repo}",
          subscriptions_url: "https://api.github.com/users/wa1id/subscriptions",
          organizations_url: "https://api.github.com/users/wa1id/orgs",
          repos_url: "https://api.github.com/users/wa1id/repos",
          events_url: "https://api.github.com/users/wa1id/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/wa1id/received_events",
          type: "User",
          site_admin: false,
        },
        committer: {
          login: "wa1id",
          id: 23665945,
          node_id: "MDQ6VXNlcjIzNjY1OTQ1",
          avatar_url: "https://avatars.githubusercontent.com/u/23665945?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/wa1id",
          html_url: "https://github.com/wa1id",
          followers_url: "https://api.github.com/users/wa1id/followers",
          following_url:
            "https://api.github.com/users/wa1id/following{/other_user}",
          gists_url: "https://api.github.com/users/wa1id/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/wa1id/starred{/owner}{/repo}",
          subscriptions_url: "https://api.github.com/users/wa1id/subscriptions",
          organizations_url: "https://api.github.com/users/wa1id/orgs",
          repos_url: "https://api.github.com/users/wa1id/repos",
          events_url: "https://api.github.com/users/wa1id/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/wa1id/received_events",
          type: "User",
          site_admin: false,
        },
        parents: [
          {
            sha: "018fa6ff5f4a7545ff904789e3a9142f803e4824",
            url: "https://api.github.com/repos/wa1id/airbnb-clone-react/commits/018fa6ff5f4a7545ff904789e3a9142f803e4824",
            html_url:
              "https://github.com/wa1id/airbnb-clone-react/commit/018fa6ff5f4a7545ff904789e3a9142f803e4824",
          },
        ],
      },
      {
        sha: "018fa6ff5f4a7545ff904789e3a9142f803e4824",
        node_id:
          "MDY6Q29tbWl0Mjk1MTMzNzQ0OjAxOGZhNmZmNWY0YTc1NDVmZjkwNDc4OWUzYTkxNDJmODAzZTQ4MjQ=",
        commit: {
          author: {
            name: "wa1id",
            email: "wa1id@users.noreply.github.com",
            date: "2020-09-04T23:11:31Z",
          },
          committer: {
            name: "wa1id",
            email: "wa1id@users.noreply.github.com",
            date: "2020-09-04T23:11:31Z",
          },
          message: "add logo in header",
          tree: {
            sha: "b12f6a4d44189e10291b1d3cfd7a02eb3f654782",
            url: "https://api.github.com/repos/wa1id/airbnb-clone-react/git/trees/b12f6a4d44189e10291b1d3cfd7a02eb3f654782",
          },
          url: "https://api.github.com/repos/wa1id/airbnb-clone-react/git/commits/018fa6ff5f4a7545ff904789e3a9142f803e4824",
          comment_count: 0,
          verification: {
            verified: false,
            reason: "unsigned",
            signature: null,
            payload: null,
          },
        },
        url: "https://api.github.com/repos/wa1id/airbnb-clone-react/commits/018fa6ff5f4a7545ff904789e3a9142f803e4824",
        html_url:
          "https://github.com/wa1id/airbnb-clone-react/commit/018fa6ff5f4a7545ff904789e3a9142f803e4824",
        comments_url:
          "https://api.github.com/repos/wa1id/airbnb-clone-react/commits/018fa6ff5f4a7545ff904789e3a9142f803e4824/comments",
        author: {
          login: "wa1id",
          id: 23665945,
          node_id: "MDQ6VXNlcjIzNjY1OTQ1",
          avatar_url: "https://avatars.githubusercontent.com/u/23665945?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/wa1id",
          html_url: "https://github.com/wa1id",
          followers_url: "https://api.github.com/users/wa1id/followers",
          following_url:
            "https://api.github.com/users/wa1id/following{/other_user}",
          gists_url: "https://api.github.com/users/wa1id/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/wa1id/starred{/owner}{/repo}",
          subscriptions_url: "https://api.github.com/users/wa1id/subscriptions",
          organizations_url: "https://api.github.com/users/wa1id/orgs",
          repos_url: "https://api.github.com/users/wa1id/repos",
          events_url: "https://api.github.com/users/wa1id/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/wa1id/received_events",
          type: "User",
          site_admin: false,
        },
        committer: {
          login: "wa1id",
          id: 23665945,
          node_id: "MDQ6VXNlcjIzNjY1OTQ1",
          avatar_url: "https://avatars.githubusercontent.com/u/23665945?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/wa1id",
          html_url: "https://github.com/wa1id",
          followers_url: "https://api.github.com/users/wa1id/followers",
          following_url:
            "https://api.github.com/users/wa1id/following{/other_user}",
          gists_url: "https://api.github.com/users/wa1id/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/wa1id/starred{/owner}{/repo}",
          subscriptions_url: "https://api.github.com/users/wa1id/subscriptions",
          organizations_url: "https://api.github.com/users/wa1id/orgs",
          repos_url: "https://api.github.com/users/wa1id/repos",
          events_url: "https://api.github.com/users/wa1id/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/wa1id/received_events",
          type: "User",
          site_admin: false,
        },
        parents: [
          {
            sha: "12fe85eb163a0d89ff6729975967a814cb0ff9bc",
            url: "https://api.github.com/repos/wa1id/airbnb-clone-react/commits/12fe85eb163a0d89ff6729975967a814cb0ff9bc",
            html_url:
              "https://github.com/wa1id/airbnb-clone-react/commit/12fe85eb163a0d89ff6729975967a814cb0ff9bc",
          },
        ],
      },
      {
        sha: "12fe85eb163a0d89ff6729975967a814cb0ff9bc",
        node_id:
          "MDY6Q29tbWl0Mjk1MTMzNzQ0OjEyZmU4NWViMTYzYTBkODlmZjY3Mjk5NzU5NjdhODE0Y2IwZmY5YmM=",
        commit: {
          author: {
            name: "wa1id",
            email: "wa1id@users.noreply.github.com",
            date: "2020-09-04T22:44:39Z",
          },
          committer: {
            name: "wa1id",
            email: "wa1id@users.noreply.github.com",
            date: "2020-09-04T22:44:39Z",
          },
          message: "Add Home component",
          tree: {
            sha: "ce0e4343bf4b8715579aaf3029f7efdb13a0e57d",
            url: "https://api.github.com/repos/wa1id/airbnb-clone-react/git/trees/ce0e4343bf4b8715579aaf3029f7efdb13a0e57d",
          },
          url: "https://api.github.com/repos/wa1id/airbnb-clone-react/git/commits/12fe85eb163a0d89ff6729975967a814cb0ff9bc",
          comment_count: 0,
          verification: {
            verified: false,
            reason: "unsigned",
            signature: null,
            payload: null,
          },
        },
        url: "https://api.github.com/repos/wa1id/airbnb-clone-react/commits/12fe85eb163a0d89ff6729975967a814cb0ff9bc",
        html_url:
          "https://github.com/wa1id/airbnb-clone-react/commit/12fe85eb163a0d89ff6729975967a814cb0ff9bc",
        comments_url:
          "https://api.github.com/repos/wa1id/airbnb-clone-react/commits/12fe85eb163a0d89ff6729975967a814cb0ff9bc/comments",
        author: {
          login: "wa1id",
          id: 23665945,
          node_id: "MDQ6VXNlcjIzNjY1OTQ1",
          avatar_url: "https://avatars.githubusercontent.com/u/23665945?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/wa1id",
          html_url: "https://github.com/wa1id",
          followers_url: "https://api.github.com/users/wa1id/followers",
          following_url:
            "https://api.github.com/users/wa1id/following{/other_user}",
          gists_url: "https://api.github.com/users/wa1id/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/wa1id/starred{/owner}{/repo}",
          subscriptions_url: "https://api.github.com/users/wa1id/subscriptions",
          organizations_url: "https://api.github.com/users/wa1id/orgs",
          repos_url: "https://api.github.com/users/wa1id/repos",
          events_url: "https://api.github.com/users/wa1id/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/wa1id/received_events",
          type: "User",
          site_admin: false,
        },
        committer: {
          login: "wa1id",
          id: 23665945,
          node_id: "MDQ6VXNlcjIzNjY1OTQ1",
          avatar_url: "https://avatars.githubusercontent.com/u/23665945?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/wa1id",
          html_url: "https://github.com/wa1id",
          followers_url: "https://api.github.com/users/wa1id/followers",
          following_url:
            "https://api.github.com/users/wa1id/following{/other_user}",
          gists_url: "https://api.github.com/users/wa1id/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/wa1id/starred{/owner}{/repo}",
          subscriptions_url: "https://api.github.com/users/wa1id/subscriptions",
          organizations_url: "https://api.github.com/users/wa1id/orgs",
          repos_url: "https://api.github.com/users/wa1id/repos",
          events_url: "https://api.github.com/users/wa1id/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/wa1id/received_events",
          type: "User",
          site_admin: false,
        },
        parents: [
          {
            sha: "d49469943539201120a7320efa12e657076b25c4",
            url: "https://api.github.com/repos/wa1id/airbnb-clone-react/commits/d49469943539201120a7320efa12e657076b25c4",
            html_url:
              "https://github.com/wa1id/airbnb-clone-react/commit/d49469943539201120a7320efa12e657076b25c4",
          },
        ],
      },
    ];

    if (!commitsData) {
      return { notFound: true };
    }

    return { props: { repository, commitsData } };
  } catch (error) {
    return { notFound: true, error };
  }
};

export default Repository;
