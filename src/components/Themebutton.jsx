"use client";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { MdSunny } from "react-icons/md";
import { BsFillCloudMoonFill } from "react-icons/bs";



export default function Themebutton() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      {resolvedTheme === "dark" ? (
        <MdSunny />
      ) : (
        <BsFillCloudMoonFill />
      )}
    </button>
  );
}
