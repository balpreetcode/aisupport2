import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route
          path="/login"
          element={
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
              <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
                <h1 className="text-2xl font-bold text-center mb-6">AI Support Platform</h1>
                <p className="text-gray-600 text-center">Login page - Coming soon</p>
              </div>
            </div>
          }
        />
        <Route
          path="/dashboard"
          element={
            <div className="min-h-screen bg-gray-100">
              <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4">
                  <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
                </div>
              </header>
              <main className="max-w-7xl mx-auto py-6 px-4">
                <p className="text-gray-600">Dashboard content - Coming soon</p>
              </main>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
