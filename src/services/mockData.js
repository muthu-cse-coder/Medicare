import doctorImg from '../assets/doctor.jpg';

export const specializations = [
  {
    id: 1,
    name: 'General Medicine',
    description: 'Fever, cold, cough, diabetes, BP treatment',
    icon: '🤒',
    doctorCount: 22
  },
  {
    id: 2,
    name: 'Radiology / Scanning',
    description: 'X-Ray, CT Scan, MRI, Ultrasound services',
    icon: '🖥️',
    doctorCount: 6
  },
  {
    id: 3,
    name: 'ENT',
    description: 'Ear, Nose, Throat specialists',
    icon: '👂',
    doctorCount: 9
  },
  {
    id: 4,
    name: 'Physiotherapy',
    description: 'Pain management and physical rehabilitation',
    icon: '🧍‍♂️',
    doctorCount: 7
  },
  {
    id: 5,
    name: 'Cardiology',
    description: 'Heart and cardiovascular system specialists',
    icon: '❤️',
    doctorCount: 15
  },
  {
    id: 6,
    name: 'Neurology',
    description: 'Brain and nervous system specialists',
    icon: '🧠',
    doctorCount: 12
  },
  {
    id: 7,
    name: 'Orthopedics',
    description: 'Bone and joint specialists',
    icon: '🦴',
    doctorCount: 18
  },
  {
    id: 8,
    name: 'Pediatrics',
    description: 'Child healthcare specialists',
    icon: '👶',
    doctorCount: 20
  },
  {
    id: 9,
    name: 'Dermatology',
    description: 'Skin care specialists',
    icon: '🔬',
    doctorCount: 10
  },
  {
    id: 10,
    name: 'Ophthalmology',
    description: 'Eye care specialists',
    icon: '👁️',
    doctorCount: 8
  },
  {
    id: 11,
    name: 'Dentistry',
    description: 'Dental care specialists',
    icon: '🦷',
    doctorCount: 14
  },
  {
    id: 12,
    name: 'Gynecology',
    description: 'Women health specialists',
    icon: '🩺',
    doctorCount: 16
  },

 
  
];


