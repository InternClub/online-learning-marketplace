import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
  {
    // Basic Information
    firstName: {
      type: String,
      required: true,
      trim: true,
      maxlength: 50,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
      maxlength: 50,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        "Please enter a valid email",
      ],
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },

    // User Role and Status
    role: {
      type: String,
      enum: ["learner", "instructor", "admin"],
      default: "learner",
    },
    isEmailVerified: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: true,
    },

    // Profile Information
    avatar: {
      type: String, // URL to profile image
      default: "",
    },
    dateOfBirth: {
      type: Date,
    },
    phoneNumber: {
      type: String,
      trim: true,
    },
    address: {
      street: String,
      city: String,
      state: String,
      country: String,
      zipCode: String,
    },
    bio: {
      type: String,
      maxlength: 1000,
    },

    // Social Links
    socialLinks: {
      linkedin: String,
      twitter: String,
      website: String,
      github: String,
    },

    // Preferences and Settings
    preferences: {
      theme: {
        type: String,
        enum: ["light", "dark"],
        default: "light",
      },
      language: {
        type: String,
        default: "en",
      },
      emailNotifications: {
        type: Boolean,
        default: true,
      },
      pushNotifications: {
        type: Boolean,
        default: true,
      },
    },

    // Learner-specific fields
    learnerProfile: {
      enrolledCourses: [
        {
          courseId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Course",
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
          completedLessons: [
            {
              type: mongoose.Schema.Types.ObjectId,
              ref: "Lesson",
            },
          ],
          lastAccessedAt: Date,
          certificateIssued: {
            type: Boolean,
            default: false,
          },
          certificateUrl: String,
        },
      ],
      wishlist: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Course",
        },
      ],
      cart: [
        {
          courseId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Course",
          },
          addedAt: {
            type: Date,
            default: Date.now,
          },
        },
      ],
      dailyGoals: {
        learningMinutesGoal: {
          type: Number,
          default: 30,
        },
        coursesGoal: {
          type: Number,
          default: 1,
        },
        currentStreak: {
          type: Number,
          default: 0,
        },
        longestStreak: {
          type: Number,
          default: 0,
        },
        lastActivityDate: Date,
      },
      achievements: [
        {
          type: {
            type: String,
            enum: [
              "course_completion",
              "streak_milestone",
              "skill_mastery",
              "first_purchase",
            ],
          },
          title: String,
          description: String,
          earnedAt: {
            type: Date,
            default: Date.now,
          },
          icon: String,
        },
      ],
      skillsLearned: [String],
      totalLearningTime: {
        type: Number,
        default: 0, // in minutes
      },
    },

    // Instructor-specific fields
    instructorProfile: {
      headline: String,
      expertise: [String],
      teachingExperience: Number, // years
      qualification: [
        {
          degree: String,
          institution: String,
          year: Number,
          field: String,
        },
      ],
      certifications: [
        {
          name: String,
          issuingOrganization: String,
          issueDate: Date,
          expirationDate: Date,
          credentialId: String,
          credentialUrl: String,
        },
      ],
      coursesCreated: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Course",
        },
      ],
      totalStudents: {
        type: Number,
        default: 0,
      },
      totalEarnings: {
        type: Number,
        default: 0,
      },
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
      },
      bankDetails: {
        accountNumber: String,
        routingNumber: String,
        bankName: String,
        accountHolderName: String,
      },
      isVerified: {
        type: Boolean,
        default: false,
      },
    },

    // Authentication and Security
    googleId: String, // For Google OAuth
    resetPasswordToken: String,
    resetPasswordExpires: Date,
    emailVerificationToken: String,
    emailVerificationExpires: Date,
    lastLogin: Date,
    loginHistory: [
      {
        loginAt: {
          type: Date,
          default: Date.now,
        },
        ipAddress: String,
        userAgent: String,
        location: String,
      },
    ],
  },
  {
    timestamps: true, // Adds createdAt and updatedAt
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// Virtual for full name
userSchema.virtual("fullName").get(function () {
  return `${this.firstName} ${this.lastName}`;
});

// Virtual for learner enrolled courses count
userSchema.virtual("enrolledCoursesCount").get(function () {
  return this.learnerProfile?.enrolledCourses?.length || 0;
});

// Virtual for instructor courses count
userSchema.virtual("createdCoursesCount").get(function () {
  return this.instructorProfile?.coursesCreated?.length || 0;
});

// Pre-save middleware to hash password
// userSchema.pre("save", async function (next) {
//   if (!this.isModified("password")) return next();

//   try {
//     const salt = await bcrypt.genSalt(12);
//     this.password = await bcrypt.hash(this.password, salt);
//     next();
//   } catch (error) {
//     next(error);
//   }
// });

// Method to compare password
userSchema.methods.comparePassword = async function (candidatePassword) {
  try {
    return await bcrypt.compare(candidatePassword, this.password);
  } catch (error) {
    throw error;
  }
};

// Method to generate email verification token
userSchema.methods.generateEmailVerificationToken = function () {
  const crypto = require("crypto");
  const token = crypto.randomBytes(32).toString("hex");
  this.emailVerificationToken = token;
  this.emailVerificationExpires = Date.now() + 24 * 60 * 60 * 1000; // 24 hours
  return token;
};

// Method to generate password reset token
userSchema.methods.generatePasswordResetToken = function () {
  const crypto = require("crypto");
  const token = crypto.randomBytes(32).toString("hex");
  this.resetPasswordToken = token;
  this.resetPasswordExpires = Date.now() + 10 * 60 * 1000; // 10 minutes
  return token;
};

// Indexes for better query performance
userSchema.index({ email: 1 });
userSchema.index({ role: 1 });
userSchema.index({ "learnerProfile.enrolledCourses.courseId": 1 });
userSchema.index({ "instructorProfile.coursesCreated": 1 });
userSchema.index({ createdAt: -1 });

const User = mongoose.model("User", userSchema);

export default User;
