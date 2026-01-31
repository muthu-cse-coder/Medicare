import { 
  Users, 
  UserCog, 
  Calendar, 
  DollarSign,
  TrendingUp,
  TrendingDown,
  ArrowRight
} from 'lucide-react';
import { 
  dashboardStats, 
  recentAppointments, 
  appointmentsByMonth,
  specializationDistribution 
} from '../services/mockData';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const AdminDashboard = () => {
  const stats = [
    {
      title: 'Total Doctors',
      value: dashboardStats.totalDoctors,
      change: '+12%',
      positive: true,
      icon: UserCog,
      color: 'blue'
    },
    {
      title: 'Total Patients',
      value: dashboardStats.totalPatients,
      change: '+23%',
      positive: true,
      icon: Users,
      color: 'green'
    },
    {
      title: 'Appointments',
      value: dashboardStats.totalAppointments,
      change: '+8%',
      positive: true,
      icon: Calendar,
      color: 'purple'
    },
    {
      title: 'Revenue',
      value: `₹${(dashboardStats.revenue / 1000).toFixed(0)}K`,
      change: '+15%',
      positive: true,
      icon: DollarSign,
      color: 'orange'
    }
  ];

  return (
    <div>
      {/* Stats Grid */}
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <div className="stat-info">
              <h3>{stat.title}</h3>
              <div className="stat-value">{stat.value}</div>
              <div className={`stat-change ${stat.positive ? 'positive' : 'negative'}`}>
                {stat.positive ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
                <span>{stat.change} from last month</span>
              </div>
            </div>
            <div className={`stat-icon ${stat.color}`}>
              <stat.icon size={28} />
            </div>
          </div>
        ))}
      </div>

      {/* Charts Grid */}
      <div className="dashboard-grid">
        {/* Appointments Trend Chart */}
        <div className="dashboard-card">
          <div className="dashboard-card-header">
            <h2 className="dashboard-card-title">Appointments Trend</h2>
            <select className="admin-table-filter">
              <option>Last 6 Months</option>
              <option>Last Year</option>
            </select>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={appointmentsByMonth}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip 
                contentStyle={{ 
                  background: 'white', 
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px'
                }}
              />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="appointments" 
                stroke="#3b82f6" 
                strokeWidth={3}
                dot={{ fill: '#3b82f6', r: 5 }}
                activeDot={{ r: 7 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Specialization Distribution */}
        <div className="dashboard-card">
          <div className="dashboard-card-header">
            <h2 className="dashboard-card-title">Specialization Distribution</h2>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={specializationDistribution}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {specializationDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Appointments & Quick Stats */}
      <div className="dashboard-grid">
        {/* Recent Appointments Table */}
        <div className="dashboard-card">
          <div className="dashboard-card-header">
            <h2 className="dashboard-card-title">Recent Appointments</h2>
            <a href="/admin/appointments" className="dashboard-card-action">
              View All <ArrowRight size={16} style={{ display: 'inline', marginLeft: '4px' }} />
            </a>
          </div>

          <table className="appointments-table">
            <thead>
              <tr>
                <th>Patient</th>
                <th>Doctor</th>
                <th>Date & Time</th>
                <th>Status</th>
                <th>Fee</th>
              </tr>
            </thead>
            <tbody>
              {recentAppointments.map((appointment) => (
                <tr key={appointment.id}>
                  <td>
                    <div className="patient-info">
                      <div className="patient-avatar">
                        {appointment.patientName.charAt(0)}
                      </div>
                      <div className="patient-details">
                        <div className="patient-name">{appointment.patientName}</div>
                        <div className="patient-spec">{appointment.specialization}</div>
                      </div>
                    </div>
                  </td>
                  <td>{appointment.doctorName}</td>
                  <td>
                    <div>{new Date(appointment.date).toLocaleDateString('en-IN', { 
                      month: 'short', 
                      day: 'numeric' 
                    })}</div>
                    <div style={{ fontSize: '12px', color: '#9ca3af' }}>{appointment.time}</div>
                  </td>
                  <td>
                    <span className={`status-badge ${appointment.status}`}>
                      {appointment.status}
                    </span>
                  </td>
                  <td style={{ fontWeight: '600' }}>₹{appointment.fee}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Quick Stats */}
        <div className="dashboard-card">
          <div className="dashboard-card-header">
            <h2 className="dashboard-card-title">Today's Overview</h2>
          </div>

          <div className="quick-stats-list">
            <div className="quick-stat-item">
              <span className="quick-stat-label">Today's Appointments</span>
              <span className="quick-stat-value" style={{ color: '#3b82f6' }}>
                {dashboardStats.todayAppointments}
              </span>
            </div>

            <div className="quick-stat-item">
              <span className="quick-stat-label">Pending Approvals</span>
              <span className="quick-stat-value" style={{ color: '#f59e0b' }}>
                {dashboardStats.pendingAppointments}
              </span>
            </div>

            <div className="quick-stat-item">
              <span className="quick-stat-label">Active Doctors</span>
              <span className="quick-stat-value" style={{ color: '#10b981' }}>
                {dashboardStats.totalDoctors}
              </span>
            </div>

            <div className="quick-stat-item">
              <span className="quick-stat-label">Today's Revenue</span>
              <span className="quick-stat-value" style={{ color: '#8b5cf6' }}>
                ₹{(dashboardStats.revenue * 0.15 / 1000).toFixed(1)}K
              </span>
            </div>
          </div>

          <div style={{ marginTop: '24px' }}>
            <h3 style={{ 
              fontSize: '14px', 
              fontWeight: '600', 
              color: '#6b7280',
              marginBottom: '12px' 
            }}>
              Quick Actions
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <button 
                className="btn-primary" 
                style={{ width: '100%', fontSize: '14px', padding: '10px' }}
                onClick={() => window.location.href = '/admin/doctors'}
              >
                Add New Doctor
              </button>
              <button 
                className="btn-primary" 
                style={{ 
                  width: '100%', 
                  fontSize: '14px', 
                  padding: '10px',
                  background: 'white',
                  color: '#3b82f6',
                  border: '1px solid #3b82f6'
                }}
                onClick={() => window.location.href = '/admin/appointments'}
              >
                View All Appointments
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;