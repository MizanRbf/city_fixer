import React from "react";
import Link from "next/link";
const LargeMenu = () => {
  return (
    <ul className="flex gap-4 *:font-semibold text-white">
      <li>
        <Link href={"/"}>Home</Link>
      </li>
      <li>
        <Link href={"/report"}>Report</Link>
      </li>
      <li>
        <Link href={"/issues"}>Issues</Link>
      </li>
    </ul>
  );
};

export default LargeMenu;
