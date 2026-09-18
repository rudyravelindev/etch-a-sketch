A browser-based drawing toy built with HTML, CSS (Flexbox), and vanilla JavaScript. Part of [The Odin Project](https://www.theodinproject.com/) Foundations curriculum.

## 🎯 Overview

This project is a browser version of something between a sketchpad and an Etch-A-Sketch. It generates a grid of divs using JavaScript and allows you to draw by hovering over the squares with your mouse.

## ✨ Features

- **Dynamic Grid Generation** — Create a grid of any size (up to 100x100) via a button prompt
- **Hover Drawing** — Squares change color as your mouse passes over them
- **Responsive Grid** — The grid maintains the same total pixel width regardless of square count
- **Reset Functionality** — Clear the grid and start fresh with a new size anytime

## 🛠️ Built With

- **HTML5** — Semantic structure
- **CSS3 (Flexbox)** — Grid layout without CSS Grid (as per TOP requirements)
- **Vanilla JavaScript** — DOM manipulation, event listeners, dynamic element creation

## 🚀 Live Demo

[View Live Demo](https://your-username.github.io/etch-a-sketch/)

## 📸 Screenshot

![Etch-a-Sketch Screenshot](./screenshot.png)

## 🎮 How to Use

1. Open the page to see the default 16x16 grid
2. Move your mouse over the grid to draw
3. Click the **"New Grid"** button to:

- Enter a number of squares per side (max 100)
- The old grid is removed and a new one is generated

4. Start drawing again on your new grid!

## 🧠 What I Learned

- Creating and appending DOM elements dynamically with JavaScript
- Using Flexbox to arrange elements in a grid pattern
- Handling mouse events (`mouseenter`, `mouseleave`, `mouseover`)
- Removing and replacing DOM elements
- Working with CSS properties via JavaScript
- User input validation with `prompt()`

## 🔧 Setup & Installation

1. Clone the repository:

```bash
   git clone https://github.com/your-username/etch-a-sketch.git
```

2. Navigate to the project folder:

```bash
   cd etch-a-sketch
```

3. Open `index.html` in your browser, or use a live server extension.

## 📁 Project Structure

```javascript
etch-a-sketch/
├── index.html
├── style.css
├── script.js
└── README.md
```

## 🎨 Extra Credit Features *(Optional)*

- [ ] **Random RGB Colors** — Each interaction randomizes the square's RGB values
- [ ] **Progressive Darkening** — Each interaction darkens the square by 10%, achieving full black in 10 passes (using the `opacity` CSS property)

## 📝 Assignment Source

This project is based on the [Etch-a-Sketch assignment](https://www.theodinproject.com/lessons/foundations-etch-a-sketch) from The Odin Project Foundations course.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with 💻 as part of The Odin Project curriculum.