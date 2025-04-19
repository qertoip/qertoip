export const config = {
  server: "_site",
  files: ["_site/**/*"],
};

export default function(eleventyConfig) {
	eleventyConfig.setServerOptions({
		// Whether the live reload snippet is used
		liveReload: true,

		// Whether DOM diffing updates are applied where possible instead of page reloads
		domDiff: false,

    port: 8080,
	});
};
