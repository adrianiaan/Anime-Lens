
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Book, Code, Copy, Check } from 'lucide-react';

const DocsPage = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const codeExamples = {
    detect: `fetch('https://api.animelens.com/v1/detect', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    image_url: 'https://example.com/anime-screenshot.jpg'
    // OR base64: 'data:image/jpeg;base64,/9j/4AAQ...'
  })
})
.then(response => response.json())
.then(data => console.log(data));`,

    response: `{
  "success": true,
  "result": {
    "anime_title": "Attack on Titan",
    "alternative_titles": ["Shingeki no Kyojin"],
    "confidence": 0.94,
    "episode": {
      "season": 4,
      "episode_number": 16,
      "title": "Above and Below"
    },
    "character": "Eren Yeager",
    "timestamp": "14:32",
    "genres": ["Action", "Drama", "Fantasy"],
    "studio": "MAPPA",
    "release_year": 2013,
    "mal_id": 16498
  },
  "alternatives": [
    {
      "anime_title": "Attack on Titan: Final Season",
      "confidence": 0.89
    }
  ],
  "processing_time": "2.1s"
}`,

    curl: `curl -X POST https://api.animelens.com/v1/detect \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "image_url": "https://example.com/anime-screenshot.jpg"
  }'`,

    python: `import requests

def detect_anime(image_url, api_key):
    url = "https://api.animelens.com/v1/detect"
    headers = {
        "Authorization": f"Bearer {api_key}",
        "Content-Type": "application/json"
    }
    data = {
        "image_url": image_url
    }
    
    response = requests.post(url, headers=headers, json=data)
    return response.json()

# Usage
result = detect_anime(
    "https://example.com/anime-screenshot.jpg", 
    "your_api_key_here"
)
print(result)`
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 rounded-full w-fit mx-auto mb-6">
            <Book className="h-8 w-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            API Documentation
          </h1>
          <p className="text-xl md:text-2xl text-purple-100">
            Integrate anime recognition into your applications
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-3">Quick Navigation</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="#getting-started" className="text-purple-600 hover:text-purple-700">Getting Started</a></li>
                  <li><a href="#authentication" className="text-purple-600 hover:text-purple-700">Authentication</a></li>
                  <li><a href="#detection-api" className="text-purple-600 hover:text-purple-700">Detection API</a></li>
                  <li><a href="#response-format" className="text-purple-600 hover:text-purple-700">Response Format</a></li>
                  <li><a href="#examples" className="text-purple-600 hover:text-purple-700">Code Examples</a></li>
                  <li><a href="#rate-limits" className="text-purple-600 hover:text-purple-700">Rate Limits</a></li>
                  <li><a href="#errors" className="text-purple-600 hover:text-purple-700">Error Handling</a></li>
                </ul>
              </div>
              
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <h4 className="font-medium text-purple-900 mb-2">Need an API Key?</h4>
                <p className="text-sm text-purple-700 mb-3">
                  Sign up for free and get 100 requests per month
                </p>
                <button className="bg-purple-600 text-white px-3 py-2 rounded text-sm font-medium hover:bg-purple-700 transition-colors">
                  Get API Key
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-12">
            
            {/* Getting Started */}
            <section id="getting-started">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Getting Started</h2>
              <div className="prose prose-lg text-gray-600">
                <p className="mb-4">
                  The AnimeLens API allows you to integrate anime recognition capabilities into your applications. 
                  Our AI-powered service can identify anime series, characters, and episodes from images with high accuracy.
                </p>
                <p>
                  To get started, you'll need an API key which you can obtain by signing up for a free account. 
                  The API uses standard HTTP methods and returns JSON responses.
                </p>
              </div>
            </section>

            {/* Authentication */}
            <section id="authentication">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Authentication</h2>
              <p className="text-gray-600 mb-4">
                All API requests require authentication using an API key passed in the Authorization header:
              </p>
              <div className="bg-gray-900 rounded-lg p-4 relative">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-400">HTTP Header</span>
                  <button
                    onClick={() => copyToClipboard('Authorization: Bearer YOUR_API_KEY', 'auth')}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {copiedCode === 'auth' ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </button>
                </div>
                <code className="text-green-400">Authorization: Bearer YOUR_API_KEY</code>
              </div>
            </section>

            {/* Detection API */}
            <section id="detection-api">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Detection API</h2>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
                <div className="flex items-center mb-4">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mr-3">
                    POST
                  </span>
                  <code className="text-lg font-mono">/v1/detect</code>
                </div>
                <p className="text-gray-600 mb-4">
                  Analyzes an image and returns anime identification results.
                </p>
                
                <h4 className="font-semibold text-gray-900 mb-3">Request Parameters</h4>
                <div className="overflow-x-auto">
                  <table className="min-w-full border border-gray-200 rounded-lg">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Parameter</th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Type</th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Required</th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Description</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-3 font-mono text-sm">image_url</td>
                        <td className="px-4 py-3 text-sm text-gray-600">string</td>
                        <td className="px-4 py-3 text-sm text-red-600">Yes*</td>
                        <td className="px-4 py-3 text-sm text-gray-600">URL to the anime image</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-mono text-sm">base64</td>
                        <td className="px-4 py-3 text-sm text-gray-600">string</td>
                        <td className="px-4 py-3 text-sm text-red-600">Yes*</td>
                        <td className="px-4 py-3 text-sm text-gray-600">Base64 encoded image data</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-mono text-sm">include_alternatives</td>
                        <td className="px-4 py-3 text-sm text-gray-600">boolean</td>
                        <td className="px-4 py-3 text-sm text-gray-600">No</td>
                        <td className="px-4 py-3 text-sm text-gray-600">Include alternative suggestions (default: true)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  * Either image_url or base64 is required, not both
                </p>
              </div>

              <div className="bg-gray-900 rounded-lg p-4 relative mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-400">JavaScript Example</span>
                  <button
                    onClick={() => copyToClipboard(codeExamples.detect, 'detect')}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {copiedCode === 'detect' ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </button>
                </div>
                <pre className="text-sm text-gray-300 overflow-x-auto">
                  <code>{codeExamples.detect}</code>
                </pre>
              </div>
            </section>

            {/* Response Format */}
            <section id="response-format">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Response Format</h2>
              <p className="text-gray-600 mb-4">
                Successful requests return a JSON object with the following structure:
              </p>
              
              <div className="bg-gray-900 rounded-lg p-4 relative">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-400">JSON Response</span>
                  <button
                    onClick={() => copyToClipboard(codeExamples.response, 'response')}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {copiedCode === 'response' ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </button>
                </div>
                <pre className="text-sm text-gray-300 overflow-x-auto">
                  <code>{codeExamples.response}</code>
                </pre>
              </div>
            </section>

            {/* Code Examples */}
            <section id="examples">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Code Examples</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">cURL</h3>
                  <div className="bg-gray-900 rounded-lg p-4 relative">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-400">Shell</span>
                      <button
                        onClick={() => copyToClipboard(codeExamples.curl, 'curl')}
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        {copiedCode === 'curl' ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      </button>
                    </div>
                    <pre className="text-sm text-gray-300 overflow-x-auto">
                      <code>{codeExamples.curl}</code>
                    </pre>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Python</h3>
                  <div className="bg-gray-900 rounded-lg p-4 relative">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-400">Python</span>
                      <button
                        onClick={() => copyToClipboard(codeExamples.python, 'python')}
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        {copiedCode === 'python' ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      </button>
                    </div>
                    <pre className="text-sm text-gray-300 overflow-x-auto">
                      <code>{codeExamples.python}</code>
                    </pre>
                  </div>
                </div>
              </div>
            </section>

            {/* Rate Limits */}
            <section id="rate-limits">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Rate Limits</h2>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="font-semibold text-blue-900 mb-3">Current Limits</h3>
                <ul className="space-y-2 text-blue-800">
                  <li>• <strong>Free Tier:</strong> 100 requests per month</li>
                  <li>• <strong>Pro Tier:</strong> 10,000 requests per month</li>
                  <li>• <strong>Enterprise:</strong> Custom limits available</li>
                </ul>
                <p className="text-blue-700 mt-4">
                  Rate limit headers are included in all responses to help you track your usage.
                </p>
              </div>
            </section>

            {/* Error Handling */}
            <section id="errors">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Error Handling</h2>
              <p className="text-gray-600 mb-4">
                The API uses standard HTTP status codes to indicate success or failure:
              </p>
              
              <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-200 rounded-lg">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Status Code</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Meaning</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Description</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-3 font-mono text-sm text-green-600">200</td>
                      <td className="px-4 py-3 text-sm">Success</td>
                      <td className="px-4 py-3 text-sm text-gray-600">Request completed successfully</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-mono text-sm text-red-600">400</td>
                      <td className="px-4 py-3 text-sm">Bad Request</td>
                      <td className="px-4 py-3 text-sm text-gray-600">Invalid request parameters</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-mono text-sm text-red-600">401</td>
                      <td className="px-4 py-3 text-sm">Unauthorized</td>
                      <td className="px-4 py-3 text-sm text-gray-600">Invalid or missing API key</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-mono text-sm text-red-600">429</td>
                      <td className="px-4 py-3 text-sm">Rate Limited</td>
                      <td className="px-4 py-3 text-sm text-gray-600">Too many requests</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-mono text-sm text-red-600">500</td>
                      <td className="px-4 py-3 text-sm">Server Error</td>
                      <td className="px-4 py-3 text-sm text-gray-600">Internal server error</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DocsPage;
