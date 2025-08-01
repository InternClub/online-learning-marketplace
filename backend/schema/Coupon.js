import mongoose from "mongoose";

const couponSchema = new mongoose.Schema(
  {
    // Basic Information
    code: {
      type: String,
      required: true,
      unique: true,
      uppercase: true,
      trim: true,
      maxlength: 50,
    },
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },
    description: {
      type: String,
      maxlength: 500,
    },

    // Discount Information
    type: {
      type: String,
      enum: ["percentage", "fixed_amount"],
      required: true,
    },
    value: {
      type: Number,
      required: true,
      min: 0,
    },
    maxDiscountAmount: {
      type: Number,
      min: 0,
    }, // For percentage coupons, maximum discount amount
    minOrderAmount: {
      type: Number,
      default: 0,
      min: 0,
    },

    // Validity Period
    startDate: {
      type: Date,
      required: true,
      default: Date.now,
    },
    endDate: {
      type: Date,
      required: true,
    },

    // Usage Limits
    maxUsage: {
      type: Number,
      default: null, // null means unlimited
    },
    maxUsagePerUser: {
      type: Number,
      default: 1,
    },
    currentUsage: {
      type: Number,
      default: 0,
    },

    // Applicability
    applicableFor: {
      type: String,
      enum: ["all_courses", "specific_courses", "category", "instructor"],
      default: "all_courses",
    },
    specificCourses: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
      },
    ],
    categories: [String],
    instructors: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],

    // User Restrictions
    eligibleUsers: {
      type: String,
      enum: ["all_users", "new_users", "existing_users", "specific_users"],
      default: "all_users",
    },
    specificUsers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    userTags: [String], // e.g., ['vip', 'premium', 'beta_tester']

    // Status and Settings
    status: {
      type: String,
      enum: ["active", "inactive", "expired", "exhausted"],
      default: "active",
    },
    isPublic: {
      type: Boolean,
      default: false,
    }, // Whether the coupon is publicly visible

    // Creator Information
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    // Usage Tracking
    usageHistory: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
        order: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Order",
        },
        discountAmount: Number,
        usedAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],

    // Advanced Settings
    stackable: {
      type: Boolean,
      default: false,
    }, // Can be combined with other coupons
    firstTimeOnly: {
      type: Boolean,
      default: false,
    }, // Only for first-time purchases

    // Promotional Information
    promotional: {
      campaign: String,
      source: String, // e.g., 'email', 'social_media', 'affiliate'
      medium: String,
      utmTags: {
        source: String,
        medium: String,
        campaign: String,
        term: String,
        content: String,
      },
    },

    // Auto-application Rules
    autoApply: {
      enabled: {
        type: Boolean,
        default: false,
      },
      conditions: {
        cartValue: Number,
        courseCount: Number,
        userType: String,
      },
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// Virtual for remaining usage
couponSchema.virtual("remainingUsage").get(function () {
  if (this.maxUsage === null) return "Unlimited";
  return Math.max(0, this.maxUsage - this.currentUsage);
});

// Virtual for usage percentage
couponSchema.virtual("usagePercentage").get(function () {
  if (this.maxUsage === null) return 0;
  return (this.currentUsage / this.maxUsage) * 100;
});

// Virtual for active status
couponSchema.virtual("isActive").get(function () {
  const now = new Date();
  return (
    this.status === "active" &&
    this.startDate <= now &&
    this.endDate >= now &&
    (this.maxUsage === null || this.currentUsage < this.maxUsage)
  );
});

// Virtual for days until expiry
couponSchema.virtual("daysUntilExpiry").get(function () {
  const now = new Date();
  const timeDiff = this.endDate.getTime() - now.getTime();
  return Math.ceil(timeDiff / (1000 * 3600 * 24));
});

// Pre-save middleware to update status based on usage and dates
couponSchema.pre("save", function (next) {
  const now = new Date();

  if (this.endDate < now) {
    this.status = "expired";
  } else if (this.maxUsage && this.currentUsage >= this.maxUsage) {
    this.status = "exhausted";
  } else if (
    this.startDate <= now &&
    this.endDate >= now &&
    this.status !== "inactive"
  ) {
    this.status = "active";
  }

  next();
});

// Method to check if coupon is valid for a user
couponSchema.methods.isValidForUser = function (
  userId,
  userType = "existing_users"
) {
  // Check basic validity
  if (!this.isActive) return false;

  // Check user eligibility
  if (this.eligibleUsers === "new_users" && userType !== "new_users")
    return false;
  if (this.eligibleUsers === "existing_users" && userType === "new_users")
    return false;
  if (
    this.eligibleUsers === "specific_users" &&
    !this.specificUsers.includes(userId)
  )
    return false;

  // Check per-user usage limit
  const userUsageCount = this.usageHistory.filter(
    (usage) => usage.user.toString() === userId.toString()
  ).length;

  if (userUsageCount >= this.maxUsagePerUser) return false;

  return true;
};

// Method to calculate discount amount
couponSchema.methods.calculateDiscount = function (orderAmount) {
  if (orderAmount < this.minOrderAmount) return 0;

  let discount = 0;

  if (this.type === "percentage") {
    discount = (orderAmount * this.value) / 100;
    if (this.maxDiscountAmount && discount > this.maxDiscountAmount) {
      discount = this.maxDiscountAmount;
    }
  } else if (this.type === "fixed_amount") {
    discount = Math.min(this.value, orderAmount);
  }

  return Math.round(discount * 100) / 100; // Round to 2 decimal places
};

// Indexes for better query performance
couponSchema.index({ code: 1 });
couponSchema.index({ status: 1, startDate: 1, endDate: 1 });
couponSchema.index({ createdBy: 1 });
couponSchema.index({ endDate: 1 });
couponSchema.index({ "usageHistory.user": 1 });

const Coupon = mongoose.model("Coupon", couponSchema);

export default Coupon;
