#!/usr/bin/env node

// Configuration Check Script
// Run this to verify your setup before starting the app

import { readFileSync, existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log('🔍 Checking Odyssey Configuration...\n');

let allGood = true;

// Check frontend .env.local
console.log('📱 Frontend Configuration:');
const frontendEnvPath = join(__dirname, '.env.local');

if (!existsSync(frontendEnvPath)) {
  console.log('  ❌ .env.local file NOT FOUND');
  console.log('  → Create: frontend/health-dashboard/.env.local');
  allGood = false;
} else {
  const envContent = readFileSync(frontendEnvPath, 'utf-8');
  
  if (envContent.includes('VITE_CLERK_PUBLISHABLE_KEY')) {
    const match = envContent.match(/VITE_CLERK_PUBLISHABLE_KEY=(.+)/);
    if (match) {
      const key = match[1].trim();
      if (key === 'pk_test_your_publishable_key_here' || key === '') {
        console.log('  ❌ Clerk Publishable Key NOT CONFIGURED (using placeholder)');
        console.log('  → Get your key from: https://dashboard.clerk.com');
        allGood = false;
      } else if (key.startsWith('pk_test_') || key.startsWith('pk_live_')) {
        console.log('  ✅ Clerk Publishable Key configured');
        console.log(`  → Key: ${key.substring(0, 15)}...`);
      } else {
        console.log('  ⚠️  Invalid key format (should start with pk_test_ or pk_live_)');
        allGood = false;
      }
    }
  } else {
    console.log('  ❌ VITE_CLERK_PUBLISHABLE_KEY not found in .env.local');
    allGood = false;
  }
}

// Check backend .env
console.log('\n🔧 Backend Configuration:');
const backendEnvPath = join(__dirname, '..', '..', 'backend', '.env');

if (!existsSync(backendEnvPath)) {
  console.log('  ❌ .env file NOT FOUND');
  console.log('  → Create: backend/.env');
  allGood = false;
} else {
  const envContent = readFileSync(backendEnvPath, 'utf-8');
  
  if (envContent.includes('CLERK_SECRET_KEY')) {
    const match = envContent.match(/CLERK_SECRET_KEY=(.+)/);
    if (match) {
      const key = match[1].trim();
      if (key === 'sk_test_your_secret_key_here' || key === '') {
        console.log('  ❌ Clerk Secret Key NOT CONFIGURED (using placeholder)');
        console.log('  → Get your key from: https://dashboard.clerk.com');
        allGood = false;
      } else if (key.startsWith('sk_test_') || key.startsWith('sk_live_')) {
        console.log('  ✅ Clerk Secret Key configured');
        console.log(`  → Key: ${key.substring(0, 15)}...`);
      } else {
        console.log('  ⚠️  Invalid key format (should start with sk_test_ or sk_live_)');
        allGood = false;
      }
    }
  } else {
    console.log('  ❌ CLERK_SECRET_KEY not found in .env');
    allGood = false;
  }
}

// Check node_modules
console.log('\n📦 Dependencies:');
const nodeModulesPath = join(__dirname, 'node_modules', '@clerk', 'clerk-react');
if (existsSync(nodeModulesPath)) {
  console.log('  ✅ @clerk/clerk-react installed');
} else {
  console.log('  ❌ @clerk/clerk-react NOT installed');
  console.log('  → Run: npm install');
  allGood = false;
}

// Summary
console.log('\n' + '='.repeat(50));
if (allGood) {
  console.log('✅ All checks passed! You can start the app.');
  console.log('\nStart backend:  cd backend && python app.py');
  console.log('Start frontend: npm run dev');
} else {
  console.log('❌ Configuration incomplete. Please fix the issues above.');
  console.log('\n📖 Need help? Check these guides:');
  console.log('  • QUICKSTART.md - Quick setup guide');
  console.log('  • CLERK_CHECKLIST.md - Step-by-step checklist');
  console.log('  • CLERK_SETUP.md - Detailed setup instructions');
}
console.log('='.repeat(50) + '\n');

process.exit(allGood ? 0 : 1);
