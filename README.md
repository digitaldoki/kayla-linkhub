# Kayla Link Hub

A tiny one-page “link tree” you can host free with GitHub Pages and map to your own domain.

## Quick edit
- Open `index.html` and change your name, tagline, and the `<a>` links.
- Replace `avatar.png` with a 512×512 headshot (optional).
- Commit to `main` and GitHub Pages will deploy.

## Recommended GitHub Pages settings
- Settings → Pages → Build and deployment: **Deploy from a branch**
- Branch: `main` / folder: `/root`
- (Optional) Custom domain: add your domain and enable **Enforce HTTPS** once the certificate is ready.

## DNS for a custom domain
- If you want a subdomain like `links.yourdomain.com` → add a CNAME record pointing to `<username>.github.io`
- If you want the apex/root (e.g., `yourdomain.com`) → add A records to GitHub Pages IPs and an AAAA for IPv6 (see GitHub docs).

