//TODO: This or that
"use client";

import { Radio, RadioGroup } from "@/components/ui/RadioGroup";
import { useState } from "react";

export default function Home() {
  const [selected, setSelected] = useState("ejej");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>frnjrnfr</div>
      {selected}
      <RadioGroup value={selected} onChange={setSelected}>
        <Radio value="ejej">efefejrngrg</Radio>
        <Radio value="eeeee">efefefe</Radio>
        <Radio value="eeeqq">eefef</Radio>
      </RadioGroup>
    </main>
  );
}
