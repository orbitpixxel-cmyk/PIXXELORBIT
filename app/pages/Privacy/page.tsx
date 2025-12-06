import Reveal from "@/components/Reveal";

export default function Page() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <Reveal>
      <div className="max-w-3xl">
        <h1 className="text-4xl font-semibold tracking-tight">Privacy Policy</h1>
        <p className="mt-4 text-lg leading-relaxed text-zinc-600">
          This is a placeholder Privacy Policy for PIXXELORBIT. Replace this content with
          your actual privacy practices, data collection, and usage policies.
        </p>
        <div className="mt-8 space-y-4 text-sm text-zinc-600">
          <p>• What data we collect and why</p>
          <p>• Where data is stored and for how long</p>
          <p>• How to request data deletion or export</p>
          <p>• Contact details for privacy questions</p>
        </div>
      </div>
      </Reveal>
    </div>
  );
}
