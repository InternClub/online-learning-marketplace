import mongoose from "mongoose";

const submissionSchema = new mongoose.Schema(
  {
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    submittedAt: {
      type: Date,
      default: Date.now,
    },
    content: {
      textSubmission: String,
      fileUrls: [String], // URLs to uploaded files
      linkSubmissions: [String], // URLs to external resources
    },
    status: {
      type: String,
      enum: ["submitted", "late", "graded", "returned", "resubmitted"],
      default: "submitted",
    },
    grade: {
      score: {
        type: Number,
        min: 0,
      },
      maxScore: Number,
      percentage: Number,
      letterGrade: String,
      passFail: {
        type: String,
        enum: ["pass", "fail", "pending"],
      },
    },
    feedback: {
      instructorComments: String,
      rubricScores: [
        {
          criterion: String,
          score: Number,
          maxScore: Number,
          comments: String,
        },
      ],
      overallFeedback: String,
      suggestionsForImprovement: String,
    },
    gradedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    gradedAt: Date,
    isLate: {
      type: Boolean,
      default: false,
    },
    latePenalty: {
      penaltyPercentage: Number,
      penaltyPoints: Number,
      reason: String,
    },
    revisionRequested: {
      isRequested: {
        type: Boolean,
        default: false,
      },
      requestedAt: Date,
      reason: String,
      dueDate: Date,
    },
  },
  {
    timestamps: true,
  }
);

const assignmentSchema = new mongoose.Schema(
  {
    // Basic Information
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 200,
    },
    description: {
      type: String,
      required: true,
      maxlength: 5000,
    },
    instructions: {
      type: String,
      maxlength: 5000,
    },

    // Course and Lesson Association
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: true,
    },
    lesson: {
      type: mongoose.Schema.Types.ObjectId,
      required: true, // Reference to lesson ID within course
    },
    instructor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    // Assignment Settings
    type: {
      type: String,
      enum: [
        "text",
        "file_upload",
        "url_submission",
        "quiz",
        "project",
        "peer_review",
      ],
      required: true,
    },
    maxScore: {
      type: Number,
      required: true,
      min: 0,
      default: 100,
    },
    passingScore: {
      type: Number,
      min: 0,
    },

    // Submission Settings
    submissionFormat: {
      allowedFileTypes: [String], // e.g., ['pdf', 'doc', 'docx', 'txt']
      maxFileSize: Number, // in MB
      maxFiles: {
        type: Number,
        default: 1,
      },
      allowTextSubmission: {
        type: Boolean,
        default: true,
      },
      allowUrlSubmission: {
        type: Boolean,
        default: false,
      },
      wordLimit: {
        min: Number,
        max: Number,
      },
    },

    // Timing and Deadlines
    availableFrom: {
      type: Date,
      default: Date.now,
    },
    dueDate: {
      type: Date,
      required: true,
    },
    allowLateSubmissions: {
      type: Boolean,
      default: false,
    },
    latePenalty: {
      type: {
        type: String,
        enum: ["percentage", "points", "none"],
        default: "none",
      },
      value: Number, // percentage or points to deduct
      gracePeriod: Number, // hours of grace period
    },

    // Assignment Content
    attachments: [
      {
        name: String,
        url: String,
        type: String,
        size: Number,
      },
    ],
    rubric: [
      {
        criterion: {
          type: String,
          required: true,
        },
        description: String,
        maxPoints: {
          type: Number,
          required: true,
        },
        levels: [
          {
            name: String, // e.g., 'Excellent', 'Good', 'Fair', 'Poor'
            description: String,
            points: Number,
          },
        ],
      },
    ],

    // Peer Review Settings (if applicable)
    peerReview: {
      enabled: {
        type: Boolean,
        default: false,
      },
      reviewsPerStudent: {
        type: Number,
        default: 2,
      },
      reviewDueDate: Date,
      anonymousReviews: {
        type: Boolean,
        default: true,
      },
      reviewCriteria: [String],
    },

    // Grading Settings
    gradingMethod: {
      type: String,
      enum: ["points", "percentage", "letter_grade", "pass_fail", "rubric"],
      default: "points",
    },
    autoGrading: {
      enabled: {
        type: Boolean,
        default: false,
      },
      rules: [
        {
          condition: String,
          action: String,
          value: mongoose.Schema.Types.Mixed,
        },
      ],
    },

    // Assignment Status
    status: {
      type: String,
      enum: ["draft", "published", "closed", "archived"],
      default: "draft",
    },
    publishedAt: Date,

    // Submissions
    submissions: [submissionSchema],

    // Statistics
    statistics: {
      totalSubmissions: {
        type: Number,
        default: 0,
      },
      onTimeSubmissions: {
        type: Number,
        default: 0,
      },
      lateSubmissions: {
        type: Number,
        default: 0,
      },
      averageScore: {
        type: Number,
        default: 0,
      },
      highestScore: {
        type: Number,
        default: 0,
      },
      lowestScore: {
        type: Number,
        default: 0,
      },
      gradedSubmissions: {
        type: Number,
        default: 0,
      },
    },

    // Settings and Preferences
    settings: {
      showScoreToStudents: {
        type: Boolean,
        default: true,
      },
      showFeedbackToStudents: {
        type: Boolean,
        default: true,
      },
      allowResubmissions: {
        type: Boolean,
        default: false,
      },
      maxResubmissions: Number,
      notifyInstructorOnSubmission: {
        type: Boolean,
        default: true,
      },
      plagiarismCheck: {
        enabled: {
          type: Boolean,
          default: false,
        },
        threshold: Number, // similarity percentage threshold
      },
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// Virtual for submission rate
assignmentSchema.virtual("submissionRate").get(function () {
  // This would need to be calculated based on enrolled students
  // For now, return a placeholder
  return this.statistics.totalSubmissions;
});

// Virtual for average score percentage
assignmentSchema.virtual("averageScorePercentage").get(function () {
  if (this.maxScore === 0) return 0;
  return (this.statistics.averageScore / this.maxScore) * 100;
});

// Virtual for time remaining
assignmentSchema.virtual("timeRemaining").get(function () {
  const now = new Date();
  const timeDiff = this.dueDate.getTime() - now.getTime();

  if (timeDiff <= 0) return "Overdue";

  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );

  if (days > 0) return `${days} day(s) ${hours} hour(s)`;
  return `${hours} hour(s)`;
});

