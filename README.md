# Avaran Website

Static Avaran corporate website with GitHub Pages hosting and Decap CMS content maintenance.

## Before publishing
1. Create a GitHub repository named `avaran-website`.
2. Upload all files from this folder to the repository.
3. Edit `admin/config.yml` and replace `YOUR_GITHUB_USERNAME` with your GitHub username.
4. Enable GitHub Pages using GitHub Actions or the `main` branch.
5. In Settings → Pages → Custom domain, enter `avaran.co.in`.
6. At the DNS provider, point the apex domain to GitHub Pages using GitHub's current A records, and `www` to your GitHub Pages hostname if you want `www` as well.
7. Enable HTTPS after GitHub verifies the domain.
8. `/admin/` is the content maintenance interface. The GitHub backend requires appropriate repository access/authentication; Decap Turbo can be used for hosted GitHub authentication if preferred.

## Content model
The initial CMS manages Services and Insights through `content/site.json`. More collections can be added later for case studies, industry pages, downloads and announcements.
