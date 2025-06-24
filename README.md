# H Piano 🎹

A beautiful, interactive digital piano built with React. Play notes using your keyboard or mouse, adjust volume, toggle key labels, and switch between dark and light themes. Designed for fun, learning, and musical creativity!

---

## Features

- **Playable Piano UI**: Click the keys or use your keyboard (A, W, S, E, D, F, T, G, Y, H, U, J, K, O, L, P) to play notes.
- **Realistic Sounds**: Each key plays a unique piano note (17 included .mp3 files).
- **Volume Control**: Adjust the piano's volume with a stylish slider.
- **Show/Hide Key Labels**: Toggle the display of keyboard key labels on the piano.
- **Dark/Light Theme**: Instantly switch between dark and light modes.
- **Animated UI**: Smooth key animations, ripple effects, and glowing controls for a modern look.
- **Responsive Design**: Looks great on desktop and mobile devices.
- **Keyboard Shortcuts**: Play notes directly from your computer keyboard.
- **Instructions**: On-screen guidance for new users.

---

## Tech Stack

- **React 19** (with Create React App)
- **JavaScript (ES6+)**
- **CSS3** (custom, with Google Fonts and animations)
- **Jest & React Testing Library** (for testing)
- **Web Vitals** (performance measurement)

---

## Project Folder Structure

```
react-piano/
├── public/
│   ├── favicon.ico
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── App.js
│   ├── App.css
│   ├── App.test.js
│   ├── index.js
│   ├── index.css
│   ├── reportWebVitals.js
│   ├── setupTests.js
│   ├── components/
│   │   └── Piano.js
│   ├── assets/
│   │   └── tunes/
│   │       ├── a.mp3 ... (17 piano note files)
│   └── styles/
│       └── piano.css
├── package.json
├── package-lock.json
├── README.md
└── ...
```

---

## Route Structure & Navigation

- **Single Page App**: All functionality is on the main page (`/`).
- **Main Component**: `App.js` renders the `Piano` component.
- **Navigation**: No client-side routing; all controls (theme, volume, key labels) are within the piano UI.
- **How to Play**:
  - **Mouse**: Click any piano key.
  - **Keyboard**: Use the mapped keys (A, W, S, E, D, F, T, G, Y, H, U, J, K, O, L, P).
  - **Volume**: Adjust with the slider.
  - **Theme**: Click the sun/moon icon to toggle.
  - **Show Keys**: Use the toggle switch to show/hide key labels.

---

## How to Run the Project

1. **Install dependencies**:
   ```bash
   npm install
   ```
2. **Start the development server**:
   ```bash
   npm start
   ```
   The app will open at [http://localhost:3000](http://localhost:3000).
3. **Build for production**:
   ```bash
   npm run build
   ```
4. **Run tests**:
   ```bash
   npm test
   ```

---

## Screenshots
With visible keys :
![image](https://github.com/user-attachments/assets/9f3e4b1f-7191-4e57-9646-64d33cd2d128)

Invisible Keys :
![image](https://github.com/user-attachments/assets/f8f423a9-d178-422d-9434-6fba61a9935f)


---

## Credits

- Piano note sounds: _Your source or attribution here if needed_
- UI inspired by modern digital pianos

---

## License

MIT (or your preferred license)