export const doctors = [

 
  {
    id: 1,
    name: 'Dr. Rajesh Kumar',
    specialization: 'General Medicine',
    specializationId: 1,
    hospital: 'Apollo Hospital, Chennai',
    experience: 15,
    rating: 4.8,
    reviews: 234,
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=RajeshKumar',
    consultationFee: 800,
    about: 'Experienced General Medicine specialist treating fever, diabetes, BP, and respiratory issues.',
    education: ['MBBS - Government Medical College, Chennai', 'MD General Medicine - Chennai Medical University'],
    languages: ['English', 'Tamil'],
    availability: {
      monday: ['09:00','10:00','11:00','14:00'],
      tuesday: ['09:00','10:00','11:00','14:00'],
      wednesday: ['09:00','10:00','11:00','14:00'],
      thursday: ['09:00','10:00','11:00','14:00'],
      friday: ['09:00','10:00','11:00','14:00'],
      saturday: ['09:00','10:00','11:00'],
      sunday: []
    }
  },
  {
    id: 2,
    name: 'Dr. Meena Iyer',
    specialization: 'General Medicine',
    specializationId: 1,
    hospital: 'Fortis Malar, Chennai',
    experience: 12,
    rating: 4.6,
    reviews: 180,
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MeenaIyer',
    consultationFee: 700,
    about: 'Specialist in chronic disease management including diabetes and hypertension.',
    education: ['MBBS - Madras Medical College', 'MD General Medicine - Fortis Medical College'],
    languages: ['English', 'Tamil', 'Hindi'],
    availability: {
      monday: ['10:00','11:00','12:00'],
      tuesday: ['10:00','11:00','12:00'],
      wednesday: ['10:00','11:00','12:00'],
      thursday: ['10:00','11:00','12:00'],
      friday: ['10:00','11:00','12:00'],
      saturday: ['10:00','11:00'],
      sunday: []
    }
  },
  {
    id: 3,
    name: 'Dr. Suresh R',
    specialization: 'General Medicine',
    specializationId: 1,
    hospital: 'MIOT Hospital, Chennai',
    experience: 18,
    rating: 4.9,
    reviews: 320,
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=SureshR',
    consultationFee: 900,
    about: 'Expert in internal medicine with a focus on complex adult medical cases.',
    education: ['MBBS - Stanley Medical College', 'MD General Medicine - MIOT University'],
    languages: ['English', 'Tamil'],
    availability: {
      monday: ['09:00','10:00','11:00','13:00','14:00'],
      tuesday: ['09:00','10:00','11:00','13:00','14:00'],
      wednesday: ['09:00','10:00','11:00','13:00','14:00'],
      thursday: ['09:00','10:00','11:00','13:00','14:00'],
      friday: ['09:00','10:00','11:00','13:00','14:00'],
      saturday: ['09:00','10:00'],
      sunday: []
    }
  },
  {
    id: 4,
    name: 'Dr. Anita Menon',
    specialization: 'General Medicine',
    specializationId: 1,
    hospital: 'Apollo Clinic, Chennai',
    experience: 10,
    rating: 4.5,
    reviews: 150,
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=AnitaMenon',
    consultationFee: 650,
    about: 'Provides preventive healthcare and treats common infections, diabetes, and BP issues.',
    education: ['MBBS - Madras Medical College', 'Diploma in Diabetology - Chennai Medical University'],
    languages: ['English', 'Tamil'],
    availability: {
      monday: ['09:00','10:00','11:00'],
      tuesday: ['09:00','10:00','11:00'],
      wednesday: ['09:00','10:00','11:00'],
      thursday: ['09:00','10:00','11:00'],
      friday: ['09:00','10:00','11:00'],
      saturday: ['09:00','10:00'],
      sunday: []
    }
  },
  {
    id: 5,
    name: 'Dr. Prakash V',
    specialization: 'General Medicine',
    specializationId: 1,
    hospital: 'Fortis Malar, Chennai',
    experience: 14,
    rating: 4.7,
    reviews: 210,
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=PrakashV',
    consultationFee: 750,
    about: 'Focused on adult internal medicine, including hypertension and respiratory diseases.',
    education: ['MBBS - Stanley Medical College', 'MD General Medicine - Fortis Malar'],
    languages: ['English', 'Tamil', 'Hindi'],
    availability: {
      monday: ['09:00','10:00','11:00','14:00'],
      tuesday: ['09:00','10:00','11:00','14:00'],
      wednesday: ['09:00','10:00','11:00','14:00'],
      thursday: ['09:00','10:00','11:00','14:00'],
      friday: ['09:00','10:00','11:00','14:00'],
      saturday: ['09:00','10:00'],
      sunday: []
    }
  },
  {
    id: 6,
    name: 'Dr. Lakshmi N',
    specialization: 'General Medicine',
    specializationId: 1,
    hospital: 'Apollo Hospital, Chennai',
    experience: 13,
    rating: 4.6,
    reviews: 190,
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=LakshmiN',
    consultationFee: 720,
    about: 'Expert in managing chronic conditions and general adult health care.',
    education: ['MBBS - Madras Medical College', 'MD General Medicine - Apollo Hospital'],
    languages: ['English', 'Tamil'],
    availability: {
      monday: ['10:00','11:00','12:00','14:00'],
      tuesday: ['10:00','11:00','12:00','14:00'],
      wednesday: ['10:00','11:00','12:00','14:00'],
      thursday: ['10:00','11:00','12:00','14:00'],
      friday: ['10:00','11:00','12:00','14:00'],
      saturday: ['10:00','11:00'],
      sunday: []
    }
  },
  {
    id: 7,
    name: 'Dr. Arjun R',
    specialization: 'General Medicine',
    specializationId: 1,
    hospital: 'MIOT Hospital, Chennai',
    experience: 11,
    rating: 4.5,
    reviews: 170,
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ArjunR',
    consultationFee: 680,
    about: 'Treats infectious diseases, diabetes, and cardiovascular conditions.',
    education: ['MBBS - Stanley Medical College', 'MD General Medicine - MIOT Hospital'],
    languages: ['English', 'Tamil'],
    availability: {
      monday: ['09:00','10:00','11:00','13:00'],
      tuesday: ['09:00','10:00','11:00','13:00'],
      wednesday: ['09:00','10:00','11:00','13:00'],
      thursday: ['09:00','10:00','11:00','13:00'],
      friday: ['09:00','10:00','11:00','13:00'],
      saturday: ['09:00','10:00'],
      sunday: []
    }
  },
  {
    id: 8,
    name: 'Dr. Kavitha S',
    specialization: 'General Medicine',
    specializationId: 1,
    hospital: 'Fortis Malar, Chennai',
    experience: 16,
    rating: 4.8,
    reviews: 220,
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=KavithaS',
    consultationFee: 800,
    about: 'Experienced in adult medicine, preventive care, and routine checkups.',
    education: ['MBBS - Madras Medical College', 'MD General Medicine - Fortis Malar'],
    languages: ['English', 'Tamil'],
    availability: {
      monday: ['09:00','10:00','11:00','14:00'],
      tuesday: ['09:00','10:00','11:00','14:00'],
      wednesday: ['09:00','10:00','11:00','14:00'],
      thursday: ['09:00','10:00','11:00','14:00'],
      friday: ['09:00','10:00','11:00','14:00'],
      saturday: ['09:00','10:00'],
      sunday: []
    }
  },
  {
    id: 9,
    name: 'Dr. Nisha R',
    specialization: 'General Medicine',
    specializationId: 1,
    hospital: 'Apollo Clinic, Chennai',
    experience: 12,
    rating: 4.6,
    reviews: 185,
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=NishaR',
    consultationFee: 700,
    about: 'Focus on preventive healthcare, respiratory illnesses, and chronic diseases.',
    education: ['MBBS - Stanley Medical College', 'MD General Medicine - Apollo Clinic'],
    languages: ['English', 'Tamil'],
    availability: {
      monday: ['09:00','10:00','11:00','14:00'],
      tuesday: ['09:00','10:00','11:00','14:00'],
      wednesday: ['09:00','10:00','11:00','14:00'],
      thursday: ['09:00','10:00','11:00','14:00'],
      friday: ['09:00','10:00','11:00','14:00'],
      saturday: ['09:00','10:00'],
      sunday: []
    }
  },
  {
    id: 10,
    name: 'Dr. Rohit P',
    specialization: 'General Medicine',
    specializationId: 1,
    hospital: 'MIOT Hospital, Chennai',
    experience: 14,
    rating: 4.7,
    reviews: 200,
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=RohitP',
    consultationFee: 750,
    about: 'Specializes in acute and chronic adult medical conditions with patient-centric care.',
    education: ['MBBS - Madras Medical College', 'MD General Medicine - MIOT Hospital'],
    languages: ['English', 'Tamil'],
    availability: {
      monday: ['09:00','10:00','11:00','14:00'],
      tuesday: ['09:00','10:00','11:00','14:00'],
      wednesday: ['09:00','10:00','11:00','14:00'],
      thursday: ['09:00','10:00','11:00','14:00'],
      friday: ['09:00','10:00','11:00','14:00'],
      saturday: ['09:00','10:00'],
      sunday: []
    }
  },


 



  ...Array.from({length:10}, (_,i)=>({
    id:11+i,
    name:`Dr. Neurology Doctor ${i+1}`,
    specialization:'Neurology',
    specializationId:2,
    hospital:'Fortis Malar, Chennai',
    experience:8+i,
    rating:4.5 + (i%5)*0.1,
    reviews:100 + i*10,
    image:`https://api.dicebear.com/7.x/avataaars/svg?seed=NeurologyDoctor${i+1}`,
    consultationFee:600 + i*50,
 
    languages:['English','Tamil'],
    availability:{
      monday:['10:00','11:00','14:00','15:00'],
      tuesday:['10:00','11:00','14:00','15:00'],
      wednesday:['10:00','11:00','14:00','15:00'],
      thursday:['10:00','11:00','14:00','15:00'],
      friday:['10:00','11:00','14:00','15:00'],
      saturday:['10:00','11:00'],
      sunday:[]
      
    }
  
  })),

 
  ...Array.from({length:10}, (_,i)=>({
    id:21+i,
    name:`Dr. Orthopedic Doctor ${i+1}`,
    specialization:'Orthopedics',
    specializationId:3,
    hospital:'MIOT Hospital, Chennai',
    experience:7+i,
    rating:4.4 + (i%5)*0.1,
    reviews:90 + i*10,
    image:`https://api.dicebear.com/7.x/avataaars/svg?seed=OrthopedicDoctor${i+1}`,
    consultationFee:550 + i*50,
    languages:['English','Tamil'],
    availability:{
      monday:['09:00','10:00','11:00','15:00'],
      tuesday:['09:00','10:00','11:00','15:00'],
      wednesday:['09:00','10:00','11:00','15:00'],
      thursday:['09:00','10:00','11:00','15:00'],
      friday:['09:00','10:00','11:00','15:00'],
      saturday:['09:00','10:00'],
      sunday:[]
    }
  })),

 
  ...Array.from({ length: 10 }, (_, i) => ({
    id: 100 + i,
    name: `Dr. Physiotherapy ${i + 1}`,
    specialization: 'Physiotherapy',
    specializationId: 4,
    hospital: 'Physio Care Clinic, Chennai',
    experience: 5 + i,
    rating: 4.4 + (i % 5) * 0.1,
    reviews: 50 + i * 10,
    image: `https://api.dicebear.com/7.x/avataaars/svg?seed=Physio${i + 1}`,
    consultationFee: 400 + i * 50,
    languages: ['English', 'Tamil'],
    availability: {
      monday: ['09:00','10:00','11:00'],
      tuesday: ['09:00','10:00','11:00'],
      wednesday: ['09:00','10:00','11:00'],
      thursday: ['09:00','10:00','11:00'],
      friday: ['09:00','10:00','11:00'],
      saturday: ['09:00','10:00'],
      sunday: []
    }
  })),

 
  ...Array.from({ length: 10 }, (_, i) => ({
    id: 110 + i,
    name: `Dr. Cardiology ${i + 1}`,
    specialization: 'Cardiology',
    specializationId: 5,
    hospital: 'Heart Care Hospital, Chennai',
    experience: 8 + i,
    rating: 4.5 + (i % 5) * 0.1,
    reviews: 100 + i * 10,
    image: `https://api.dicebear.com/7.x/avataaars/svg?seed=Cardio${i + 1}`,
    consultationFee: 600 + i * 50,
    languages: ['English', 'Tamil'],
    availability: {
      monday: ['09:00','10:00','11:00','14:00'],
      tuesday: ['09:00','10:00','11:00','14:00'],
      wednesday: ['09:00','10:00','11:00','14:00'],
      thursday: ['09:00','10:00','11:00','14:00'],
      friday: ['09:00','10:00','11:00','14:00'],
      saturday: ['09:00','10:00'],
      sunday: []
    }
  })),

 
  ...Array.from({ length: 10 }, (_, i) => ({
    id: 120 + i,
    name: `Dr. Neurology ${i + 1}`,
    specialization: 'Neurology',
    specializationId: 6,
    hospital: 'Neuro Care, Chennai',
    experience: 7 + i,
    rating: 4.5 + (i % 5) * 0.1,
    reviews: 80 + i * 10,
    image: `https://api.dicebear.com/7.x/avataaars/svg?seed=Neuro${i + 1}`,
    consultationFee: 650 + i * 50,
    languages: ['English', 'Tamil'],
    availability: {
      monday: ['10:00','11:00','14:00','15:00'],
      tuesday: ['10:00','11:00','14:00','15:00'],
      wednesday: ['10:00','11:00','14:00','15:00'],
      thursday: ['10:00','11:00','14:00','15:00'],
      friday: ['10:00','11:00','14:00','15:00'],
      saturday: ['10:00','11:00'],
      sunday: []
    }
  })),

  ...Array.from({ length: 10 }, (_, i) => ({
    id: 130 + i,
    name: `Dr. Orthopedics ${i + 1}`,
    specialization: 'Orthopedics',
    specializationId: 7,
    hospital: 'Bone & Joint Clinic, Chennai',
    experience: 6 + i,
    rating: 4.4 + (i % 5) * 0.1,
    reviews: 70 + i * 10,
    image: `https://api.dicebear.com/7.x/avataaars/svg?seed=Ortho${i + 1}`,
    consultationFee: 550 + i * 50,
    languages: ['English', 'Tamil'],
    availability: {
      monday: ['09:00','10:00','11:00','15:00'],
      tuesday: ['09:00','10:00','11:00','15:00'],
      wednesday: ['09:00','10:00','11:00','15:00'],
      thursday: ['09:00','10:00','11:00','15:00'],
      friday: ['09:00','10:00','11:00','15:00'],
      saturday: ['09:00','10:00'],
      sunday: []
    }
  })),


  ...Array.from({ length: 10 }, (_, i) => ({
    id: 140 + i,
    name: `Dr. Pediatrics ${i + 1}`,
    specialization: 'Pediatrics',
    specializationId: 8,
    hospital: 'Children Care, Chennai',
    experience: 5 + i,
    rating: 4.5 + (i % 5) * 0.1,
    reviews: 60 + i * 10,
    image: `https://api.dicebear.com/7.x/avataaars/svg?seed=Pedia${i + 1}`,
    consultationFee: 500 + i * 50,
    languages: ['English', 'Tamil'],
    availability: {
      monday: ['09:00','10:00','11:00','14:00'],
      tuesday: ['09:00','10:00','11:00','14:00'],
      wednesday: ['09:00','10:00','11:00','14:00'],
      thursday: ['09:00','10:00','11:00','14:00'],
      friday: ['09:00','10:00','11:00','14:00'],
      saturday: ['09:00','10:00','11:00'],
      sunday: []
    }
  })),

 
  ...Array.from({ length: 10 }, (_, i) => ({
    id: 150 + i,
    name: `Dr. Dermatology ${i + 1}`,
    specialization: 'Dermatology',
    specializationId: 9,
    hospital: 'Skin Care Clinic, Chennai',
    experience: 6 + i,
    rating: 4.4 + (i % 5) * 0.1,
    reviews: 50 + i * 10,
    image: `https://api.dicebear.com/7.x/avataaars/svg?seed=Derm${i + 1}`,
    consultationFee: 550 + i * 50,
    languages: ['English', 'Tamil'],
    availability: {
      monday: ['10:00','11:00','14:00'],
      tuesday: ['10:00','11:00','14:00'],
      wednesday: ['10:00','11:00','14:00'],
      thursday: ['10:00','11:00','14:00'],
      friday: ['10:00','11:00','14:00'],
      saturday: ['10:00','11:00'],
      sunday: []
    }
  })),

 
  ...Array.from({ length: 10 }, (_, i) => ({
    id: 160 + i,
    name: `Dr. Ophthalmology ${i + 1}`,
    specialization: 'Ophthalmology',
    specializationId: 10,
    hospital: 'Eye Care Centre, Chennai',
    experience: 7 + i,
    rating: 4.5 + (i % 5) * 0.1,
    reviews: 60 + i * 10,
    image: `https://api.dicebear.com/7.x/avataaars/svg?seed=Eye${i + 1}`,
    consultationFee: 600 + i * 50,
    languages: ['English', 'Tamil'],
    availability: {
      monday: ['09:00','10:00','11:00'],
      tuesday: ['09:00','10:00','11:00'],
      wednesday: ['09:00','10:00','11:00'],
      thursday: ['09:00','10:00','11:00'],
      friday: ['09:00','10:00','11:00'],
      saturday: ['09:00','10:00'],
      sunday: []
    }
  })),

  // ================= DENTISTRY (ID:11) =================
  ...Array.from({ length: 10 }, (_, i) => ({
    id: 170 + i,
    name: `Dr. Dentistry ${i + 1}`,
    specialization: 'Dentistry',
    specializationId: 11,
    hospital: 'Dental Care Clinic, Chennai',
    experience: 5 + i,
    rating: 4.5 + (i % 5) * 0.1,
    reviews: 50 + i * 10,
    image: `https://api.dicebear.com/7.x/avataaars/svg?seed=Dent${i + 1}`,
    consultationFee: 500 + i * 50,
    languages: ['English', 'Tamil'],
    availability: {
      monday: ['09:00','10:00','11:00'],
      tuesday: ['09:00','10:00','11:00'],
      wednesday: ['09:00','10:00','11:00'],
      thursday: ['09:00','10:00','11:00'],
      friday: ['09:00','10:00','11:00'],
      saturday: ['09:00','10:00'],
      sunday: []
    }
  })),

  // ================= GYNECOLOGY (ID:12) =================
  ...Array.from({ length: 10 }, (_, i) => ({
    id: 180 + i,
    name: `Dr. Gynecology ${i + 1}`,
    specialization: 'Gynecology',
    specializationId: 12,
    hospital: 'Women Care Hospital, Chennai',
    experience: 6 + i,
    rating: 4.5 + (i % 5) * 0.1,
    reviews: 60 + i * 10,
    image: `https://api.dicebear.com/7.x/avataaars/svg?seed=Gyn${i + 1}`,
    consultationFee: 600 + i * 50,
    languages: ['English', 'Tamil'],
    availability: {
      monday: ['09:00','10:00','11:00','14:00'],
      tuesday: ['09:00','10:00','11:00','14:00'],
      wednesday: ['09:00','10:00','11:00','14:00'],
      thursday: ['09:00','10:00','11:00','14:00'],
      friday: ['09:00','10:00','11:00','14:00'],
      saturday: ['09:00','10:00','11:00'],
      sunday: []
    }
  }))

  


];


