import { SanityTypes } from '@/@types';
import { client } from '@/sanity/lib/client';
import React from 'react'

async function getPub(slug: string): Promise<SanityTypes.Publication> {
   const query = `
      *[_type == 'publication' && slug.current == $slug]{
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
   const pub: SanityTypes.Publication = await getPub(slug);

   return (
      <div>
         <h1>{pub.description}</h1>
      </div>
   )
}
