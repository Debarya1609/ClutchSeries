import { useEffect, useState } from "react";
import { usePageContext } from "vike-react/usePageContext";

export function usePageEntryLoading(minDuration = 450) {
  const pageContext = usePageContext();
  const [isEntryLoading, setIsEntryLoading] = useState(true);

  useEffect(() => {
    setIsEntryLoading(true);

    const timeoutId = window.setTimeout(() => {
      setIsEntryLoading(false);
    }, minDuration);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [pageContext.urlOriginal, minDuration]);

  return isEntryLoading;
}
