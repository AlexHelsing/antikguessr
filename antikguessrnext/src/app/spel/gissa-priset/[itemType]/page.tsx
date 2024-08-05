import { Suspense } from "react";
import GuessThePriceGame from "@/components/GuessThePriceGame";

export default function GuessThePrice({ params }: {params: {itemType: string }}) {
  return (
    
    <main className="min-h-screen">
      <Suspense fallback={<div>Laddar...</div>}>
        <GuessThePriceGame itemType={params.itemType} />
      </Suspense>
    </main>
  );
}
