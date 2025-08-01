import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    // Basic Information
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: true,
    },
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    instructor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    // Review Content
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    title: {
      type: String,
      trim: true,
      maxlength: 100,
    },
    comment: {
      type: String,
      required: true,
      maxlength: 1000,
    },

    // Detailed Ratings
    detailedRatings: {
      contentQuality: {
        type: Number,
        min: 1,
        max: 5,
      },
      instructorQuality: {
        type: Number,
        min: 1,
        max: 5,
      },
      valueForMoney: {
        type: Number,
        min: 1,
        max: 5,
      },
      courseStructure: {
        type: Number,
        min: 1,
        max: 5,
      },
    },

    // Review Status and Moderation
    status: {
      type: String,
      enum: ["pending", "approved", "rejected", "flagged"],
      default: "pending",
    },
    isVerifiedPurchase: {
      type: Boolean,
      default: false,
    },

    // Helpful Votes
    helpfulVotes: {
      helpful: {
        type: Number,
        default: 0,
      },
      notHelpful: {
        type: Number,
        default: 0,
      },
      voters: [
        {
          user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
          },
          vote: {
            type: String,
            enum: ["helpful", "not_helpful"],
          },
          votedAt: {
            type: Date,
            default: Date.now,
          },
        },
      ],
    },

    // Instructor Response
    instructorResponse: {
      comment: String,
      respondedAt: Date,
      isPublic: {
        type: Boolean,
        default: true,
      },
    },

    // Additional Information
    courseProgress: {
      type: Number,
      min: 0,
      max: 100,
      default: 0,
    },
    isRecommended: {
      type: Boolean,
      default: true,
    },
    tags: [String], // e.g., ['beginner-friendly', 'well-explained', 'needs-improvement']

    // Moderation
    moderationNotes: String,
    moderatedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    moderatedAt: Date,

    // Flags and Reports
    flagged: {
      isFlagged: {
        type: Boolean,
        default: false,
      },
      flaggedBy: [
        {
          user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
          },
          reason: {
            type: String,
            enum: ["spam", "inappropriate", "fake", "harassment", "other"],
          },
          flaggedAt: {
            type: Date,
            default: Date.now,
          },
        },
      ],
      totalFlags: {
        type: Number,
        default: 0,
      },
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// Virtual for helpful ratio
reviewSchema.virtual("helpfulRatio").get(function () {
  const total = this.helpfulVotes.helpful + this.helpfulVotes.notHelpful;
  if (total === 0) return 0;
  return (this.helpfulVotes.helpful / total) * 100;
});

// Virtual for overall helpful score
reviewSchema.virtual("helpfulScore").get(function () {
  return this.helpfulVotes.helpful - this.helpfulVotes.notHelpful;
});

// Compound index to ensure one review per user per course
reviewSchema.index({ course: 1, student: 1 }, { unique: true });

// Other indexes for better query performance
reviewSchema.index({ course: 1, status: 1, createdAt: -1 });
reviewSchema.index({ instructor: 1, status: 1 });
reviewSchema.index({ rating: -1 });
reviewSchema.index({ "helpfulVotes.helpful": -1 });
reviewSchema.index({ status: 1 });

const Review = mongoose.model("Review", reviewSchema);

export default Review;