export const getDoctorsBySpecialization = (specializationId) => {
  return doctors.filter(doc => doc.specializationId === parseInt(specializationId));
};

export const getDoctorById = (id) => {
  return doctors.find(doc => doc.id === parseInt(id));
};

export const getAvailableSlots = (doctorId, date) => {
  const doctor = getDoctorById(doctorId);
  if (!doctor) return [];
  
  const dayName = new Date(date).toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();
  return doctor.availability[dayName] || [];
};

export const adminUser = {
  id: 1,
  name: 'Admin User',
  email: 'muthu@gmail.com',
  password: 'admin123',
  role: 'admin'
};

export const dashboardStats = {
  totalDoctors: 24,
  totalPatients: 1247,
  totalAppointments: 356,
  todayAppointments: 18,
  revenue: 284500,
  pendingAppointments: 12
};

export const recentAppointments = [
  {
    id: 1,
    patientName: 'John Doe',
    doctorName: 'Dr. Rajesh Kumar',
    specialization: 'Cardiology',
    date: '2026-01-28',
    time: '10:00 AM',
    status: 'confirmed',
    fee: 800
  },
  {
    id: 2,
    patientName: 'Sarah Johnson',
    doctorName: 'Dr. Priya Sharma',
    specialization: 'Neurology',
    date: '2026-01-28',
    time: '11:00 AM',
    status: 'pending',
    fee: 900
  },
  {
    id: 3,
    patientName: 'Mike Chen',
    doctorName: 'Dr. Arun Menon',
    specialization: 'Orthopedics',
    date: '2026-01-28',
    time: '02:00 PM',
    status: 'confirmed',
    fee: 750
  },
  {
    id: 4,
    patientName: 'Emily Brown',
    doctorName: 'Dr. Lakshmi Iyer',
    specialization: 'Pediatrics',
    date: '2026-01-28',
    time: '03:00 PM',
    status: 'completed',
    fee: 600
  },
  {
    id: 5,
    patientName: 'David Wilson',
    doctorName: 'Dr. Vikram Patel',
    specialization: 'Dermatology',
    date: '2026-01-29',
    time: '09:00 AM',
    status: 'pending',
    fee: 700
  }
];

