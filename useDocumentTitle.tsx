import { useEffect, useLayoutEffect } from "react";

const useIsomorphicLayoutEffect =
  typeof window === "undefined" ? useEffect : useLayoutEffect;

function useDocumentTitle(title: string): void {
  useIsomorphicLayoutEffect(() => {
    window.document.title = title;
  }, []);
}

export default function Component() {
  useDocumentTitle("foo bar");
  return <div>Gaurav</div>;
}
