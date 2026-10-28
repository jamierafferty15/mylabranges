MYLABRANGES — SUPPORTING PAGES / ADS-READINESS UPDATE

This package adds:
- about.html
- privacy.html
- medical-disclaimer.html
- support-pages.css (used by the three new pages)
- sitemap.xml (updated to list all four public pages)
- footer-nav.html (small snippet to add to the existing homepage footer)
- footer-styles.css (small CSS block to append to the existing style.css)

IMPORTANT: This package deliberately does NOT replace your current index.html or style.css, because your live homepage has received several later updates. This avoids overwriting your current calculator, SEO, analytics, NHS-links, favicon or other changes.

1. Copy these files into your existing local mylabranges folder:
   about.html
   privacy.html
   medical-disclaimer.html
   support-pages.css
   sitemap.xml

2. Open footer-nav.html and copy its <nav> block into the existing <footer> in index.html, before </footer>.

3. Open footer-styles.css and append those rules to the bottom of your existing style.css.

4. Check locally that these paths work:
   about.html
   privacy.html
   medical-disclaimer.html

5. Commit:
   git add index.html style.css about.html privacy.html medical-disclaimer.html support-pages.css sitemap.xml
   git commit -m "Add About Privacy and medical disclaimer pages"
   git push

6. After GitHub Pages redeploys, open:
   https://mylabranges.com/about.html
   https://mylabranges.com/privacy.html
   https://mylabranges.com/medical-disclaimer.html
   https://mylabranges.com/sitemap.xml

7. In Google Search Console, the sitemap URL stays the same:
   https://mylabranges.com/sitemap.xml
Google will re-read it and discover the three new pages.

Before ads go live later:
- update Privacy Policy with the actual advertising/CMP setup
- configure a Google-certified CMP for UK/EEA/Switzerland if required by the ad configuration
- add ads.txt using the publisher ID supplied by AdSense
