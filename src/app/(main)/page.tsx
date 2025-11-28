'use client';

import { useTasks } from "@/hooks/useTasks";

export default function Home() {
  const { data } = useTasks();
  console.log("data: ", data);

  return (
    <div className="">
      <header className="">
        header
      </header>
      <main className="">
        main
      </main>
    </div>
  );
}
