import { useState } from 'react';
import { Plus, Edit2, Trash2, Users } from 'lucide-react';
import { specializations as initialSpecializations } from '../services/mockData';
import { doctors } from '../services/mockData';

const SpecializationManagement = () => {
  const [specializations, setSpecializations] = useState(initialSpecializations);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingSpec, setEditingSpec] = useState(null);

  // Get doctor count for each specialization
  const getSpecializationStats = () => {
    return specializations.map(spec => ({
      ...spec,
      doctorCount: doctors.filter(d => d.specializationId === spec.id).length,
      appointmentCount: Math.floor(Math.random() * 50) + 10 // Mock data
    }));
  };

  const specsWithStats = getSpecializationStats();

  const handleAdd = () => {
    setEditingSpec(null);
    setModalOpen(true);
  };

  const handleEdit = (spec) => {
    setEditingSpec(spec);
    setModalOpen(true);
  };

  const handleDelete = (specId) => {
    const hasDoctors = doctors.some(d => d.specializationId === specId);
    
    if (hasDoctors) {
      alert('Cannot delete specialization with assigned doctors!');
      return;
    }

    if (window.confirm('Are you sure you want to delete this specialization?')) {
      setSpecializations(specializations.filter(s => s.id !== specId));
    }
  };

  const handleSave = (specData) => {
    if (editingSpec) {
      setSpecializations(specializations.map(s =>
        s.id === editingSpec.id ? { ...s, ...specData } : s
      ));
    } else {
      const newSpec = {
        ...specData,
        id: Math.max(...specializations.map(s => s.id)) + 1,
        doctorCount: 0
      };
      setSpecializations([...specializations, newSpec]);
    }
    setModalOpen(false);
  };

  return (
    <div>
      <div className="admin-table-container">
        <div className="admin-table-header">
          <h2 className="admin-table-title">Specialization Management</h2>
          <button className="btn-add" onClick={handleAdd}>
            <Plus size={18} />
            Add Specialization
          </button>
        </div>

        <div style={{ padding: '24px' }}>
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '20px'
          }}>
            {specsWithStats.map((spec) => (
              <div
                key={spec.id}
                style={{
                  background: 'white',
                  border: '1px solid #e5e7eb',
                  borderRadius: '12px',
                  padding: '24px',
                  transition: 'all 0.2s',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{ 
                  fontSize: '48px', 
                  marginBottom: '16px',
                  textAlign: 'center'
                }}>
                  {spec.icon}
                </div>

                <h3 style={{ 
                  fontSize: '18px',
                  fontWeight: '600',
                  color: '#1f2937',
                  marginBottom: '8px',
                  textAlign: 'center'
                }}>
                  {spec.name}
                </h3>

                <p style={{ 
                  fontSize: '13px',
                  color: '#6b7280',
                  marginBottom: '16px',
                  textAlign: 'center',
                  lineHeight: '1.5'
                }}>
                  {spec.description}
                </p>

                <div style={{ 
                  display: 'flex',
                  justifyContent: 'space-around',
                  padding: '12px 0',
                  borderTop: '1px solid #f3f4f6',
                  marginBottom: '16px'
                }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ 
                      fontSize: '20px',
                      fontWeight: 'bold',
                      color: '#3b82f6'
                    }}>
                      {spec.doctorCount}
                    </div>
                    <div style={{ fontSize: '11px', color: '#9ca3af' }}>
                      Doctors
                    </div>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ 
                      fontSize: '20px',
                      fontWeight: 'bold',
                      color: '#10b981'
                    }}>
                      {spec.appointmentCount}
                    </div>
                    <div style={{ fontSize: '11px', color: '#9ca3af' }}>
                      Appointments
                    </div>
                  </div>
                </div>

                <div style={{ 
                  display: 'flex',
                  gap: '8px'
                }}>
                  <button
                    onClick={() => handleEdit(spec)}
                    style={{
                      flex: 1,
                      padding: '8px',
                      background: '#eff6ff',
                      color: '#2563eb',
                      border: 'none',
                      borderRadius: '6px',
                      fontSize: '13px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px'
                    }}
                  >
                    <Edit2 size={14} />
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(spec.id)}
                    style={{
                      flex: 1,
                      padding: '8px',
                      background: '#fef2f2',
                      color: '#dc2626',
                      border: 'none',
                      borderRadius: '6px',
                      fontSize: '13px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px'
                    }}
                  >
                    <Trash2 size={14} />
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {modalOpen && (
        <SpecializationModal
          specialization={editingSpec}
          onClose={() => setModalOpen(false)}
          onSave={handleSave}
        />
      )}
    </div>
  );
};

// Specialization Modal
const SpecializationModal = ({ specialization, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    name: specialization?.name || '',
    description: specialization?.description || '',
    icon: specialization?.icon || '🏥'
  });

  const [errors, setErrors] = useState({});

  const commonIcons = ['❤️', '🧠', '🦴', '👶', '🔬', '👁️', '🦷', '🩺', '💉', '🏥', '⚕️', '🩹'];

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.description.trim()) newErrors.description = 'Description is required';
    if (!formData.icon.trim()) newErrors.icon = 'Icon is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();

    if (Object.keys(newErrors).length === 0) {
      onSave(formData);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content" 
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '500px' }}
      >
        <h2 className="modal-title">
          {specialization ? 'Edit Specialization' : 'Add New Specialization'}
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Specialization Name *</label>
            <input
              type="text"
              className="form-input"
              placeholder="e.g., Cardiology"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            {errors.name && <span className="form-error">{errors.name}</span>}
          </div>

          <div className="form-group">
            <label className="form-label">Description *</label>
            <textarea
              className="form-textarea"
              placeholder="Brief description of the specialization"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows="3"
            />
            {errors.description && <span className="form-error">{errors.description}</span>}
          </div>

          <div className="form-group">
            <label className="form-label">Icon *</label>
            <div style={{ 
              display: 'grid',
              gridTemplateColumns: 'repeat(6, 1fr)',
              gap: '8px',
              marginBottom: '12px'
            }}>
              {commonIcons.map(icon => (
                <button
                  key={icon}
                  type="button"
                  onClick={() => setFormData({ ...formData, icon })}
                  style={{
                    padding: '12px',
                    fontSize: '24px',
                    border: formData.icon === icon ? '2px solid #3b82f6' : '1px solid #e5e7eb',
                    background: formData.icon === icon ? '#eff6ff' : 'white',
                    borderRadius: '8px',
                    cursor: 'pointer'
                  }}
                >
                  {icon}
                </button>
              ))}
            </div>
            <input
              type="text"
              className="form-input"
              placeholder="Or enter custom emoji"
              value={formData.icon}
              onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
            />
            {errors.icon && <span className="form-error">{errors.icon}</span>}
          </div>

          <div className="modal-actions">
            <button type="button" className="modal-btn modal-btn-secondary" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="modal-btn modal-btn-primary">
              {specialization ? 'Update' : 'Add'} Specialization
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SpecializationManagement;