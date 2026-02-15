import React, { useState } from 'react';

const LabLesson = ({ labNum, user, onNavigate, onExerciseComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [showExercise, setShowExercise] = useState(false);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const labData = {
    1: {
      title: "Introduction to Web Services",
      titleAr: "مقدمة في خدمات الويب",
      icon: "🌐",
      videos: [
        { id: "7YcW25PHnAA", title: "What are Web Services?" },
        { id: "Wz4FiJnJXws", title: "Web Services Explained" }
      ],
      content: [
        { type: "intro", title: "Welcome to Lab 1", text: "Learn what Web Services are and why they matter." },
        { type: "concept", title: "What are Web Services?", text: "Web Services allow applications to communicate over the internet.", points: ["Software components on the web", "Allow different applications to talk", "Platform independent", "Use standard protocols"] },
        { type: "concept", title: "Why Web Services?", text: "Benefits of using Web Services:", points: ["Reusability - Use same service in many apps", "Interoperability - Different platforms can communicate", "Scalability - Handle growing demand", "Cost effective - Share functionality"] },
        { type: "concept", title: "Types of Web Services", text: "Main types you'll learn:", points: ["REST - Representational State Transfer", "SOAP - Simple Object Access Protocol", "GraphQL - Query language for APIs", "gRPC - Google's RPC framework"] }
      ],
      exercises: [
        { q: "Web Services allow apps to:", options: ["Work offline only", "Communicate over internet", "Delete data", "Create hardware"], correct: 1 },
        { q: "Web Services are:", options: ["Platform dependent", "Platform independent", "Only for Windows", "Only for web"], correct: 1 },
        { q: "REST stands for:", options: ["Rapid Easy Service Transfer", "Representational State Transfer", "Remote System Technology", "Real-time Service Tool"], correct: 1 },
        { q: "Main benefit of Web Services:", options: ["Slower apps", "Reusability", "More code", "Less security"], correct: 1 },
        { q: "SOAP stands for:", options: ["Simple Object Access Protocol", "System Online Application", "Secure Open API", "Software Object Access"], correct: 0 }
      ]
    },
    2: {
      title: "HTTP Protocol & Methods",
      titleAr: "بروتوكول HTTP والطرق",
      icon: "📡",
      videos: [
        { id: "iYM2zFP3Zn0", title: "HTTP Explained" },
        { id: "tkfVQK6UxDI", title: "HTTP Methods Tutorial" }
      ],
      content: [
        { type: "intro", title: "Welcome to Lab 2", text: "Understand HTTP - the foundation of web communication." },
        { type: "concept", title: "What is HTTP?", text: "HyperText Transfer Protocol - rules for web communication.", points: ["Request-Response model", "Stateless protocol", "Uses URLs to identify resources", "Standard port is 80 (443 for HTTPS)"] },
        { type: "concept", title: "HTTP Methods", text: "Common HTTP methods (verbs):", points: ["GET - Retrieve data", "POST - Create new data", "PUT - Update entire resource", "PATCH - Update partial resource", "DELETE - Remove data"] },
        { type: "concept", title: "HTTP Status Codes", text: "Response codes indicating result:", points: ["200 - OK (Success)", "201 - Created", "400 - Bad Request", "401 - Unauthorized", "404 - Not Found", "500 - Server Error"] },
        { type: "code", title: "HTTP Request Example", code: "GET /api/users HTTP/1.1\nHost: example.com\nContent-Type: application/json\nAuthorization: Bearer token123", text: "Structure of an HTTP request" }
      ],
      exercises: [
        { q: "HTTP stands for:", options: ["Hyper Text Transfer Protocol", "High Tech Transfer Program", "Home Text Transfer", "Hybrid Transfer Protocol"], correct: 0 },
        { q: "GET method is used to:", options: ["Delete data", "Create data", "Retrieve data", "Update data"], correct: 2 },
        { q: "POST method is used to:", options: ["Retrieve data", "Create new data", "Delete data", "Read data"], correct: 1 },
        { q: "Status code 404 means:", options: ["Success", "Created", "Not Found", "Server Error"], correct: 2 },
        { q: "Status code 200 means:", options: ["Error", "Not Found", "Created", "OK/Success"], correct: 3 }
      ]
    },
    3: {
      title: "REST API Fundamentals",
      titleAr: "أساسيات REST API",
      icon: "🔗",
      videos: [
        { id: "lsMQRaeKNDk", title: "REST API Explained" },
        { id: "SLwpqD8n3d0", title: "REST API Tutorial" }
      ],
      content: [
        { type: "intro", title: "Welcome to Lab 3", text: "Master REST - the most popular web service architecture." },
        { type: "concept", title: "What is REST?", text: "REST is an architectural style for web services.", points: ["Uses HTTP methods", "Stateless communication", "Resource-based URLs", "JSON is common data format"] },
        { type: "concept", title: "REST Principles", text: "Key REST constraints:", points: ["Client-Server separation", "Stateless - No session stored on server", "Cacheable responses", "Uniform interface", "Layered system"] },
        { type: "concept", title: "RESTful URLs", text: "Good URL design:", points: ["Use nouns, not verbs (/users not /getUsers)", "Use plural names (/users not /user)", "Use hierarchy (/users/123/orders)", "Keep it simple and readable"] },
        { type: "code", title: "REST API Examples", code: "GET    /api/users      - Get all users\nGET    /api/users/1    - Get user with ID 1\nPOST   /api/users      - Create new user\nPUT    /api/users/1    - Update user 1\nDELETE /api/users/1    - Delete user 1", text: "CRUD operations in REST" }
      ],
      exercises: [
        { q: "REST uses which data format commonly?", options: ["XML only", "JSON", "HTML", "Plain text"], correct: 1 },
        { q: "REST is:", options: ["Stateful", "Stateless", "Session-based", "Cookie-based"], correct: 1 },
        { q: "Good REST URL uses:", options: ["Verbs", "Nouns", "Numbers only", "Random strings"], correct: 1 },
        { q: "GET /users/5 returns:", options: ["All users", "User with ID 5", "5 users", "Error"], correct: 1 },
        { q: "To create a resource, use:", options: ["GET", "DELETE", "POST", "OPTIONS"], correct: 2 }
      ]
    },
    4: {
      title: "JSON Data Format",
      titleAr: "تنسيق بيانات JSON",
      icon: "📋",
      videos: [
        { id: "iiADhChRriM", title: "JSON Tutorial for Beginners" },
        { id: "wI1CWzNtE-M", title: "Learn JSON in 10 Minutes" }
      ],
      content: [
        { type: "intro", title: "Welcome to Lab 4", text: "Learn JSON - the universal data exchange format." },
        { type: "concept", title: "What is JSON?", text: "JavaScript Object Notation - lightweight data format.", points: ["Human readable", "Language independent", "Easy to parse", "Standard for APIs"] },
        { type: "concept", title: "JSON Data Types", text: "JSON supports these types:", points: ["String - \"hello\"", "Number - 42 or 3.14", "Boolean - true or false", "Array - [1, 2, 3]", "Object - {\"key\": \"value\"}", "null - null"] },
        { type: "code", title: "JSON Example", code: "{\n  \"name\": \"Ahmed\",\n  \"age\": 25,\n  \"student\": true,\n  \"courses\": [\"Web Services\", \"Database\"],\n  \"address\": {\n    \"city\": \"Taif\",\n    \"country\": \"Saudi Arabia\"\n  }\n}", text: "Complete JSON object example" },
        { type: "concept", title: "JSON vs XML", text: "Why JSON is preferred:", points: ["Shorter syntax", "Faster to parse", "Directly usable in JavaScript", "Smaller file size"] }
      ],
      exercises: [
        { q: "JSON stands for:", options: ["Java System Object Notation", "JavaScript Object Notation", "Joint Service Online Network", "Java Standard Open Notation"], correct: 1 },
        { q: "JSON string must use:", options: ["Single quotes", "Double quotes", "No quotes", "Backticks"], correct: 1 },
        { q: "JSON array uses:", options: ["{ }", "( )", "[ ]", "< >"], correct: 2 },
        { q: "JSON boolean values are:", options: ["TRUE/FALSE", "true/false", "Yes/No", "1/0"], correct: 1 },
        { q: "JSON object uses:", options: ["[ ]", "{ }", "( )", "< >"], correct: 1 }
      ]
    },
    5: {
      title: "API Authentication",
      titleAr: "مصادقة API",
      icon: "🔐",
      videos: [
        { id: "x6fIseKzzH0", title: "API Authentication Methods" },
        { id: "7Q17ubqLfaM", title: "JWT Authentication Explained" }
      ],
      content: [
        { type: "intro", title: "Welcome to Lab 5", text: "Learn how to secure API access with authentication." },
        { type: "concept", title: "Why Authentication?", text: "Protect your API from unauthorized access.", points: ["Verify user identity", "Control access to resources", "Track API usage", "Prevent abuse"] },
        { type: "concept", title: "Authentication Methods", text: "Common authentication approaches:", points: ["API Keys - Simple token in header", "Basic Auth - Username:password encoded", "JWT - JSON Web Tokens", "OAuth 2.0 - Industry standard", "Session-based - Server stores session"] },
        { type: "concept", title: "JWT (JSON Web Token)", text: "Most popular for REST APIs:", points: ["Self-contained token", "Contains user info (payload)", "Digitally signed", "Stateless authentication"] },
        { type: "code", title: "API Key Example", code: "// Request with API Key\nGET /api/data\nHeaders:\n  X-API-Key: your-api-key-here\n\n// Request with JWT\nGET /api/data\nHeaders:\n  Authorization: Bearer eyJhbGciOiJIUzI1NiIs...", text: "Authentication header examples" }
      ],
      exercises: [
        { q: "JWT stands for:", options: ["Java Web Token", "JSON Web Token", "JavaScript Web Transfer", "Joint Web Technology"], correct: 1 },
        { q: "API Key is sent in:", options: ["URL only", "Header", "Body only", "Cookie only"], correct: 1 },
        { q: "OAuth 2.0 is:", options: ["Encryption method", "Database", "Authorization standard", "Programming language"], correct: 2 },
        { q: "JWT is:", options: ["Stateful", "Stateless", "Session-based", "Cookie-based"], correct: 1 },
        { q: "Bearer token goes in:", options: ["URL", "Authorization header", "Body", "Cookie"], correct: 1 }
      ]
    },
    6: {
      title: "Consuming REST APIs",
      titleAr: "استهلاك REST APIs",
      icon: "📥",
      videos: [
        { id: "cuEtnrL9-H0", title: "How to Call REST APIs" },
        { id: "Oive66jrwBs", title: "Fetch API Tutorial" }
      ],
      content: [
        { type: "intro", title: "Welcome to Lab 6", text: "Learn how to call and use REST APIs in your applications." },
        { type: "concept", title: "API Clients", text: "Tools to call APIs:", points: ["Postman - GUI tool for testing", "cURL - Command line tool", "Fetch API - Browser JavaScript", "Axios - JavaScript library"] },
        { type: "code", title: "Fetch API Example", code: "// GET Request\nfetch('https://api.example.com/users')\n  .then(response => response.json())\n  .then(data => console.log(data));\n\n// POST Request\nfetch('https://api.example.com/users', {\n  method: 'POST',\n  headers: {'Content-Type': 'application/json'},\n  body: JSON.stringify({name: 'Ahmed'})\n});", text: "JavaScript Fetch API examples" },
        { type: "concept", title: "Handling Responses", text: "Process API responses:", points: ["Check status code first", "Parse JSON response", "Handle errors gracefully", "Display data to user"] },
        { type: "code", title: "Error Handling", code: "fetch('https://api.example.com/users')\n  .then(response => {\n    if (!response.ok) {\n      throw new Error('Network error');\n    }\n    return response.json();\n  })\n  .then(data => console.log(data))\n  .catch(error => console.error('Error:', error));", text: "Proper error handling" }
      ],
      exercises: [
        { q: "Postman is used to:", options: ["Write code", "Test APIs", "Create databases", "Design UI"], correct: 1 },
        { q: "Fetch API is built into:", options: ["Node.js only", "Browser", "Python", "Java"], correct: 1 },
        { q: "response.json() does:", options: ["Sends JSON", "Parses JSON response", "Creates JSON", "Deletes JSON"], correct: 1 },
        { q: ".catch() handles:", options: ["Success", "Errors", "Headers", "URLs"], correct: 1 },
        { q: "Content-Type for JSON:", options: ["text/plain", "text/html", "application/json", "application/xml"], correct: 2 }
      ]
    },
    7: {
      title: "Building REST APIs",
      titleAr: "بناء REST APIs",
      icon: "🛠️",
      videos: [
        { id: "pKd0Rpw7O48", title: "Build REST API with Node.js" },
        { id: "fgTGADljAMM", title: "REST API Design Best Practices" }
      ],
      content: [
        { type: "intro", title: "Welcome to Lab 7", text: "Learn to create your own REST APIs." },
        { type: "concept", title: "API Design Steps", text: "Planning your API:", points: ["Define resources (users, products)", "Choose endpoints (URLs)", "Select HTTP methods", "Design response format", "Plan error handling"] },
        { type: "code", title: "Express.js API Example", code: "const express = require('express');\nconst app = express();\napp.use(express.json());\n\nlet users = [];\n\n// GET all users\napp.get('/api/users', (req, res) => {\n  res.json(users);\n});\n\n// POST new user\napp.post('/api/users', (req, res) => {\n  users.push(req.body);\n  res.status(201).json(req.body);\n});\n\napp.listen(3000);", text: "Simple REST API with Express.js" },
        { type: "concept", title: "Best Practices", text: "API design guidelines:", points: ["Use proper HTTP status codes", "Version your API (/api/v1/)", "Validate input data", "Return consistent response format", "Document your API"] }
      ],
      exercises: [
        { q: "Express.js is:", options: ["Database", "Web framework", "Programming language", "Operating system"], correct: 1 },
        { q: "res.json() sends:", options: ["HTML", "JSON response", "File", "Error"], correct: 1 },
        { q: "Status 201 means:", options: ["OK", "Created", "Error", "Not Found"], correct: 1 },
        { q: "API versioning example:", options: ["/api/users", "/v1/users", "/api/v1/users", "/users/v1"], correct: 2 },
        { q: "req.body contains:", options: ["URL params", "Request data", "Headers", "Cookies"], correct: 1 }
      ]
    },
    8: {
      title: "SOAP Web Services",
      titleAr: "خدمات SOAP",
      icon: "📨",
      videos: [
        { id: "mKjvKPlb1rA", title: "SOAP Web Services Tutorial" },
        { id: "7YcW25PHnAA", title: "SOAP vs REST Comparison" }
      ],
      content: [
        { type: "intro", title: "Welcome to Lab 8", text: "Understand SOAP - the enterprise web service protocol." },
        { type: "concept", title: "What is SOAP?", text: "Simple Object Access Protocol:", points: ["XML-based messaging protocol", "Strict standards and rules", "Used in enterprise systems", "Platform and language independent"] },
        { type: "concept", title: "SOAP vs REST", text: "Key differences:", points: ["SOAP uses XML only, REST uses JSON/XML", "SOAP has strict standards, REST is flexible", "SOAP is more secure, REST is simpler", "SOAP for enterprise, REST for web/mobile"] },
        { type: "code", title: "SOAP Message Structure", code: "<?xml version=\"1.0\"?>\n<soap:Envelope>\n  <soap:Header>\n    <!-- Optional header info -->\n  </soap:Header>\n  <soap:Body>\n    <GetUser>\n      <UserId>123</UserId>\n    </GetUser>\n  </soap:Body>\n</soap:Envelope>", text: "SOAP message example" },
        { type: "concept", title: "WSDL", text: "Web Services Description Language:", points: ["Describes the web service", "Defines available operations", "Specifies message formats", "Used for auto-generating clients"] }
      ],
      exercises: [
        { q: "SOAP uses:", options: ["JSON", "XML", "HTML", "Plain text"], correct: 1 },
        { q: "SOAP is:", options: ["Flexible", "Strict standards", "Stateful", "Simple"], correct: 1 },
        { q: "WSDL describes:", options: ["Database", "Web service structure", "HTML pages", "CSS styles"], correct: 1 },
        { q: "SOAP Envelope contains:", options: ["Only Body", "Header and Body", "Only Header", "Nothing"], correct: 1 },
        { q: "SOAP is preferred for:", options: ["Mobile apps", "Simple APIs", "Enterprise systems", "Static websites"], correct: 2 }
      ]
    },
    9: {
      title: "API Testing & Documentation",
      titleAr: "اختبار وتوثيق API",
      icon: "📝",
      videos: [
        { id: "VywxIQ2ZXw4", title: "API Testing with Postman" },
        { id: "YS4e4q9oBaU", title: "API Documentation with Swagger" }
      ],
      content: [
        { type: "intro", title: "Welcome to Lab 9", text: "Learn to test and document your APIs professionally." },
        { type: "concept", title: "API Testing", text: "Types of API tests:", points: ["Functional testing - Does it work?", "Load testing - Handle many requests?", "Security testing - Is it secure?", "Integration testing - Works with other systems?"] },
        { type: "concept", title: "Testing Tools", text: "Popular API testing tools:", points: ["Postman - Manual & automated testing", "Jest - JavaScript testing", "Swagger - Test & document", "JMeter - Load testing"] },
        { type: "concept", title: "API Documentation", text: "Good documentation includes:", points: ["Endpoint descriptions", "Request/response examples", "Authentication details", "Error codes explained", "Code samples"] },
        { type: "concept", title: "OpenAPI/Swagger", text: "Industry standard for API docs:", points: ["Machine-readable format", "Auto-generate documentation", "Interactive API explorer", "Code generation support"] }
      ],
      exercises: [
        { q: "Postman is used for:", options: ["Database design", "API testing", "UI design", "Server hosting"], correct: 1 },
        { q: "Load testing checks:", options: ["Security", "Performance under load", "Functionality", "Documentation"], correct: 1 },
        { q: "Swagger is for:", options: ["Testing only", "Documentation only", "Both testing and docs", "Database"], correct: 2 },
        { q: "Good API docs include:", options: ["Only endpoints", "Examples and descriptions", "Only code", "Only errors"], correct: 1 },
        { q: "OpenAPI is:", options: ["Programming language", "API specification standard", "Database", "Framework"], correct: 1 }
      ]
    },
    10: {
      title: "Web Services Project",
      titleAr: "مشروع خدمات الويب",
      icon: "🚀",
      videos: [
        { id: "fgTGADljAMM", title: "Building a Complete API" },
        { id: "7YcW25PHnAA", title: "API Project Best Practices" }
      ],
      content: [
        { type: "intro", title: "Welcome to Lab 10", text: "Apply everything in a complete project!" },
        { type: "concept", title: "Project Planning", text: "Steps to build your API:", points: ["1. Define requirements", "2. Design API endpoints", "3. Choose technology stack", "4. Implement endpoints", "5. Add authentication", "6. Test thoroughly", "7. Document API", "8. Deploy"] },
        { type: "concept", title: "Project Ideas", text: "Beginner-friendly projects:", points: ["Todo List API", "User Management API", "Blog Post API", "Product Catalog API", "Weather Data API wrapper"] },
        { type: "concept", title: "Technology Stack", text: "Recommended tools:", points: ["Backend: Node.js + Express", "Database: MongoDB or MySQL", "Authentication: JWT", "Testing: Postman", "Documentation: Swagger", "Deployment: Heroku or Vercel"] },
        { type: "concept", title: "Checklist", text: "Before submission:", points: ["All CRUD operations work", "Proper error handling", "Authentication implemented", "Input validation", "API documented", "Code is clean and commented"] }
      ],
      exercises: [
        { q: "First step in API project:", options: ["Write code", "Define requirements", "Deploy", "Test"], correct: 1 },
        { q: "CRUD stands for:", options: ["Create Read Update Delete", "Code Run Upload Download", "Call Request Update Data", "Create Request Use Delete"], correct: 0 },
        { q: "JWT is used for:", options: ["Database", "Authentication", "Testing", "Deployment"], correct: 1 },
        { q: "Swagger helps with:", options: ["Database design", "Documentation", "Deployment", "Testing only"], correct: 1 },
        { q: "Good API has:", options: ["No documentation", "Poor error handling", "Proper validation", "No authentication"], correct: 2 }
      ]
    }
  };

  const lab = labData[labNum];
  if (!lab) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-center text-white">
          <p>Lab {labNum} coming soon!</p>
          <button onClick={() => onNavigate('home')} className="mt-4 px-6 py-2 bg-teal-600 rounded-lg">Back</button>
        </div>
      </div>
    );
  }

  const totalSteps = lab.content.length + 2;
  const handleAnswer = (qi, ai) => { if (!submitted) setAnswers({...answers, [qi]: ai}); };
  const handleSubmit = () => {
    let c = 0;
    lab.exercises.forEach((e, i) => { if (answers[i] === e.correct) c++; });
    const s = Math.round((c / lab.exercises.length) * 100);
    setScore(s);
    setSubmitted(true);
    onExerciseComplete(labNum, s);
  };

  if (showExercise) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-900/30 to-slate-900 text-white p-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold">Lab {labNum} Exercise | تمرين المعمل {labNum}</h2>
          </div>
          {!submitted ? (
            <div className="space-y-6">
              {lab.exercises.map((ex, i) => (
                <div key={i} className="bg-slate-700/30 rounded-xl p-4">
                  <p className="text-white font-semibold mb-3">{i+1}. {ex.q}</p>
                  <div className="space-y-2">
                    {ex.options.map((opt, j) => (
                      <button key={j} onClick={() => handleAnswer(i, j)} className={`w-full text-left px-4 py-2 rounded-lg ${answers[i] === j ? 'bg-teal-600' : 'bg-slate-800 hover:bg-slate-700'}`}>
                        {String.fromCharCode(65+j)}. {opt}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
              <button onClick={handleSubmit} disabled={Object.keys(answers).length < 5} className="w-full py-3 bg-emerald-600 rounded-xl font-bold disabled:opacity-50">Submit | إرسال</button>
            </div>
          ) : (
            <div className="text-center">
              <div className={`p-8 rounded-2xl mb-6 ${score >= 60 ? 'bg-emerald-900/30' : 'bg-red-900/30'}`}>
                <p className="text-5xl mb-2">{score >= 60 ? '🎉' : '😔'}</p>
                <p className="text-4xl font-bold">{score}%</p>
                <p className="text-slate-400 mt-2">{score >= 60 ? 'Great job! | أحسنت!' : 'Keep trying! | حاول مرة أخرى!'}</p>
              </div>
              <div className="space-y-3 mb-6 text-left">
                {lab.exercises.map((ex, i) => (
                  <div key={i} className={`p-3 rounded-lg ${answers[i] === ex.correct ? 'bg-emerald-900/30' : 'bg-red-900/30'}`}>
                    <p>{i+1}. {ex.q}</p>
                    <p className="text-sm">{answers[i] === ex.correct ? '✓ Correct' : `✗ Answer: ${ex.options[ex.correct]}`}</p>
                  </div>
                ))}
              </div>
              <button onClick={() => onNavigate('home')} className="px-6 py-3 bg-teal-600 rounded-xl">Back to Course | العودة للدورة</button>
            </div>
          )}
        </div>
      </div>
    );
  }

  const renderContent = () => {
    if (currentStep === lab.content.length) {
      return (
        <div className="p-6">
          <h2 className="text-2xl font-bold text-center mb-6">Video Tutorials | فيديوهات تعليمية</h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            {lab.videos.map((v, i) => (
              <div key={i} className="bg-slate-700/30 rounded-xl overflow-hidden">
                <div className="aspect-video">
                  <iframe src={`https://www.youtube.com/embed/${v.id}`} title={v.title} className="w-full h-full" allowFullScreen></iframe>
                </div>
                <p className="p-3 font-semibold">{v.title}</p>
              </div>
            ))}
          </div>
        </div>
      );
    }
    if (currentStep === lab.content.length + 1) {
      return (
        <div className="p-6 text-center">
          <p className="text-5xl mb-4">✅</p>
          <h2 className="text-2xl font-bold mb-2">Lab Complete!</h2>
          <p className="text-teal-300/70 font-arabic mb-6">اكتمل المعمل!</p>
          <button onClick={() => setShowExercise(true)} className="px-8 py-4 bg-emerald-600 rounded-xl font-bold text-lg">Start Exercise | ابدأ التمرين</button>
        </div>
      );
    }
    const c = lab.content[currentStep];
    return (
      <div className="p-6 max-w-4xl mx-auto">
        <div className="text-center mb-6">
          <span className="px-3 py-1 bg-teal-600/30 rounded-full text-teal-300 text-sm">{c.type === 'code' ? '💻 Code' : '📖 Concept'}</span>
          <h2 className="text-2xl font-bold mt-4">{c.title}</h2>
        </div>
        {c.text && <div className="bg-slate-700/30 rounded-xl p-6 mb-6"><p>{c.text}</p></div>}
        {c.points && <div className="bg-slate-700/30 rounded-xl p-6 mb-6">{c.points.map((p,i) => <p key={i} className="mb-2">✓ {p}</p>)}</div>}
        {c.code && <div className="bg-slate-900 rounded-xl p-6 mb-6 overflow-x-auto"><pre className="text-cyan-300 font-mono text-sm whitespace-pre-wrap">{c.code}</pre></div>}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-900/30 to-slate-900 text-white flex flex-col">
      <header className="bg-slate-800/80 border-b border-slate-700 p-4 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button onClick={() => onNavigate('home')} className="px-3 py-2 bg-slate-700 rounded-lg">← Back</button>
            <div>
              <h1 className="font-bold">Lab {labNum}: {lab.title}</h1>
              <p className="text-xs text-teal-300/70 font-arabic">{lab.titleAr}</p>
            </div>
          </div>
          <span className="text-3xl">{lab.icon}</span>
        </div>
      </header>
      <div className="bg-slate-800/50 border-b border-slate-700 px-4 py-2">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between text-xs text-slate-400 mb-1">
            <span>Step {currentStep + 1} / {totalSteps}</span>
            <span>{Math.round(((currentStep+1)/totalSteps)*100)}%</span>
          </div>
          <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
            <div className="h-full bg-teal-500 transition-all" style={{width: `${((currentStep+1)/totalSteps)*100}%`}}></div>
          </div>
        </div>
      </div>
      <div className="flex-1">{renderContent()}</div>
      <div className="bg-slate-800/80 border-t border-slate-700 p-4 sticky bottom-0">
        <div className="max-w-6xl mx-auto flex justify-between">
          <button onClick={() => setCurrentStep(Math.max(0, currentStep-1))} disabled={currentStep === 0} className={`px-6 py-2 rounded-lg ${currentStep === 0 ? 'bg-slate-700 text-slate-500' : 'bg-slate-700 hover:bg-slate-600'}`}>← Previous</button>
          {currentStep < totalSteps - 1 ? (
            <button onClick={() => setCurrentStep(currentStep+1)} className="px-6 py-2 bg-teal-600 hover:bg-teal-500 rounded-lg">Next →</button>
          ) : (
            <button onClick={() => setShowExercise(true)} className="px-6 py-2 bg-emerald-600 hover:bg-emerald-500 rounded-lg">Take Exercise | ابدأ التمرين</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default LabLesson;
