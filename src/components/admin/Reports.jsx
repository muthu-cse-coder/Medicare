import { useState } from 'react';
import { Download, TrendingUp, DollarSign, Calendar, Users } from 'lucide-react';
import { 
  LineChart, Line, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer 
} from 'recharts';
import { 
  dashboardStats, 
  appointmentsByMonth,
  specializationDistribution 
} from '../../services/mockData';
import { doctors } from '../../services/mockData';

const Reports = () => {
  const [reportType, setReportType] = useState('overview');
  const [dateRange, setDateRange] = useState('6months');

  // Revenue data
  const revenueData = [
    { month: 'Jan', revenue: 145000, appointments: 45 },
    { month: 'Feb', revenue: 167000, appointments: 52 },
    { month: 'Mar', revenue: 156000, appointments: 48 },
    { month: 'Apr', revenue: 189000, appointments: 61 },
    { month: 'May', revenue: 178000, appointments: 55 },
    { month: 'Jun', revenue: 198000, appointments: 67 }
  ];

  // Doctor performance
  const doctorPerformance = doctors.slice(0, 6).map(doc => ({
    name: doc.name.split(' ')[1],
    appointments: Math.floor(Math.random() * 50) + 20,
    revenue: Math.floor(Math.random() * 50000) + 30000
  }));

  const exportReport = () => {
    alert('Report exported successfully!');
  };

  return (
    <div>
      {/* Header with filters */}
      <div style={{ 
        background: 'white',
        padding: '24px',
        borderRadius: '12px',
        marginBottom: '24px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
      }}>
        <div style={{ 
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#1f2937' }}>
            Reports & Analytics
          </h2>
          
          <div style={{ display: 'flex', gap: '12px' }}>
            <select 
              className="admin-table-filter"
              value={reportType}
              onChange={(e) => setReportType(e.target.value)}
            >
              <option value="overview">Overview</option>
              <option value="revenue">Revenue</option>
              <option value="appointments">Appointments</option>
              <option value="doctors">Doctor Performance</option>
            </select>

            <select 
              className="admin-table-filter"
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
            >
              <option value="1month">Last Month</option>
              <option value="3months">Last 3 Months</option>
              <option value="6months">Last 6 Months</option>
              <option value="1year">Last Year</option>
            </select>

            <button 
              className="btn-add"
              onClick={exportReport}
              style={{ background: '#10b981' }}
            >
              <Download size={18} />
              Export PDF
            </button>
          </div>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="stats-grid" style={{ marginBottom: '32px' }}>
        <div className="stat-card">
          <div className="stat-info">
            <h3>Total Revenue</h3>
            <div className="stat-value">₹{(dashboardStats.revenue / 1000).toFixed(0)}K</div>
            <div className="stat-change positive">
              <TrendingUp size={16} />
              <span>+15% from last month</span>
            </div>
          </div>
          <div className="stat-icon green">
            <DollarSign size={28} />
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-info">
            <h3>Total Appointments</h3>
            <div className="stat-value">{dashboardStats.totalAppointments}</div>
            <div className="stat-change positive">
              <TrendingUp size={16} />
              <span>+8% from last month</span>
            </div>
          </div>
          <div className="stat-icon purple">
            <Calendar size={28} />
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-info">
            <h3>Active Doctors</h3>
            <div className="stat-value">{dashboardStats.totalDoctors}</div>
            <div className="stat-change positive">
              <TrendingUp size={16} />
              <span>+12% from last month</span>
            </div>
          </div>
          <div className="stat-icon blue">
            <Users size={28} />
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-info">
            <h3>Avg. Per Appointment</h3>
            <div className="stat-value">₹{Math.floor(dashboardStats.revenue / dashboardStats.totalAppointments)}</div>
            <div className="stat-change positive">
              <TrendingUp size={16} />
              <span>+5% from last month</span>
            </div>
          </div>
          <div className="stat-icon orange">
            <DollarSign size={28} />
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="dashboard-grid" style={{ marginBottom: '32px' }}>
        {/* Revenue Trend */}
        <div className="dashboard-card">
          <div className="dashboard-card-header">
            <h2 className="dashboard-card-title">Revenue Trend</h2>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={revenueData}>
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
                dataKey="revenue" 
                stroke="#10b981" 
                strokeWidth={3}
                name="Revenue (₹)"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Appointments by Month */}
        <div className="dashboard-card">
          <div className="dashboard-card-header">
            <h2 className="dashboard-card-title">Monthly Appointments</h2>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={appointmentsByMonth}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip />
              <Legend />
              <Bar dataKey="appointments" fill="#3b82f6" name="Appointments" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="dashboard-grid">
        {/* Doctor Performance */}
        <div className="dashboard-card">
          <div className="dashboard-card-header">
            <h2 className="dashboard-card-title">Top Performing Doctors</h2>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={doctorPerformance} layout="horizontal">
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis type="number" stroke="#6b7280" />
              <YAxis dataKey="name" type="category" stroke="#6b7280" width={80} />
              <Tooltip />
              <Legend />
              <Bar dataKey="appointments" fill="#8b5cf6" name="Appointments" />
            </BarChart>
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
    </div>
  );
};

export default Reports;