import React, { useState } from 'react';
import { X } from 'lucide-react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess?: (email: string) => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose, onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="bg-white rounded-3xl w-full max-w-[400px] shadow-2xl relative overflow-hidden flex flex-col p-8 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-800 transition-colors z-20 cursor-pointer rounded-full hover:bg-slate-100"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Logo */}
        <div className="flex justify-center mb-6 mt-4">
          <img src="/cab_booking_logo.png" alt="Logo" className="h-16 w-auto object-contain" />
        </div>

        <div className="text-center mb-8">
          <h2 className="text-2xl font-black text-slate-800 tracking-tight">Welcome Back</h2>
          <p className="text-slate-500 text-sm mt-1.5 font-medium">Please log in to your account</p>
        </div>

        <form className="space-y-4" onSubmit={(e) => {
          e.preventDefault();
          if (onLoginSuccess) onLoginSuccess(email);
          else onClose();
        }}>
          {/* Email Input */}
          <div className="flex items-center border border-slate-300 rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-red-500/20 focus-within:border-red-500 transition-all bg-white">
            <input
              type="email"
              required
              placeholder="Enter Email Address"
              className="w-full px-4 py-3.5 outline-none text-[15px] text-slate-800 placeholder-slate-400 font-medium"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password Input */}
          <div className="flex items-center border border-slate-300 rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-red-500/20 focus-within:border-red-500 transition-all bg-white">
            <input
              type="password"
              required
              placeholder="Enter Password"
              className="w-full px-4 py-3.5 outline-none text-[15px] text-slate-800 placeholder-slate-400 font-medium"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#E53935] hover:bg-red-700 text-white font-bold py-3.5 rounded-xl transition-all shadow-md shadow-red-200 cursor-pointer text-[15px] tracking-wide"
          >
            LOGIN
          </button>
        </form>

        <div className="relative flex py-6 items-center">
          <div className="flex-grow border-t border-slate-200"></div>
          <span className="flex-shrink mx-4 text-[11px] text-slate-400 font-bold uppercase tracking-widest">Or continue with</span>
          <div className="flex-grow border-t border-slate-200"></div>
        </div>

        <div className="space-y-3">
          <button
            type="button"
            className="w-full py-3.5 px-4 bg-white border border-slate-200 hover:bg-slate-50 hover:border-slate-300 text-slate-700 rounded-xl font-bold text-[14px] shadow-sm transition-all flex items-center justify-center gap-3 cursor-pointer"
          >
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
            Continue with Google
          </button>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-slate-600 font-medium">
            Don't have an account? <a href="#" className="text-red-600 hover:text-red-700 font-bold hover:underline transition-colors ml-1">Sign Up</a>
          </p>
        </div>

      </div>
    </div>
  );
};
