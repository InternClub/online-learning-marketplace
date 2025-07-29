import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";

const courseData = [
  { name: "React Basics", enrolled: 120, completed: 90 },
  { name: "Redux Advanced", enrolled: 85, completed: 60 },
  { name: "Tailwind Mastery", enrolled: 140, completed: 100 },
];

const certificateData = [
  { name: "Certified", value: 210 },
  { name: "Not Certified", value: 135 },
];

const testPerformanceData = [
  { name: "Passed", value: 260 },
  { name: "Failed", value: 85 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export default function AnalyticsDashboard() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen space-y-12">
      <h1 className="text-3xl font-bold text-center text-gray-800">
        📊 Instructor Analytics Dashboard
      </h1>

      {/* Course Completion Bar Chart */}
      <div className="w-full max-w-4xl mx-auto bg-white p-4 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">
          Course Completion Overview
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={courseData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="enrolled" fill="#8884d8" name="Enrolled" />
            <Bar dataKey="completed" fill="#82ca9d" name="Completed" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Certificate Pie Chart */}
      <div className="w-full max-w-3xl mx-auto bg-white p-4 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">Certificate Distribution</h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={certificateData}
              cx="50%"
              cy="50%"
              outerRadius={100}
              label
              dataKey="value"
            >
              {certificateData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Test Performance Pie Chart */}
      <div className="w-full max-w-3xl mx-auto bg-white p-4 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">Test Performance</h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={testPerformanceData}
              cx="50%"
              cy="50%"
              outerRadius={100}
              label
              dataKey="value"
            >
              {testPerformanceData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index + (2 % COLORS.length)]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
