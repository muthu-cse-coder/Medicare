import { useState } from 'react';
import { Plus, Edit2, Trash2, Eye, Search } from 'lucide-react';
import { doctors } from '../services/mockData';
import DoctorModal from '../components/admin/DoctorModal';

const DoctorManagement = () => {
  const [doctorList, setDoctorList] = useState(doctors);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterSpec, setFilterSpec] = useState('all');
  const [modalOpen, setModalOpen] = useState(false);
  const [editingDoctor, setEditingDoctor] = useState(null);
  const [viewingDoctor, setViewingDoctor] = useState(null);

 
  const filteredDoctors = doctorList.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doctor.hospital.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpec = filterSpec === 'all' || doctor.specialization === filterSpec;
    return matchesSearch && matchesSpec;
  });

  // Get unique specializations
  const specializations = [...new Set(doctors.map(d => d.specialization))];

  const handleAddDoctor = () => {
    setEditingDoctor(null);
    setModalOpen(true);
  };

  const handleEditDoctor = (doctor) => {
    setEditingDoctor(doctor);
    setModalOpen(true);
  };

  const handleDeleteDoctor = (doctorId) => {
    if (window.confirm('Are you sure you want to delete this doctor?')) {
      setDoctorList(doctorList.filter(d => d.id !== doctorId));
    }
  };

  const handleViewDoctor = (doctor) => {
    setViewingDoctor(doctor);
  };

  const handleSaveDoctor = (doctorData) => {
    if (editingDoctor) {
      // Update existing doctor
      setDoctorList(doctorList.map(d => 
        d.id === editingDoctor.id ? { ...d, ...doctorData } : d
      ));
    } else {
      // Add new doctor
      const newDoctor = {
        ...doctorData,
        id: Math.max(...doctorList.map(d => d.id)) + 1,
        image: `https://api.dicebear.com/7.x/avataaars/svg?seed=${doctorData.name}`,
        rating: 4.5,
        reviews: 0
      };
      setDoctorList([...doctorList, newDoctor]);
    }
    setModalOpen(false);
  };

  return (
    <div>
      <div className="admin-table-container">
        <div className="admin-table-header">
          <h2 className="admin-table-title">Doctor Management</h2>
          <div className="admin-table-actions">
            <div style={{ position: 'relative' }}>
              <Search size={18} style={{ 
                position: 'absolute', 
                left: '12px', 
                top: '50%', 
                transform: 'translateY(-50%)',
                color: '#9ca3af'
              }} />
              <input
                type="text"
                placeholder="Search doctors..."
                className="admin-table-filter"
                style={{ paddingLeft: '40px', width: '250px' }}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <select 
              className="admin-table-filter"
              value={filterSpec}
              onChange={(e) => setFilterSpec(e.target.value)}
            >
              <option value="all">All Specializations</option>
              {specializations.map(spec => (
                <option key={spec} value={spec}>{spec}</option>
              ))}
            </select>

            <button className="btn-add" onClick={handleAddDoctor}>
              <Plus size={18} />
              Add Doctor
            </button>
          </div>
        </div>

        <table className="admin-table">
          <thead>
            <tr>
              <th>Doctor</th>
              <th>Specialization</th>
              <th>Hospital</th>
              <th>Experience</th>
              <th>Rating</th>
              <th>Consultation Fee</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredDoctors.length === 0 ? (
              <tr>
                <td colSpan="7" style={{ textAlign: 'center', padding: '40px', color: '#9ca3af' }}>
                  No doctors found
                </td>
              </tr>
            ) : (
              filteredDoctors.map((doctor) => (
                <tr key={doctor.id}>
                  <td>
                    <div className="patient-info">
                      <img 
                        src={doctor.image} 
                        alt={doctor.name}
                        style={{ 
                          width: '40px', 
                          height: '40px', 
                          borderRadius: '50%',
                          objectFit: 'cover'
                        }}
                      />
                      <div className="patient-details">
                        <div className="patient-name">{doctor.name}</div>
                        {/* <div className="patient-spec">{doctor.education}</div> */}
                      </div>
                    </div>
                  </td>
                  <td>
                    <span style={{ 
                      background: '#eff6ff', 
                      color: '#2563eb',
                      padding: '4px 12px',
                      borderRadius: '12px',
                      fontSize: '13px',
                      fontWeight: '500'
                    }}>
                      {doctor.specialization}
                    </span>
                  </td>
                  <td>{doctor.hospital}</td>
                  <td>{doctor.experience} years</td>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <span style={{ color: '#fbbf24' }}>⭐</span>
                      <span style={{ fontWeight: '600' }}>{doctor.rating}</span>
                      <span style={{ fontSize: '12px', color: '#9ca3af' }}>
                        ({doctor.reviews})
                      </span>
                    </div>
                  </td>
                  <td style={{ fontWeight: '600', color: '#16a34a' }}>
                    ₹{doctor.consultationFee}
                  </td>
                  <td>
                    <div className="table-actions">
                      <button 
                        className="btn-icon"
                        onClick={() => handleViewDoctor(doctor)}
                        title="View Details"
                      >
                        <Eye size={18} />
                      </button>
                      <button 
                        className="btn-icon edit"
                        onClick={() => handleEditDoctor(doctor)}
                        title="Edit"
                      >
                        <Edit2 size={18} />
                      </button>
                      <button 
                        className="btn-icon delete"
                        onClick={() => handleDeleteDoctor(doctor.id)}
                        title="Delete"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Add/Edit Modal */}
      {modalOpen && (
        <DoctorModal
          doctor={editingDoctor}
          onClose={() => setModalOpen(false)}
          onSave={handleSaveDoctor}
        />
      )}

      {/* View Modal */}
      {viewingDoctor && (
        <DoctorViewModal
          doctor={viewingDoctor}
          onClose={() => setViewingDoctor(null)}
        />
      )}
    </div>
  );
};

// View Doctor Modal
const DoctorViewModal = ({ doctor, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content" 
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '600px' }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
          <img 
            src={doctor.image} 
            alt={doctor.name}
            style={{ 
              width: '80px', 
              height: '80px', 
              borderRadius: '12px',
              objectFit: 'cover'
            }}
          />
          <div>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '4px' }}>
              {doctor.name}
            </h2>
            <p style={{ color: '#2563eb', fontWeight: '600' }}>{doctor.specialization}</p>
            <p style={{ fontSize: '14px', color: '#6b7280' }}>{doctor.hospital}</p>
          </div>
        </div>

        <div className="modal-details">
          <div className="modal-detail-row">
            <span className="modal-detail-label">Experience</span>
            <span className="modal-detail-value">{doctor.experience} years</span>
          </div>
          <div className="modal-detail-row">
            <span className="modal-detail-label">Rating</span>
            <span className="modal-detail-value">⭐ {doctor.rating} ({doctor.reviews} reviews)</span>
          </div>
          <div className="modal-detail-row">
            <span className="modal-detail-label">Consultation Fee</span>
            <span className="modal-detail-value" style={{ color: '#16a34a', fontWeight: 'bold' }}>
              ₹{doctor.consultationFee}
            </span>
          </div>
          <div className="modal-detail-row">
            <span className="modal-detail-label">Education</span>
            <span className="modal-detail-value">{doctor.education}</span>
          </div>
          <div className="modal-detail-row">
            <span className="modal-detail-label">Languages</span>
            <span className="modal-detail-value">{doctor.languages?.join(', ')}</span>
          </div>
        </div>

        <div style={{ marginTop: '20px' }}>
          <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>About</h3>
          <p style={{ color: '#6b7280', lineHeight: '1.6' }}>{doctor.about}</p>
        </div>

        <button 
          onClick={onClose}
          className="modal-btn modal-btn-primary"
          style={{ marginTop: '24px', width: '100%' }}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default DoctorManagement;