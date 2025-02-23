H Piano
A responsive virtual piano keyboard built with React that allows users to play musical notes using their computer keyboard or by clicking on the piano keys.
![image](https://github.com/user-attachments/assets/b7a5ae6e-cd53-4df9-b715-7a16596c5301)
![image](https://github.com/user-attachments/assets/b1ed2525-6200-4923-8567-e64720d96109)

Features

Interactive piano keyboard with visual feedback
Play notes using computer keyboard or mouse clicks
Adjustable volume control
Toggle key labels on/off
Dark/Light theme options
Ripple effect animation when keys are played
Smooth animations for a polished user experience

How to Play

Use your computer keyboard keys (a, w, s, e, d, f, t, g, y, h, u, j, k, o, l, p) to play notes
Alternatively, click directly on the piano keys with your mouse
White keys are mapped to: a, s, d, f, g, h, j, k, l
Black keys are mapped to: w, e, t, y, u, o, p

Installation
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
# Clone the repository
git clone https://github.com/yourusername/piano-keyboard.git

# Navigate to project directory
cd piano-keyboard

# Install dependencies
npm install

# Start the development server
npm start
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
**Technologies Used:**

React.js
CSS3 with custom animations
HTML5 Audio API

Project Structure

piano-keyboard/

├── src/

│   ├── components/

│   │   └── Piano.jsx

│   ├── styles/

│   │   └── piano.css

│   ├── assets/

│   │   └── tunes/

│   │       ├── a.mp3

│   │       ├── w.mp3

│   │       └── ... (other audio files)

│   └── App.js

├── public/

├── package.json

└── README.md

Customization Options

Volume Control: Adjust the sound volume using the slider
Key Labels: Toggle the visibility of keyboard letters on piano keys
Theme Toggle: Switch between dark and light themes

Future Enhancements

 Record and playback functionality
 Additional instrument sounds
 MIDI device support
 Save and share compositions
 Mobile-responsive design improvements

Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

Fork the repository
Create your feature branch (git checkout -b feature/amazing-feature)
Commit your changes (git commit -m 'Add some amazing feature')
Push to the branch (git push origin feature/amazing-feature)
Open a Pull Request
