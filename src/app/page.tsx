import { Suspense } from "react";
import { AddTagForm } from "./add-tag-form";
import { Tags } from "./tags";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <Suspense fallback={<p>Carregando tags...</p>}>
        <Tags />
      </Suspense>
      <AddTagForm />
    </main>
  );
}
