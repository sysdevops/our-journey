# 🎄 Grand Luxury Tree

[![Contributors](https://img.shields.io/github/contributors/electronicminer/gesture-Christmas_tree-3d_with_photo?color=dark-green)](https://github.com/electronicminer/gesture-Christmas_tree-3d_with_photo/graphs/contributors)

Hello! This is a small project created to celebrate Christmas. ✨

It originally started as a simple 3D Christmas tree, but that felt a bit boring — so I added **gesture recognition** and **particle effects**. Now you can control the tree *in the air* using your camera, and even hang your favorite photos on it.

Although the project is only a few hundred lines of code, the visual impact is huge (especially on a large screen).

👉 Try it here:
[https://electronicminer.github.io/gesture-Christmas_tree-3d_with_photo/christmas_tree_touch&gesture.html](https://electronicminer.github.io/gesture-Christmas_tree-3d_with_photo/christmas_tree_touch&gesture.html)

<img width="2559" height="1439" alt="image" src="https://github.com/user-attachments/assets/45f3ec57-00b5-4989-b3b2-484772ad95cf" />

---

## 🤔 What is this? (Intro)

This is **not** a static Christmas greeting page.
It’s a dynamic Christmas tree made of **thousands of particles**.

Thanks to Google’s **MediaPipe**, the tree can understand your hand gestures.

* **Particle Effects**: The tree breathes, rotates, and can explode into a galaxy of stars.
* **Gesture Control**: No mouse required — wave your hand in front of the camera (feels like Doctor Strange).
* **Memory Ornaments**: Upload photos using the button in the top-right corner. They become gold-framed Polaroids floating around the tree.
* **Minimal Aesthetic**: Black & gold color scheme only — clean, elegant, and premium.

<img width="2557" height="1291" alt="image" src="https://github.com/user-attachments/assets/d7d31b4c-bf4d-49b2-b922-79813bbddba5" />

<img width="2559" height="1294" alt="image" src="https://github.com/user-attachments/assets/d7e4e982-3042-449d-8898-105048aeac1d" />

---

## 🛠️ Tech Stack

Pure front-end magic — no heavy frameworks:

* **Three.js** — 3D rendering and particle system
* **MediaPipe** — hand gesture recognition (this thing is insanely powerful)
* **Vanilla JavaScript (ES Modules)** — core logic written by hand

---

## 🎮 Controls

For the best experience, turn on your speakers (there’s no background music yet, but feel free to play *Jingle Bells* 🎵).

### 🖐️ Gesture Mode (Main Feature)

Make sure the browser has camera permission, then:

1. **Open Palm (🖐️)**
   → *Explosion Mode!*
   The tree disperses into a nebula, and you can rotate the view.

2. **Closed Fist (✊)**
   → *Gather!*
   Particles regroup and reform the Christmas tree.

3. **Pinch Gesture (🤏)**
   → Like grabbing something — a random photo is selected and enlarged for viewing.

### 🖱️ Mouse Controls

* Left click + drag to rotate
* Scroll wheel to zoom
* **Press `H`** to hide all UI — perfect for screenshots or screen recording wallpapers

---

## 🚀 How to Run Locally

⚠️ **Important:**
Because this project uses **ES Modules** and **camera access**, **do NOT open `index.html` by double-clicking it**. The browser will block it due to CORS restrictions.
You must run a local server.

### ✅ If you use VS Code (Recommended)

Install the **Live Server** extension
Right-click `index.html` → **Open with Live Server**

### 🐍 If you use Python

```bash
python -m http.server 8000
```

Then open:
`http://localhost:8000`

### 🟢 If you use Node.js

```bash
npx http-server .
```

---

**Merry Christmas! 🎅**

If you find this project interesting, feel free to ⭐ Star it or Fork it and customize the colors or effects to your liking.

✨ **Now supports mobile browsers as well!**

---

## Contributors ✨

Thanks to all the developers who contributed to this project:

<a href="https://github.com/electronicminer/gesture-Christmas_tree-3d_with_photo/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=electronicminer/gesture-Christmas_tree-3d_with_photo" />
</a>

---

## 📊 Star History

[![Star History Chart](https://api.star-history.com/svg?repos=electronicminer/gesture-Christmas_tree-3d_with_photo\&type=Date)](https://star-history.com/#electronicminer/gesture-Christmas_tree-3d_with_photo&Date)