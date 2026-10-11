
import Link from "next/link";
import {
  MessageCircle,
  BrainCircuit,
  Users,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: MessageCircle,
    title: "Real Experiences",
    description:
      "Discover real interview questions, rounds, and experiences shared by candidates.",
  },
  {
    icon: Users,
    title: "Learn Together",
    description:
      "Discuss answers, share knowledge, and help other candidates improve.",
  },
  {
    icon: BrainCircuit,
    title: "AI Answer Coach",
    description:
      "Get personalized feedback and learn how to make your interview answers better.",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <nav className="flex items-center justify-between border-b border-slate-200 bg-white px-6 py-4">
        <Link href="/" className="text-2xl font-extrabold tracking-tight">
          Interview<span className="text-indigo-600">Hub</span>
        </Link>

        <div className="flex items-center gap-5">
          <Link
            href="/community"
            className="hidden text-sm font-medium text-slate-600 hover:text-indigo-600 sm:block"
          >
            Community
          </Link>

          <Link
            href="/ai-coach"
            className="hidden text-sm font-medium text-slate-600 hover:text-indigo-600 sm:block"
          >
            AI Coach
          </Link>

          <Link
            href="/login"
            className="rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700"
          >
            Login
          </Link>
        </div>
      </nav>

      <section className="mx-auto max-w-6xl px-6 pb-20 pt-20 text-center sm:pt-28">
        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-700">
          <Sparkles size={16} />
          Your interview preparation community
        </div>

        <h1 className="mx-auto mt-7 max-w-4xl text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl">
          Every interview is an opportunity to{" "}
          <span className="text-indigo-600">learn and grow.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
          Share interview experiences, discover questions asked by companies,
          learn from other candidates, and improve your answers with AI.
        </p>

        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <Link
            href="/community"
            className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-indigo-200 transition hover:-translate-y-0.5 hover:bg-indigo-700"
          >
            Explore experiences <ArrowRight size={18} />
          </Link>

          <Link
            href="/ai-coach"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 font-semibold text-slate-700 transition hover:border-indigo-200 hover:text-indigo-600"
          >
            <BrainCircuit size={19} />
            Try AI Coach
          </Link>
        </div>

        <div className="mt-20 grid gap-5 text-left sm:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mb-5 inline-flex rounded-xl bg-indigo-50 p-3 text-indigo-600">
                  <Icon size={25} />
                </div>

                <h2 className="text-lg font-bold">{feature.title}</h2>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white px-6 py-6 text-center text-sm text-slate-500">
        Learn together. Prepare better. Grow together.
      </footer>
    </main>
  );
}
