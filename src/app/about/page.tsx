const facts = [
  "Sunflowers can contain up to 2,000 seeds in a single flower head.",
  "Tulip bulbs were once so valuable in 17th-century Holland that they were traded like currency.",
  "Broccoli is actually a cluster of unopened flower buds.",
  "The corpse flower (Amorphophallus titanum) smells like rotting meat to attract pollinators.",
  "Roses are related to apples, pears, cherries, and almonds.",
  "Some orchid seeds are as fine as dust, with millions in a single pod.",
  "Saffron, one of the world's most expensive spices, comes from the stigmas of crocus flowers.",
  "Bees can see ultraviolet patterns on petals that are invisible to humans.",
  "The Queen of the Andes can take up to 100 years to bloom, then dies after flowering.",
  "Lotus seeds can remain viable for over 1,000 years.",
];

export default function About() {
  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-16 font-sans">
      <h1 className="text-3xl font-semibold tracking-tight">About Us</h1>
      <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
        We love flowers. Here are 10 fun facts about them.
      </p>
      <ol className="mt-8 list-decimal space-y-3 pl-6">
        {facts.map((fact) => (
          <li key={fact}>{fact}</li>
        ))}
      </ol>
    </main>
  );
}
