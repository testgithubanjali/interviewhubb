
import Link from "next/link";
import {
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  MessageCircle,
  Sparkles,
  Users,
  Zap,
  Code2,
  BriefcaseBusiness,
  Star,
} from "lucide-react";

const features = [
  {
    icon: MessageCircle,
    number: "01",
    title: "Real Interview Experiences",
    description:
      "Discover interview rounds, questions, and honest experiences shared by candidates who have been there.",
    color: "bg-violet-100 text-violet-700",
  },
  {
    icon: Users,
    number: "02",
    title: "Learn With the Community",
    description:
      "Ask questions, discuss solutions, exchange feedback, and help other candidates prepare confidently.",
    color: "bg-blue-100 text-blue-700",
  },
  {
    icon: BrainCircuit,
    number: "03",
    title: "Improve With AI",
    description:
      "Get structured feedback on your answers, discover missing concepts, and learn how to communicate better.",
    color: "bg-emerald-100 text-emerald-700",
  },
];

const topics = [
  { name: "Data Structures & Algorithms", icon: Code2 },
  { name: "Frontend Development", icon: Zap },
  { name: "Backend Development", icon: BriefcaseBusiness },
];

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#faf9ff] text-slate-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-20 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex h-19 max-w-7xl items-center justify-between px-5 sm:px-8">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-lg shadow-indigo-200">
              <MessageCircle size={22} />
            </span>
            <span className="text-xl font-extrabold tracking-tight">
              Interview<span className="text-indigo-600">Hub</span>
            </span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            <Link
              href="/community"
              className="text-sm font-medium text-slate-600 transition hover:text-indigo-600"
            >
              Community
            </Link>
            <Link
              href="/ai-coach"
              className="text-sm font-medium text-slate-600 transition hover:text-indigo-600"
            >
              AI Coach
            </Link>
            <Link
              href="/mock-interview"
              className="text-sm font-medium text-slate-600 transition hover:text-indigo-600"
            >
              Mock Interviews
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="hidden rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 sm:block"
            >
              Log in
            </Link>
            <Link
              href="/signup"
              className="rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-indigo-200 transition hover:bg-indigo-700"
            >
              Get started <span className="ml-1">→</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative px-5 pb-20 pt-20 sm:px-8 sm:pb-28 sm:pt-28">
        <div className="pointer-events-none absolute left-1/2 top-0 z-0 h-105 w-180 -translate-x-1/2 rounded-full bg-indigo-200/30 blur-[120px]" />

        <div className="relative mx-auto max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white px-4 py-2 text-xs font-semibold text-indigo-700 shadow-sm sm:text-sm">
            <Sparkles size={16} />
            Your next opportunity starts here
            <ArrowRight size={14} />
          </div>

          <h1 className="mx-auto mt-8 max-w-4xl text-4xl font-extrabold leading-[1.12] tracking-tight sm:text-6xl lg:text-7xl">
            Every interview is a chance to{" "}
            <span className="bg-linear-to-r from-indigo-600 via-violet-600 to-purple-600 bg-clip-text text-transparent">
              grow.
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Learn from real interview experiences, share what you know, and
            improve your answers with AI. Your next interview doesn&apos;t have to
            feel like your first.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/community"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-indigo-200 transition hover:-translate-y-0.5 hover:bg-indigo-700"
            >
              Explore experiences <ArrowRight size={18} />
            </Link>
            <Link
              href="/ai-coach"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 font-semibold text-slate-700 transition hover:border-indigo-200 hover:text-indigo-700"
            >
              <BrainCircuit size={19} />
              Try AI Coach
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-slate-500">
            <span className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-emerald-600" />
              Learn from real experiences
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-emerald-600" />
              Practice at your own pace
            </span>
          </div>
        </div>
      </section>

      {/* Feature cards */}
      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 sm:pb-28">
        <div className="mb-10 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-indigo-600">
            Everything you need
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Prepare smarter, together.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
            A community that helps you turn every interview experience into
            your next learning opportunity.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.number}
                className="group rounded-2xl border border-slate-200/80 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-100/50 sm:p-8"
              >
                <div className="flex items-center justify-between">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${feature.color}`}
                  >
                    <Icon size={25} />
                  </div>
                  <span className="text-sm font-bold text-slate-300">
                    {feature.number}
                  </span>
                </div>

                <h3 className="mt-7 text-xl font-bold tracking-tight">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {feature.description}
                </p>

                <Link
                  href={
                    feature.number === "01"
                      ? "/community"
                      : feature.number === "02"
                        ? "/community"
                        : "/ai-coach"
                  }
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-indigo-600 transition group-hover:gap-3"
                >
                  Explore feature <ArrowRight size={16} />
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      {/* Topics */}
      <section className="border-y border-slate-200/70 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-indigo-600">
                Explore & prepare
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight">
                Find your next topic.
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-500">
                Start with the skills that matter for your target role.
              </p>
            </div>
            <Link
              href="/community"
              className="inline-flex items-center gap-2 text-sm font-bold text-indigo-600 hover:text-indigo-800"
            >
              Browse community <ArrowRight size={17} />
            </Link>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {topics.map((topic) => {
              const Icon = topic.icon;

              return (
                <Link
                  href="/community"
                  key={topic.name}
                  className="flex items-center gap-4 rounded-xl border border-slate-200 bg-slate-50 p-5 transition hover:border-indigo-200 hover:bg-indigo-50"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-indigo-600 shadow-sm">
                    <Icon size={22} />
                  </span>
                  <span className="flex-1 text-sm font-bold">
                    {topic.name}
                  </span>
                  <ArrowRight size={17} className="text-slate-400" />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Community call to action */}
      <section className="px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-linear-to-br from-indigo-700 via-indigo-600 to-violet-700 px-6 py-12 text-center text-white shadow-xl shadow-indigo-200 sm:px-12 sm:py-16">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
            <Star size={28} />
          </div>
          <h2 className="mx-auto mt-6 max-w-2xl text-3xl font-extrabold tracking-tight sm:text-4xl">
            Your experience could help someone succeed.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-indigo-100 sm:text-base">
            Share the questions you faced, the lessons you learned, and the
            advice you wish you had before your interview.
          </p>
          <Link
            href="/community"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-bold text-indigo-700 transition hover:bg-indigo-50"
          >
            Join the community <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white px-5 py-8 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
          <Link href="/" className="text-lg font-extrabold">
            Interview<span className="text-indigo-600">Hub</span>
          </Link>
          <p className="text-center text-sm text-slate-500">
            Learn together. Prepare better. Grow together.
          </p>
          <p className="text-xs text-slate-400">
            Built for candidates, by learners.
          </p>
        </div>
      </footer>
    </main>
  );
}
