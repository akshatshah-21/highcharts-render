import React, { useState, useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import Editor from '@monaco-editor/react';
import './App.css';

// Sample Highcharts configuration
const sampleConfig = {
  chart: {
    type: 'spline'
  },
  title: {
    text: 'Monthly Average Temperature'
  },
  subtitle: {
    text: 'Source: WorldClimate.com'
  },
  xAxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  },
  yAxis: {
    title: {
      text: 'Temperature (°C)'
    }
  },
  plotOptions: {
    line: {
      dataLabels: {
        enabled: true
      },
      enableMouseTracking: false
    }
  },
  series: [{
    name: 'Tokyo',
    data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
  }, {
    name: 'London',
    data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
  }]
};

function App() {
  const [jsonInput, setJsonInput] = useState(JSON.stringify(sampleConfig, null, 2));
  const [chartConfig, setChartConfig] = useState(sampleConfig);
  const [error, setError] = useState('');
  const [copySuccess, setCopySuccess] = useState(false);

  useEffect(() => {
    try {
      const parsed = JSON.parse(jsonInput);
      setChartConfig(parsed);
      setError('');
    } catch (err) {
      setError('Invalid JSON: ' + err.message);
    }
  }, [jsonInput]);

  const handleEditorChange = (value) => {
    setJsonInput(value || '');
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(jsonInput);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <div className="app">
      <div className="header">
        <h1>Highcharts JSON Renderer</h1>
      </div>
      
      <div className="main-container">
        <div className="editor-section">
          <div className="editor-header">
            <h3>JSON Configuration</h3>
            <button 
              className={`copy-button ${copySuccess ? 'success' : ''}`}
              onClick={handleCopy}
              title="Copy JSON to clipboard"
            >
              {copySuccess ? '✓ Copied!' : '📋 Copy'}
            </button>
            {error && <div className="error-message">{error}</div>}
          </div>
          <div className="editor-container">
            <Editor
              height="100%"
              defaultLanguage="json"
              value={jsonInput}
              onChange={handleEditorChange}
              theme="vs-dark"
              options={{
                minimap: { enabled: false },
                fontSize: 14,
                lineNumbers: 'on',
                roundedSelection: false,
                scrollBeyondLastLine: false,
                automaticLayout: true,
                wordWrap: 'on',
                folding: true,
                lineDecorationsWidth: 10,
                lineNumbersMinChars: 3,
                glyphMargin: false,
                foldingStrategy: 'indentation',
                showFoldingControls: 'always',
                selectOnLineNumbers: true,
                renderLineHighlight: 'all',
                scrollbar: {
                  vertical: 'visible',
                  horizontal: 'visible',
                  verticalScrollbarSize: 10,
                  horizontalScrollbarSize: 10
                }
              }}
            />
          </div>
        </div>
        
        <div className="chart-section">
          <div className="chart-header">
            <h3>Chart Preview</h3>
          </div>
          <div className="chart-container">
            {!error && (
              <HighchartsReact
                highcharts={Highcharts}
                options={chartConfig}
              />
            )}
            {error && (
              <div className="error-display">
                <p>Chart cannot be rendered due to JSON errors.</p>
                <p>Please fix the JSON syntax in the editor.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App; 