import React from "react";
import { SanityTypes } from "@/@types";
import { client } from "@/sanity/lib/client";
import {
   FaAws, FaReact, FaNodeJs, FaPython,
   FaHtml5, FaCss3, FaDocker, FaJava
} from "react-icons/fa";
import {
   SiTypescript, SiMongodb, SiMysql, SiExpress, SiNextdotjs
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { DiNginx } from "react-icons/di";
import Icon from "../(components)/icon";
import { PortableText } from "next-sanity";

async function getResume() {
   const query = `
      *[_type == 'resume'][0]
   `

   return await client.fetch(query);
}

export default async function Resume() {
   const resume: SanityTypes.Resume = await getResume();

   return (
      <div>
         <h1 className="mb-8 text-3xl font-medium tracking-tight">Resume</h1>
         <section className="mb-4">
            <h2 className="heading text-2xl">Intro</h2>
            <PortableText value={resume.intro} />
         </section>
         <section className="mb-4">
            <h2 className="heading text-2xl">Skills</h2>
            <div className="flex flex-wrap justify-center">
               <Icon icon={<FaAws />} />
               <Icon icon={<FaCss3 />} />
               <Icon icon={<FaDocker />} />
               <Icon icon={<SiExpress />} />
               <Icon icon={<FaHtml5 />} />
               <Icon icon={<FaJava />} />
               <Icon icon={<IoLogoJavascript />} />
               <Icon icon={<SiMongodb />} />
               <Icon icon={<SiMysql />} />
               <Icon icon={<FaNodeJs />} />
               <Icon icon={<SiNextdotjs />} />
               <Icon icon={<FaPython />} />
               <Icon icon={<FaReact />} />
               <Icon icon={<DiNginx />} />
               <Icon icon={<SiTypescript />} />
            </div>
         </section>
         <section className="mb-4">
            <h2 className="heading text-2xl">Work Experience</h2>
            <PortableText value={resume.experience} />
         </section>
         <section className="mb-4">
            <h2 className="heading text-2xl">Education</h2>
            <PortableText value={resume.education} />
         </section>

      </div>
   );
}
