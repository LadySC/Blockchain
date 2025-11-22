import React from 'react';
import { Search, QrCode, Shield } from 'lucide-react';

export default function VerifyPublic() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="w-full p-6 flex justify-between items-center">
        <div className="flex items-center gap-2 font-bold text-xl text-gray-800">
          <span className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">U</span> 
          UTP Certificados
        </div>
        <nav className="flex gap-6 text-sm font-medium text-gray-500">
            <a href="#">Dashboard</a>
            <a href="#" className="text-red-600">Verificar</a>
            <a href="#">Emisión</a>
        </nav>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center px-4 text-center max-w-2xl mx-auto w-full">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Verificar Certificado</h1>
        <p className="text-gray-500 mb-8 max-w-md">
          Introduzca un ID de certificado para validar su autenticidad en la Blockchain
        </p>

        <div className="w-full max-w-md space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
            <input 
              type="text" 
              placeholder="Ingresar ID del Certificado" 
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg bg-white focus:ring-2 focus:ring-red-500 focus:outline-none"
            />
          </div>

          <div className="relative flex py-2 items-center">
            <div className="flex-grow border-t border-gray-200"></div>
            <span className="flex-shrink-0 mx-4 text-gray-400 text-xs">o</span>
            <div className="flex-grow border-t border-gray-200"></div>
          </div>

          <button className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-3 rounded-lg flex items-center justify-center gap-2 transition-colors">
            <QrCode className="w-5 h-5" /> Escanear Código QR
          </button>

          <div className="pt-8 flex items-center justify-center gap-2 text-gray-400 text-sm">
            <Shield className="w-4 h-4" /> Secured by Blockchain
          </div>
        </div>
      </main>
    </div>
  );
}