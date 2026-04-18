import CertificatesClient from "./CertificatesClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Certificates",
  description: "Professional certifications and courses achieved by Thinuka Vinjaya Wickramanayaka.",
  openGraph: {
    title: "Certificates | Thinuka Vinjaya Wickramanayaka",
    description: "Professional certifications and courses achieved.",
  },
};

export default function CertificatesPage() {
  return (
    <main className="w-full bg-[#121212] min-h-screen relative py-12 md:py-20 overflow-x-hidden font-sans">
      <CertificatesClient />
    </main>
  );
}
