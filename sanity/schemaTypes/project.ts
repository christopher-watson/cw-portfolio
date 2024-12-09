import { defineField } from "sanity";

export default {
   name: "project",
   title: "Project",
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
         description: 'Add a description for the Project item'
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
         title: 'Project Image',
         type: 'image',
         options: { hotspot: true }
      })
   ]
}