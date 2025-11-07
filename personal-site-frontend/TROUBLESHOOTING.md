# Development Server Troubleshooting Guide

## Issue: Internal Server Error (500) After Some Time

### Symptoms
- Frontend works initially
- After 5-10 minutes, starts showing 500 errors
- Restarting the development server fixes it temporarily
- Error appears in console: `GET http://localhost:3000/notes/[id] 500 (Internal Server Error)`

### Root Causes
1. **Memory Leaks** - Turbopack and hot reloading can cause memory accumulation
2. **API Connection Issues** - Backend connection timeouts
3. **File System Watchers** - Too many file watchers causing system limits
4. **Node.js Memory Limits** - Default memory limits exceeded

### Solutions

#### 1. Use Stable Development Server
```bash
# Instead of: npm run dev (uses Turbopack)
# Use: npm run dev:stable (uses standard webpack)
npm run dev:stable
```

#### 2. Monitor Memory Usage
```bash
# Run memory monitor in separate terminal
node scripts/monitor-memory.js
```

#### 3. Increase Node.js Memory Limits
```bash
# Set environment variables before starting
export NODE_OPTIONS="--max-old-space-size=4096 --max-semi-space-size=128"
export NEXT_TELEMETRY_DISABLED=1
npm run dev
```

#### 4. Clear Cache and Restart
```bash
# Stop the server (Ctrl+C)
rm -rf .next
rm -rf node_modules/.cache
npm run dev:stable
```

#### 5. Check System Resources
```bash
# Check memory usage
free -h
# Check file descriptors
ulimit -n
# Check running processes
ps aux | grep -E "(next|node)" | grep -v grep
```

### Prevention Strategies

#### 1. Use Stable Configuration
- Use `npm run dev:stable` instead of Turbopack
- Configure webpack for better memory management
- Set appropriate memory limits

#### 2. Optimize Development Environment
```bash
# Set system limits
echo "fs.inotify.max_user_watches=524288" | sudo tee -a /etc/sysctl.conf
sudo sysctl -p
```

#### 3. Regular Maintenance
```bash
# Clear cache weekly
rm -rf .next node_modules/.cache
npm install
```

### Alternative Development Commands

```bash
# Standard Next.js (most stable)
npm run dev

# Stable with memory optimization
npm run dev:stable

# Turbopack (fastest but less stable)
npm run dev:turbo

# Production build for testing
npm run build && npm run start
```

### Debugging Steps

1. **Check Backend Status**
   ```bash
   curl http://localhost:4000/health
   ```

2. **Monitor Memory**
   ```bash
   node scripts/monitor-memory.js
   ```

3. **Check Logs**
   ```bash
   # Look for error patterns in terminal output
   # Check browser console for specific errors
   ```

4. **Test API Directly**
   ```bash
   curl http://localhost:4000/api/blogs
   ```

### Emergency Fixes

#### Quick Restart
```bash
# Kill all Node processes
pkill -f node
# Clear cache
rm -rf .next
# Restart with stable config
npm run dev:stable
```

#### System Reset
```bash
# Full system reset
pkill -f node
rm -rf .next node_modules/.cache
npm install
npm run dev:stable
```

### Configuration Files

#### next.config.ts
- Optimized webpack configuration
- Memory management settings
- Package import optimization

#### package.json
- Multiple development scripts
- Memory-optimized options

#### scripts/
- `dev-stable.js` - Stable development server
- `monitor-memory.js` - Memory monitoring tool

### Best Practices

1. **Use Stable Development Server**
   - Avoid Turbopack for long development sessions
   - Use `npm run dev:stable` for reliability

2. **Monitor Resources**
   - Run memory monitor in background
   - Watch for memory accumulation

3. **Regular Maintenance**
   - Clear cache weekly
   - Restart development server every few hours
   - Monitor system resources

4. **Environment Setup**
   - Set appropriate Node.js memory limits
   - Configure file system watchers
   - Use stable Node.js version

### When to Use Each Command

- **`npm run dev`** - Standard development (good for most cases)
- **`npm run dev:stable`** - When experiencing memory issues
- **`npm run dev:turbo`** - For fast iteration (short sessions only)
- **`npm run build && npm run start`** - For production testing

### Contact
If issues persist, check:
1. System memory usage
2. Backend server status
3. Node.js version compatibility
4. File system permissions













