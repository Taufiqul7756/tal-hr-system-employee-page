import * as React from "react";

import { File } from "lucide-react";
type Props = {};

export default function taskPage(props: Props) {
  return (
    <div className="flex justify-start items-center gap-3">
      {" "}
      <File /> Task Page
    </div>
  );
}
