import Equipe from "../equipe/equipe"

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/sZcQH8wmbL0
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function Component() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Pourquoi nous choisir</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              L'équipe experte pour votre projet
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Avec notre expertise approfondie et notre engagement envers la réussite de nos clients, nous sommes
              l'équipe idéale pour mener votre projet au succès.
            </p>
          </div>
  
        </div>
      </div>
    </section>
  )
}

