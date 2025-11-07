#!/usr/bin/env node

/**
 * Memory Monitoring Script
 * Helps diagnose memory leaks in development
 */

const { exec } = require('child_process');
const fs = require('fs');

function getMemoryUsage() {
  return new Promise((resolve) => {
    exec('ps aux | grep -E "(next|node)" | grep -v grep', (error, stdout) => {
      if (error) {
        console.log('❌ Error getting process info:', error.message);
        resolve(null);
        return;
      }
      
      const processes = stdout.trim().split('\n').filter(line => line.includes('next'));
      const memoryInfo = processes.map(line => {
        const parts = line.trim().split(/\s+/);
        return {
          pid: parts[1],
          cpu: parts[2],
          mem: parts[3],
          command: parts.slice(10).join(' ')
        };
      });
      
      resolve(memoryInfo);
    });
  });
}

function logMemoryUsage() {
  const timestamp = new Date().toISOString();
  console.log(`\n📊 Memory Usage Report - ${timestamp}`);
  console.log('=' .repeat(50));
  
  getMemoryUsage().then(processes => {
    if (processes && processes.length > 0) {
      processes.forEach(proc => {
        console.log(`PID: ${proc.pid} | CPU: ${proc.cpu}% | Memory: ${proc.mem}% | Command: ${proc.command.substring(0, 60)}...`);
      });
    } else {
      console.log('No Next.js processes found');
    }
  });
}

// Monitor every 30 seconds
setInterval(logMemoryUsage, 30000);

// Initial report
console.log('🔍 Starting memory monitoring...');
logMemoryUsage();

// Handle cleanup
process.on('SIGINT', () => {
  console.log('\n🛑 Stopping memory monitor...');
  process.exit(0);
});













