import mongoose from 'mongoose';

const adminActivityLogSchema = new mongoose.Schema({
  // Admin Information
  admin: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  adminName: {
    type: String,
    required: true
  },
  adminEmail: {
    type: String,
    required: true
  },
  
  // Activity Details
  action: {
    type: String,
    required: true,
    enum: [
      'user_created', 'user_updated', 'user_suspended', 'user_deleted', 'user_activated',
      'instructor_approved', 'instructor_rejected', 'instructor_suspended',
      'course_approved', 'course_rejected', 'course_suspended', 'course_deleted',
      'category_created', 'category_updated', 'category_deleted',
      'coupon_created', 'coupon_updated', 'coupon_deleted',
      'order_refunded', 'order_cancelled',
      'review_moderated', 'review_deleted',
      'certificate_revoked', 'certificate_reissued',
      'platform_settings_updated', 'system_maintenance',
      'bulk_email_sent', 'report_generated'
    ]
  },
  description: {
    type: String,
    required: true,
    maxlength: 500
  },
  
  // Target Information (what was acted upon)
  targetType: {
    type: String,
    enum: ['user', 'course', 'order', 'review', 'certificate', 'coupon', 'category', 'system'],
    required: true
  },
  targetId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  targetName: String, // For easy reference
  
  // Action Details
  actionDetails: {
    previousValue: mongoose.Schema.Types.Mixed,
    newValue: mongoose.Schema.Types.Mixed,
    reason: String,
    notes: String
  },
  
  // System Information
  ipAddress: String,
  userAgent: String,
  sessionId: String,
  
  // Impact Assessment
  impact: {
    type: String,
    enum: ['low', 'medium', 'high', 'critical'],
    default: 'low'
  },
  affectedUsers: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  
  // Approval Workflow (for sensitive actions)
  requiresApproval: {
    type: Boolean,
    default: false
  },
  approvalStatus: {
    type: String,
    enum: ['pending', 'approved', 'rejected'],
    default: 'approved'
  },
  approvedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  approvedAt: Date,
  
  // Metadata
  tags: [String],
  severity: {
    type: String,
    enum: ['info', 'warning', 'error', 'critical'],
    default: 'info'
  }
  
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Virtual for action summary
adminActivityLogSchema.virtual('actionSummary').get(function() {
  return `${this.adminName} ${this.action.replace('_', ' ')} ${this.targetType}: ${this.targetName || this.targetId}`;
});

// Indexes for efficient querying
adminActivityLogSchema.index({ admin: 1, createdAt: -1 });
adminActivityLogSchema.index({ action: 1, createdAt: -1 });
adminActivityLogSchema.index({ targetType: 1, targetId: 1 });
adminActivityLogSchema.index({ createdAt: -1 });
adminActivityLogSchema.index({ severity: 1 });
adminActivityLogSchema.index({ impact: 1 });

const AdminActivityLog = mongoose.model('AdminActivityLog', adminActivityLogSchema);

export default AdminActivityLog;
