import Link from "next/link";
import { ScalesIcon } from "@/components/icons";

export default function NotFound() {
  return (
    <main className="grid min-h-[100svh] place-items-center bg-obsidian px-6 text-center text-white">
      <div className="max-w-md">
        <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-white/5 border border-white/10 text-accent">
          <ScalesIcon className="h-8 w-8" />
        </div>
        <p className="mt-8 font-mono text-5xl font-bold tracking-tight text-accent">
          404
        </p>
        <h1 className="mt-4 font-serif text-3xl font-normal italic text-slate-100">
          Sayfa Bulunamadı
        </h1>
        <p className="mt-3 text-sm text-slate-400">
          Ulaşmaya çalıştığınız sayfa taşınmış, silinmiş ya da geçici olarak erişilemiyor olabilir.
        </p>
        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white shadow-md transition-all hover:bg-bronze-light"
          >
            Ana Sayfaya Dön
          </Link>
        </div>
      </div>
    </main>
  );
}
