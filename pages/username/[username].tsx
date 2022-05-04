import type { GetServerSideProps, NextPage } from "next";
import { RepositoryItem, Spacer } from "components/atoms";
import { Size } from "components/atoms/Spacer/Size";
import { NOT_FOUND_MESSAGE } from "constants/common";
import Link from "next/link";

interface Props {
  username: string;
  userReposData: any; // TODO: types
}

const Username: NextPage<Props> = ({ username, userReposData }) => {
  console.log("userReposData", userReposData);

  const handleOnClickRepository = () => {
    console.log("test");
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold mt-6 text-center">Repositories</h1>
      <div className="text-center text-sm">
        Public repositories found for {username}
      </div>

      <Spacer size={Size.MEDIUM} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mx-2 justify-center">
        {/* TODO: implement a not found component */}
        {userReposData.message === NOT_FOUND_MESSAGE && <div>Not found...</div>}
        {userReposData.message !== NOT_FOUND_MESSAGE &&
          userReposData.map((repo: any) => (
            <Link
              key={repo.id}
              href={`/commits/${repo.name}?username=${username}`}
              passHref
            >
              <a>
                <RepositoryItem
                  repository={repo}
                  onClick={handleOnClickRepository}
                />
              </a>
            </Link>
          ))}
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const username = context.query.username;

  const fetchUserRepos = await fetch(
    `https://api.github.com/users/${username}/repos`
  );
  const userReposData = await fetchUserRepos.json();

  // const userReposData = [
  //   {
  //     id: 295133744,
  //     node_id: "MDEwOlJlcG9zaXRvcnkyOTUxMzM3NDQ=",
  //     name: "airbnb-clone-react",
  //     full_name: "wa1id/airbnb-clone-react",
  //     private: false,
  //     owner: {
  //       login: "wa1id",
  //       id: 23665945,
  //       node_id: "MDQ6VXNlcjIzNjY1OTQ1",
  //       avatar_url: "https://avatars.githubusercontent.com/u/23665945?v=4",
  //       gravatar_id: "",
  //       url: "https://api.github.com/users/wa1id",
  //       html_url: "https://github.com/wa1id",
  //       followers_url: "https://api.github.com/users/wa1id/followers",
  //       following_url:
  //         "https://api.github.com/users/wa1id/following{/other_user}",
  //       gists_url: "https://api.github.com/users/wa1id/gists{/gist_id}",
  //       starred_url:
  //         "https://api.github.com/users/wa1id/starred{/owner}{/repo}",
  //       subscriptions_url: "https://api.github.com/users/wa1id/subscriptions",
  //       organizations_url: "https://api.github.com/users/wa1id/orgs",
  //       repos_url: "https://api.github.com/users/wa1id/repos",
  //       events_url: "https://api.github.com/users/wa1id/events{/privacy}",
  //       received_events_url:
  //         "https://api.github.com/users/wa1id/received_events",
  //       type: "User",
  //       site_admin: false,
  //     },
  //     html_url: "https://github.com/wa1id/airbnb-clone-react",
  //     description: "AirBnb clone using React",
  //     fork: false,
  //     url: "https://api.github.com/repos/wa1id/airbnb-clone-react",
  //     forks_url: "https://api.github.com/repos/wa1id/airbnb-clone-react/forks",
  //     keys_url:
  //       "https://api.github.com/repos/wa1id/airbnb-clone-react/keys{/key_id}",
  //     collaborators_url:
  //       "https://api.github.com/repos/wa1id/airbnb-clone-react/collaborators{/collaborator}",
  //     teams_url: "https://api.github.com/repos/wa1id/airbnb-clone-react/teams",
  //     hooks_url: "https://api.github.com/repos/wa1id/airbnb-clone-react/hooks",
  //     issue_events_url:
  //       "https://api.github.com/repos/wa1id/airbnb-clone-react/issues/events{/number}",
  //     events_url:
  //       "https://api.github.com/repos/wa1id/airbnb-clone-react/events",
  //     assignees_url:
  //       "https://api.github.com/repos/wa1id/airbnb-clone-react/assignees{/user}",
  //     branches_url:
  //       "https://api.github.com/repos/wa1id/airbnb-clone-react/branches{/branch}",
  //     tags_url: "https://api.github.com/repos/wa1id/airbnb-clone-react/tags",
  //     blobs_url:
  //       "https://api.github.com/repos/wa1id/airbnb-clone-react/git/blobs{/sha}",
  //     git_tags_url:
  //       "https://api.github.com/repos/wa1id/airbnb-clone-react/git/tags{/sha}",
  //     git_refs_url:
  //       "https://api.github.com/repos/wa1id/airbnb-clone-react/git/refs{/sha}",
  //     trees_url:
  //       "https://api.github.com/repos/wa1id/airbnb-clone-react/git/trees{/sha}",
  //     statuses_url:
  //       "https://api.github.com/repos/wa1id/airbnb-clone-react/statuses/{sha}",
  //     languages_url:
  //       "https://api.github.com/repos/wa1id/airbnb-clone-react/languages",
  //     stargazers_url:
  //       "https://api.github.com/repos/wa1id/airbnb-clone-react/stargazers",
  //     contributors_url:
  //       "https://api.github.com/repos/wa1id/airbnb-clone-react/contributors",
  //     subscribers_url:
  //       "https://api.github.com/repos/wa1id/airbnb-clone-react/subscribers",
  //     subscription_url:
  //       "https://api.github.com/repos/wa1id/airbnb-clone-react/subscription",
  //     commits_url:
  //       "https://api.github.com/repos/wa1id/airbnb-clone-react/commits{/sha}",
  //     git_commits_url:
  //       "https://api.github.com/repos/wa1id/airbnb-clone-react/git/commits{/sha}",
  //     comments_url:
  //       "https://api.github.com/repos/wa1id/airbnb-clone-react/comments{/number}",
  //     issue_comment_url:
  //       "https://api.github.com/repos/wa1id/airbnb-clone-react/issues/comments{/number}",
  //     contents_url:
  //       "https://api.github.com/repos/wa1id/airbnb-clone-react/contents/{+path}",
  //     compare_url:
  //       "https://api.github.com/repos/wa1id/airbnb-clone-react/compare/{base}...{head}",
  //     merges_url:
  //       "https://api.github.com/repos/wa1id/airbnb-clone-react/merges",
  //     archive_url:
  //       "https://api.github.com/repos/wa1id/airbnb-clone-react/{archive_format}{/ref}",
  //     downloads_url:
  //       "https://api.github.com/repos/wa1id/airbnb-clone-react/downloads",
  //     issues_url:
  //       "https://api.github.com/repos/wa1id/airbnb-clone-react/issues{/number}",
  //     pulls_url:
  //       "https://api.github.com/repos/wa1id/airbnb-clone-react/pulls{/number}",
  //     milestones_url:
  //       "https://api.github.com/repos/wa1id/airbnb-clone-react/milestones{/number}",
  //     notifications_url:
  //       "https://api.github.com/repos/wa1id/airbnb-clone-react/notifications{?since,all,participating}",
  //     labels_url:
  //       "https://api.github.com/repos/wa1id/airbnb-clone-react/labels{/name}",
  //     releases_url:
  //       "https://api.github.com/repos/wa1id/airbnb-clone-react/releases{/id}",
  //     deployments_url:
  //       "https://api.github.com/repos/wa1id/airbnb-clone-react/deployments",
  //     created_at: "2020-09-13T11:07:29Z",
  //     updated_at: "2020-09-30T16:56:48Z",
  //     pushed_at: "2020-09-16T21:27:41Z",
  //     git_url: "git://github.com/wa1id/airbnb-clone-react.git",
  //     ssh_url: "git@github.com:wa1id/airbnb-clone-react.git",
  //     clone_url: "https://github.com/wa1id/airbnb-clone-react.git",
  //     svn_url: "https://github.com/wa1id/airbnb-clone-react",
  //     homepage: "",
  //     size: 208,
  //     stargazers_count: 0,
  //     watchers_count: 0,
  //     language: "JavaScript",
  //     has_issues: true,
  //     has_projects: true,
  //     has_downloads: true,
  //     has_wiki: true,
  //     has_pages: false,
  //     forks_count: 0,
  //     mirror_url: null,
  //     archived: false,
  //     disabled: false,
  //     open_issues_count: 0,
  //     license: null,
  //     allow_forking: true,
  //     is_template: false,
  //     topics: [],
  //     visibility: "public",
  //     forks: 0,
  //     open_issues: 0,
  //     watchers: 0,
  //     default_branch: "master",
  //   },
  //   {
  //     id: 296391468,
  //     node_id: "MDEwOlJlcG9zaXRvcnkyOTYzOTE0Njg=",
  //     name: "amazon-clone",
  //     full_name: "wa1id/amazon-clone",
  //     private: false,
  //     owner: {
  //       login: "wa1id",
  //       id: 23665945,
  //       node_id: "MDQ6VXNlcjIzNjY1OTQ1",
  //       avatar_url: "https://avatars.githubusercontent.com/u/23665945?v=4",
  //       gravatar_id: "",
  //       url: "https://api.github.com/users/wa1id",
  //       html_url: "https://github.com/wa1id",
  //       followers_url: "https://api.github.com/users/wa1id/followers",
  //       following_url:
  //         "https://api.github.com/users/wa1id/following{/other_user}",
  //       gists_url: "https://api.github.com/users/wa1id/gists{/gist_id}",
  //       starred_url:
  //         "https://api.github.com/users/wa1id/starred{/owner}{/repo}",
  //       subscriptions_url: "https://api.github.com/users/wa1id/subscriptions",
  //       organizations_url: "https://api.github.com/users/wa1id/orgs",
  //       repos_url: "https://api.github.com/users/wa1id/repos",
  //       events_url: "https://api.github.com/users/wa1id/events{/privacy}",
  //       received_events_url:
  //         "https://api.github.com/users/wa1id/received_events",
  //       type: "User",
  //       site_admin: false,
  //     },
  //     html_url: "https://github.com/wa1id/amazon-clone",
  //     description: "Amazon clone using React and Firebase + Stripe integration",
  //     fork: false,
  //     url: "https://api.github.com/repos/wa1id/amazon-clone",
  //     forks_url: "https://api.github.com/repos/wa1id/amazon-clone/forks",
  //     keys_url: "https://api.github.com/repos/wa1id/amazon-clone/keys{/key_id}",
  //     collaborators_url:
  //       "https://api.github.com/repos/wa1id/amazon-clone/collaborators{/collaborator}",
  //     teams_url: "https://api.github.com/repos/wa1id/amazon-clone/teams",
  //     hooks_url: "https://api.github.com/repos/wa1id/amazon-clone/hooks",
  //     issue_events_url:
  //       "https://api.github.com/repos/wa1id/amazon-clone/issues/events{/number}",
  //     events_url: "https://api.github.com/repos/wa1id/amazon-clone/events",
  //     assignees_url:
  //       "https://api.github.com/repos/wa1id/amazon-clone/assignees{/user}",
  //     branches_url:
  //       "https://api.github.com/repos/wa1id/amazon-clone/branches{/branch}",
  //     tags_url: "https://api.github.com/repos/wa1id/amazon-clone/tags",
  //     blobs_url:
  //       "https://api.github.com/repos/wa1id/amazon-clone/git/blobs{/sha}",
  //     git_tags_url:
  //       "https://api.github.com/repos/wa1id/amazon-clone/git/tags{/sha}",
  //     git_refs_url:
  //       "https://api.github.com/repos/wa1id/amazon-clone/git/refs{/sha}",
  //     trees_url:
  //       "https://api.github.com/repos/wa1id/amazon-clone/git/trees{/sha}",
  //     statuses_url:
  //       "https://api.github.com/repos/wa1id/amazon-clone/statuses/{sha}",
  //     languages_url:
  //       "https://api.github.com/repos/wa1id/amazon-clone/languages",
  //     stargazers_url:
  //       "https://api.github.com/repos/wa1id/amazon-clone/stargazers",
  //     contributors_url:
  //       "https://api.github.com/repos/wa1id/amazon-clone/contributors",
  //     subscribers_url:
  //       "https://api.github.com/repos/wa1id/amazon-clone/subscribers",
  //     subscription_url:
  //       "https://api.github.com/repos/wa1id/amazon-clone/subscription",
  //     commits_url:
  //       "https://api.github.com/repos/wa1id/amazon-clone/commits{/sha}",
  //     git_commits_url:
  //       "https://api.github.com/repos/wa1id/amazon-clone/git/commits{/sha}",
  //     comments_url:
  //       "https://api.github.com/repos/wa1id/amazon-clone/comments{/number}",
  //     issue_comment_url:
  //       "https://api.github.com/repos/wa1id/amazon-clone/issues/comments{/number}",
  //     contents_url:
  //       "https://api.github.com/repos/wa1id/amazon-clone/contents/{+path}",
  //     compare_url:
  //       "https://api.github.com/repos/wa1id/amazon-clone/compare/{base}...{head}",
  //     merges_url: "https://api.github.com/repos/wa1id/amazon-clone/merges",
  //     archive_url:
  //       "https://api.github.com/repos/wa1id/amazon-clone/{archive_format}{/ref}",
  //     downloads_url:
  //       "https://api.github.com/repos/wa1id/amazon-clone/downloads",
  //     issues_url:
  //       "https://api.github.com/repos/wa1id/amazon-clone/issues{/number}",
  //     pulls_url:
  //       "https://api.github.com/repos/wa1id/amazon-clone/pulls{/number}",
  //     milestones_url:
  //       "https://api.github.com/repos/wa1id/amazon-clone/milestones{/number}",
  //     notifications_url:
  //       "https://api.github.com/repos/wa1id/amazon-clone/notifications{?since,all,participating}",
  //     labels_url:
  //       "https://api.github.com/repos/wa1id/amazon-clone/labels{/name}",
  //     releases_url:
  //       "https://api.github.com/repos/wa1id/amazon-clone/releases{/id}",
  //     deployments_url:
  //       "https://api.github.com/repos/wa1id/amazon-clone/deployments",
  //     created_at: "2020-09-17T17:06:27Z",
  //     updated_at: "2020-09-18T19:43:54Z",
  //     pushed_at: "2020-09-18T19:43:51Z",
  //     git_url: "git://github.com/wa1id/amazon-clone.git",
  //     ssh_url: "git@github.com:wa1id/amazon-clone.git",
  //     clone_url: "https://github.com/wa1id/amazon-clone.git",
  //     svn_url: "https://github.com/wa1id/amazon-clone",
  //     homepage: null,
  //     size: 408,
  //     stargazers_count: 0,
  //     watchers_count: 0,
  //     language: "JavaScript",
  //     has_issues: true,
  //     has_projects: true,
  //     has_downloads: true,
  //     has_wiki: true,
  //     has_pages: false,
  //     forks_count: 0,
  //     mirror_url: null,
  //     archived: false,
  //     disabled: false,
  //     open_issues_count: 0,
  //     license: null,
  //     allow_forking: true,
  //     is_template: false,
  //     topics: [],
  //     visibility: "public",
  //     forks: 0,
  //     open_issues: 0,
  //     watchers: 0,
  //     default_branch: "master",
  //   },
  // ];

  return { props: { username, userReposData } };
};

export default Username;
