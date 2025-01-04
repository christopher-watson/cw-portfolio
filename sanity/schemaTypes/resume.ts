import { defineField } from "sanity";

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
   name: "resume",
   title: "Resume",
   type: "document",
   fields: [
      defineField({
         name: 'title',
         type: 'string',
         title: 'Title'
      }),
      defineField({
         name: 'intro',
         title: 'Intro',
         type: 'array', 
         of: [{type: 'block'}]
      }),
      defineField({
         name: 'experience',
         title: 'Work Experience',
         type: 'array', 
         of: [{type: 'block'}]
      }),
      defineField({
         name: 'education',
         title: 'Education',
         type: 'array', 
         of: [{type: 'block'}]
      }),
   ]
}