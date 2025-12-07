import Reveal from "@/components/Reveal";

export default function Page() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <Reveal>
      <div className="max-w-3xl">
        <h1 className="text-4xl font-semibold tracking-tight">Terms of Service</h1>
        <p className="mt-4 text-lg leading-relaxed text-zinc-600">
          This is a placeholder Terms of Service for PIXXELORBIT. Replace this content with
          your actual terms, acceptable use, and limitation of liability.
        </p>
        <div className="mt-8 space-y-4 text-sm text-zinc-600">
          <p>• Services provided and scope</p>
          <p>• Payment, refunds, and cancellations</p>
          <p>• Intellectual property and licensing</p>
          <p>• Termination and dispute resolution</p>
        </div>
      </div>
      </Reveal>
    </div>
  );
}
