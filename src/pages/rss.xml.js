import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('blog');
  const sortedPosts = posts.sort((a, b) => 
    b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );

  return rss({
    title: '揉光入野',
    description: '一个简洁的技术博客',
    site: context.site,
    items: sortedPosts.map(post => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/blog/${post.slug}/`,
    })),
    customData: '<language>zh-cn</language>',
  });
}
