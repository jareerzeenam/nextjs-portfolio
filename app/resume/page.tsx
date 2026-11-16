import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resume, Jareer Zeenam',
  description: 'Resume of Jareer Zeenam, full-stack software engineer in London.',
};

export default function Resume() {
  return (
    <main className="min-h-screen bg-sky py-6">
      <div className="wrap flex flex-col gap-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <a href="/" className="link min-h-11 text-sm font-semibold">
            Back to the portfolio
          </a>
          <a href="/Jareer_Zeenam_Resume.pdf" download className="btn-primary min-h-11">
            Download the PDF
          </a>
        </div>
        <iframe
          src="/Jareer_Zeenam_Resume.pdf"
          title="Jareer Zeenam resume"
          className="h-[85svh] w-full border border-bone/15 bg-white"
        />
      </div>
    </main>
  );
}
