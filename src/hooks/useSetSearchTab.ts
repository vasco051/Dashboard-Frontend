import { useLayoutEffect } from "react";
import { useSearchParams } from "react-router-dom";

export function useSetSearchTab(tabVariant: any, setCurrentTab: any) {
  const [searchParams] = useSearchParams();

  useLayoutEffect(() => {
    const tab = searchParams.get('tab')
    Object.values(tabVariant).forEach((value) => {
      if (value === tab) setCurrentTab(value)
    })
  }, [searchParams])
}