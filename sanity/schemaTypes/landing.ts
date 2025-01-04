import { defineField } from "sanity";

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
   name: "landing",
   title: "Landing",
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
   ]
}