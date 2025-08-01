import mongoose from "mongoose";

const lessonSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: String,
    videoUrl: String,
    videoDuration: Number, // in seconds
    videoThumbnail: String,
    content: String, // Text content
    resources: [
      {
        name: String,
        url: String,
        type: {
          type: String,
          enum: ["pdf", "doc", "link", "image", "other"],
        },
      },
    ],
    quiz: {
      questions: [
        {
          question: String,
          options: [String],
          correctAnswer: Number, // index of correct option
          explanation: String,
        },
      ],
      passingScore: {
        type: Number,
        default: 70,
      },
    },
    assignment: {
      title: String,
      description: String,
      submissionFormat: String,
      maxScore: Number,
      dueDate: Date,
    },
    order: {
      type: Number,
      required: true,
    },
    isPreview: {
      type: Boolean,
      default: false,
    },
    estimatedTime: Number, // in minutes
  },
  {
    timestamps: true,
  }
);

const sectionSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: String,
    lessons: [lessonSchema],
    order: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const courseSchema = new mongoose.Schema(
  {
    // Basic Information
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },
    subtitle: {
      type: String,
      trim: true,
      maxlength: 200,
    },
    description: {
      type: String,
      required: true,
      maxlength: 5000,
    },
    shortDescription: {
      type: String,
      maxlength: 500,
    },

    // Instructor Information
    instructor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    coInstructors: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],

    // Course Content
    sections: [sectionSchema],
    totalLessons: {
      type: Number,
      default: 0,
    },
    totalDuration: {
      type: Number,
      default: 0, // in minutes
    },

    // Course Details
    category: {
      type: String,
      required: true,
      enum: [
        "Programming",
        "Web Development",
        "Mobile Development",
        "Data Science",
        "Machine Learning",
        "Artificial Intelligence",
        "Cybersecurity",
        "Cloud Computing",
        "DevOps",
        "UI/UX Design",
        "Digital Marketing",
        "Business",
        "Finance",
        "Photography",
        "Music",
        "Language Learning",
        "Personal Development",
        "Health & Fitness",
        "Cooking",
        "Arts & Crafts",
      ],
    },
    subcategory: String,
    level: {
      type: String,
      enum: ["beginner", "intermediate", "advanced"],
      required: true,
    },
    language: {
      type: String,
      default: "English",
    },

    // Media
    thumbnail: {
      type: String,
      required: true,
    },
    previewVideo: String,
    images: [String],

    // Learning Outcomes
    learningObjectives: [
      {
        type: String,
        required: true,
      },
    ],
    prerequisites: [String],
    targetAudience: [String],

    // Pricing
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    originalPrice: Number,
    discountPercentage: {
      type: Number,
      default: 0,
      min: 0,
      max: 100,
    },
    currency: {
      type: String,
      default: "USD",
    },

    // Enrollment and Status
    enrolledStudents: [
      {
        student: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
        enrolledAt: {
          type: Date,
          default: Date.now,
        },
        progress: {
          type: Number,
          default: 0,
          min: 0,
          max: 100,
        },
        lastAccessedAt: Date,
        completedLessons: [String], // lesson IDs
        certificateIssued: {
          type: Boolean,
          default: false,
        },
      },
    ],
    maxStudents: Number,
    status: {
      type: String,
      enum: ["draft", "pending_review", "published", "suspended", "archived"],
      default: "draft",
    },
    publishedAt: Date,

    // Ratings and Reviews
    rating: {
      average: {
        type: Number,
        default: 0,
        min: 0,
        max: 5,
      },
      count: {
        type: Number,
        default: 0,
      },
      distribution: {
        1: { type: Number, default: 0 },
        2: { type: Number, default: 0 },
        3: { type: Number, default: 0 },
        4: { type: Number, default: 0 },
        5: { type: Number, default: 0 },
      },
    },

    // Analytics
    analytics: {
      totalViews: {
        type: Number,
        default: 0,
      },
      totalEnrollments: {
        type: Number,
        default: 0,
      },
      completionRate: {
        type: Number,
        default: 0,
      },
      averageWatchTime: {
        type: Number,
        default: 0,
      },
      totalRevenue: {
        type: Number,
        default: 0,
      },
    },

    // Course Features
    features: {
      hasQuizzes: {
        type: Boolean,
        default: false,
      },
      hasAssignments: {
        type: Boolean,
        default: false,
      },
      hasCertificate: {
        type: Boolean,
        default: false,
      },
      hasClosedCaptions: {
        type: Boolean,
        default: false,
      },
      isMobileAccessible: {
        type: Boolean,
        default: true,
      },
      hasLifetimeAccess: {
        type: Boolean,
        default: true,
      },
      downloadableResources: {
        type: Boolean,
        default: false,
      },
    },

    // Tags and SEO
    tags: [String],
    slug: {
      type: String,
      unique: true,
    },
    metaTitle: String,
    metaDescription: String,

    // Course Schedule (for live courses)
    schedule: {
      isLive: {
        type: Boolean,
        default: false,
      },
      startDate: Date,
      endDate: Date,
      sessions: [
        {
          title: String,
          date: Date,
          duration: Number, // in minutes
          meetingLink: String,
          isCompleted: {
            type: Boolean,
            default: false,
          },
        },
      ],
      timezone: String,
    },

    // Additional Settings
    settings: {
      allowComments: {
        type: Boolean,
        default: true,
      },
      allowReviews: {
        type: Boolean,
        default: true,
      },
      autoEnroll: {
        type: Boolean,
        default: false,
      },
      sendWelcomeEmail: {
        type: Boolean,
        default: true,
      },
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// Virtual for enrollment count
courseSchema.virtual("enrollmentCount").get(function () {
  return this.enrolledStudents?.length || 0;
});

// Virtual for discounted price
courseSchema.virtual("discountedPrice").get(function () {
  if (this.discountPercentage > 0) {
    return this.price - (this.price * this.discountPercentage) / 100;
  }
  return this.price;
});

// Virtual for total course duration
courseSchema.virtual("formattedDuration").get(function () {
  const hours = Math.floor(this.totalDuration / 60);
  const minutes = this.totalDuration % 60;
  return `${hours}h ${minutes}m`;
});

// Pre-save middleware to generate slug
courseSchema.pre("save", function (next) {
  if (this.isModified("title")) {
    this.slug = this.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");
  }
  next();
});

// Pre-save middleware to calculate totals
courseSchema.pre("save", function (next) {
  if (this.isModified("sections")) {
    let totalLessons = 0;
    let totalDuration = 0;

    this.sections.forEach((section) => {
      totalLessons += section.lessons.length;
      section.lessons.forEach((lesson) => {
        totalDuration += lesson.estimatedTime || 0;
      });
    });

    this.totalLessons = totalLessons;
    this.totalDuration = totalDuration;
  }
  next();
});

// Indexes for better query performance
courseSchema.index({ instructor: 1 });
courseSchema.index({ category: 1, level: 1 });
courseSchema.index({ status: 1 });
courseSchema.index({ "rating.average": -1 });
courseSchema.index({ price: 1 });
courseSchema.index({ createdAt: -1 });
courseSchema.index({ slug: 1 });
courseSchema.index({ tags: 1 });

const Course = mongoose.model("Course", courseSchema);

export default Course;
