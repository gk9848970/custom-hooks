import { useEffect, useLayoutEffect } from "react";

function useIsomorphicLayoutEffect() {
  return typeof window === "undefined" ? useEffect : useLayoutEffect;
}
