// src/auth/authFunctions.js
import { auth } from './authConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';

// Sign-up function (Email/Password)
export const signUp = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log('User created: ', userCredential.user);
    return userCredential.user;
  } catch (error) {
    console.error('Sign-up error: ', error.message);
    throw new Error(error.message);
  }
};

// Login function (Email/Password)
export const login = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log('User logged in: ', userCredential.user);
    return userCredential.user;
  } catch (error) {
    console.error('Login error: ', error.message);
    throw new Error(error.message);
  }
};

// Logout function
export const logout = async () => {
  try {
    await signOut(auth);
    console.log('User logged out');
  } catch (error) {
    console.error('Logout error: ', error.message);
    throw new Error(error.message);
  }
};
