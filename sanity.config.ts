
/**
 * This config is used to set up Sanity Studio that's mounted on the `/pages/studio/[[...index]].tsx` route
 */

import { visionTool } from '@sanity/vision'
import { apiVersion, dataset, previewSecretId, projectId } from '~/lib/sanity.api'
import { previewDocumentNode } from '~/plugins/previewPane'
import { pageStructure, singletonPlugin } from '~/plugins/settings'
import { productionUrl } from '~/plugins/productionUrl'
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash'
import { media } from 'sanity-plugin-media'
import make from '~/schemas/singletons/make'
import car from '~/schemas/documents/car'


const title = 'Alliance Auto Group'

export const PREVIEWABLE_DOCUMENT_TYPES: string[] = [
  car.name,
]

export default defineConfig({
  basePath: '/studio',
  projectId: projectId || '',
  dataset: dataset || '',
  title,
  schema: {
    // If you want more content types, you can add them to this array
    types: [
      // Singletons
      make,
      // Documents
      car,
    ],
  },
  plugins: [
    deskTool({
      // `pageStructure` is responsible for adding the “Settings” tab to the desk
      structure: pageStructure([car]),
      // `defaultDocumentNode` is responsible for adding a “Preview” tab to the document pane
      defaultDocumentNode: previewDocumentNode({ apiVersion, previewSecretId }),
    }),
    // Add the "Open preview" action
    productionUrl({
      apiVersion,
      previewSecretId,
      types: PREVIEWABLE_DOCUMENT_TYPES,
    }),
    // Add an image asset source for Unsplash
    unsplashImageAsset(),
    // Add a media asset source for Sanity's own media library
    media(),
    // Vision lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
  ],
})