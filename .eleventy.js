export const config = {
  server: "public",
  files: ["public/**/*"],
};

export default function(eleventyConfig) {
	eleventyConfig.setServerOptions({
		// Whether the live reload snippet is used
		liveReload: true,

		// Whether DOM diffing updates are applied where possible instead of page reloads
		domDiff: false,

    port: 8080,
	});

  // Add the dir configuration here
  eleventyConfig.addPassthroughCopy("src/assets");

  return {
    dir: {
      input: "src",
      output: "public"
    }
  };
};
