import Link from "next/link";
import { Container } from "@/components/Container";

export default function NotFound() {
  return (
    <section className="py-28 md:py-40">
      <Container>
        <p className="font-grotesk text-[0.8rem] uppercase tracking-[0.2em] text-stone">
          404 — Off the map
        </p>
        <h1 className="mt-6 font-display text-6xl font-semibold leading-[0.95] tracking-tight md:text-8xl">
          Nothing to
          <br />
          see <em className="italic text-coral">here.</em>
        </h1>
        <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft">
          That page moved, or never existed. The work, however, is very much
          worth your time.
        </p>
        <Link
          href="/work"
          className="mt-10 inline-block rounded-full bg-ink px-6 py-3 font-grotesk text-[0.8rem] uppercase tracking-[0.14em] text-paper transition-colors hover:bg-coral"
        >
          See the work
        </Link>
      </Container>
    </section>
  );
}
