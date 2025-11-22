import React from 'react';
import { Mail, Lock, ShieldCheck } from 'lucide-react';

export default function Login() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      {/* Header Logo */}
      <div className="absolute top-6 left-6 flex items-center gap-2">
        <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center text-white font-bold">U</div>
        <span className="font-bold text-gray-800 text-lg">UTP Credentials</span>
      </div>

      {/* Login Card */}
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full border border-gray-100">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">Iniciar Sesion</h2>
        <p className="text-center text-gray-500 text-sm mb-8">
          Accede a tu expediente académico descentralizado.
        </p>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Correo Electrónico</label>
            <div className="relative">
              <Mail className="w-5 h-5 absolute left-3 top-2.5 text-gray-400" />
              <input 
                type="email" 
                placeholder="you@utp.edu.pe" 
                className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="block text-sm font-medium text-gray-700">Contraseña</label>
              <a href="#" className="text-xs text-red-500 font-medium hover:underline">¿Olvidaste tu contraseña?</a>
            </div>
            <div className="relative">
              <Lock className="w-5 h-5 absolute left-3 top-2.5 text-gray-400" />
              <input 
                type="password" 
                placeholder="........" 
                className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
          </div>

          <button className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2 rounded-lg transition-colors">
            Iniciar sesión con correo
          </button>

          <div className="relative py-2">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="bg-white px-2 text-gray-400">o continuar con</span>
            </div>
          </div>

          <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 rounded-lg flex items-center justify-center gap-2 transition-colors">
            <span>★</span> Conectar con UTP ID
          </button>
        </form>

        <div className="mt-8 flex items-center justify-center gap-2 text-gray-400 text-xs">
          <ShieldCheck className="w-4 h-4" />
          <span>Secured by Blockchain Technology</span>
        </div>
      </div>
    </div>
  );
}