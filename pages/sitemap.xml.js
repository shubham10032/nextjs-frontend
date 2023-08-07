import React from 'react'
import { db } from './../config/db'
const sitemap = () => {
  return null
}

export async function getServerSideProps(ctx) {
  let bank_product = await db.query("SELECT slug,updatedAt from view_bank_product")
  let product = await db.query("SELECT slug,updatedAt from view_product")
  let slugs = [...bank_product, ...product]
  const xml = await generateSitemap(slugs)
  ctx.res.write(xml);
  ctx.res.end();
  return {
    props: {},
  }

}

const generateSitemap = async (data) => {

  return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
    

    ${data.length > 0 && data.map((item) => {
    return `<url>
                <loc>${`${process.env.BASE_URL}/${item.slug}`}</loc>
                <lastmod>${item.updatedAt ? dateFormate(item.updatedAt) : null}</lastmod>
                <changefreq>daily</changefreq>
                <priority>1</priority>
              </url>
            `
  }).join('')
    }
      
    
  </urlset>`
}

const dateFormate = (data) => {
  const date = new Date(data);
  const formattedDate = date.toISOString();
  return `${formattedDate}`;
}

export default sitemap