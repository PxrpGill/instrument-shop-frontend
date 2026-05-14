export type LegalSection = {
	id: string;
	title: string;
	content: string;
};

export type LegalPageProps = {
	title: string;
	lastUpdated: string;
	sections: LegalSection[];
};