export const appointmentsByMonth = [
  { month: 'Jan', appointments: 45 },
  { month: 'Feb', appointments: 52 },
  { month: 'Mar', appointments: 48 },
  { month: 'Apr', appointments: 61 },
  { month: 'May', appointments: 55 },
  { month: 'Jun', appointments: 67 }
];

export const specializationDistribution = [
  { name: 'Cardiology', value: 85, color: '#3b82f6' },
  { name: 'Neurology', value: 65, color: '#8b5cf6' },
  { name: 'Orthopedics', value: 72, color: '#10b981' },
  { name: 'Pediatrics', value: 58, color: '#f59e0b' },
  { name: 'Dermatology', value: 45, color: '#ef4444' },
  { name: 'Others', value: 31, color: '#6b7280' }
];

export const allAppointments = [
  ...recentAppointments,
  {
    id: 6,
    patientName: 'Lisa Anderson',
    doctorName: 'Dr. Anitha Reddy',
    specialization: 'Ophthalmology',
    date: '2026-01-29',
    time: '10:00 AM',
    status: 'confirmed',
    fee: 850
  },
  {
    id: 7,
    patientName: 'Robert Taylor',
    doctorName: 'Dr. Rajesh Kumar',
    specialization: 'Cardiology',
    date: '2026-01-29',
    time: '11:00 AM',
    status: 'pending',
    fee: 800
  },
  {
    id: 8,
    patientName: 'Jennifer Lee',
    doctorName: 'Dr. Priya Sharma',
    specialization: 'Neurology',
    date: '2026-01-30',
    time: '09:00 AM',
    status: 'confirmed',
    fee: 900
  }
];