// Pre-save middleware to update statistics
assignmentSchema.pre("save", function (next) {
  if (this.isModified("submissions")) {
    const submissions = this.submissions;

    this.statistics.totalSubmissions = submissions.length;
    this.statistics.onTimeSubmissions = submissions.filter(
      (s) => !s.isLate
    ).length;
    this.statistics.lateSubmissions = submissions.filter(
      (s) => s.isLate
    ).length;
    this.statistics.gradedSubmissions = submissions.filter(
      (s) => s.grade && s.grade.score !== undefined
    ).length;

    const gradedScores = submissions
      .filter((s) => s.grade && s.grade.score !== undefined)
      .map((s) => s.grade.score);

    if (gradedScores.length > 0) {
      this.statistics.averageScore =
        gradedScores.reduce((a, b) => a + b, 0) / gradedScores.length;
      this.statistics.highestScore = Math.max(...gradedScores);
      this.statistics.lowestScore = Math.min(...gradedScores);
    }
  }
  next();
});

// Method to check if assignment is overdue
assignmentSchema.methods.isOverdue = function () {
  return new Date() > this.dueDate;
};

// Method to get submission by student
assignmentSchema.methods.getSubmissionByStudent = function (studentId) {
  return this.submissions.find(
    (submission) => submission.student.toString() === studentId.toString()
  );
};

// Method to check if late submission is allowed
assignmentSchema.methods.canSubmitLate = function () {
  if (!this.allowLateSubmissions) return false;
  if (!this.latePenalty.gracePeriod) return this.allowLateSubmissions;

  const now = new Date();
  const gracePeriodEnd = new Date(
    this.dueDate.getTime() + this.latePenalty.gracePeriod * 60 * 60 * 1000
  );

  return now <= gracePeriodEnd;
};

// Indexes for better query performance
assignmentSchema.index({ course: 1, lesson: 1 });
assignmentSchema.index({ instructor: 1, status: 1 });
assignmentSchema.index({ dueDate: 1 });
assignmentSchema.index({ "submissions.student": 1 });
assignmentSchema.index({ status: 1, availableFrom: 1 });

const Assignment = mongoose.model("Assignment", assignmentSchema);

export default Assignment;
