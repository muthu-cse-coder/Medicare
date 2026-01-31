import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { specializations } from '../../services/mockData';

const DoctorModal = ({ doctor, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    name: '',
    specialization: '',
    specializationId: 1,
    hospital: '',
    experience: '',
    consultationFee: '',
    education: '',
    about: '',
    languages: []
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (doctor) {
      setFormData({
        name: doctor.name || '',
        specialization: doctor.specialization || '',
        specializationId: doctor.specializationId || 1,
        hospital: doctor.hospital || '',
        experience: doctor.experience || '',
        consultationFee: doctor.consultationFee || '',
        education: doctor.education || '',
        about: doctor.about || '',
        languages: doctor.languages || []
      });
    }
  }, [doctor]);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.specialization) newErrors.specialization = 'Specialization is required';
    if (!formData.hospital.trim()) newErrors.hospital = 'Hospital is required';
    if (!formData.experience || formData.experience <= 0) newErrors.experience = 'Valid experience is required';
    if (!formData.consultationFee || formData.consultationFee <= 0) newErrors.consultationFee = 'Valid fee is required';
    if (!formData.education.trim()) newErrors.education = 'Education is required';
    if (!formData.about.trim()) newErrors.about = 'About is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    
    if (Object.keys(newErrors).length === 0) {
      // Find specialization ID
      const spec = specializations.find(s => s.name === formData.specialization);
      const dataToSave = {
        ...formData,
        specializationId: spec?.id || 1,
        experience: parseInt(formData.experience),
        consultationFee: parseInt(formData.consultationFee)
      };
      onSave(dataToSave);
    } else {
      setErrors(newErrors);
    }
  };

  const handleLanguageToggle = (lang) => {
    setFormData(prev => ({
      ...prev,
      languages: prev.languages.includes(lang)
        ? prev.languages.filter(l => l !== lang)
        : [...prev.languages, lang]
    }));
  };

  const availableLanguages = ['English', 'Tamil', 'Hindi', 'Telugu', 'Malayalam', 'Kannada'];

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
          alignItems: 'center',
          marginBottom: '24px'
        }}>
          <h2 className="modal-title" style={{ margin: 0 }}>
            {doctor ? 'Edit Doctor' : 'Add New Doctor'}
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
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div className="form-group">
              <label className="form-label">Doctor Name *</label>
              <input
                type="text"
                className="form-input"
                placeholder="Dr. John Doe"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
              {errors.name && <span className="form-error">{errors.name}</span>}
            </div>

            <div className="form-group">
              <label className="form-label">Specialization *</label>
              <select
                className="form-input"
                value={formData.specialization}
                onChange={(e) => setFormData({ ...formData, specialization: e.target.value })}
              >
                <option value="">Select Specialization</option>
                {specializations.map(spec => (
                  <option key={spec.id} value={spec.name}>{spec.name}</option>
                ))}
              </select>
              {errors.specialization && <span className="form-error">{errors.specialization}</span>}
            </div>

            <div className="form-group">
              <label className="form-label">Hospital *</label>
              <input
                type="text"
                className="form-input"
                placeholder="Apollo Hospital, Chennai"
                value={formData.hospital}
                onChange={(e) => setFormData({ ...formData, hospital: e.target.value })}
              />
              {errors.hospital && <span className="form-error">{errors.hospital}</span>}
            </div>

            <div className="form-group">
              <label className="form-label">Experience (years) *</label>
              <input
                type="number"
                className="form-input"
                placeholder="10"
                value={formData.experience}
                onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
              />
              {errors.experience && <span className="form-error">{errors.experience}</span>}
            </div>

            <div className="form-group">
              <label className="form-label">Consultation Fee (₹) *</label>
              <input
                type="number"
                className="form-input"
                placeholder="800"
                value={formData.consultationFee}
                onChange={(e) => setFormData({ ...formData, consultationFee: e.target.value })}
              />
              {errors.consultationFee && <span className="form-error">{errors.consultationFee}</span>}
            </div>

            <div className="form-group">
              <label className="form-label">Education *</label>
              <input
                type="text"
                className="form-input"
                placeholder="MBBS, MD (Cardiology)"
                value={formData.education}
                onChange={(e) => setFormData({ ...formData, education: e.target.value })}
              />
              {errors.education && <span className="form-error">{errors.education}</span>}
            </div>
          </div>

          <div className="form-group" style={{ marginTop: '16px' }}>
            <label className="form-label">About *</label>
            <textarea
              className="form-textarea"
              placeholder="Brief description about the doctor..."
              value={formData.about}
              onChange={(e) => setFormData({ ...formData, about: e.target.value })}
              rows="3"
            />
            {errors.about && <span className="form-error">{errors.about}</span>}
          </div>

          <div className="form-group" style={{ marginTop: '16px' }}>
            <label className="form-label">Languages</label>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '8px' }}>
              {availableLanguages.map(lang => (
                <label 
                  key={lang}
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '6px',
                    padding: '6px 12px',
                    background: formData.languages.includes(lang) ? '#eff6ff' : '#f9fafb',
                    border: `1px solid ${formData.languages.includes(lang) ? '#3b82f6' : '#e5e7eb'}`,
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: '14px'
                  }}
                >
                  <input
                    type="checkbox"
                    checked={formData.languages.includes(lang)}
                    onChange={() => handleLanguageToggle(lang)}
                  />
                  {lang}
                </label>
              ))}
            </div>
          </div>

          <div className="modal-actions" style={{ marginTop: '24px' }}>
            <button type="button" className="modal-btn modal-btn-secondary" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="modal-btn modal-btn-primary">
              {doctor ? 'Update Doctor' : 'Add Doctor'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DoctorModal;