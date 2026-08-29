import type { MetadataRoute } from 'next'
import { site } from '@/lib/site'
import { projects } from '@/lib/projects'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['', '/work', '/writing'].map(path => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
  }))

  const projectRoutes = projects.map(p => ({
    url: `${site.url}/work/${p.slug}`,
    lastModified: new Date(),
  }))

  return [...staticRoutes, ...projectRoutes]
}
