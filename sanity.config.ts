'use client'

import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'

// @ts-ignore
import { structureTool } from 'sanity/structure' 

import { apiVersion, dataset, projectId } from './sanity/env'
import { schema } from './sanity/schemaTypes'
// @ts-ignore
import { structure, getDefaultDocumentNode } from './sanity/structure'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  schema,
  plugins: [
    structureTool({
      structure,
      defaultDocumentNode: getDefaultDocumentNode, 
    }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
}) 