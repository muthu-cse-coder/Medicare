import { Calendar, Clock, User, DollarSign } from 'lucide-react';

const MobileAppointmentCard = ({ appointment, onStatusChange, onViewDetails }) => {
  return (
    <div style={{
      background: 'white',
      borderRadius: '12px',
      padding: '16px',
      marginBottom: '12px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      border: '1px solid #e5e7eb'
    }}>
      {/* Header */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '12px',
        paddingBottom: '12px',
        borderBottom: '1px solid #f3f4f6'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: '#3b82f6',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: '600',
            fontSize: '16px'
          }}>
            {appointment.patientName.charAt(0)}
          </div>
          <div>
            <div style={{ fontWeight: '600', fontSize: '15px', color: '#1f2937' }}>
              {appointment.patientName}
            </div>
            <div style={{ fontSize: '12px', color: '#6b7280' }}>
              #{appointment.id}
            </div>
          </div>
        </div>
        <span className={`status-badge ${appointment.status}`} style={{ fontSize: '11px' }}>
          {appointment.status}
        </span>
      </div>

      {/* Details */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px' }}>
          <User size={16} color="#6b7280" />
          <div>
            <span style={{ fontWeight: '500', color: '#1f2937' }}>{appointment.doctorName}</span>
            <span style={{ color: '#9ca3af', marginLeft: '6px' }}>• {appointment.specialization}</span>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px' }}>
          <Calendar size={16} color="#6b7280" />
          <span style={{ color: '#4b5563' }}>
            {new Date(appointment.date).toLocaleDateString('en-IN', { 
              month: 'short', 
              day: 'numeric',
              year: 'numeric'
            })}
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px' }}>
          <Clock size={16} color="#6b7280" />
          <span style={{ color: '#4b5563' }}>{appointment.time}</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px' }}>
          <DollarSign size={16} color="#16a34a" />
          <span style={{ fontWeight: '700', color: '#16a34a', fontSize: '16px' }}>
            ₹{appointment.fee}
          </span>
        </div>
      </div>

      {/* Actions */}
      <div style={{ 
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '8px',
        marginTop: '12px',
        paddingTop: '12px',
        borderTop: '1px solid #f3f4f6'
      }}>
        <select
          value={appointment.status}
          onChange={(e) => onStatusChange(appointment.id, e.target.value)}
          style={{
            padding: '8px 12px',
            borderRadius: '6px',
            border: '1px solid #e5e7eb',
            fontSize: '13px',
            fontWeight: '600',
            cursor: 'pointer'
          }}
        >
          <option value="pending">Pending</option>
          <option value="confirmed">Confirmed</option>
          <option value="completed">Completed</option>
          <option value="cancelled">Cancelled</option>
        </select>

        <button
          onClick={() => onViewDetails(appointment)}
          style={{
            padding: '8px 12px',
            background: '#eff6ff',
            color: '#2563eb',
            border: 'none',
            borderRadius: '6px',
            fontSize: '13px',
            fontWeight: '600',
            cursor: 'pointer'
          }}
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default MobileAppointmentCard;


