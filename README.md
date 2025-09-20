# NYT Top Stories �

A React Native mobile app built with Expo that displays the most popular articles from The New York Times using their Most Popular API.

## Features

- Cross-platform (iOS, Android, Web)
- **Most Viewed** articles from the past day
- **Most Shared** articles from the past week  
- Article cards with images and descriptions
- Tap to read full articles in browser
- Real-time error handling and user feedback

## Tech Stack

- **React Native** with **Expo**
- **TypeScript** 
- **New York Times Most Popular API**
- **Expo Router** for navigation
- **React Native Safe Area Context**

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Expo CLI (optional, but recommended)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Jackan04/NytTopStories.git
   cd NytTopStories
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up your API key**
   - Get a free API key from [NYT Developer Portal](https://developer.nytimes.com/)
   - Update `assets/apiKey.js` with your API key:
     ```javascript
     export const API_KEY = "your-api-key-here";
     ```

4. **Start the development server**
   ```bash
   npx expo start
   ```

### Running the App

After starting the development server, you can:

- **On your phone**: Scan the QR code with Expo Go app
- **In browser**: Press `w` to open web version
- **iOS Simulator**: Press `i` (requires Xcode)
- **Android Emulator**: Press `a` (requires Android Studio)

## Project Structure

```
app/
├── index.tsx              # Main screen with article list
├── Components/
│   └── ArticleCard.jsx    # Reusable article card component
├── styles.js              # App styling
└── theme.js               # Color theme configuration

assets/
├── apiKey.js              # NYT API key configuration
└── images/                # App icons and images
```

## API Endpoints Used

- **Most Viewed**: `mostpopular/v2/viewed/1.json` - Top articles from past day
- **Most Shared**: `mostpopular/v2/emailed/7.json` - Top shared articles from past week

