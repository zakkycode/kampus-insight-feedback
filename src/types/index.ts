
export interface User {
  id: string;
  name: string;
  email: string;
  role: 'akademik' | 'dosen' | 'mahasiswa';
  avatar?: string;
}

export interface Dosen {
  id: string;
  name: string;
  email: string;
  nip: string;
  faculty: string;
  department: string;
  avatar?: string;
}

export interface Mahasiswa {
  id: string;
  name: string;
  nim: string;
  faculty: string;
  department: string;
  semester: number;
}

export interface MataKuliah {
  id: string;
  name: string;
  code: string;
  credits: number;
  semester: number;
  dosenId: string;
}

export interface Evaluation {
  id: string;
  mahasiswaId: string;
  dosenId: string;
  mataKuliahId: string;
  scores: {
    teaching_quality: number;
    communication: number;
    punctuality: number;
    material_mastery: number;
    assignment_feedback: number;
  };
  comments: string;
  createdAt: string;
}

export interface EvaluationSummary {
  dosenId: string;
  averageScore: number;
  totalEvaluations: number;
  scores: {
    teaching_quality: number;
    communication: number;
    punctuality: number;
    material_mastery: number;
    assignment_feedback: number;
  };
}
