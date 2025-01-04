import { SanityTypes } from "@/@types";
import { client } from "@/sanity/lib/client";
import { PortableText } from "next-sanity";
import Image from "next/image";

async function getLanding() {
   const query = `
      *[_type == 'landing'][0]
   `

   return await client.fetch(query);
}

export default async function Home() {
   const landing: SanityTypes.Landing = await getLanding();

   return (
      <section>
         <Image
            src="/profile.png"
            alt="Profile photo"
            className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
            unoptimized
            width={160}
            height={160}
            priority
         />

         <h1 className="mb-8 text-3xl font-medium tracking-tight">
            About me
         </h1>
         <div className="prose prose-neutral dark:prose-invert sm:px-4 md:px-0 max-w-[500px]">
            <PortableText value={landing.intro} />
         </div>
      </section>
   );
}
