import SelectItemType from "@/components/SelectItemType";

export default function SelectGameItemType() {
  return (
    <main className="min-h-screen flex justify-center items-center p-4">
      <SelectItemType
      itemType="Klockor"
      itemEmoji="⌚"
      gameLink="/spel/gissa-priset/klockor"
      gameDescription="Vintage klockor från lyxmärken som Rolex, Patek Phillipe, Omega och Cartier"
      />
      <SelectItemType
      itemType="Design"
      itemEmoji="🛋️"
      gameLink="/spel/gissa-priset/design"
      gameDescription="Designer inredning från skapare som Josef Frank och Stig Lindberg"
      />
      <SelectItemType
      itemType="Konst"
      itemEmoji="🖼️"
      gameLink="/spel/gissa-priset/konst"
      gameDescription="Konst från konstnärer som Andy Warhol till Anders Zorn"
      />
    </main>
  );
}
