import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resume | Jareer Zeenam',
  description: 'Resume for Jareer Zeenam, software engineer.',
};

const Resume = () => {
  return (
    <main className="min-h-screen bg-black-100 px-4 py-6 text-white">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-4">
        <div className="flex items-center justify-between gap-3">
          <a href="/" className="text-sm text-white-200">
            Back to portfolio
          </a>
          <a
            href="/Jareer_Zeenam_Resume.pdf"
            download
            className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-black"
          >
            Download PDF
          </a>
        </div>
        <iframe
          src="/Jareer_Zeenam_Resume.pdf"
          title="Jareer Zeenam resume"
          className="h-[85svh] w-full rounded-2xl border border-white/10 bg-white"
        />
      </div>
    </main>
  );
};

export default Resume;
