import mongoose from "mongoose";

const systemSettingsSchema = new mongoose.Schema(
  {
    // Settings Category
    category: {
      type: String,
      required: true,
      enum: [
        "general",
        "payment",
        "email",
        "security",
        "courses",
        "users",
        "notifications",
        "analytics",
        "appearance",
        "integrations",
        "content_management",
        "instructor_settings",
        "learner_settings",
      ],
    },

    // Setting Key-Value
    key: {
      type: String,
      required: true,
      unique: true,
    },
    value: {
      type: mongoose.Schema.Types.Mixed,
      required: true,
    },
    defaultValue: mongoose.Schema.Types.Mixed,

    // Setting Metadata
    name: {
      type: String,
      required: true,
    },
    description: String,
    dataType: {
      type: String,
      enum: ["string", "number", "boolean", "object", "array"],
      required: true,
    },

    // Validation Rules
    validation: {
      required: {
        type: Boolean,
        default: false,
      },
      min: Number, // For numbers
      max: Number, // For numbers
      minLength: Number, // For strings
      maxLength: Number, // For strings
      pattern: String, // Regex pattern
      allowedValues: [mongoose.Schema.Types.Mixed], // Enum values
      customValidation: String, // Custom validation function name
    },

    // Display Information
    displayOrder: {
      type: Number,
      default: 0,
    },
    isVisible: {
      type: Boolean,
      default: true,
    },
    isEditable: {
      type: Boolean,
      default: true,
    },
    group: String, // Grouping within category
    helpText: String,
    placeholder: String,

    // Security and Access
    isSecret: {
      type: Boolean,
      default: false,
    }, // For sensitive values like API keys
    accessLevel: {
      type: String,
      enum: ["public", "admin_only", "super_admin_only"],
      default: "admin_only",
    },

    // Change Management
    lastModifiedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    changeReason: String,
    approvalRequired: {
      type: Boolean,
      default: false,
    },
    approvedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    approvedAt: Date,

    // Version Control
    version: {
      type: Number,
      default: 1,
    },
    previousValues: [
      {
        value: mongoose.Schema.Types.Mixed,
        changedBy: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
        changedAt: {
          type: Date,
          default: Date.now,
        },
        reason: String,
      },
    ],

    // Environment Specific
    environment: {
      type: String,
      enum: ["development", "staging", "production"],
      default: "production",
    },

    // Feature Flags
    isFeatureFlag: {
      type: Boolean,
      default: false,
    },
    rolloutPercentage: {
      type: Number,
      min: 0,
      max: 100,
      default: 100,
    },

    // Dependencies
    dependsOn: [String], // Other setting keys this depends on
    affects: [String], // Other settings affected by this one

    // Caching
    isCacheable: {
      type: Boolean,
      default: true,
    },
    cacheTimeout: {
      type: Number,
      default: 3600, // seconds
    },

    // Monitoring
    isMonitored: {
      type: Boolean,
      default: false,
    },
    alertThreshold: mongoose.Schema.Types.Mixed,

    // Tags and Labels
    tags: [String],
    labels: [
      {
        key: String,
        value: String,
      },
    ],
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// Virtual for masked value (for secrets)
systemSettingsSchema.virtual("maskedValue").get(function () {
  if (this.isSecret && typeof this.value === "string") {
    return "*".repeat(Math.min(this.value.length, 8));
  }
  return this.value;
});

// Virtual for validation status
systemSettingsSchema.virtual("isValid").get(function () {
  // Basic validation logic
  const val = this.value;
  const validation = this.validation;

  if (
    validation.required &&
    (val === null || val === undefined || val === "")
  ) {
    return false;
  }

  if (validation.allowedValues && validation.allowedValues.length > 0) {
    return validation.allowedValues.includes(val);
  }

  if (this.dataType === "number") {
    if (validation.min !== undefined && val < validation.min) return false;
    if (validation.max !== undefined && val > validation.max) return false;
  }

  if (this.dataType === "string") {
    if (validation.minLength !== undefined && val.length < validation.minLength)
      return false;
    if (validation.maxLength !== undefined && val.length > validation.maxLength)
      return false;
    if (validation.pattern && !new RegExp(validation.pattern).test(val))
      return false;
  }

  return true;
});

// Method to update value with history tracking
systemSettingsSchema.methods.updateValue = function (
  newValue,
  changedBy,
  reason = ""
) {
  // Store previous value in history
  this.previousValues.push({
    value: this.value,
    changedBy: this.lastModifiedBy,
    changedAt: this.updatedAt,
    reason: this.changeReason || "",
  });

  // Update current value
  this.value = newValue;
  this.lastModifiedBy = changedBy;
  this.changeReason = reason;
  this.version += 1;

  return this.save();
};

// Method to rollback to previous value
systemSettingsSchema.methods.rollback = function (
  changedBy,
  reason = "Rollback"
) {
  if (this.previousValues.length === 0) {
    throw new Error("No previous values to rollback to");
  }

  const lastValue = this.previousValues[this.previousValues.length - 1];

  // Store current value in history before rollback
  this.previousValues.push({
    value: this.value,
    changedBy: this.lastModifiedBy,
    changedAt: new Date(),
    reason: this.changeReason || "",
  });

  // Rollback to previous value
  this.value = lastValue.value;
  this.lastModifiedBy = changedBy;
  this.changeReason = reason;
  this.version += 1;

  return this.save();
};

// Static method to get settings by category
systemSettingsSchema.statics.getByCategory = function (
  category,
  includeSecrets = false
) {
  const query = { category, isVisible: true };

  if (!includeSecrets) {
    query.isSecret = { $ne: true };
  }

  return this.find(query).sort({ group: 1, displayOrder: 1 });
};

// Static method to get public settings
systemSettingsSchema.statics.getPublicSettings = function () {
  return this.find({
    accessLevel: "public",
    isVisible: true,
    isSecret: { $ne: true },
  }).select("key value name description category");
};

// Static method to bulk update settings
systemSettingsSchema.statics.bulkUpdate = function (updates, changedBy) {
  const operations = updates.map((update) => ({
    updateOne: {
      filter: { key: update.key },
      update: {
        $set: {
          value: update.value,
          lastModifiedBy: changedBy,
          changeReason: update.reason || "Bulk update",
          updatedAt: new Date(),
        },
        $inc: { version: 1 },
        $push: {
          previousValues: {
            value: "$value",
            changedBy: "$lastModifiedBy",
            changedAt: "$updatedAt",
            reason: "$changeReason",
          },
        },
      },
    },
  }));

  return this.bulkWrite(operations);
};

// Pre-save middleware for validation
systemSettingsSchema.pre("save", function (next) {
  // Ensure default value is set
  if (this.defaultValue === undefined) {
    this.defaultValue = this.value;
  }

  // Limit previous values history to last 10 entries
  if (this.previousValues.length > 10) {
    this.previousValues = this.previousValues.slice(-10);
  }

  next();
});

// Indexes for efficient querying
systemSettingsSchema.index({ category: 1, displayOrder: 1 });
systemSettingsSchema.index({ key: 1 }, { unique: true });
systemSettingsSchema.index({ isVisible: 1, accessLevel: 1 });
systemSettingsSchema.index({ lastModifiedBy: 1, updatedAt: -1 });

const SystemSettings = mongoose.model("SystemSettings", systemSettingsSchema);

export default SystemSettings;