// Existing code-க்கு கீழே add செய்யுங்கள்

export const patients = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+91 9876543210',
    age: 45,
    gender: 'Male',
    bloodGroup: 'O+',
    address: '123 Main Street, Chennai',
    registeredDate: '2025-01-15',
    totalAppointments: 8,
    lastVisit: '2026-01-28',
    status: 'active'
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    email: 'sarah.j@example.com',
    phone: '+91 9876543211',
    age: 32,
    gender: 'Female',
    bloodGroup: 'A+',
    address: '456 Park Avenue, Chennai',
    registeredDate: '2025-03-20',
    totalAppointments: 12,
    lastVisit: '2026-01-27',
    status: 'active'
  },
  {
    id: 3,
    name: 'Mike Chen',
    email: 'mike.chen@example.com',
    phone: '+91 9876543212',
    age: 28,
    gender: 'Male',
    bloodGroup: 'B+',
    address: '789 Lake Road, Chennai',
    registeredDate: '2025-06-10',
    totalAppointments: 5,
    lastVisit: '2026-01-20',
    status: 'active'
  },
  {
    id: 4,
    name: 'Emily Brown',
    email: 'emily.b@example.com',
    phone: '+91 9876543213',
    age: 38,
    gender: 'Female',
    bloodGroup: 'AB+',
    address: '321 Beach Street, Chennai',
    registeredDate: '2025-02-14',
    totalAppointments: 15,
    lastVisit: '2026-01-25',
    status: 'active'
  },
  {
    id: 5,
    name: 'David Wilson',
    email: 'david.w@example.com',
    phone: '+91 9876543214',
    age: 52,
    gender: 'Male',
    bloodGroup: 'O-',
    address: '654 Hill View, Chennai',
    registeredDate: '2024-11-05',
    totalAppointments: 20,
    lastVisit: '2026-01-26',
    status: 'active'
  },
  {
    id: 6,
    name: 'Lisa Anderson',
    email: 'lisa.a@example.com',
    phone: '+91 9876543215',
    age: 41,
    gender: 'Female',
    bloodGroup: 'A-',
    address: '987 Garden Lane, Chennai',
    registeredDate: '2025-04-18',
    totalAppointments: 7,
    lastVisit: '2026-01-15',
    status: 'inactive'
  },
  {
    id: 7,
    name: 'Robert Taylor',
    email: 'robert.t@example.com',
    phone: '+91 9876543216',
    age: 35,
    gender: 'Male',
    bloodGroup: 'B-',
    address: '159 River Side, Chennai',
    registeredDate: '2025-07-22',
    totalAppointments: 9,
    lastVisit: '2026-01-22',
    status: 'active'
  },
  {
    id: 8,
    name: 'Jennifer Lee',
    email: 'jennifer.l@example.com',
    phone: '+91 9876543217',
    age: 29,
    gender: 'Female',
    bloodGroup: 'O+',
    address: '753 Mountain View, Chennai',
    registeredDate: '2025-09-30',
    totalAppointments: 4,
    lastVisit: '2026-01-18',
    status: 'active'
  }
];