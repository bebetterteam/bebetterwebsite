import Image from "next/image";
import Link from "next/link";
import { projectsSection } from "@/lib/site";
import { publishedProjects } from "@/lib/projects";

/**
 * Mirrors the Framer "ProjectsSection" (nodeId PjXRFN9Ez) — the "Our Work"
 * heading plus the CMS-driven Projects Collection Stack.
 *
 * NOTE: every Image field in the Framer CMS is still null, so each card falls
 * back to a brand gradient with a 3D prop. Fill Image 1 in the CMS and the
 * cover swaps for the real photo.
 */
const COVERS = [
  { gradient: "linear-gradient(140deg, rgb(102,112,255), rgb(67,96,255))", prop: "/3d/turquoise-star.png" },
  { gradient: "linear-gradient(140deg, rgb(102,255,217), rgb(0,204,153))", prop: "/3d/purple-sphere.png" },
  { gradient: "linear-gradient(140deg, rgb(252,97,41), rgb(252,160,41))", prop: "/3d/blue-cylinder.png" },
];

export default function Projects() {
  const single = publishedProjects.length === 1;

  return (
    <section
      id="projects"
      className="relative w-full overflow-hidden rounded-3xl bg-white px-6 py-[192px]"
    >
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-24">
        <h2 className="t-h2">{projectsSection.title}</h2>

        <div
          className={`grid grid-cols-1 gap-6 ${single ? "" : "md:grid-cols-2"}`}
        >
          {publishedProjects.map((project, i) => {
            const cover = COVERS[i % COVERS.length];
            return (
              <Link
                key={project.slug}
                href={`/${project.slug}`}
                className={`group flex flex-col overflow-hidden rounded-[32px] border border-black/6 bg-white shadow-[0_16px_48px_rgba(0,0,0,0.08)] transition-transform duration-300 ease-out hover:-translate-y-1 ${
                  single ? "md:flex-row" : ""
                }`}
              >
                <div
                  className={`relative flex aspect-[16/10] items-center justify-center overflow-hidden ${
                    single ? "md:aspect-auto md:w-1/2" : "w-full"
                  }`}
                  style={{ background: cover.gradient }}
                >
                  <Image
                    src={cover.prop}
                    alt=""
                    width={280}
                    height={280}
                    className="h-1/2 w-1/2 object-contain transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                </div>
                <div
                  className={`flex flex-1 flex-col gap-3 p-8 ${single ? "md:p-12" : ""}`}
                >
                  <span className="t-span-muted text-grey-50">
                    {project.category}
                  </span>
                  <h3 className="t-h3">{project.title}</h3>
                  <p className="t-body-sm text-grey-30">
                    {project.metaDescription}
                  </p>
                  <span className="t-span mt-auto pt-6 text-brand-blue">
                    {project.duration} →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
