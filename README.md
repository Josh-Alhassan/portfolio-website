# **Joshua Alhassan - Portfolio Website**

🚀 **A modern, responsive portfolio built with SvelteKit, designed for performance and accessibility.**

![Portfolio Screenshot](./src/assets/project-1.png)
![Mobile Screenshot](./src/assets/Screenshot-1.png)

## **✨ Features**

✅ **Responsive Design** – Mobile-first approach with seamless desktop adaptation  
✅ **Dark/Light Mode** – Toggleable theme with system preference detection  
✅ **Optimized Performance** – Lazy loading, efficient state management  
✅ **Accessibility Focused** – Semantic HTML, ARIA labels, keyboard navigation  
✅ **Interactive Elements** – Smooth transitions and dynamic UI components

## **🛠 Tech Stack**

- **Frontend**: [SvelteKit](https://kit.svelte.dev/)
- **Styling**: CSS with custom properties (variables)
- **Icons**: [Boxicons](https://boxicons.com/)
- **Deployment**: [Vercel](https://vercel.com/)

## **🚀 Getting Started**

### **Prerequisites**

- Node.js ≥ 16
- npm or yarn

### **Installation**

1. Clone the repo:
   ```sh
   git clone https://github.com/Josh-Alhassan/portfolio-website.git
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Run the development server:
   ```sh
   npm run dev
   ```
4. Open [http://localhost:5173](http://localhost:5173)

### **Build for Production**

```sh
npm run build
```

## **📂 Project Structure**

```
src/
├── routes/            # Page-based routing
│   ├── +page.svelte   # Homepage
│   ├── about/         # About page
│   └── blog/          # Blog section
├── components/        # Reusable components
│   ├── Navigation.svelte
│   ├── Footer.svelte
│   └── ...
├── app.css            # Global styles
└── ...
```

## **🔧 Customization**

- **Themes**: Modify colors in `app.css` (`--text-color`, `--menu-color`, etc.)
- **Content**: Update `src/routes` and components with your personal info
- **Meta Tags**: Edit `src/app.html` for SEO optimization

## **🚀 Deployment**

1. **Vercel** (Recommended):

   - Push to GitHub/GitLab and import into Vercel
   - Configure build command: `npm run build`
   - Output directory: `.svelte-kit/vercel`

2. **Netlify**:
   ```sh
   npm install -g netlify-cli
   netlify deploy
   ```

## **📜 License**

MIT © [Joshua Alhassan](https://github.com/Josh-Alhassan)

---

💡 **Tip**: Want to add a blog? Integrate a headless CMS like [Sanity](https://www.sanity.io/) or [Strapi](https://strapi.io/)!

🔗 **Live Demo**: [portfolio-joshua.vercel.app](https://portfolio-joshua.vercel.app)

---

This `README.md` provides a **clear, structured overview** while highlighting key features, setup instructions, and customization options. Let me know if you'd like any refinements! 🚀
