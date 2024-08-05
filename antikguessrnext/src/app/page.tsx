import Image from "next/image";
import Navbar from "@/components/Navbar";
import GameSelection from "@/components/GameSelection";
import WelcomeHero from "@/components/WelcomeHero";

export default function Home() {
  return (
    <main className="min-h-screen">
      <WelcomeHero/>
    </main>
  );
}
