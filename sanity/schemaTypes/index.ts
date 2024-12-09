import { type SchemaTypeDefinition } from 'sanity'
import publication from './publication'
import project from './project'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
   publication,
   project
  ],
}
