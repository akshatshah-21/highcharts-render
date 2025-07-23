# Highcharts JSON Renderer

A minimal React application that renders Highcharts JSON configurations as interactive charts. The app features a split-view interface with a professional code editor on the left and a live chart preview on the right.

## Features

- **Split View Layout**: Professional Monaco Editor on the left, chart preview on the right
- **Real-time Updates**: Chart updates automatically as you type valid JSON
- **Error Handling**: Shows JSON syntax errors and prevents chart rendering when invalid
- **Sample Configuration**: Comes with a working Highcharts configuration to get started
- **Responsive Design**: Adapts to different screen sizes
- **Modern UI**: Clean, professional interface with minimal design
- **Copy Functionality**: Easy copy button for JSON configuration

## Live Demo

🌐 **Live Demo**: [https://akshat.github.io/highcharts-render](https://akshat.github.io/highcharts-render)

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone or download this repository
2. Navigate to the project directory
3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm start
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment

### GitHub Pages (Recommended)

This project is configured for automatic deployment to GitHub Pages:

1. **Fork or Clone** this repository to your GitHub account
2. **Update homepage** in `package.json` to match your repository:
   ```json
   "homepage": "https://yourusername.github.io/your-repo-name"
   ```
3. **Push to GitHub**: The GitHub Actions workflow will automatically deploy on push to main branch
4. **Enable GitHub Pages**: Go to your repository Settings → Pages → Source → select "GitHub Actions"

### Manual Deployment

To deploy manually:

```bash
npm run deploy
```

This will build the project and deploy it to the `gh-pages` branch.

### Local Build

To build for production locally:

```bash
npm run build
```

## Usage

1. **Edit JSON**: Modify the Highcharts configuration in the left panel using the professional Monaco Editor
2. **Live Preview**: See the chart update in real-time on the right panel
3. **Error Feedback**: Invalid JSON will show error messages and prevent chart rendering
4. **Copy JSON**: Use the copy button to copy the current JSON configuration

## Sample Configuration

The app comes with a sample temperature chart configuration that you can modify:

```json
{
  "chart": {
    "type": "spline"
  },
  "title": {
    "text": "Monthly Average Temperature"
  },
  "xAxis": {
    "categories": ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  },
  "yAxis": {
    "title": {
      "text": "Temperature (°C)"
    }
  },
  "series": [{
    "name": "Tokyo",
    "data": [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
  }, {
    "name": "London",
    "data": [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
  }]
}
```

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (not recommended)
- `npm run deploy` - Deploys to GitHub Pages

## Technologies Used

- **React 18** - UI framework
- **Highcharts** - Charting library
- **highcharts-react-official** - React wrapper for Highcharts
- **Monaco Editor** - Professional code editor (same as VS Code)
- **GitHub Actions** - Automated deployment
- **CSS3** - Styling with modern CSS features

## Project Structure

```
highcharts-render/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment
├── public/
│   └── index.html
├── src/
│   ├── App.js                  # Main application component
│   ├── App.css                 # Application styles
│   ├── index.js                # Application entry point
│   └── index.css               # Global styles
├── package.json
├── .gitignore
└── README.md
```

## Customization

You can easily customize the app by:

1. **Modifying the sample configuration** in `src/App.js`
2. **Updating styles** in `src/App.css`
3. **Adding new features** like save/load functionality
4. **Changing the layout** by modifying the CSS grid/flexbox properties

## Browser Support

The app works in all modern browsers that support:
- ES6+ JavaScript features
- CSS Grid and Flexbox
- React 18

## License

This project is open source and available under the MIT License.
