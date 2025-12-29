# 🎵 Music Streaming Player

A modern, responsive music player web application with a sleek dark interface and smooth animations. Built with vanilla HTML, CSS, and JavaScript.

## ✨ Features

- **Intuitive Audio Playback**: Play, pause, skip forward/backward through tracks
- **Interactive Progress Bar**: Click to seek to any position in the track
- **Volume Control**: Adjustable volume slider with visual feedback
- **Track Library**: Scrollable list of available songs with cover art
- **Real-time Updates**: Live progress tracking with time display (current/total)
- **Auto-play Next**: Automatically advances to the next track when current song ends
- **Active Track Highlighting**: Visual indication of currently playing song
- **Status Notifications**: User-friendly messages for player actions
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Elegant transitions and hover effects throughout

## 🎨 Design Highlights

- **Dark Theme**: Professional black background with yellow accents
- **Glassmorphism Effects**: Modern blur effects on navigation
- **Custom Scrollbar**: Styled scrollbar matching the theme
- **Interactive Elements**: Hover states and smooth transitions
- **Mobile-First**: Hamburger menu for mobile navigation

## 🚀 Getting Started

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- No additional dependencies or build tools required

### Installation

1. Clone or download the repository:
```bash
git clone <repository-url>
cd music-player
```

2. Ensure all files are in the same directory:
   - `Music-player_codeAlpha_project.html`
   - `script_for_music-player.js`
   - `style_for_music-player.css`

3. Open `Music-player_codeAlpha_project.html` in your web browser

**That's it!** No build process or server required.

## 📁 Project Structure

```
music-player/
│
├── Music-player_codeAlpha_project.html    # Main HTML file
├── script_for_music-player.js             # JavaScript functionality
├── style_for_music-player.css             # Stylesheet
└── README.md                              # Project documentation
```

## 🎯 Usage

### Basic Controls

- **Play/Pause**: Click the central play button or press on any track
- **Next Track**: Click the forward button (⏭)
- **Previous Track**: Click the backward button (⏮)
- **Seek**: Click anywhere on the progress bar to jump to that position
- **Volume**: Adjust the volume slider (0-100%)

### Adding Your Own Tracks

Edit the `tracks` array in `script_for_music-player.js`:

```javascript
const tracks = [
    {
        id: '1',
        title: 'Your Song Title',
        artist: 'Artist Name',
        duration: 240,  // Duration in seconds
        url: 'https://example.com/your-audio-file.mp3',
        cover: 'https://example.com/cover-image.jpg'
    },
    // Add more tracks...
];
```

## 🛠️ Technical Details

### Technologies Used

- **HTML5**: Semantic markup and audio element
- **CSS3**: Grid, Flexbox, animations, custom properties
- **JavaScript (ES6+)**: Event handling, DOM manipulation, audio control

### Key Features Implementation

- **Audio Management**: Native HTML5 Audio API
- **Responsive Layout**: CSS Grid and Flexbox
- **State Management**: JavaScript variables for tracking player state
- **Event Listeners**: Time updates, metadata loading, user interactions
- **Dynamic Rendering**: JavaScript-generated track list

### Browser Compatibility

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📱 Responsive Breakpoints

- **Desktop**: > 768px (Full layout with side-by-side hero section)
- **Tablet**: 481px - 768px (Stacked layout, adjusted player)
- **Mobile**: ≤ 480px (Compact layout, hamburger menu)

## 🎨 Customization

### Color Scheme

Modify CSS variables in `style_for_music-player.css`:

```css
:root {
    --primary-color: #0a0a0a;      /* Background */
    --secondary-color: #1a1a1a;    /* Secondary background */
    --accent-color: #ffff00;       /* Yellow accent */
    --text-light: #ffffff;         /* Primary text */
    --text-muted: #999999;         /* Secondary text */
    --border-color: #333333;       /* Borders */
}
```


## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**CodeAlpha Project**

## 🙏 Acknowledgments

- Sample audio from [SoundHelix](https://www.soundhelix.com/)
- Images from [Unsplash](https://unsplash.com/)
- Icons: Unicode characters for maximum compatibility

## 📞 Support

For issues, questions, or contributions, please open an issue in the repository or contact the project maintainer.

---

**Enjoy your music! 🎶**