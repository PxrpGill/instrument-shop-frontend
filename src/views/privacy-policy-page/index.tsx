import LegalPage from "@/widgets/legal-page";
import { PRIVACY_POLICY_DATA } from "./models/privacy-policy.constants";

export default function PrivacyPolicyPage() {
	return <LegalPage {...PRIVACY_POLICY_DATA} />;
}
