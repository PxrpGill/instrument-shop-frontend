export const concantenateUrlSegments = (urlSegments: Array<string>) =>
	"/" +
	urlSegments
		.filter(Boolean)
		.map((segment) => segment.replace(/^\/+|\/+$/g, ""))
		.join("/");
