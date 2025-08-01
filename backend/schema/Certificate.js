import mongoose from "mongoose";

const certificateSchema = new mongoose.Schema(
  {
    // Basic Information
    certificateNumber: {
      type: String,
      unique: true,
      required: true,
    },
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: true,
    },
    instructor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    // Certificate Details
    studentName: {
      type: String,
      required: true,
    },
    courseTitle: {
      type: String,
      required: true,
    },
    instructorName: {
      type: String,
      required: true,
    },

    // Completion Information
    completionDate: {
      type: Date,
      required: true,
      default: Date.now,
    },
    issueDate: {
      type: Date,
      required: true,
      default: Date.now,
    },
    expirationDate: Date, // Some certificates may expire

    // Certificate Content
    description: {
      type: String,
      default: "has successfully completed the course",
    },
    skills: [String], // Skills gained from the course
    grade: {
      type: String,
      enum: [
        "A+",
        "A",
        "A-",
        "B+",
        "B",
        "B-",
        "C+",
        "C",
        "Pass",
        "Distinction",
      ],
      default: "Pass",
    },
    finalScore: {
      type: Number,
      min: 0,
      max: 100,
    },

    // Certificate Validation
    verificationCode: {
      type: String,
      unique: true,
      required: true,
    },
    isValid: {
      type: Boolean,
      default: true,
    },
    validationUrl: String,

    // Certificate File Information
    certificateUrl: String, // URL to the generated certificate PDF/image
    templateUsed: {
      type: String,
      default: "default",
    },
    templateVersion: {
      type: String,
      default: "1.0",
    },

    // Digital Signature Information
    digitalSignature: {
      instructorSignature: String, // URL to instructor's signature image
      organizationSeal: String, // URL to organization seal/logo
      signatureDate: {
        type: Date,
        default: Date.now,
      },
    },

    // Blockchain/NFT Information (for future use)
    blockchain: {
      isOnBlockchain: {
        type: Boolean,
        default: false,
      },
      blockchainNetwork: String, // e.g., 'ethereum', 'polygon'
      contractAddress: String,
      tokenId: String,
      transactionHash: String,
      mintedAt: Date,
    },

    // Certificate Sharing
    sharing: {
      isPublic: {
        type: Boolean,
        default: true,
      },
      sharedOn: [
        {
          platform: {
            type: String,
            enum: ["linkedin", "twitter", "facebook", "email"],
          },
          sharedAt: {
            type: Date,
            default: Date.now,
          },
        },
      ],
      shareUrl: String,
      viewCount: {
        type: Number,
        default: 0,
      },
    },

    // Certificate Metadata
    metadata: {
      courseDuration: Number, // in hours
      courseCategory: String,
      courseLevel: String,
      completionPercentage: {
        type: Number,
        default: 100,
        min: 0,
        max: 100,
      },
      totalLessons: Number,
      quizzesPassed: Number,
      assignmentsCompleted: Number,
    },

    // Administrative Information
    status: {
      type: String,
      enum: ["active", "revoked", "suspended", "expired"],
      default: "active",
    },
    revocationReason: String,
    revokedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    revokedAt: Date,

    // Additional Notes
    notes: String,
    tags: [String],

    // Certificate Downloads and Views
    analytics: {
      downloadCount: {
        type: Number,
        default: 0,
      },
      viewCount: {
        type: Number,
        default: 0,
      },
      lastDownloaded: Date,
      lastViewed: Date,
      downloadHistory: [
        {
          downloadedAt: {
            type: Date,
            default: Date.now,
          },
          ipAddress: String,
          userAgent: String,
        },
      ],
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// Virtual for certificate age
certificateSchema.virtual("certificateAge").get(function () {
  const now = new Date();
  const issued = this.issueDate;
  const diffTime = Math.abs(now - issued);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
});

// Virtual for verification URL
certificateSchema.virtual("verificationUrl").get(function () {
  return `/verify-certificate/${this.verificationCode}`;
});

// Virtual for public certificate URL
certificateSchema.virtual("publicUrl").get(function () {
  return `/certificate/${this.certificateNumber}`;
});

// Pre-save middleware to generate certificate number
certificateSchema.pre("save", function (next) {
  if (this.isNew && !this.certificateNumber) {
    const timestamp = Date.now().toString();
    const random = Math.floor(Math.random() * 10000)
      .toString()
      .padStart(4, "0");
    this.certificateNumber = `CERT-${timestamp}-${random}`;
  }
  next();
});

// Pre-save middleware to generate verification code
certificateSchema.pre("save", function (next) {
  if (this.isNew && !this.verificationCode) {
    const crypto = require("crypto");
    this.verificationCode = crypto
      .randomBytes(16)
      .toString("hex")
      .toUpperCase();
  }
  next();
});

// Compound index to ensure one certificate per student per course
certificateSchema.index({ student: 1, course: 1 }, { unique: true });

// Other indexes for better query performance
certificateSchema.index({ certificateNumber: 1 });
certificateSchema.index({ verificationCode: 1 });
certificateSchema.index({ student: 1, createdAt: -1 });
certificateSchema.index({ instructor: 1 });
certificateSchema.index({ course: 1 });
certificateSchema.index({ status: 1 });
certificateSchema.index({ issueDate: -1 });

const Certificate = mongoose.model("Certificate", certificateSchema);

export default Certificate;
