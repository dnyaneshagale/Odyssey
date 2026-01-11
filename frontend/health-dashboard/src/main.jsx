import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ClerkProvider } from '@clerk/clerk-react'

// Import your Clerk Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY || PUBLISHABLE_KEY === 'pk_test_your_publishable_key_here') {
  console.error('⚠️ Clerk Publishable Key is missing or not configured!');
  console.error('Please add your Clerk key to frontend/health-dashboard/.env.local');
  console.error('Get your key from: https://dashboard.clerk.com');
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {PUBLISHABLE_KEY && PUBLISHABLE_KEY !== 'pk_test_your_publishable_key_here' ? (
      <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
        <App />
      </ClerkProvider>
    ) : (
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column',
        alignItems: 'center', 
        justifyContent: 'center', 
        height: '100vh',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        padding: '20px',
        textAlign: 'center'
      }}>
        <h1 style={{ color: '#dc2626', marginBottom: '20px' }}>⚠️ Configuration Required</h1>
        <div style={{ 
          maxWidth: '600px', 
          background: '#fef2f2', 
          border: '2px solid #fca5a5',
          borderRadius: '8px',
          padding: '20px'
        }}>
          <h2 style={{ color: '#991b1b', marginBottom: '16px' }}>Clerk Publishable Key Not Found</h2>
          <p style={{ color: '#7f1d1d', marginBottom: '16px' }}>
            To use this application, you need to configure Clerk authentication.
          </p>
          <ol style={{ textAlign: 'left', color: '#7f1d1d', lineHeight: '1.8' }}>
            <li>Go to <a href="https://dashboard.clerk.com" target="_blank" style={{ color: '#2563eb' }}>dashboard.clerk.com</a></li>
            <li>Create a new application (or use existing)</li>
            <li>Copy your <strong>Publishable Key</strong></li>
            <li>Create file: <code style={{ background: '#fff', padding: '2px 6px', borderRadius: '4px' }}>frontend/health-dashboard/.env.local</code></li>
            <li>Add: <code style={{ background: '#fff', padding: '2px 6px', borderRadius: '4px' }}>VITE_CLERK_PUBLISHABLE_KEY=pk_test_...</code></li>
            <li>Restart the dev server</li>
          </ol>
          <p style={{ color: '#7f1d1d', marginTop: '16px', fontSize: '14px' }}>
            📖 See <strong>CLERK_SETUP.md</strong> or <strong>CLERK_CHECKLIST.md</strong> for detailed instructions
          </p>
        </div>
      </div>
    )}
  </StrictMode>,
)
