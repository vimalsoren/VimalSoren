# Vimal Soren — Creative 3D Portfolio

[![Node.js](https://img.shields.io/badge/Node.js-22.x-green.svg)](https://nodejs.org/)
[![Three.js](https://img.shields.io/badge/Three.js-WebGL-black.svg)](https://threejs.org/)
[![Netlify Status](https://img.shields.io/badge/Deploy-Netlify-00C7B7.svg)](https://www.netlify.com/)

An interactive 3D WebGL portfolio built with Three.js, React, and GLTF models. Explore virtual environments across France, Belgium, and Luxembourg on an animated motorcycle journey.

---

## ✨ Features

- **Immersive 3D Environments**: Custom GLTF models representing cities and monuments (Eiffel Tower, Big Wheel, bridges, buildings).
- **Interactive Controls & Camera**: Smooth camera transitions, momentum-based scrolling, and mouse-parallax effects.
- **Ambient Soundscapes**: Spatial audio and sound effects for transitions, clicks, and background ambiance.
- **Responsive & Optimized Textures**: Automatic loading of desktop vs. mobile-optimized textures and HDR skies for optimal performance across devices.
- **Netlify Ready**: Pre-configured with routing redirects, MIME type handling for 3D binary assets, and production caching rules.

---

## 🛠 Tech Stack

- **Graphics & 3D**: Three.js, WebGL, GLTF 2.0, HDR environment maps
- **Frontend**: HTML5, CSS3, ES Modules, Momentum.js
- **Server / Local Runtime**: Node.js 22, Express
- **Deployment Platform**: Netlify (`netlify.toml`, `public/_redirects`)

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18 or higher; Node 22 recommended)
- [npm](https://www.npmjs.com/) (bundled with Node.js)

### Installation & Local Run

1. Clone or download the repository:
   ```bash
   git clone https://github.com/vimaljuniorofficial/VimalSoren.git
   cd VimalSoren
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

---

## 🌐 Deploying to Netlify

This project is pre-configured for one-click deployment on [Netlify](https://www.netlify.com/). It includes `netlify.toml` and `public/_redirects` to handle single-page routing, binary 3D model MIME types (`.glb`), and optimized caching out of the box.

### Option 1: Continuous Deployment via Git (Recommended)

1. Push this repository to your GitHub account (or GitLab / Bitbucket).
2. Go to [app.netlify.com](https://app.netlify.com/) and click **Add new site** > **Import an existing project**.
3. Select **GitHub** and choose the repository `VimalSoren`.
4. Netlify automatically reads `netlify.toml` with the following configuration:
   - **Build command**: `npm run build`
   - **Publish directory**: `public`
5. Click **Deploy site**. Every future git push will automatically trigger a new deployment.

---

### Option 2: Netlify Drop (Instant Drag & Drop, No Git Required)

1. Go to [app.netlify.com/drop](https://app.netlify.com/drop).
2. Drag and drop the `public` folder directly into the upload area.
3. Netlify will deploy your site instantly and provide you with a live URL.

---

### Option 3: Netlify CLI

1. Install the Netlify CLI globally:
   ```bash
   npm install -g netlify-cli
   ```

2. Log in to your Netlify account:
   ```bash
   netlify login
   ```

3. Deploy directly to production:
   ```bash
   netlify deploy --prod --dir=public
   ```

---

## 📁 Project Structure

```text
├── metadata.json          # Application metadata & description
├── netlify.toml           # Netlify build configuration, SPA redirects, & MIME headers
├── package.json           # Project manifest and scripts
├── server.js              # Express static server for local runtime & previews
├── .env.example           # Environment variables template
├── public/                # Web root containing all frontend assets
│   ├── _redirects         # Netlify SPA redirect fallback
│   ├── index.html         # Main entry point & preloader
│   ├── assets/            # Bundled JavaScript modules & CSS styles
│   ├── gltf/              # 3D GLTF models (countries, monuments, props)
│   ├── hdri/              # High-dynamic-range panoramic sky environments
│   ├── image/             # UI images, thumbnails, and icons
│   ├── sounds/            # Audio effects and soundtrack
│   ├── texture/           # Materials and normal maps (desktop & mobile)
│   └── vendors/           # External libraries (Momentum.js)
```

---

## ⚙️ Netlify Configuration Details

- **`netlify.toml`**: 
  - Sets `publish = "public"` and `command = "npm run build"`
  - Configures the SPA redirect rule `/*` -> `/index.html` (HTTP 200)
  - Configures `Content-Type = "model/gltf-binary"` for all `/gltf/*` assets
  - Sets immutable 1-year cache headers for static assets (`/assets/*`, `/fonts/*`, `/texture/*`, `/sounds/*`)
- **`public/_redirects`**:
  - Serves as a fallback for Netlify Drop deployments to guarantee single-page app routing.

---

## 👤 Author

**Vimal Soren**
- Frontend Developer & Creative Designer
- GitHub: [@vimaljuniorofficial](https://github.com/vimaljuniorofficial)

---

## 📄 License

This project is open-source and available under standard open licensing terms.