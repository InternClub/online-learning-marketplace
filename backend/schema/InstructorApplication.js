import mongoose from "mongoose";

const instructorApplicationSchema = new mongoose.Schema(
  {
    // Applicant Information
    applicant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    // Application Status
    status: {
      type: String,
      enum: [
        "pending",
        "under_review",
        "approved",
        "rejected",
        "requires_changes",
      ],
      default: "pending",
    },
    applicationDate: {
      type: Date,
      default: Date.now,
    },
    reviewedDate: Date,
    approvedDate: Date,

    // Personal Information
    personalInfo: {
      fullName: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      phone: String,
      dateOfBirth: Date,
      nationality: String,
      profilePhoto: String,

      // Address
      address: {
        street: String,
        city: String,
        state: String,
        country: String,
        zipCode: String,
      },
    },

    // Professional Information
    professionalInfo: {
      headline: {
        type: String,
        required: true,
        maxlength: 200,
      },
      bio: {
        type: String,
        required: true,
        maxlength: 2000,
      },
      yearsOfExperience: {
        type: Number,
        required: true,
        min: 0,
      },
      currentJobTitle: String,
      currentEmployer: String,
      expertise: [
        {
          type: String,
          required: true,
        },
      ],
      specializations: [String],
      languagesSpoken: [
        {
          language: String,
          proficiency: {
            type: String,
            enum: ["basic", "intermediate", "advanced", "native"],
          },
        },
      ],
    },

    // Educational Background
    education: [
      {
        degree: {
          type: String,
          required: true,
        },
        field: String,
        institution: {
          type: String,
          required: true,
        },
        year: Number,
        gpa: String,
        isVerified: {
          type: Boolean,
          default: false,
        },
        verificationDocument: String, // URL to document
      },
    ],

    // Certifications
    certifications: [
      {
        name: {
          type: String,
          required: true,
        },
        issuingOrganization: {
          type: String,
          required: true,
        },
        issueDate: Date,
        expirationDate: Date,
        credentialId: String,
        credentialUrl: String,
        verificationDocument: String,
        isVerified: {
          type: Boolean,
          default: false,
        },
      },
    ],

    // Work Experience
    workExperience: [
      {
        jobTitle: {
          type: String,
          required: true,
        },
        company: {
          type: String,
          required: true,
        },
        startDate: {
          type: Date,
          required: true,
        },
        endDate: Date,
        isCurrent: {
          type: Boolean,
          default: false,
        },
        description: String,
        achievements: [String],
        skills: [String],
      },
    ],

    // Teaching Experience
    teachingExperience: {
      hasTeachingExperience: {
        type: Boolean,
        required: true,
      },
      previousTeaching: [
        {
          institution: String,
          role: String,
          subject: String,
          startDate: Date,
          endDate: Date,
          studentsCount: Number,
          description: String,
        },
      ],
      onlineTeachingExperience: {
        type: Boolean,
        default: false,
      },
      platforms: [String], // Other platforms taught on
      averageRating: Number,
      totalStudents: Number,
    },

    // Proposed Courses
    proposedCourses: [
      {
        title: {
          type: String,
          required: true,
        },
        description: String,
        category: String,
        level: {
          type: String,
          enum: ["beginner", "intermediate", "advanced"],
        },
        estimatedDuration: Number, // in hours
        targetAudience: String,
        learningObjectives: [String],
        outline: String,
        sampleContent: String, // URL to sample video/content
      },
    ],

    // Documents and Verification
    documents: {
      resume: {
        url: String,
        uploadedAt: Date,
        isVerified: {
          type: Boolean,
          default: false,
        },
      },
      idDocument: {
        type: {
          type: String,
          enum: ["passport", "driver_license", "national_id"],
        },
        url: String,
        uploadedAt: Date,
        isVerified: {
          type: Boolean,
          default: false,
        },
      },
      degreeDocuments: [String], // URLs to degree certificates
      certificationDocuments: [String], // URLs to certification documents
      portfolioUrl: String,
      linkedinProfile: String,
      personalWebsite: String,
      sampleVideo: {
        url: String,
        title: String,
        description: String,
        uploadedAt: Date,
      },
    },

    // Bank Details for Payouts
    bankDetails: {
      accountHolderName: String,
      bankName: String,
      accountNumber: String,
      routingNumber: String,
      iban: String,
      swiftCode: String,
      country: String,
      currency: String,
      isVerified: {
        type: Boolean,
        default: false,
      },
    },

    // Tax Information
    taxInfo: {
      taxId: String,
      taxCountry: String,
      taxExempt: {
        type: Boolean,
        default: false,
      },
      w9Form: String, // URL to tax form
      taxDocuments: [String],
    },

    // Review Process
    reviewProcess: {
      assignedReviewer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
      reviewNotes: String,
      rejectionReason: String,
      changesRequired: [String],
      internalNotes: String,
      reviewScore: {
        type: Number,
        min: 1,
        max: 10,
      },
      reviewCriteria: {
        qualifications: Number,
        experience: Number,
        communication: Number,
        courseProposal: Number,
        documentation: Number,
      },
    },

    // Background Check
    backgroundCheck: {
      isRequired: {
        type: Boolean,
        default: false,
      },
      status: {
        type: String,
        enum: ["not_started", "in_progress", "completed", "failed"],
        default: "not_started",
      },
      provider: String,
      completedAt: Date,
      result: String,
      notes: String,
    },

    // Interview Process
    interview: {
      isRequired: {
        type: Boolean,
        default: false,
      },
      scheduledDate: Date,
      interviewType: {
        type: String,
        enum: ["video_call", "phone", "in_person"],
      },
      interviewer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
      status: {
        type: String,
        enum: ["scheduled", "completed", "cancelled", "rescheduled"],
      },
      notes: String,
      recording: String, // URL to interview recording
      score: Number,
    },

    // Additional Information
    motivation: {
      whyTeach: {
        type: String,
        maxlength: 1000,
      },
      goals: String,
      commitment: String,
    },

    // References
    references: [
      {
        name: String,
        relationship: String,
        email: String,
        phone: String,
        hasContacted: {
          type: Boolean,
          default: false,
        },
        feedback: String,
      },
    ],

    // Application Metadata
    applicationSource: {
      type: String,
      enum: ["website", "referral", "social_media", "email_campaign", "other"],
      default: "website",
    },
    referralCode: String,
    utm: {
      source: String,
      medium: String,
      campaign: String,
      term: String,
      content: String,
    },

    // Communication History
    communications: [
      {
        type: {
          type: String,
          enum: ["email", "phone", "video_call", "message"],
        },
        direction: {
          type: String,
          enum: ["inbound", "outbound"],
        },
        subject: String,
        content: String,
        sender: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
        timestamp: {
          type: Date,
          default: Date.now,
        },
        attachments: [String],
      },
    ],
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// Virtual for application age in days
instructorApplicationSchema.virtual("applicationAge").get(function () {
  const now = new Date();
  const diff = now - this.applicationDate;
  return Math.floor(diff / (1000 * 60 * 60 * 24));
});

// Virtual for completion percentage
instructorApplicationSchema.virtual("completionPercentage").get(function () {
  let totalFields = 0;
  let completedFields = 0;

  // Check required fields completion
  if (this.personalInfo?.fullName) completedFields++;
  totalFields++;

  if (this.professionalInfo?.headline) completedFields++;
  totalFields++;

  if (this.education?.length > 0) completedFields++;
  totalFields++;

  if (this.workExperience?.length > 0) completedFields++;
  totalFields++;

  if (this.documents?.resume?.url) completedFields++;
  totalFields++;

  return Math.round((completedFields / totalFields) * 100);
});

// Method to calculate overall score
instructorApplicationSchema.methods.calculateOverallScore = function () {
  if (!this.reviewProcess.reviewCriteria) return 0;

  const criteria = this.reviewProcess.reviewCriteria;
  const scores = [
    criteria.qualifications,
    criteria.experience,
    criteria.communication,
    criteria.courseProposal,
    criteria.documentation,
  ].filter((score) => score !== undefined);

  if (scores.length === 0) return 0;

  return scores.reduce((sum, score) => sum + score, 0) / scores.length;
};

// Method to check if ready for review
instructorApplicationSchema.methods.isReadyForReview = function () {
  return (
    this.completionPercentage >= 80 &&
    this.status === "pending" &&
    this.documents?.resume?.url &&
    this.personalInfo?.fullName &&
    this.professionalInfo?.headline
  );
};

// Indexes for efficient querying
instructorApplicationSchema.index({ applicant: 1 });
instructorApplicationSchema.index({ status: 1, applicationDate: -1 });
instructorApplicationSchema.index({ "reviewProcess.assignedReviewer": 1 });
instructorApplicationSchema.index({ applicationDate: -1 });

const InstructorApplication = mongoose.model(
  "InstructorApplication",
  instructorApplicationSchema
);

export default InstructorApplication;
