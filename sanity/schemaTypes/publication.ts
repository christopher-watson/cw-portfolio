import { defineField } from "sanity";

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
   name: "publication",
   title: "Publication",
   type: "document",
   fields: [
      defineField({
         name: 'title',
         type: 'string',
         title: 'Title'
      }),
      defineField({
         name: 'description',
         type: 'string',
         title: 'Description',
         description: 'Add a description for the Research & Publication item'
      }),
      defineField({
         name: 'slug',
         type: 'slug',
         title: 'Slug',
         options: { source: 'title' },
         validation: (rule) => rule.required(),
      }),
      defineField({
         name: 'image',
         title: 'Publication Image',
         type: 'image',
         options: { hotspot: true }
      })
   ]
}