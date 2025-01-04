import { type SchemaTypeDefinition } from 'sanity'
import publication from './publication'
import project from './project'
import resume from './resume'
import landing from './landing'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
   publication,
   project,
   resume,
   landing
  ],
}
