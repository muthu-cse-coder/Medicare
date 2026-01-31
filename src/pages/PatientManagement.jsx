import { useState } from 'react';
import { Search, Eye, UserX, UserCheck, Phone, Mail, Calendar, Activity } from 'lucide-react';
import { patients as initialPatients } from '../services/mockData';
import { allAppointments } from '../services/mockData';

const PatientManagement = () => {
  const [patients, setPatients] = useState(initialPatients);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedPatient, setSelectedPatient] = useState(null);

  // Filter patients
  const filteredPatients = patients.filter(patient => {
    const matchesSearch = 
      patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.phone.includes(searchTerm);
    
    const matchesStatus = statusFilter === 'all' || patient.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  // Get status counts
  const statusCounts = {
    all: patients.length,
    active: patients.filter(p => p.status === 'active').length,
    inactive: patients.filter(p => p.status === 'inactive').length
  };

  const handleStatusToggle = (patientId) => {
    setPatients(patients.map(p =>
      p.id === patientId 
        ? { ...p, status: p.status === 'active' ? 'inactive' : 'active' }
        : p
    ));
  };

  const handleViewPatient = (patient) => {
    setSelectedPatient(patient);
  };

  return (
    <div>
      {/* Stats Cards */}
      <div className="stats-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)', marginBottom: '24px' }}>
        <div className="stat-card" style={{ cursor: 'pointer' }} onClick={() => setStatusFilter('all')}>
          <div className="stat-info">
            <h3>Total Patients</h3>
            <div className="stat-value">{statusCounts.all}</div>
          </div>
          <div className="stat-icon blue">
            <Activity size={28} />
          </div>
        </div>

        <div className="stat-card" style={{ cursor: 'pointer' }} onClick={() => setStatusFilter('active')}>
          <div className="stat-info">
            <h3>Active Patients</h3>
            <div className="stat-value">{statusCounts.active}</div>
          </div>
          <div className="stat-icon green">
            <UserCheck size={28} />
          </div>
        </div>

        <div className="stat-card" style={{ cursor: 'pointer' }} onClick={() => setStatusFilter('inactive')}>
          <div className="stat-info">
            <h3>Inactive Patients</h3>
            <div className="stat-value">{statusCounts.inactive}</div>
          </div>
          <div className="stat-icon orange">
            <UserX size={28} />
          </div>
        </div>
      </div>

      {/* Patients Table */}
      <div className="admin-table-container">
        <div className="admin-table-header">
          <h2 className="admin-table-title">Patient Management</h2>
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
                placeholder="Search patients..."
                className="admin-table-filter"
                style={{ paddingLeft: '40px', width: '300px' }}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <select 
              className="admin-table-filter"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
        </div>

        <table className="admin-table">
          <thead>
            <tr>
              <th>Patient</th>
              <th>Contact</th>
              <th>Age / Gender</th>
              <th>Blood Group</th>
              <th>Total Visits</th>
              <th>Last Visit</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredPatients.length === 0 ? (
              <tr>
                <td colSpan="8" style={{ textAlign: 'center', padding: '40px', color: '#9ca3af' }}>
                  No patients found
                </td>
              </tr>
            ) : (
              filteredPatients.map((patient) => (
                <tr key={patient.id}>
                  <td>
                    <div className="patient-info">
                      <div className="patient-avatar" style={{ 
                        background: patient.gender === 'Male' ? '#3b82f6' : '#ec4899'
                      }}>
                        {patient.name.charAt(0)}
                      </div>
                      <div className="patient-details">
                        <div className="patient-name">{patient.name}</div>
                        <div className="patient-spec">
                          Registered: {new Date(patient.registeredDate).toLocaleDateString('en-IN')}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      <div style={{ fontSize: '13px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <Mail size={14} color="#6b7280" />
                        {patient.email}
                      </div>
                      <div style={{ fontSize: '13px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <Phone size={14} color="#6b7280" />
                        {patient.phone}
                      </div>
                    </div>
                  </td>
                  <td>
                    <div>{patient.age} years</div>
                    <div style={{ fontSize: '12px', color: '#9ca3af' }}>{patient.gender}</div>
                  </td>
                  <td>
                    <span style={{ 
                      background: '#fef2f2', 
                      color: '#dc2626',
                      padding: '4px 12px',
                      borderRadius: '12px',
                      fontSize: '13px',
                      fontWeight: '600'
                    }}>
                      {patient.bloodGroup}
                    </span>
                  </td>
                  <td style={{ fontWeight: '600', fontSize: '16px' }}>
                    {patient.totalAppointments}
                  </td>
                  <td>
                    {new Date(patient.lastVisit).toLocaleDateString('en-IN', { 
                      month: 'short', 
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </td>
                  <td>
                    <button
                      onClick={() => handleStatusToggle(patient.id)}
                      className={`status-badge ${patient.status}`}
                      style={{ 
                        border: 'none',
                        cursor: 'pointer'
                      }}
                    >
                      {patient.status}
                    </button>
                  </td>
                  <td>
                    <div className="table-actions">
                      <button 
                        className="btn-icon"
                        onClick={() => handleViewPatient(patient)}
                        title="View Details"
                      >
                        <Eye size={18} />
                      </button>
                      <button 
                        className="btn-icon"
                        onClick={() => handleStatusToggle(patient.id)}
                        title={patient.status === 'active' ? 'Deactivate' : 'Activate'}
                      >
                        {patient.status === 'active' ? (
                          <UserX size={18} color="#ef4444" />
                        ) : (
                          <UserCheck size={18} color="#10b981" />
                        )}
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>

        {/* Pagination Info */}
        <div style={{ 
          padding: '16px 24px', 
          borderTop: '1px solid #e5e7eb',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{ fontSize: '14px', color: '#6b7280' }}>
            Showing {filteredPatients.length} of {patients.length} patients
          </div>
        </div>
      </div>

      {/* Patient Details Modal */}
      {selectedPatient && (
        <PatientDetailsModal
          patient={selectedPatient}
          onClose={() => setSelectedPatient(null)}
        />
      )}
    </div>
  );
};

// Patient Details Modal
const PatientDetailsModal = ({ patient, onClose }) => {
  // Get patient's appointments
  const patientAppointments = allAppointments.filter(
    apt => apt.patientName === patient.name
  ).slice(0, 5);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content" 
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '700px', maxHeight: '90vh', overflow: 'auto' }}
      >
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'flex-start',
          marginBottom: '24px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div className="patient-avatar" style={{ 
              width: '64px',
              height: '64px',
              fontSize: '24px',
              background: patient.gender === 'Male' ? '#3b82f6' : '#ec4899'
            }}>
              {patient.name.charAt(0)}
            </div>
            <div>
              <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '4px' }}>
                {patient.name}
              </h2>
              <span className={`status-badge ${patient.status}`}>
                {patient.status}
              </span>
            </div>
          </div>
          <button 
            onClick={onClose}
            style={{ 
              background: 'none', 
              border: 'none', 
              cursor: 'pointer',
              padding: '4px',
              color: '#6b7280'
            }}
          >
            ✕
          </button>
        </div>

        {/* Personal Information */}
        <div style={{ marginBottom: '24px' }}>
          <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px' }}>
            Personal Information
          </h3>
          <div className="modal-details">
            <div className="modal-detail-row">
              <span className="modal-detail-label">Email</span>
              <span className="modal-detail-value">{patient.email}</span>
            </div>
            <div className="modal-detail-row">
              <span className="modal-detail-label">Phone</span>
              <span className="modal-detail-value">{patient.phone}</span>
            </div>
            <div className="modal-detail-row">
              <span className="modal-detail-label">Age</span>
              <span className="modal-detail-value">{patient.age} years</span>
            </div>
            <div className="modal-detail-row">
              <span className="modal-detail-label">Gender</span>
              <span className="modal-detail-value">{patient.gender}</span>
            </div>
            <div className="modal-detail-row">
              <span className="modal-detail-label">Blood Group</span>
              <span className="modal-detail-value">{patient.bloodGroup}</span>
            </div>
            <div className="modal-detail-row">
              <span className="modal-detail-label">Address</span>
              <span className="modal-detail-value">{patient.address}</span>
            </div>
          </div>
        </div>

        {/* Medical History */}
        <div style={{ marginBottom: '24px' }}>
          <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px' }}>
            Medical History
          </h3>
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '16px'
          }}>
            <div style={{ 
              background: '#f9fafb',
              padding: '16px',
              borderRadius: '8px',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#3b82f6' }}>
                {patient.totalAppointments}
              </div>
              <div style={{ fontSize: '12px', color: '#6b7280', marginTop: '4px' }}>
                Total Visits
              </div>
            </div>
            <div style={{ 
              background: '#f9fafb',
              padding: '16px',
              borderRadius: '8px',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '14px', fontWeight: 'bold', color: '#10b981' }}>
                {new Date(patient.lastVisit).toLocaleDateString('en-IN', { month: 'short', day: 'numeric' })}
              </div>
              <div style={{ fontSize: '12px', color: '#6b7280', marginTop: '4px' }}>
                Last Visit
              </div>
            </div>
            <div style={{ 
              background: '#f9fafb',
              padding: '16px',
              borderRadius: '8px',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '14px', fontWeight: 'bold', color: '#8b5cf6' }}>
                {new Date(patient.registeredDate).toLocaleDateString('en-IN', { month: 'short', year: 'numeric' })}
              </div>
              <div style={{ fontSize: '12px', color: '#6b7280', marginTop: '4px' }}>
                Member Since
              </div>
            </div>
          </div>
        </div>

        {/* Recent Appointments */}
        <div>
          <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px' }}>
            Recent Appointments
          </h3>
          {patientAppointments.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '20px', color: '#9ca3af' }}>
              No appointments found
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {patientAppointments.map(apt => (
                <div key={apt.id} style={{ 
                  background: '#f9fafb',
                  padding: '12px',
                  borderRadius: '8px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <div>
                    <div style={{ fontWeight: '600', fontSize: '14px' }}>
                      {apt.doctorName}
                    </div>
                    <div style={{ fontSize: '12px', color: '#6b7280' }}>
                      {apt.specialization} • {new Date(apt.date).toLocaleDateString('en-IN')} • {apt.time}
                    </div>
                  </div>
                  <span className={`status-badge ${apt.status}`} style={{ fontSize: '11px' }}>
                    {apt.status}
                  </span>
                </div>
              ))}
            </div>
          )}
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

export default PatientManagement;