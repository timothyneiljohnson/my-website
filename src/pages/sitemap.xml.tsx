// pages/sitemap.xml.tsx
import { ALL_POSTS_API_URL } from '../lib/constants';

function generateSiteMap(posts) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the two URLs we know already-->
     <url>
       <loc>https://timothyneil.com</loc>
     </url>
     <url>
       <loc>https://timothyneil.com/blog</loc>
     </url>
     ${posts
       .map(
         ({ id }) => `
            <url>
                <loc>https://timothyneil.com/post/${id}</loc>
            </url>
          `
       )
       .join('')}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  // We make an API call to gather the URLs for our site
  const request = await fetch(ALL_POSTS_API_URL);
  const posts = await request.json();

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(posts);

  res.setHeader('Content-Type', 'text/xml');
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
