import type { Metadata } from "next";
import { notFound } from "next/navigation";
import TopNav from "@/components/TopNav";
import Contact from "@/components/Contact";
import { getLegalDoc, legalDocs } from "@/lib/legal";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return legalDocs.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const doc = getLegalDoc(slug);
  return doc ? { title: doc.title } : {};
}

export default async function LegalPage({ params }: Params) {
  const { slug } = await params;
  const doc = getLegalDoc(slug);
  if (!doc) notFound();

  return (
    <>
      <TopNav />
      <main className="w-full px-6">
        <article className="mx-auto w-full max-w-[800px] pt-[160px] pb-[120px]">
          <h1 className="t-h1 text-left">{doc.title}</h1>
          <div
            className="rich-text mt-10"
            dangerouslySetInnerHTML={{ __html: doc.content }}
          />
        </article>
      </main>
      <Contact />
    </>
  );
}
