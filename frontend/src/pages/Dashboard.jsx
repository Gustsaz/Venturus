import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Users, Calendar, Briefcase, Home } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md p-4 flex flex-col justify-between">
        <div>
          <img src="/logo.png" alt="CPS Logo" className="h-10 mb-6" />

          <div className="space-y-4">
            <Button variant="ghost" className="w-full justify-start text-red-600">
              <Home className="mr-2" /> Menu Inicial
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Users className="mr-2" /> Minhas comunidades
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Calendar className="mr-2" /> Meus eventos
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Briefcase className="mr-2" /> Vagas de Estágio
            </Button>
          </div>
        </div>

        <Button variant="ghost" className="justify-start">
          🌙 Modo Escuro
        </Button>
      </div>

      {/* Main content */}
      <div className="flex-1 p-6 overflow-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <Input placeholder="Pesquise aqui..." className="w-96" />
          <div className="flex space-x-4">
            <Button variant="ghost">⚙️</Button>
            <Button variant="ghost">👤</Button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          {[
            {
              title: 'Etec de Heliópolis – Arquiteto Ruy Ohtake',
              image: '/etec1.png'
            },
            {
              title: 'Etec Getúlio Vargas',
              image: '/etec2.png'
            },
            {
              title: 'Etec Jorge Street',
              image: '/etec3.png'
            }
          ].map((etec, i) => (
            <Card key={i} className="p-0 overflow-hidden">
              <img src={etec.image} alt={etec.title} className="w-full h-40 object-cover" />
              <CardContent className="flex items-center justify-between p-4">
                <div className="text-sm font-medium">👥 {etec.title}</div>
                <Button variant="secondary">Entrar</Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tabs */}
        <div className="grid grid-cols-3 gap-2 mb-2">
          <Button variant="secondary">NOTIFICAÇÕES</Button>
          <Button className="bg-red-700 text-white">MINHA ETEC</Button>
          <Button className="bg-red-700 text-white">MINHA SALA</Button>
        </div>

        {/* Tab content */}
        <div className="grid grid-cols-2 gap-4">
          <Card className="h-60"></Card>
          <Card className="h-60"></Card>
        </div>
      </div>
    </div>
  );
}