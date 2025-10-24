const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const readingTime = require('reading-time');

// Paths
const CONTENT_DIR = path.join(__dirname, '../content/blog');
const OUTPUT_DIR = path.join(__dirname, '../blog');
const TEMPLATES_DIR = path.join(__dirname, './templates');

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Required front-matter fields
const REQUIRED_FIELDS = ['title', 'description', 'slug', 'date', 'author', 'ctaText', 'ctaHref'];

// Validate front-matter
function validateFrontMatter(data, filename) {
  const missing = REQUIRED_FIELDS.filter(field => !data[field]);
  
  if (missing.length > 0) {
    throw new Error(`❌ ${filename}: Champs requis manquants: ${missing.join(', ')}`);
  }
  
  // Warning for sources
  if (!data.sources || data.sources.length < 3) {
    console.warn(`⚠️  ${filename}: Moins de 3 sources (recommandé pour auto-posts)`);
  }
  
  // Set defaults
  data.city = data.city || 'Marseille';
  data.keywords = data.keywords || [];
  
  return data;
}

// Format date
function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

// Parse MDX files
async function parseArticles() {
  const articles = [];
  const files = fs.readdirSync(CONTENT_DIR).filter(f => f.endsWith('.mdx'));
  
  console.log(`📝 Parsing ${files.length} articles...`);
  
  for (const file of files) {
    const filePath = path.join(CONTENT_DIR, file);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    
    // Parse front-matter
    const { data, content } = matter(fileContent);
    
    try {
      // Validate
      validateFrontMatter(data, file);
      
      // Calculate reading time if not provided
      if (!data.readingTime) {
        const stats = readingTime(content, { wordsPerMinute: 200 });
        data.readingTime = Math.ceil(stats.minutes);
      }
      
      // Store raw content for template
      articles.push({
        ...data,
        formattedDate: formatDate(data.date),
        rawContent: content
      });
      
      console.log(`  ✅ ${file}`);
    } catch (error) {
      console.error(`  ❌ ${file}: ${error.message}`);
      process.exit(1);
    }
  }
  
  // Sort by date (newest first)
  articles.sort((a, b) => new Date(b.date) - new Date(a.date));
  
  return articles;
}

// Generate article page
function generateArticlePage(article) {
  const template = require('./templates/article');
  const html = template(article);
  
  const articleDir = path.join(OUTPUT_DIR, article.slug);
  if (!fs.existsSync(articleDir)) {
    fs.mkdirSync(articleDir, { recursive: true });
  }
  
  fs.writeFileSync(path.join(articleDir, 'index.html'), html);
  console.log(`  ✅ /blog/${article.slug}/`);
}

// Generate listing page
function generateListingPage(articles) {
  const template = require('./templates/listing');
  const html = template(articles);
  
  fs.writeFileSync(path.join(OUTPUT_DIR, 'index.html'), html);
  console.log(`  ✅ /blog/`);
}

// Update sitemap
function updateSitemap(articles) {
  const sitemapPath = path.join(__dirname, '../sitemap.xml');
  let sitemap = fs.readFileSync(sitemapPath, 'utf-8');
  
  // Remove existing blog entries
  sitemap = sitemap.replace(/<!-- BLOG_START -->[\s\S]*?<!-- BLOG_END -->/g, '');
  
  // Generate blog entries
  const today = new Date().toISOString().split('T')[0];
  let blogEntries = '<!-- BLOG_START -->\n';
  
  // Blog listing
  blogEntries += `  <url>
    <loc>https://flowria.com/blog/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>\n`;
  
  // Articles
  for (const article of articles) {
    const articleDate = new Date(article.date).toISOString().split('T')[0];
    blogEntries += `  <url>
    <loc>https://flowria.com/blog/${article.slug}/</loc>
    <lastmod>${articleDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>\n`;
  }
  
  blogEntries += '  <!-- BLOG_END -->';
  
  // Insert before closing </urlset>
  sitemap = sitemap.replace('</urlset>', `${blogEntries}\n</urlset>`);
  
  fs.writeFileSync(sitemapPath, sitemap);
  console.log(`  ✅ sitemap.xml mis à jour`);
}

// Generate index JSON for automation
function generateIndexJSON(articles) {
  const index = articles.map(article => {
    // Calculate word count
    const wordCount = article.rawContent
      .split(/\s+/)
      .filter(w => w.length > 0).length;
    
    return {
      slug: article.slug,
      title: article.title,
      keywords: article.keywords,
      publishedAt: new Date(article.date).toISOString().split('T')[0],
      wordCount: wordCount
    };
  });
  
  const jsonContent = JSON.stringify(index, null, 2);
  fs.writeFileSync(path.join(OUTPUT_DIR, 'index.json'), jsonContent);
  console.log(`  ✅ index.json généré`);
}

// Generate RSS feed
function generateRSS(articles) {
  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Blog Flowria - Automatisation IA Marseille</title>
    <link>https://flowria.com/blog/</link>
    <description>Conseils et actualités sur l'automatisation d'entreprise, les chatbots et l'IA pour TPE/PME à Marseille</description>
    <language>fr-FR</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="https://flowria.com/blog/feed.xml" rel="self" type="application/rss+xml"/>
    ${articles.slice(0, 10).map(article => `
    <item>
      <title>${escapeXml(article.title)}</title>
      <link>https://flowria.com/blog/${article.slug}/</link>
      <description>${escapeXml(article.description)}</description>
      <pubDate>${new Date(article.date).toUTCString()}</pubDate>
      <guid>https://flowria.com/blog/${article.slug}/</guid>
      ${article.keywords.map(kw => `<category>${escapeXml(kw)}</category>`).join('\n      ')}
    </item>`).join('')}
  </channel>
</rss>`;
  
  fs.writeFileSync(path.join(OUTPUT_DIR, 'feed.xml'), rss);
  console.log(`  ✅ RSS feed généré`);
}

function escapeXml(str) {
  return str.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '\'': return '&apos;';
      case '"': return '&quot;';
    }
  });
}

// Main build function
async function build() {
  console.log('\n🚀 Building Flowria Blog...\n');
  
  try {
    // Parse articles
    const articles = await parseArticles();
    
    if (articles.length === 0) {
      console.warn('\n⚠️  Aucun article trouvé dans /content/blog/\n');
      return;
    }
    
    console.log(`\n📄 Génération de ${articles.length} pages...`);
    
    // Generate pages
    for (const article of articles) {
      generateArticlePage(article);
    }
    
    generateListingPage(articles);
    
    // Update SEO files
    console.log('\n🔍 Mise à jour SEO...');
    updateSitemap(articles);
    generateRSS(articles);
    generateIndexJSON(articles);
    
    console.log('\n✨ Build terminé avec succès!\n');
    console.log(`📊 Résumé:`);
    console.log(`   - ${articles.length} articles`);
    console.log(`   - Listing: /blog/`);
    console.log(`   - RSS: /blog/feed.xml`);
    console.log(`   - Sitemap mis à jour\n`);
    
  } catch (error) {
    console.error('\n❌ Build failed:', error.message);
    process.exit(1);
  }
}

// Run build
build();
