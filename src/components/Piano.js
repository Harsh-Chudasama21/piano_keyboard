import React, { useEffect, useState, useCallback, useMemo, useRef, Fragment } from 'react';
import '../styles/piano.css';

// Import audio files
import aTune from '../assets/tunes/a.mp3';
import wTune from '../assets/tunes/w.mp3';
import sTune from '../assets/tunes/s.mp3';
import eTune from '../assets/tunes/e.mp3';
import dTune from '../assets/tunes/d.mp3';
import fTune from '../assets/tunes/f.mp3';
import tTune from '../assets/tunes/t.mp3';
import gTune from '../assets/tunes/g.mp3';
import yTune from '../assets/tunes/y.mp3';
import hTune from '../assets/tunes/h.mp3';
import uTune from '../assets/tunes/u.mp3';
import jTune from '../assets/tunes/j.mp3';
import kTune from '../assets/tunes/k.mp3';
import oTune from '../assets/tunes/o.mp3';
import lTune from '../assets/tunes/l.mp3';
import pTune from '../assets/tunes/p.mp3';

const Piano = () => {
  const [volume, setVolume] = useState(0.5);
  const [showKeys, setShowKeys] = useState(true);
  const [theme, setTheme] = useState('dark'); // 'dark' or 'light'
  const [activeKeys, setActiveKeys] = useState(new Set());
  const wrapperRef = useRef(null);
  const volumeSliderRef = useRef(null);
  
  // Audio mapping
  const audioMap = useMemo(() => ({
    'a': aTune,
    'w': wTune,
    's': sTune,
    'e': eTune,
    'd': dTune,
    'f': fTune,
    't': tTune,
    'g': gTune,
    'y': yTune,
    'h': hTune,
    'u': uTune,
    'j': jTune,
    'k': kTune,
    'o': oTune,
    'l': lTune,
    'p': pTune
  }), []);

  const allKeys = Object.keys(audioMap);
  
  // Memoized key classifications
  const keyClassifications = useMemo(() => {
    return allKeys.reduce((acc, key) => {
      acc[key] = key.match(/[wetyuop]/) ? 'black' : 'white';
      return acc;
    }, {});
  }, [allKeys]);

  // Enhanced function to handle playing audio with ripple effect
  const playTune = useCallback((key) => {
    if (audioMap[key]) {
      // Create ripple effect element
      const keyElement = document.querySelector(`[data-key="${key}"]`);
      
      if (keyElement) {
        // Update active keys for visual feedback
        setActiveKeys(prev => {
          const newSet = new Set(prev);
          newSet.add(key);
          return newSet;
        });
        
        // Create ripple effect
        const ripple = document.createElement('span');
        ripple.className = 'ripple';
        keyElement.appendChild(ripple);
        
        // Position ripple randomly within the key
        const keyWidth = keyElement.offsetWidth;
        const keyHeight = keyElement.offsetHeight;
        const size = Math.max(keyWidth, keyHeight) * 2;
        const x = Math.random() * keyWidth;
        const y = Math.random() * (keyHeight / 2) + keyHeight / 4;
        
        ripple.style.width = `${size}px`;
        ripple.style.height = `${size}px`;
        ripple.style.left = `${x - size/2}px`;
        ripple.style.top = `${y - size/2}px`;
        
        // Create new audio instance with the correct audio file
        const audio = new Audio(audioMap[key]);
        audio.volume = volume;
        
        // Play the audio
        audio.play().catch(error => {
          console.log('Audio playback failed:', error);
        });
        
        // Remove active state and ripple after animation completes
        setTimeout(() => {
          setActiveKeys(prev => {
            const newSet = new Set(prev);
            newSet.delete(key);
            return newSet;
          });
          ripple.remove();
        }, 300);
      }
    }
  }, [volume, audioMap]);

  // Handle keyboard events
  useEffect(() => {
    const handleKeyDown = (event) => {
      // Convert key to lowercase to match our mapping
      const key = event.key.toLowerCase();
      
      // Prevent repeat events when key is held down
      if (!event.repeat && audioMap.hasOwnProperty(key)) {
        playTune(key);
      }
    };

    // Add and remove event listener
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [playTune, audioMap]);

  // Animation for initial load
  useEffect(() => {
    if (wrapperRef.current) {
      wrapperRef.current.classList.add('fade-in');
      
      // Animate keys in sequence
      allKeys.forEach((key, index) => {
        const keyElement = document.querySelector(`[data-key="${key}"]`);
        if (keyElement) {
          setTimeout(() => {
            keyElement.classList.add('key-appear');
          }, 100 + index * 50);
        }
      });
    }
    
    // Volume slider glow effect
    if (volumeSliderRef.current) {
      const handleMouseMove = () => {
        volumeSliderRef.current.classList.add('glow');
        setTimeout(() => {
          volumeSliderRef.current.classList.remove('glow');
        }, 1000);
      };
      
      volumeSliderRef.current.addEventListener('mousemove', handleMouseMove);
      return () => {
        if (volumeSliderRef.current) {
          volumeSliderRef.current.removeEventListener('mousemove', handleMouseMove);
        }
      };
    }
  }, [allKeys]);

  // Toggle theme function
  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
   <Fragment>
    <div className={`wrapper ${theme === 'light' ? 'light-theme' : ''}`} ref={wrapperRef}>
      <header>
        <div className="title-container">
          <h2 className="piano-title">H PIANO</h2>
          <div className="theme-toggle" onClick={toggleTheme}>
            <div className="toggle-icon">{theme === 'dark' ? '☀️' : '🌙'}</div>
          </div>
        </div>
        
        <div className="controls-container">
          <div className="column volume-slider" ref={volumeSliderRef}>
            <span>Volume</span>
            <input
              type="range"
              min="0"
              max="1"
              value={volume}
              step="0.01"
              onChange={(e) => setVolume(parseFloat(e.target.value))}
              className="styled-slider"
            />
            <div className="volume-display">{Math.round(volume * 100)}%</div>
          </div>
          
          <div className="column keys-checkbox">
            <span>Show Keys</span>
            <label className="toggle-switch">
              <input
                type="checkbox"
                checked={showKeys}
                onChange={() => setShowKeys(!showKeys)}
              />
              <span className="slider round"></span>
            </label>
          </div>
        </div>
      </header>
      
      <div className="piano-container">
        <ul className="piano-keys">
          {allKeys.map((key) => (
            <li
              key={key}
              className={`key ${keyClassifications[key]} ${activeKeys.has(key) ? 'active' : ''} ${showKeys ? '' : 'hide'}`}
              data-key={key}
              onClick={() => playTune(key)}
            >
              {showKeys && <span className="key-label">{key}</span>}
              <div className="key-highlight"></div>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="instructions">
        <p>Play with keyboard or click on the keys</p>
      </div>
    </div>
   </Fragment>
  );
};

export default Piano;