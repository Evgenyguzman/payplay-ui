import { useState } from "react";
import ReportConfirmation from "./ReportConfirmation";
import ReportMessage from "./ReportMessage";
import ReportReason from "./ReportReason";

interface Props {
  username: string;
  onClose: () => void;
}

const Report = ({ username, onClose }: Props) => {
  const [step, setStep] = useState(0);

  return (
    <div>
      {step === 0 && (
        <ReportReason username={username} onNext={() => setStep(step + 1)} />
      )}
      {step === 1 && <ReportMessage onNext={() => setStep(step + 1)} />}
      {step === 2 && <ReportConfirmation onNext={() => onClose()} />}
    </div>
  );
};

export default Report;
