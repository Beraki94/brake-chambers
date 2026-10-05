import { type SchemaTypeDefinition } from 'sanity'

import { product } from './product'
import { post } from './post'
import { page } from './page'
import { seo } from './seo'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, post, page, seo],
}
