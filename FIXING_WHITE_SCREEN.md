# 🔧 Fixing the White Screen Issue

## The Problem

You're seeing a white screen because **Clerk authentication is not configured** with your API keys.

## Quick Fix (5 minutes)

### Step 1: Get Clerk Keys

1. Go to [https://dashboard.clerk.com](https://dashboard.clerk.com)
2. Sign up or log in (it's free!)
3. Create a new application:
   - Click "Create Application"
   - Name it "Odyssey"
   - Select "Email" authentication
   - Click "Create"
4. You'll see your dashboard with **API Keys**

### Step 2: Copy Your Keys

In the Clerk Dashboard, find two keys:

1. **Publishable Key** (starts with `pk_test_`)
   - Example: `pk_test_Y2xlcmsudGVzdC5leGFtcGxlLmNvbSQ`
   
2. **Secret Key** (starts with `sk_test_`)
   - Example: `sk_test_abcd1234efgh5678ijkl9012`

### Step 3: Configure Frontend

Open or create this file:
```
frontend/health-dashboard/.env.local
```

Add this line (replace with YOUR actual key):
```env
VITE_CLERK_PUBLISHABLE_KEY=pk_test_YOUR_ACTUAL_KEY_HERE
```

**Example:**
```env
VITE_CLERK_PUBLISHABLE_KEY=pk_test_Y2xlcmsudGVzdC5leGFtcGxlLmNvbSQ
```

### Step 4: Configure Backend

Open or create this file:
```
backend/.env
```

Add these lines (replace SECRET_KEY with YOUR actual key):
```env
CLERK_SECRET_KEY=sk_test_YOUR_ACTUAL_KEY_HERE
FLASK_ENV=development
DATABASE_PATH=streaks.db
```

**Example:**
```env
CLERK_SECRET_KEY=sk_test_abcd1234efgh5678ijkl9012
FLASK_ENV=development
DATABASE_PATH=streaks.db
```

### Step 5: Restart Everything

1. **Stop** both servers (Ctrl+C in both terminals)

2. **Start Backend** (Terminal 1):
   ```bash
   cd backend
   myvenv\Scripts\activate
   python app.py
   ```

3. **Start Frontend** (Terminal 2):
   ```bash
   cd frontend/health-dashboard
   npm run dev
   ```

4. **Open Browser**: [http://localhost:5173](http://localhost:5173)

### Step 6: Test

You should now see:
- ✅ A login page (not a white screen!)
- ✅ "Sign Up" and "Sign In" options
- ✅ Clerk's beautiful UI

## Verify Your Configuration

Before starting the app, run this check:

```bash
cd frontend/health-dashboard
npm run check-config
```

This will tell you if your keys are properly configured.

## Still Seeing White Screen?

### Check Browser Console

1. Open your browser
2. Press F12 (or right-click → Inspect)
3. Click "Console" tab
4. Look for errors

Common errors and fixes:

#### Error: "Missing Publishable Key"
✅ **Fix**: Add `VITE_CLERK_PUBLISHABLE_KEY` to `.env.local`

#### Error: "Invalid Publishable Key"
✅ **Fix**: Make sure key starts with `pk_test_` or `pk_live_`

#### Error: "Network Error" or "Failed to fetch"
✅ **Fix**: Make sure backend is running on port 5000

#### Error: "Module not found: @clerk/clerk-react"
✅ **Fix**: Run `npm install` in frontend directory

### Check Files Exist

Run these commands:

**Windows:**
```powershell
# Check frontend config
type frontend\health-dashboard\.env.local

# Check backend config
type backend\.env
```

**macOS/Linux:**
```bash
# Check frontend config
cat frontend/health-dashboard/.env.local

# Check backend config  
cat backend/.env
```

If files don't exist, create them with the steps above!

### Still Not Working?

1. **Clear browser cache**:
   - Chrome/Edge: Ctrl+Shift+Delete → Clear cache
   - Firefox: Ctrl+Shift+Delete → Clear cache

2. **Try incognito/private window**:
   - This ensures no cached files interfere

3. **Check the logs**:
   - Backend terminal: Any errors?
   - Frontend terminal: Compilation errors?

## What the White Screen Means

The white screen happens because:

1. React app tries to initialize
2. Clerk requires a valid Publishable Key
3. Key is missing or invalid (placeholder value)
4. Clerk throws an error
5. React stops rendering → white screen

After adding your real Clerk key, the app will work properly!

## Need More Help?

- 📖 **Full Setup**: [CLERK_CHECKLIST.md](../CLERK_CHECKLIST.md)
- 🚀 **Quick Start**: [QUICKSTART.md](../QUICKSTART.md)
- 📚 **Detailed Guide**: [CLERK_SETUP.md](../CLERK_SETUP.md)
- 🏗️ **Architecture**: [ARCHITECTURE.md](../ARCHITECTURE.md)

## Video Tutorial (If You Prefer)

1. Go to [https://clerk.com/docs](https://clerk.com/docs)
2. Watch "Getting Started with React"
3. Follow along to get your keys

---

**Remember**: The app needs REAL Clerk keys to work. The placeholder keys in `.env.example` won't work!

Once you add your keys and restart, you'll see the beautiful login page instead of a white screen! 🎉
