import React from "react";
import Link from "next/link";

const HomePage = () => {
  return (
    <>
      <div className="text-3xl">HomePage</div>
      <Link href="/properties">to properties</Link>
    </>
  );
};

export default HomePage;
