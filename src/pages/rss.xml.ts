import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { site } from '@data/site';

export async function GET() {
  const insights = (await getCollection('insights'))
    .filter((p) => !p.data.draft)
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());

  return rss({
    title: `${site.name} — Insights`,
    description: site.description,
    site: site.url,
    items: insights.map((post) => ({
      title: post.data.title,
      description: post.data.summary,
      link: `/insights/${post.slug}/`,
      pubDate: post.data.date,
      author: post.data.author,
      categories: [post.data.category],
    })),
  });
}
