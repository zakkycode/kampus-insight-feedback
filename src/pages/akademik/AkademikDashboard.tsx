
import React from 'react';
import { Users, GraduationCap, BookOpen, TrendingUp, Star, Clock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const AkademikDashboard: React.FC = () => {
  const stats = [
    {
      title: 'Total Dosen',
      value: '45',
      change: '+2',
      changeText: 'dari bulan lalu',
      icon: Users,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      title: 'Total Mahasiswa',
      value: '1,248',
      change: '+45',
      changeText: 'mahasiswa baru',
      icon: GraduationCap,
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      title: 'Mata Kuliah',
      value: '128',
      change: '+5',
      changeText: 'mata kuliah baru',
      icon: BookOpen,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    {
      title: 'Rata-rata Evaluasi',
      value: '4.2',
      change: '+0.3',
      changeText: 'dari semester lalu',
      icon: Star,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-100'
    }
  ];

  const recentEvaluations = [
    {
      dosen: 'Prof. Siti Nurhaliza',
      mataKuliah: 'Algoritma dan Pemrograman',
      rating: 4.5,
      evaluations: 28,
      lastUpdate: '2 jam yang lalu'
    },
    {
      dosen: 'Dr. Budi Santoso',
      mataKuliah: 'Basis Data',
      rating: 4.2,
      evaluations: 32,
      lastUpdate: '5 jam yang lalu'
    },
    {
      dosen: 'Dr. Maya Sari',
      mataKuliah: 'Rekayasa Perangkat Lunak',
      rating: 4.7,
      evaluations: 25,
      lastUpdate: '1 hari yang lalu'
    }
  ];

  const topPerformers = [
    { name: 'Dr. Maya Sari', department: 'Teknik Informatika', rating: 4.8, badge: 'Excellent' },
    { name: 'Prof. Ahmad Rahman', department: 'Sistem Informasi', rating: 4.7, badge: 'Excellent' },
    { name: 'Dr. Lisa Permata', department: 'Teknik Komputer', rating: 4.6, badge: 'Very Good' }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard Akademik</h1>
        <p className="text-gray-600 mt-2">Selamat datang di sistem evaluasi dosen</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
                  <div className="flex items-center mt-2">
                    <span className="text-sm font-medium text-green-600">{stat.change}</span>
                    <span className="text-sm text-gray-500 ml-1">{stat.changeText}</span>
                  </div>
                </div>
                <div className={`p-3 rounded-full ${stat.bgColor}`}>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Evaluations */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <TrendingUp className="h-5 w-5 mr-2" />
              Evaluasi Terbaru
            </CardTitle>
            <CardDescription>
              Daftar evaluasi yang baru diterima
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentEvaluations.map((evaluation, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">{evaluation.dosen}</h4>
                    <p className="text-sm text-gray-600">{evaluation.mataKuliah}</p>
                    <div className="flex items-center mt-2">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium ml-1">{evaluation.rating}</span>
                      <span className="text-sm text-gray-500 ml-2">({evaluation.evaluations} evaluasi)</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      {evaluation.lastUpdate}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top Performers */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Star className="h-5 w-5 mr-2" />
              Dosen Terbaik
            </CardTitle>
            <CardDescription>
              Dosen dengan rating evaluasi tertinggi
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topPerformers.map((performer, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{performer.name}</h4>
                      <p className="text-sm text-gray-600">{performer.department}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center mb-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                      <span className="font-semibold">{performer.rating}</span>
                    </div>
                    <Badge variant={performer.badge === 'Excellent' ? 'default' : 'secondary'}>
                      {performer.badge}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AkademikDashboard;
