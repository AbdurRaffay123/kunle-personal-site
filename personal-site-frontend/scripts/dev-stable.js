#!/usr/bin/env node

/**
 * Stable Development Server Script
 * Includes memory management and error handling
 */

const { spawn } = require('child_process');
const path = require('path');

// Set memory limits and Node.js options
process.env.NODE_OPTIONS = '--max-old-space-size=4096 --max-semi-space-size=128';
process.env.NODE_ENV = 'development';

// Increase memory limits for development
process.env.NEXT_TELEMETRY_DISABLED = '1';

console.log('🚀 Starting stable development server...');
console.log('📊 Memory limits set to 4GB');
console.log('🔧 Node options:', process.env.NODE_OPTIONS);

const nextDev = spawn('npx', ['next', 'dev'], {
  stdio: 'inherit',
  shell: true,
  env: {
    ...process.env,
    NODE_OPTIONS: '--max-old-space-size=4096 --max-semi-space-size=128',
    NEXT_TELEMETRY_DISABLED: '1',
  },
});

nextDev.on('error', (error) => {
  console.error('❌ Failed to start development server:', error);
  process.exit(1);
});

nextDev.on('close', (code) => {
  console.log(`📝 Development server exited with code ${code}`);
  process.exit(code);
});

// Handle process termination
process.on('SIGINT', () => {
  console.log('\n🛑 Shutting down development server...');
  nextDev.kill('SIGINT');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\n🛑 Shutting down development server...');
  nextDev.kill('SIGTERM');
  process.exit(0);
});










