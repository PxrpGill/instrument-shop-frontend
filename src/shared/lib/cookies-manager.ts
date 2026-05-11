/** biome-ignore-all lint/complexity/noStaticOnlyClass: <explanation> */
/** biome-ignore-all lint/suspicious/noDocumentCookie: <explanation> */

interface CookieOptions {
	expires?: Date | string | number;
	path?: string;
	domain?: string;
	secure?: boolean;
	sameSite?: "strict" | "lax" | "none";
}

export class CookiesManager {
	private static isBrowser(): boolean {
		return typeof document !== "undefined";
	}

	static getAll(): Record<string, string> {
		if (!CookiesManager.isBrowser()) return {};

		return document.cookie
			.split("; ")
			.reduce<Record<string, string>>((acc, cookie) => {
				const separatorIndex = cookie.indexOf("=");
				if (separatorIndex === -1) return acc;

				const key = cookie.substring(0, separatorIndex).trim();
				const value = cookie.substring(separatorIndex + 1).trim();

				if (key) {
					acc[decodeURIComponent(key)] = decodeURIComponent(value);
				}

				return acc;
			}, {});
	}

	static get(name: string): string | undefined {
		if (!CookiesManager.isBrowser()) return undefined;

		const cookies = CookiesManager.getAll();
		return cookies[name];
	}

	static set(name: string, value: string, options: CookieOptions = {}): void {
		if (!CookiesManager.isBrowser()) return;

		const { expires, path = "/", domain, secure, sameSite } = options;

		let cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;

		if (expires) {
			const expiresStr =
				expires instanceof Date
					? expires.toUTCString()
					: new Date(expires).toUTCString();
			cookie += `; Expires=${expiresStr}`;
		}

		cookie += `; Path=${path}`;

		if (domain) cookie += `; Domain=${domain}`;
		if (secure) cookie += "; Secure";
		if (sameSite) cookie += `; SameSite=${sameSite}`;

		document.cookie = cookie;
	}

	static delete(name: string, path = "/", domain?: string): void {
		if (!CookiesManager.isBrowser()) return;

		CookiesManager.set(name, "", { expires: new Date(0), path, domain });
	}

	static has(name: string): boolean {
		return CookiesManager.get(name) !== undefined;
	}
}
