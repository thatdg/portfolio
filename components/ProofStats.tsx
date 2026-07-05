import { NumberTicker } from "./magicui/number-ticker";
import { PROOF } from "@/content/cv";

/**
 * Splits a proof value into a static prefix/suffix and an animatable number.
 * "+249%" → { prefix: "+", value: 249, suffix: "%" }
 * "88+"   → { prefix: "",  value: 88,  suffix: "+" }
 * Anything without a number falls back to plain text.
 */
function parseStat(v: string) {
  const m = v.match(/^([^\d.-]*)(-?[\d.]+)(.*)$/);
  if (!m) return { prefix: "", value: null as number | null, suffix: v };
  return { prefix: m[1], value: Number(m[2]), suffix: m[3] };
}

export function ProofStats() {
  return (
    <dl className="mt-14 grid grid-cols-2 gap-y-6 border-t border-sand pt-8 sm:grid-cols-4">
      {PROOF.map((p) => {
        const { prefix, value, suffix } = parseStat(p.value);
        return (
          <div key={p.label} className="flex flex-col">
            <dt className="font-display text-3xl font-semibold text-accent md:text-4xl">
              {value === null ? (
                p.value
              ) : (
                <>
                  {prefix}
                  <NumberTicker value={value} />
                  {suffix}
                </>
              )}
            </dt>
            <dd className="mt-1 font-grotesk text-[0.7rem] uppercase tracking-[0.14em] text-stone">
              {p.label}
            </dd>
          </div>
        );
      })}
    </dl>
  );
}
