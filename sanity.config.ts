'use client'

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {apiVersion, dataset, projectId} from './sanity/env'
import {schema} from './sanity/schemaTypes'
import {structure, getDefaultDocumentNode} from './sanity/structure'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  schema,
  plugins: [
    structureTool({
      structure,
      defaultDocumentNode: getDefaultDocumentNode, // هذا الربط أساسي لظهور التبويبة
    }),
    visionTool({defaultApiVersion: apiVersion}),
  ],
})