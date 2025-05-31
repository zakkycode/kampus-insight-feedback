
import React from 'react';
import { BarChart3, BookOpen, Users, TrendingUp, Star, MessageSquare } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

const DosenDashboard: React.FC = () => {
  const stats = [
    {
      title: 'Mata Kuliah Diampu',
      value: '4',
      description: 'Semester ini',
      icon: BookOpen,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      title: 'Total Mahasiswa',
      value: '156',
      description: 'Semua kelas',
      icon: Users,
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      title: 'Evaluasi Diterima',
      value: '142',
      description: '91% response rate',
      icon: BarChart3,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    {
      title: 'Rating Rata-rata',
      value: '4.5',
      description: 'Sangat baik',
      icon: Star,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-100'
    }
  ];

  const evaluationAspects = [
    { aspect: 'Kualitas Mengajar', score: 4.6, percentage: 92 },
    { aspect: 'Komunikasi', score: 4.4, percentage: 88 },
    { aspect: 'Ketepatan Waktu', score: 4.7, percentage: 94 },
    { aspect: 'Penguasaan Materi', score: 4.8, percentage: 96 },
    { aspect: 'Feedback Tugas', score: 4.2, percentage: 84 }
  ];

  const courseEvaluations = [
    {
      course: 'Algoritma dan Pemrograman',
      code: 'IF101',
      students: 45,
      evaluations: 42,
      rating: 4.6,
      trend: 'up'
    },
    {
      course: 'Struktur Data',
      code: 'IF201',
      students: 38,
      evaluations: 35,
      rating: 4.4,
      trend: 'up'
    },
    {
      course: 'Pemrograman Web',
      code: 'IF301',
      students: 40,
      evaluations: 38,
      rating: 4.7,
      trend: 'up'
    },
    {
      course: 'Machine Learning',
      code: 'IF401',
      students: 33,
      evaluations: 27,
      rating: 4.3,
      trend: 'down'
    }
  ];

  const recentComments = [
    {
      course: 'Algoritma dan Pemrograman',
      comment: 'Penjelasan sangat mudah dipahami dan contoh-contoh yang diberikan relevan.',
      rating: 5,
      date: '2 hari yang lalu'
    },
    {
      course: 'Struktur Data',
      comment: 'Materi disampaikan dengan baik, namun perlu lebih banyak latihan praktik.',
      rating: 4,
      date: '3 hari yang lalu'
    },
    {
      course: 'Pemrograman Web',
      comment: 'Dosen sangat responsif dalam menjawab pertanyaan dan memberikan feedback.',
      rating: 5,
      date: '5 hari yang lalu'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard Dosen</h1>
        <p className="text-gray-600 mt-2">Selamat datang, Prof. Siti Nurhaliza</p>
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
                  <p className="text-sm text-gray-500 mt-1">{stat.description}</p>
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
        {/* Evaluation Aspects */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <BarChart3 className="h-5 w-5 mr-2" />
              Aspek Evaluasi
            </CardTitle>
            <CardDescription>
              Breakdown nilai evaluasi berdasarkan aspek
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {evaluationAspects.map((aspect, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-700">{aspect.aspect}</span>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                      <span className="font-semibold">{aspect.score}</span>
                    </div>
                  </div>
                  <Progress value={aspect.percentage} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Course Evaluations */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <BookOpen className="h-5 w-5 mr-2" />
              Evaluasi per Mata Kuliah
            </CardTitle>
            <CardDescription>
              Rating evaluasi untuk setiap mata kuliah yang diampu
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {courseEvaluations.map((course, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">{course.course}</h4>
                    <p className="text-sm text-gray-600">{course.code}</p>
                    <p className="text-xs text-gray-500 mt-1">
                      {course.evaluations}/{course.students} evaluasi
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center mb-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                      <span className="font-semibold">{course.rating}</span>
                      {course.trend === 'up' ? (
                        <TrendingUp className="h-4 w-4 text-green-500 ml-1" />
                      ) : (
                        <TrendingUp className="h-4 w-4 text-red-500 ml-1 rotate-180" />
                      )}
                    </div>
                    <Badge variant={course.rating >= 4.5 ? 'default' : 'secondary'}>
                      {course.rating >= 4.5 ? 'Excellent' : 'Good'}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Comments */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <MessageSquare className="h-5 w-5 mr-2" />
            Komentar Terbaru
          </CardTitle>
          <CardDescription>
            Feedback terbaru dari mahasiswa
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentComments.map((comment, index) => (
              <div key={index} className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-gray-900">{comment.course}</h4>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < comment.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 text-sm mb-2">"{comment.comment}"</p>
                <p className="text-xs text-gray-500">{comment.date}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DosenDashboard;
