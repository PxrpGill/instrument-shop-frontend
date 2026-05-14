import LegalPage from "@/widgets/legal-page";
import { USER_AGREEMENT_DATA } from "./models/user-agreement.constants";

export default function UserAgreementPage() {
	return <LegalPage {...USER_AGREEMENT_DATA} />;
}
