import { useState } from 'react';
import { Save, Bell, Mail, Clock, Shield, Database, Palette } from 'lucide-react';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('general');
  const [settings, setSettings] = useState({
    // General Settings
    hospitalName: 'MediCare Hospital',
    email: 'info@medicare.com',
    phone: '+91 9876543210',
    address: '123 Health Street, Medical District, Chennai, Tamil Nadu 600001',
    
    // Working Hours
    mondayStart: '09:00',
    mondayEnd: '18:00',
    saturdayStart: '09:00',
    saturdayEnd: '13:00',
    sundayClosed: true,
    
    // Notifications
    emailNotifications: true,
    smsNotifications: true,
    appointmentReminders: true,
    cancelNotifications: true,
    
    // Appointment Settings
    slotDuration: '30',
    advanceBookingDays: '30',
    cancellationHours: '24',
    
    // Security
    twoFactorAuth: false,
    sessionTimeout: '30',
    passwordExpiry: '90'
  });

  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    // In production, save to backend
    console.log('Settings saved:', settings);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const tabs = [
    { id: 'general', label: 'General', icon: Database },
    { id: 'working-hours', label: 'Working Hours', icon: Clock },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'appointments', label: 'Appointments', icon: Mail },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'appearance', label: 'Appearance', icon: Palette }
  ];

  return (
    <div>
      <div style={{ 
        background: 'white',
        borderRadius: '12px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        overflow: 'hidden'
      }}>
        {/* Tabs */}
        <div style={{ 
          display: 'flex',
          borderBottom: '1px solid #e5e7eb',
          overflowX: 'auto'
        }}>
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                flex: '1',
                minWidth: '150px',
                padding: '16px 24px',
                background: activeTab === tab.id ? '#eff6ff' : 'transparent',
                border: 'none',
                borderBottom: activeTab === tab.id ? '2px solid #3b82f6' : '2px solid transparent',
                color: activeTab === tab.id ? '#2563eb' : '#6b7280',
                fontWeight: activeTab === tab.id ? '600' : '500',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                fontSize: '14px',
                transition: 'all 0.2s'
              }}
            >
              <tab.icon size={18} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div style={{ padding: '32px' }}>
          {/* General Settings */}
          {activeTab === 'general' && (
            <div>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '24px' }}>
                General Settings
              </h3>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div className="form-group">
                  <label className="form-label">Hospital Name</label>
                  <input
                    type="text"
                    className="form-input"
                    value={settings.hospitalName}
                    onChange={(e) => setSettings({ ...settings, hospitalName: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-input"
                    value={settings.email}
                    onChange={(e) => setSettings({ ...settings, email: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Phone</label>
                  <input
                    type="tel"
                    className="form-input"
                    value={settings.phone}
                    onChange={(e) => setSettings({ ...settings, phone: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-group" style={{ marginTop: '20px' }}>
                <label className="form-label">Address</label>
                <textarea
                  className="form-textarea"
                  rows="3"
                  value={settings.address}
                  onChange={(e) => setSettings({ ...settings, address: e.target.value })}
                />
              </div>
            </div>
          )}

          {/* Working Hours */}
          {activeTab === 'working-hours' && (
            <div>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '24px' }}>
                Working Hours Configuration
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ 
                  display: 'grid',
                  gridTemplateColumns: '150px 1fr 1fr',
                  alignItems: 'center',
                  gap: '16px',
                  padding: '16px',
                  background: '#f9fafb',
                  borderRadius: '8px'
                }}>
                  <div style={{ fontWeight: '600' }}>Monday - Friday</div>
                  <div className="form-group" style={{ margin: 0 }}>
                    <label className="form-label">Start Time</label>
                    <input
                      type="time"
                      className="form-input"
                      value={settings.mondayStart}
                      onChange={(e) => setSettings({ ...settings, mondayStart: e.target.value })}
                    />
                  </div>
                  <div className="form-group" style={{ margin: 0 }}>
                    <label className="form-label">End Time</label>
                    <input
                      type="time"
                      className="form-input"
                      value={settings.mondayEnd}
                      onChange={(e) => setSettings({ ...settings, mondayEnd: e.target.value })}
                    />
                  </div>
                </div>

                <div style={{ 
                  display: 'grid',
                  gridTemplateColumns: '150px 1fr 1fr',
                  alignItems: 'center',
                  gap: '16px',
                  padding: '16px',
                  background: '#f9fafb',
                  borderRadius: '8px'
                }}>
                  <div style={{ fontWeight: '600' }}>Saturday</div>
                  <div className="form-group" style={{ margin: 0 }}>
                    <label className="form-label">Start Time</label>
                    <input
                      type="time"
                      className="form-input"
                      value={settings.saturdayStart}
                      onChange={(e) => setSettings({ ...settings, saturdayStart: e.target.value })}
                    />
                  </div>
                  <div className="form-group" style={{ margin: 0 }}>
                    <label className="form-label">End Time</label>
                    <input
                      type="time"
                      className="form-input"
                      value={settings.saturdayEnd}
                      onChange={(e) => setSettings({ ...settings, saturdayEnd: e.target.value })}
                    />
                  </div>
                </div>

                <div style={{ 
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '16px',
                  background: '#f9fafb',
                  borderRadius: '8px'
                }}>
                  <input
                    type="checkbox"
                    id="sundayClosed"
                    checked={settings.sundayClosed}
                    onChange={(e) => setSettings({ ...settings, sundayClosed: e.target.checked })}
                    style={{ width: '18px', height: '18px' }}
                  />
                  <label htmlFor="sundayClosed" style={{ fontWeight: '600', cursor: 'pointer' }}>
                    Closed on Sundays
                  </label>
                </div>
              </div>
            </div>
          )}

          {/* Notifications */}
          {activeTab === 'notifications' && (
            <div>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '24px' }}>
                Notification Preferences
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  { key: 'emailNotifications', label: 'Email Notifications', desc: 'Receive notifications via email' },
                  { key: 'smsNotifications', label: 'SMS Notifications', desc: 'Receive notifications via SMS' },
                  { key: 'appointmentReminders', label: 'Appointment Reminders', desc: 'Send reminders to patients 24 hours before appointment' },
                  { key: 'cancelNotifications', label: 'Cancellation Notifications', desc: 'Notify when appointments are cancelled' }
                ].map(item => (
                  <div key={item.key} style={{ 
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '16px',
                    background: '#f9fafb',
                    borderRadius: '8px'
                  }}>
                    <div>
                      <div style={{ fontWeight: '600', marginBottom: '4px' }}>{item.label}</div>
                      <div style={{ fontSize: '13px', color: '#6b7280' }}>{item.desc}</div>
                    </div>
                    <label style={{ position: 'relative', display: 'inline-block', width: '50px', height: '24px' }}>
                      <input
                        type="checkbox"
                        checked={settings[item.key]}
                        onChange={(e) => setSettings({ ...settings, [item.key]: e.target.checked })}
                        style={{ opacity: 0, width: 0, height: 0 }}
                      />
                      <span style={{
                        position: 'absolute',
                        cursor: 'pointer',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: settings[item.key] ? '#3b82f6' : '#cbd5e1',
                        transition: '0.4s',
                        borderRadius: '24px'
                      }}>
                        <span style={{
                          position: 'absolute',
                          content: '""',
                          height: '18px',
                          width: '18px',
                          left: settings[item.key] ? '28px' : '3px',
                          bottom: '3px',
                          background: 'white',
                          transition: '0.4s',
                          borderRadius: '50%'
                        }} />
                      </span>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Appointment Settings */}
          {activeTab === 'appointments' && (
            <div>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '24px' }}>
                Appointment Configuration
              </h3>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div className="form-group">
                  <label className="form-label">Slot Duration (minutes)</label>
                  <select
                    className="form-input"
                    value={settings.slotDuration}
                    onChange={(e) => setSettings({ ...settings, slotDuration: e.target.value })}
                  >
                    <option value="15">15 minutes</option>
                    <option value="30">30 minutes</option>
                    <option value="45">45 minutes</option>
                    <option value="60">60 minutes</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Advance Booking (days)</label>
                  <input
                    type="number"
                    className="form-input"
                    value={settings.advanceBookingDays}
                    onChange={(e) => setSettings({ ...settings, advanceBookingDays: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Cancellation Notice (hours)</label>
                  <input
                    type="number"
                    className="form-input"
                    value={settings.cancellationHours}
                    onChange={(e) => setSettings({ ...settings, cancellationHours: e.target.value })}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Security */}
          {activeTab === 'security' && (
            <div>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '24px' }}>
                Security Settings
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ 
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '16px',
                  background: '#f9fafb',
                  borderRadius: '8px'
                }}>
                  <div>
                    <div style={{ fontWeight: '600', marginBottom: '4px' }}>Two-Factor Authentication</div>
                    <div style={{ fontSize: '13px', color: '#6b7280' }}>Add an extra layer of security</div>
                  </div>
                  <label style={{ position: 'relative', display: 'inline-block', width: '50px', height: '24px' }}>
                    <input
                      type="checkbox"
                      checked={settings.twoFactorAuth}
                      onChange={(e) => setSettings({ ...settings, twoFactorAuth: e.target.checked })}
                      style={{ opacity: 0, width: 0, height: 0 }}
                    />
                    <span style={{
                      position: 'absolute',
                      cursor: 'pointer',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: settings.twoFactorAuth ? '#3b82f6' : '#cbd5e1',
                      transition: '0.4s',
                      borderRadius: '24px'
                    }}>
                      <span style={{
                        position: 'absolute',
                        height: '18px',
                        width: '18px',
                        left: settings.twoFactorAuth ? '28px' : '3px',
                        bottom: '3px',
                        background: 'white',
                        transition: '0.4s',
                        borderRadius: '50%'
                      }} />
                    </span>
                  </label>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  <div className="form-group">
                    <label className="form-label">Session Timeout (minutes)</label>
                    <input
                      type="number"
                      className="form-input"
                      value={settings.sessionTimeout}
                      onChange={(e) => setSettings({ ...settings, sessionTimeout: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Password Expiry (days)</label>
                    <input
                      type="number"
                      className="form-input"
                      value={settings.passwordExpiry}
                      onChange={(e) => setSettings({ ...settings, passwordExpiry: e.target.value })}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Appearance */}
          {activeTab === 'appearance' && (
            <div>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '24px' }}>
                Appearance Settings
              </h3>

              <div style={{ 
                padding: '40px',
                textAlign: 'center',
                background: '#f9fafb',
                borderRadius: '8px'
              }}>
                <Palette size={48} color="#9ca3af" style={{ margin: '0 auto 16px' }} />
                <p style={{ color: '#6b7280' }}>Theme customization coming soon!</p>
              </div>
            </div>
          )}
        </div>

        {/* Save Button */}
        <div style={{ 
          padding: '20px 32px',
          borderTop: '1px solid #e5e7eb',
          background: '#f9fafb',
          display: 'flex',
          justifyContent: 'flex-end',
          gap: '12px'
        }}>
          {saved && (
            <div style={{ 
              padding: '10px 16px',
              background: '#dcfce7',
              color: '#166534',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: '500'
            }}>
              ✓ Settings saved successfully!
            </div>
          )}
          <button 
            onClick={handleSave}
            className="btn-primary"
            style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
          >
            <Save size={18} />
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;