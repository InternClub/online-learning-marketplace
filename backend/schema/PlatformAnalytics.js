import mongoose from 'mongoose';

const platformAnalyticsSchema = new mongoose.Schema({
  // Time Period
  date: {
    type: Date,
    required: true,
    default: Date.now
  },
  period: {
    type: String,
    enum: ['daily', 'weekly', 'monthly', 'yearly'],
    required: true
  },
  
  // User Metrics
  userMetrics: {
    totalUsers: {
      type: Number,
      default: 0
    },
    newUsers: {
      type: Number,
      default: 0
    },
    activeUsers: {
      type: Number,
      default: 0
    },
    suspendedUsers: {
      type: Number,
      default: 0
    },
    usersByRole: {
      learners: {
        type: Number,
        default: 0
      },
      instructors: {
        type: Number,
        default: 0
      },
      admins: {
        type: Number,
        default: 0
      }
    },
    userRetentionRate: {
      type: Number,
      default: 0
    }
  },
  
  // Course Metrics
  courseMetrics: {
    totalCourses: {
      type: Number,
      default: 0
    },
    publishedCourses: {
      type: Number,
      default: 0
    },
    draftCourses: {
      type: Number,
      default: 0
    },
    suspendedCourses: {
      type: Number,
      default: 0
    },
    newCourses: {
      type: Number,
      default: 0
    },
    coursesByCategory: [{
      category: String,
      count: Number
    }],
    averageRating: {
      type: Number,
      default: 0
    },
    totalReviews: {
      type: Number,
      default: 0
    }
  },
  
  // Enrollment Metrics
  enrollmentMetrics: {
    totalEnrollments: {
      type: Number,
      default: 0
    },
    newEnrollments: {
      type: Number,
      default: 0
    },
    completedCourses: {
      type: Number,
      default: 0
    },
    dropoutRate: {
      type: Number,
      default: 0
    },
    completionRate: {
      type: Number,
      default: 0
    },
    averageProgress: {
      type: Number,
      default: 0
    }
  },
  
  // Financial Metrics
  financialMetrics: {
    totalRevenue: {
      type: Number,
      default: 0
    },
    newRevenue: {
      type: Number,
      default: 0
    },
    totalOrders: {
      type: Number,
      default: 0
    },
    averageOrderValue: {
      type: Number,
      default: 0
    },
    refundAmount: {
      type: Number,
      default: 0
    },
    refundRate: {
      type: Number,
      default: 0
    },
    instructorPayouts: {
      type: Number,
      default: 0
    },
    platformCommission: {
      type: Number,
      default: 0
    },
    topSellingCourses: [{
      courseId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
      },
      title: String,
      revenue: Number,
      enrollments: Number
    }]
  },
  
  // Instructor Metrics
  instructorMetrics: {
    totalInstructors: {
      type: Number,
      default: 0
    },
    activeInstructors: {
      type: Number,
      default: 0
    },
    newInstructors: {
      type: Number,
      default: 0
    },
    verifiedInstructors: {
      type: Number,
      default: 0
    },
    averageInstructorRating: {
      type: Number,
      default: 0
    },
    averageCoursesPerInstructor: {
      type: Number,
      default: 0
    },
    topInstructors: [{
      instructorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      },
      name: String,
      totalStudents: Number,
      totalRevenue: Number,
      averageRating: Number
    }]
  },
  
  // Engagement Metrics
  engagementMetrics: {
    dailyActiveUsers: {
      type: Number,
      default: 0
    },
    weeklyActiveUsers: {
      type: Number,
      default: 0
    },
    monthlyActiveUsers: {
      type: Number,
      default: 0
    },
    averageSessionDuration: {
      type: Number,
      default: 0 // in minutes
    },
    totalWatchTime: {
      type: Number,
      default: 0 // in minutes
    },
    averageWatchTimePerUser: {
      type: Number,
      default: 0
    },
    certificatesIssued: {
      type: Number,
      default: 0
    },
    assignmentsSubmitted: {
      type: Number,
      default: 0
    }
  },
  
  // Content Metrics
  contentMetrics: {
    totalLessons: {
      type: Number,
      default: 0
    },
    totalVideos: {
      type: Number,
      default: 0
    },
    totalQuizzes: {
      type: Number,
      default: 0
    },
    totalAssignments: {
      type: Number,
      default: 0
    },
    averageContentQuality: {
      type: Number,
      default: 0
    },
    contentModerationQueue: {
      type: Number,
      default: 0
    }
  },
  
  // System Metrics
  systemMetrics: {
    serverUptime: {
      type: Number,
      default: 0 // percentage
    },
    apiResponseTime: {
      type: Number,
      default: 0 // in milliseconds
    },
    errorRate: {
      type: Number,
      default: 0 // percentage
    },
    storageUsed: {
      type: Number,
      default: 0 // in GB
    },
    bandwidthUsed: {
      type: Number,
      default: 0 // in GB
    }
  },
  
  // Geographic Data
  geographicData: {
    topCountries: [{
      country: String,
      userCount: Number,
      revenue: Number
    }],
    topCities: [{
      city: String,
      country: String,
      userCount: Number
    }]
  },
  
  // Traffic Sources
  trafficSources: {
    organic: {
      type: Number,
      default: 0
    },
    direct: {
      type: Number,
      default: 0
    },
    social: {
      type: Number,
      default: 0
    },
    referral: {
      type: Number,
      default: 0
    },
    paid: {
      type: Number,
      default: 0
    },
    email: {
      type: Number,
      default: 0
    }
  },
  
  // Custom Metrics
  customMetrics: [{
    name: String,
    value: Number,
    description: String
  }]
  
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Virtual for engagement rate
platformAnalyticsSchema.virtual('engagementRate').get(function() {
  if (this.userMetrics.totalUsers === 0) return 0;
  return (this.engagementMetrics.dailyActiveUsers / this.userMetrics.totalUsers) * 100;
});

// Virtual for revenue per user
platformAnalyticsSchema.virtual('revenuePerUser').get(function() {
  if (this.userMetrics.totalUsers === 0) return 0;
  return this.financialMetrics.totalRevenue / this.userMetrics.totalUsers;
});

// Compound index for efficient querying
platformAnalyticsSchema.index({ date: -1, period: 1 });
platformAnalyticsSchema.index({ period: 1, createdAt: -1 });

// Method to calculate growth rate
platformAnalyticsSchema.methods.calculateGrowthRate = function(previousPeriodData, metric) {
  const currentValue = this.get(metric) || 0;
  const previousValue = previousPeriodData?.get(metric) || 0;
  
  if (previousValue === 0) return currentValue > 0 ? 100 : 0;
  return ((currentValue - previousValue) / previousValue) * 100;
};

const PlatformAnalytics = mongoose.model('PlatformAnalytics', platformAnalyticsSchema);

export default PlatformAnalytics;
