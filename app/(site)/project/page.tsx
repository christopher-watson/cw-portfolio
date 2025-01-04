import { SanityTypes } from "@/@types";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import React from "react";
import Image from "next/image"
import Link from "next/link";

async function getProjects() {
   const query = `
      *[_type == 'project'] | order(_createdAt desc)
   `

   return await client.fetch(query);
}

export default async function Projects() {
   const projects: SanityTypes.Project[] = await getProjects();

   return (
      <section>
         <h1 className="mb-8 text-3xl font-medium tracking-tight">Projects</h1>
         <div>
            {
               projects.map((proj: SanityTypes.Project, key: number) => {
                  return (
                     <Link key={key} href={`/project/${proj.slug.current}`}>
                        <h1>{proj.title}</h1>
                        <div className="h-96 w-full overflow-hidden rounded-lg relative image-container">
                           <Image
                              src={urlFor(proj.image).url()}
                              fill
                              alt={proj.title}
                              className="h-full object-cover aspect-auto w-full"
                           />
                        </div>
                        <h3>{proj.description}</h3>
                     </Link>
                  )
               })
            }
         </div>
      </section>
   );
}
