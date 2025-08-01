import mongoose from 'mongoose';

const notificationSchema = new mongoose.Schema({
  // Recipient Information
  recipient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  recipientType: {
    type: String,
    enum: ['learner', 'instructor', 'admin'],
    required: true
  },
  
  // Notification Content
  title: {
    type: String,
    required: true,
    maxlength: 200
  },
  message: {
    type: String,
    required: true,
    maxlength: 1000
  },
  shortMessage: {
    type: String,
    maxlength: 100 // For mobile push notifications
  },
  
  // Notification Type and Category
  type: {
    type: String,
    required: true,
    enum: [
      // Course related
      'course_enrollment', 'course_completion', 'new_lesson', 'course_update',
      'course_approved', 'course_rejected', 'course_published',
      
      // Assignment/Quiz related
      'assignment_due', 'assignment_graded', 'quiz_available', 'quiz_results',
      
      // Payment related
      'payment_successful', 'payment_failed', 'refund_processed', 'payout_sent',
      
      // Certificate related
      'certificate_issued', 'certificate_expiring',
      
      // Review related
      'new_review', 'review_response',
      
      // Instructor related
      'instructor_application_status', 'new_student_enrolled', 'earnings_update',
      
      // Admin related
      'new_instructor_application', 'course_pending_approval', 'user_report',
      'system_maintenance', 'security_alert',
      
      // General
      'welcome', 'account_update', 'promotion', 'reminder', 'system_update'
    ]
  },
  category: {
    type: String,
    enum: ['academic', 'financial', 'system', 'marketing', 'security'],
    required: true
  },
  
  // Priority and Status
  priority: {
    type: String,
    enum: ['low', 'medium', 'high', 'urgent'],
    default: 'medium'
  },
  status: {
    type: String,
    enum: ['pending', 'sent', 'delivered', 'read', 'failed'],
    default: 'pending'
  },
  
  // Related Entities
  relatedEntity: {
    entityType: {
      type: String,
      enum: ['course', 'assignment', 'order', 'review', 'certificate', 'user', 'application']
    },
    entityId: mongoose.Schema.Types.ObjectId,
    entityName: String // For easy reference
  },
  
  // Delivery Channels
  channels: {
    inApp: {
      enabled: {
        type: Boolean,
        default: true
      },
      sent: Boolean,
      sentAt: Date,
      read: Boolean,
      readAt: Date
    },
    email: {
      enabled: {
        type: Boolean,
        default: false
      },
      sent: Boolean,
      sentAt: Date,
      delivered: Boolean,
      deliveredAt: Date,
      opened: Boolean,
      openedAt: Date,
      clicked: Boolean,
      clickedAt: Date,
      emailId: String, // Email service provider ID
      failureReason: String
    },
    push: {
      enabled: {
        type: Boolean,
        default: false
      },
      sent: Boolean,
      sentAt: Date,
      delivered: Boolean,
      deliveredAt: Date,
      clicked: Boolean,
      clickedAt: Date,
      pushId: String,
      failureReason: String
    },
    sms: {
      enabled: {
        type: Boolean,
        default: false
      },
      sent: Boolean,
      sentAt: Date,
      delivered: Boolean,
      deliveredAt: Date,
      smsId: String,
      failureReason: String
    }
  },
  
  // Action and Navigation
  actionRequired: {
    type: Boolean,
    default: false
  },
  actionUrl: String, // Deep link or URL to navigate to
  actionText: String, // Button text like "View Course", "Take Action"
  expiresAt: Date,
  
  // Scheduling
  scheduledFor: Date, // For scheduled notifications
  isImmediate: {
    type: Boolean,
    default: true
  },
  
  // Personalization
  personalization: {
    variables: mongoose.Schema.Types.Mixed, // Dynamic content variables
    templateId: String,
    locale: {
      type: String,
      default: 'en'
    }
  },
  
  // Grouping and Batching
  groupId: String, // For grouping related notifications
  batchId: String, // For batch sending
  isGrouped: {
    type: Boolean,
    default: false
  },
  
  // Metadata
  metadata: {
    source: String, // System component that triggered this
    campaign: String, // Marketing campaign if applicable
    tags: [String],
    customData: mongoose.Schema.Types.Mixed
  },
  
  // Analytics
  analytics: {
    impressions: {
      type: Number,
      default: 0
    },
    clicks: {
      type: Number,
      default: 0
    },
    conversions: {
      type: Number,
      default: 0
    },
    engagementScore: {
      type: Number,
      default: 0
    }
  },
  
  // Error Handling
  retryCount: {
    type: Number,
    default: 0,
    max: 3
  },
  lastRetryAt: Date,
  errors: [{
    channel: String,
    error: String,
    timestamp: {
      type: Date,
      default: Date.now
    }
  }],
  
  // Admin Fields
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  isSystemGenerated: {
    type: Boolean,
    default: true
  }
  
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Virtual for overall delivery status
notificationSchema.virtual('deliveryStatus').get(function() {
  const channels = this.channels;
  let delivered = 0;
  let total = 0;
  
  if (channels.inApp.enabled) {
    total++;
    if (channels.inApp.read) delivered++;
  }
  if (channels.email.enabled) {
    total++;
    if (channels.email.delivered) delivered++;
  }
  if (channels.push.enabled) {
    total++;
    if (channels.push.delivered) delivered++;
  }
  if (channels.sms.enabled) {
    total++;
    if (channels.sms.delivered) delivered++;
  }
  
  return total > 0 ? (delivered / total) * 100 : 0;
});

// Virtual for engagement score calculation
notificationSchema.virtual('engagementRate').get(function() {
  if (this.analytics.impressions === 0) return 0;
  return (this.analytics.clicks / this.analytics.impressions) * 100;
});

// Virtual for time since sent
notificationSchema.virtual('timeSinceSent').get(function() {
  if (!this.channels.inApp.sentAt) return null;
  return Date.now() - this.channels.inApp.sentAt.getTime();
});

// Method to mark as read
notificationSchema.methods.markAsRead = function() {
  if (this.channels.inApp.enabled && !this.channels.inApp.read) {
    this.channels.inApp.read = true;
    this.channels.inApp.readAt = new Date();
    this.status = 'read';
    this.analytics.impressions += 1;
    return this.save();
  }
};

// Method to track click
notificationSchema.methods.trackClick = function(channel = 'inApp') {
  this.analytics.clicks += 1;
  
  if (this.channels[channel]) {
    this.channels[channel].clicked = true;
    this.channels[channel].clickedAt = new Date();
  }
  
  return this.save();
};

// Method to check if expired
notificationSchema.methods.isExpired = function() {
  return this.expiresAt && new Date() > this.expiresAt;
};

// Method to retry failed delivery
notificationSchema.methods.retry = function() {
  if (this.retryCount < 3) {
    this.retryCount += 1;
    this.lastRetryAt = new Date();
    this.status = 'pending';
    return this.save();
  }
  return false;
};

// Static method to mark notifications as read for user
notificationSchema.statics.markAllAsReadForUser = function(userId) {
  return this.updateMany(
    { 
      recipient: userId, 
      'channels.inApp.enabled': true,
      'channels.inApp.read': false 
    },
    { 
      'channels.inApp.read': true,
      'channels.inApp.readAt': new Date(),
      status: 'read'
    }
  );
};

// Static method to get unread count for user
notificationSchema.statics.getUnreadCountForUser = function(userId) {
  return this.countDocuments({
    recipient: userId,
    'channels.inApp.enabled': true,
    'channels.inApp.read': false,
    $or: [
      { expiresAt: { $exists: false } },
      { expiresAt: { $gt: new Date() } }
    ]
  });
};

// Indexes for efficient querying
notificationSchema.index({ recipient: 1, createdAt: -1 });
notificationSchema.index({ recipient: 1, 'channels.inApp.read': 1 });
notificationSchema.index({ status: 1 });
notificationSchema.index({ type: 1 });
notificationSchema.index({ scheduledFor: 1 });
notificationSchema.index({ expiresAt: 1 });
notificationSchema.index({ 'relatedEntity.entityType': 1, 'relatedEntity.entityId': 1 });

const Notification = mongoose.model('Notification', notificationSchema);

export default Notification;
