export default {
  repository: "https://github.com/arn4v/boring-avatars-api", // project repo
  docsRepository: "https://github.com/arn4v/boring-avatars-api", // docs repo
  branch: "main", // branch of docs
  path: "/", // path of docs
  titleSuffix: " – Boring Avataras API",
  nextLinks: true,
  prevLinks: true,
  search: false,
  customSearch: null, // customizable, you can use algolia for example
  darkMode: true,
  footer: true,
  footerText: `MIT ${new Date().getFullYear()} © Arnav Gosain.`,
  footerEditOnGitHubLink: true, // will link to the docs repo
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="description"
        content="Boring Avatars API: Generate random avatars for new users."
      />
      <meta
        name="og:title"
        content="Boring Avatars API: Generate random avatars for new users."
      />
    </>
  ),
};
