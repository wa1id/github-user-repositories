# Github Repository Finder

Project hosted on: https://github-search-walid.vercel.app

Search for a Github username to get all the public repositories for that user. Click on any repository to get the latest 20 commits.

## Getting Started

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Styling is done with Tailwind.

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Run tests by executing `npm run test`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## ES6+ functions

- `filter()`: used to filter the array of commits when searching based on a condition

- `map()`: used for mapping an array of repositories/commits to a React Component

- `trim()`: remove any trailing or leading empty spaces. Used for checking if the searchfield is empty. Without using `trim()` an empty space like `" "` would be considered not empty

- Template strings: API calls are done using template strings for better readability. Example: `api.github.com/users/${username}/repos`

- Object destructuring used where it makes sense

- Use `const` for variables that are final, otherwise use `let`

## Todo

- Use an authenticated API key to prevent rate limit of 60 API calls/hour
- E2E tests using Cypress
