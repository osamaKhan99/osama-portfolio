import { Copy, Check, CopyCheck } from "lucide-react";
import { useState } from "react";

const CopyText = ({ text }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);

    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <button onClick={handleCopy} className="mt-6">
      {copied ? (
        <CopyCheck className="w-4 h-4 text-green-500" />
      ) : (
        <Copy className="w-4 h-4 cursor-pointer" />
      )}
    </button>
  );
};

export default CopyText;
