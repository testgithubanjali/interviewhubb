import Link from "next/link";
import {
    ArrowLeft,
    Search,
    Plus,
    MessageCircle,
    ThumbsUp,
    Clock,
    Building2,
    SlidersHorizontal,
} from "lucide-react";


const experiences = [
    {
        id: 1,
        title: "Software Engineer",
        company: "Google",
        difficulty:"Hard",
        likes: "24",
    },
     description:
      "The interview focused on data structures and algorithms. I was asked two coding questions: Two Sum and a variation of Longest Substring Without Repeating Characters. Focus on explaining your approach and time complexity.",
    tags: ["DSA", "Arrays", "HashMap"],
  },
  {
    id: 2,
    company: "Amazon",
    role: "SDE I",
    category: "Full-time",
    difficulty: "Medium",
    author: "Rahul Verma",
    time: "5 hours ago",
    likes: 18,
    comments: 5,
    description:
      "The process included an online assessment, two technical rounds, and a behavioral interview. Prepare arrays, trees, graphs, and examples that demonstrate ownership and problem-solving.",
    tags: ["DSA", "Trees", "Behavioral"],
  },
  {
    id: 3,
    company: "Microsoft",
    role: "Frontend Developer",
    category: "Full-time",
    difficulty: "Medium",
    author: "Sneha Gupta",
    time: "1 day ago",
    likes: 31,
    comments: 12,
    description:
      "I was asked about React hooks, component lifecycle, JavaScript promises, and a small UI coding task. Be ready to explain why you chose a particular solution, not just how it works.",
    tags: ["React", "JavaScript", "Frontend"],
  },
];
export default function CommunityPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-xl font-bold tracking-tight">
            Interview<span className="text-indigo-600">Hub</span>
          </Link>

          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-slate-600 hover:text-indigo-600"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-indigo-600">
              Learn from each other
            </p>
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
              Community Feed
            </h1>
            <p className="mt-4 max-w-2xl leading-7 text-slate-600">
              Real interview experiences, useful questions, and practical
              advice shared by candidates like you.
            </p>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white shadow-sm transition hover:bg-indigo-700"
          >
            <Plus size={18} />
            Share Experience
          </button>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-[1fr_auto]">
          <label className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3">
            <Search size={19} className="text-slate-400" />
            <input
              type="search"
              placeholder="Search companies, roles, or questions..."
              className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
            />
          </label>

          <button
            type="button"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100"
          >
            <SlidersHorizontal size={17} />
            Filters
          </button>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <button className="rounded-full bg-indigo-600 px-4 py-2 text-sm font-medium text-white">
            All Experiences
          </button>
          <button className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600 hover:border-indigo-300">
            Full-time
          </button>
          <button className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600 hover:border-indigo-300">
            Internship
          </button>
          <button className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600 hover:border-indigo-300">
            Technical
          </button>
        </div>

        <div className="mt-8 space-y-5">
          {experiences.map((experience) => (
            <article
              key={experience.id}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-indigo-200 hover:shadow-md md:p-8"
            >
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                <div className="flex items-start gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                    <Building2 size={23} />
                  </div>

                  <div>
                    <h2 className="text-lg font-bold">
                      {experience.company}
                    </h2>
                    <p className="mt-1 text-sm text-slate-600">
                      {experience.role}
                    </p>
                    <p className="mt-2 text-xs text-slate-400">
                      Shared by {experience.author}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                    {experience.category}
                  </span>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${
                      experience.difficulty === "Hard"
                        ? "bg-red-50 text-red-600"
                        : "bg-amber-50 text-amber-700"
                    }`}
                  >
                    {experience.difficulty}
                  </span>
                </div>
              </div>

              <p className="mt-6 leading-7 text-slate-600">
                {experience.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {experience.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg bg-indigo-50 px-3 py-1.5 text-xs font-medium text-indigo-700"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100 pt-5">
                <div className="flex flex-wrap items-center gap-5 text-sm text-slate-500">
                  <span className="flex items-center gap-2">
                    <ThumbsUp size={16} />
                    {experience.likes} likes
                  </span>
                  <span className="flex items-center gap-2">
                    <MessageCircle size={16} />
                    {experience.comments} comments
                  </span>
                </div>

                <span className="flex items-center gap-2 text-xs text-slate-400">
                  <Clock size={14} />
                  {experience.time}
                </span>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-slate-500">
          You&apos;re viewing sample experiences. Real community posts will be
          connected to the backend later.
        </p>
      </section>
    </main>
  );
}