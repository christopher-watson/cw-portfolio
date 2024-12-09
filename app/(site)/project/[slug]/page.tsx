import { SanityTypes } from '@/@types';
import { client } from '@/sanity/lib/client';
import React from 'react'

async function getProj(slug: string): Promise<any> {
   const query = `
      *[_type == 'project' && slug.current == $slug]{
         _createdAt,
         _id,
         title,
         description,
         image
      }[0]
   `

   return await client.fetch(query, { slug })
}

export default async function Page({ params: { slug } }: { params: { slug: string; } }) {
   const proj: SanityTypes.Project = await getProj(slug);

   return (
      <div>
         <h1>{proj.description}</h1>
      </div>
   )
}
