import { SanityTypes } from "@/@types";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import React from "react";
import Image from "next/image"
import Link from "next/link";

async function getPublications() {
   const query = `
      *[_type == 'publication'] | order(_createdAt desc)
   `

   return await client.fetch(query);
}

export default async function Publications() {
   const publications: SanityTypes.Publication[] = await getPublications();
   
   return (
      <section>
         <h1 className="mb-8 text-3xl font-medium tracking-tight">Research & Publications</h1>
         <div>
            {
               publications.map((pub: SanityTypes.Publication, key: number) => {
                  return (
                     <Link key={key} href={`/publication/${pub.slug.current}`}>
                        <h1>{pub.title}</h1>
                        <div className="h-96 w-full overflow-hidden rounded-lg relative image-container">
                           <Image
                              src={urlFor(pub.image).url()}
                              fill
                              alt={pub.title}
                              className="h-full object-cover aspect-auto w-full"
                           />
                        </div>
                        <h3>{pub.description}</h3>
                     </Link>
                  )
               })
            }
         </div>
      </section>
   );
}
