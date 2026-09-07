import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import TopNav from "@/components/TopNav";
import Contact from "@/components/Contact";
import { FramerButton } from "@/components/framer";
import { getProject, publishedProjects } from "@/lib/projects";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return publishedProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.metaDescription,
  };
}

export default async function ProjectPage({ params }: Params) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project || project.draft) notFound();

  const meta = [
    { label: "Client", value: project.client },
    { label: "Category", value: project.category },
    { label: "Duration", value: project.duration },
  ];

  return (
    <>
      <TopNav />
      <main className="w-full px-6">
        <article className="mx-auto w-full max-w-[900px] pt-[160px] pb-[120px]">
          <Link
            href="/#projects"
            className="t-span-muted mb-10 inline-block text-grey-50 transition-colors hover:text-black"
          >
            ← Back to work
          </Link>

          <h1 className="t-h1 text-left">{project.title}</h1>
          <p className="t-body-big mt-6 text-left text-grey-30">
            {project.metaDescription}
          </p>

          {/* The CMS Image fields are still empty — brand cover as a stand-in. */}
          <div
            className="mt-12 flex aspect-[16/9] w-full items-center justify-center overflow-hidden rounded-[32px]"
            style={{
              background:
                "linear-gradient(140deg, rgb(102,112,255), rgb(67,96,255))",
            }}
          >
            <Image
              src="/3d/turquoise-star.png"
              alt=""
              width={280}
              height={280}
              className="h-1/2 w-auto object-contain"
            />
          </div>

          <dl className="mt-12 grid grid-cols-1 gap-6 border-y border-black/8 py-8 sm:grid-cols-3">
            {meta.map((item) => (
              <div key={item.label} className="flex flex-col gap-2">
                <dt className="t-span-muted text-grey-50">{item.label}</dt>
                <dd className="t-body-sm">{item.value}</dd>
              </div>
            ))}
          </dl>

          <div
            className="rich-text mt-12"
            dangerouslySetInnerHTML={{ __html: project.content }}
          />

          {project.buyLink && (
            <div className="mt-16">
              <FramerButton
                locale=""
                variant="JpseF5ehj"
                O1r1SHWDe={project.buyButtonText}
                YAeBepFkC="ArrowRight"
                bGXKran9l={project.buyLink.replace(/^\/#/, "#")}
                IzpkIlCCL="rgb(255, 255, 255)"
                E3sMJqdyg="rgb(67, 96, 255)"
                jbqbpFWTR="rgb(67, 96, 255)"
                iiNMG_vXP="rgb(255, 255, 255)"
                IJooVlaof="Back"
              />
            </div>
          )}
        </article>
      </main>
      <Contact />
    </>
  );
}
