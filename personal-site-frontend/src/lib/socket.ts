/**
 * Socket.io Client
 * 
 * Real-time communication with backend
 */

import { io, Socket } from 'socket.io-client';

const SOCKET_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

// Create socket instance
let socketInstance: Socket | null = null;

export const getSocket = (): Socket => {
  if (!socketInstance) {
    socketInstance = io(SOCKET_URL, {
      autoConnect: false, // Don't auto-connect
      reconnection: true,
      reconnectionAttempts: 3,
      reconnectionDelay: 2000,
      timeout: 10000,
      forceNew: true,
    });

    // Connection event handlers
    socketInstance.on('connect', () => {
      console.log('✅ Socket connected:', socketInstance?.id);
    });

    socketInstance.on('disconnect', () => {
      console.log('❌ Socket disconnected');
    });

    socketInstance.on('connect_error', (error) => {
      console.error('Socket connection error:', error);
    });

    socketInstance.on('reconnect_error', (error) => {
      console.error('Socket reconnection error:', error);
    });
  }
  return socketInstance;
};

// Lazy socket getter - only connect when needed
export const socket = {
  get connected() {
    return socketInstance?.connected || false;
  },
  connect: () => {
    if (!socketInstance?.connected) {
      socketInstance?.connect();
    }
  },
  disconnect: () => {
    if (socketInstance?.connected) {
      socketInstance?.disconnect();
    }
  },
  on: (event: string, callback: (...args: any[]) => void) => {
    getSocket().on(event, callback);
  },
  off: (event: string, callback?: (...args: any[]) => void) => {
    getSocket().off(event, callback);
  },
  emit: (event: string, ...args: any[]) => {
    if (socketInstance?.connected) {
      socketInstance.emit(event, ...args);
    } else {
      console.warn('Socket not connected, cannot emit event:', event);
    }
  }
};


