"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Redirect = ({ to, delay = 0 }) => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      const isExternal =
        to.startsWith("http://") ||
        to.startsWith("https://") ||
        to.startsWith("//");

      if (isExternal) {
        // External redirect (full page navigation)
        window.location.href = to;
      } else {
        // Internal redirect (Next.js navigation)
        router.replace(to);
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [to, delay, router]);

  return null;
};

export default Redirect;