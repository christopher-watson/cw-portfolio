import Image from "next/image";
import { socialLinks } from "../config";

export default function Home() {
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

         <h1 className="mb-8 text-2xl font-medium tracking-tight">
            About me
         </h1>

         <div className="prose prose-neutral dark:prose-invert sm:px-4 md:px-0 max-w-[500px]">
            <p>
               A clean, fast, and lightweight portfolio template built with Next.js,
               Vercel, and Tailwind CSS for optimal performance.
            </p>

            <p>
               Nextfolio is{" "}
               <a href={socialLinks.github} target="_blank">
                  open-source
               </a>{" "}
               and fully customizable, making it easy to add more features.
            </p>

         </div>
      </section>
   );
}
