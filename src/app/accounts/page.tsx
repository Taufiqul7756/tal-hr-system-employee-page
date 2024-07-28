import { Archive } from "lucide-react";
import * as React from "react";

type Props = {};

export default function accountsPage(props: Props) {
  return (
    <div className="flex justify-start items-center gap-3">
      {" "}
      <Archive /> Accounts Page
    </div>
  );
}
