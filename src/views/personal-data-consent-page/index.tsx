import LegalPage from "@/widgets/legal-page";
import { PERSONAL_DATA_CONSENT_DATA } from "./models/personal-data-consent.constants";

export default function PersonalDataConsentPage() {
	return <LegalPage {...PERSONAL_DATA_CONSENT_DATA} />;
}
