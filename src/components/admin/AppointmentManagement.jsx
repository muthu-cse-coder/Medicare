import { useState } from 'react';
import { Search, Filter, Download, Eye, CheckCircle, XCircle, Clock } from 'lucide-react';
import { allAppointments } from '../../services/mockData';

const AppointmentManagement = () => {
  const [appointments, setAppointments] = useState(allAppointments);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [dateFilter, setDateFilter] = useState('all');
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  // Filter appointments
  const filteredAppointments = appointments.filter(apt => {
    const matchesSearch = 
      apt.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      apt.doctorName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      apt.specialization.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === 'all' || apt.status === statusFilter;
    
    const today = new Date().toISOString().split('T')[0];
    const matchesDate = 
      dateFilter === 'all' ||
      (dateFilter === 'today' && apt.date === today) ||
      (dateFilter === 'upcoming' && apt.date >= today) ||
      (dateFilter === 'past' && apt.date < today);
    
    return matchesSearch && matchesStatus && matchesDate;
  });

  // Get status counts
  const statusCounts = {
    all: appointments.length,
    pending: appointments.filter(a => a.status === 'pending').length,
    confirmed: appointments.filter(a => a.status === 'confirmed').length,
    completed: appointments.filter(a => a.status === 'completed').length,
    cancelled: appointments.filter(a => a.status === 'cancelled').length
  };

  const handleStatusChange = (appointmentId, newStatus) => {
    setAppointments(appointments.map(apt =>
      apt.id === appointmentId ? { ...apt, status: newStatus } : apt
    ));
  };

  const handleViewDetails = (appointment) => {
    setSelectedAppointment(appointment);
  };

  const exportToCSV = () => {
    const headers = ['ID', 'Patient', 'Doctor', 'Specialization', 'Date', 'Time', 'Status', 'Fee'];
    const rows = filteredAppointments.map(apt => [
      apt.id,
      apt.patientName,
      apt.doctorName,
      apt.specialization,
      apt.date,
      apt.time,
      apt.status,
      apt.fee
    ]);
    
    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.join(','))
    ].join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'appointments.csv';
    a.click();
  };

  return (
    <div>
      {/* Stats Cards */}
      <div className="stats-grid" style={{ marginBottom: '24px' }}>
        <div className="stat-card" style={{ cursor: 'pointer' }} onClick={() => setStatusFilter('all')}>
          <div className="stat-info">
            <h3>Total Appointments</h3>
            <div className="stat-value">{statusCounts.all}</div>
          </div>
          <div className="stat-icon blue">
            <Clock size={28} />
          </div>
        </div>

        <div className="stat-card" style={{ cursor: 'pointer' }} onClick={() => setStatusFilter('pending')}>
          <div className="stat-info">
            <h3>Pending</h3>
            <div className="stat-value">{statusCounts.pending}</div>
          </div>
          <div className="stat-icon orange">
            <Clock size={28} />
          </div>
        </div>

        <div className="stat-card" style={{ cursor: 'pointer' }} onClick={() => setStatusFilter('confirmed')}>
          <div className="stat-info">
            <h3>Confirmed</h3>
            <div className="stat-value">{statusCounts.confirmed}</div>
          </div>
          <div className="stat-icon green">
            <CheckCircle size={28} />
          </div>
        </div>

        <div className="stat-card" style={{ cursor: 'pointer' }} onClick={() => setStatusFilter('completed')}>
          <div className="stat-info">
            <h3>Completed</h3>
            <div className="stat-value">{statusCounts.completed}</div>
          </div>
          <div className="stat-icon purple">
            <CheckCircle size={28} />
          </div>
        </div>
      </div>

      {/* Appointments Table */}
      <div className="admin-table-container">
        <div className="admin-table-header">
          <h2 className="admin-table-title">All Appointments</h2>
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
                placeholder="Search appointments..."
                className="admin-table-filter"
                style={{ paddingLeft: '40px', width: '250px' }}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <select 
              className="admin-table-filter"
              value={dateFilter}
              onChange={(e) => setDateFilter(e.target.value)}
            >
              <option value="all">All Dates</option>
              <option value="today">Today</option>
              <option value="upcoming">Upcoming</option>
              <option value="past">Past</option>
            </select>

            <select 
              className="admin-table-filter"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="all">All Status</option>
              <option value="pending">Pending</option>
              <option value="confirmed">Confirmed</option>
              <option value="completed">Completed</option>
              <option value="cancelled">Cancelled</option>
            </select>

            <button 
              className="btn-add"
              onClick={exportToCSV}
              style={{ background: '#10b981' }}
            >
              <Download size={18} />
              Export CSV
            </button>
          </div>
        </div>

        <table className="admin-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Patient</th>
              <th>Doctor</th>
              <th>Specialization</th>
              <th style={{width:"20px"}}>Date & Time</th>
              <th>Status</th>
              <th>Fee</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredAppointments.length === 0 ? (
              <tr>
                <td colSpan="8" style={{ textAlign: 'center', padding: '40px', color: '#9ca3af' }}>
                  No appointments found
                </td>
              </tr>
            ) : (
              filteredAppointments.map((appointment) => (
                <tr key={appointment.id}>
                  <td style={{ fontWeight: '600', color: '#6b7280' }}>#{appointment.id}</td>
                  <td>
                    <div className="patient-info">
                      <div className="patient-avatar">
                        {appointment.patientName.charAt(0)}
                      </div>
                      <div className="patient-details">
                        <div className="patient-name">{appointment.patientName}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div>{appointment.doctorName}</div>
                    <div style={{ fontSize: '12px', color: '#9ca3af' }}>
                      {appointment.specialization}
                    </div>
                  </td>
                  <td>
                    <span style={{ 
                      background: '#f0fdf4', 
                      color: '#16a34a',
                      padding: '4px 10px',
                      borderRadius: '12px',
                      fontSize: '12px',
                      fontWeight: '500'
                    }}>
                      {appointment.specialization}
                    </span>
                  </td>
                  <td>
                    <div style={{ fontWeight: '500' }}>
                      {new Date(appointment.date).toLocaleDateString('en-IN', { 
                        month: 'short', 
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </div>
                    <div style={{ fontSize: '12px', color: '#9ca3af' }}>
                      {appointment.time}
                    </div>
                  </td>
                  <td>
                    <select
                      className={`status-badge ${appointment.status}`}
                      value={appointment.status}
                      onChange={(e) => handleStatusChange(appointment.id, e.target.value)}
                      style={{ 
                        border: 'none',
                        cursor: 'pointer',
                        fontWeight: '600'
                      }}
                    >
                      <option value="pending">Pending</option>
                      <option value="confirmed">Confirmed</option>
                      <option value="completed">Completed</option>
                      <option value="cancelled">Cancelled</option>
                    </select>
                  </td>
                  <td style={{ fontWeight: '700', color: '#16a34a', fontSize: '15px' }}>
                    ₹{appointment.fee}
                  </td>
                  <td>
                    <div className="table-actions">
                      <button 
                        className="btn-icon"
                        onClick={() => handleViewDetails(appointment)}
                        title="View Details"
                      >
                        <Eye size={18} />
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
            Showing {filteredAppointments.length} of {appointments.length} appointments
          </div>
        </div>
      </div>

      {/* Appointment Details Modal */}
      {selectedAppointment && (
        <AppointmentDetailsModal
          appointment={selectedAppointment}
          onClose={() => setSelectedAppointment(null)}
          onStatusChange={handleStatusChange}
        />
      )}
    </div>
  );
};

// Appointment Details Modal
const AppointmentDetailsModal = ({ appointment, onClose, onStatusChange }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content" 
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '600px' }}
      >
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          marginBottom: '24px'
        }}>
          <h2 className="modal-title" style={{ margin: 0 }}>
            Appointment Details
          </h2>
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
            <XCircle size={24} />
          </button>
        </div>

        <div style={{ 
          background: '#f9fafb', 
          padding: '16px', 
          borderRadius: '8px',
          marginBottom: '20px'
        }}>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <div>
              <div style={{ fontSize: '12px', color: '#6b7280', marginBottom: '4px' }}>
                Appointment ID
              </div>
              <div style={{ fontSize: '20px', fontWeight: 'bold' }}>
                #{appointment.id}
              </div>
            </div>
            <span className={`status-badge ${appointment.status}`} style={{ fontSize: '14px' }}>
              {appointment.status}
            </span>
          </div>
        </div>

        <div className="modal-details">
          <div className="modal-detail-row">
            <span className="modal-detail-label">Patient Name</span>
            <span className="modal-detail-value">{appointment.patientName}</span>
          </div>
          <div className="modal-detail-row">
            <span className="modal-detail-label">Doctor</span>
            <span className="modal-detail-value">{appointment.doctorName}</span>
          </div>
          <div className="modal-detail-row">
            <span className="modal-detail-label">Specialization</span>
            <span className="modal-detail-value">{appointment.specialization}</span>
          </div>
          <div className="modal-detail-row">
            <span className="modal-detail-label">Appointment Date</span>
            <span className="modal-detail-value">
              {new Date(appointment.date).toLocaleDateString('en-IN', { 
                weekday: 'long',
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </span>
          </div>
          <div className="modal-detail-row">
            <span className="modal-detail-label">Time Slot</span>
            <span className="modal-detail-value">{appointment.time}</span>
          </div>
          <div className="modal-detail-row">
            <span className="modal-detail-label">Consultation Fee</span>
            <span className="modal-detail-value" style={{ color: '#16a34a', fontWeight: 'bold' }}>
              ₹{appointment.fee}
            </span>
          </div>
        </div>

        <div style={{ marginTop: '24px' }}>
          <label style={{ 
            display: 'block',
            fontSize: '14px',
            fontWeight: '600',
            color: '#374151',
            marginBottom: '8px'
          }}>
            Update Status
          </label>
          <select
            className="form-input"
            value={appointment.status}
            onChange={(e) => {
              onStatusChange(appointment.id, e.target.value);
              onClose();
            }}
          >
            <option value="pending">Pending</option>
            <option value="confirmed">Confirmed</option>
            <option value="completed">Completed</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </div>

        <div className="modal-actions" style={{ marginTop: '24px' }}>
          <button 
            onClick={onClose}
            className="modal-btn modal-btn-secondary"
          >
            Close
          </button>
          <button 
            onClick={() => window.print()}
            className="modal-btn modal-btn-primary"
          >
            Print Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppointmentManagement;