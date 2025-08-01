import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    // Basic Information
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      maxlength: 100,
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
    },
    description: {
      type: String,
      maxlength: 500,
    },

    // Hierarchy
    parentCategory: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      default: null,
    },
    subcategories: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
      },
    ],
    level: {
      type: Number,
      default: 0, // 0 = root, 1 = subcategory, 2 = sub-subcategory
    },
    path: {
      type: String, // e.g., "Programming/Web Development/React"
    },

    // Display Information
    icon: {
      type: String, // Icon class or URL
      default: "📚",
    },
    color: {
      type: String, // Hex color code
      default: "#3B82F6",
    },
    thumbnail: {
      type: String, // Image URL
    },
    banner: {
      type: String, // Banner image URL
    },

    // Status and Visibility
    status: {
      type: String,
      enum: ["visible", "hidden", "archived"],
      default: "visible",
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },

    // Content Management
    courses: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
      },
    ],
    courseCount: {
      type: Number,
      default: 0,
    },
    activeCoursesCount: {
      type: Number,
      default: 0,
    },

    // SEO and Marketing
    seo: {
      metaTitle: String,
      metaDescription: String,
      keywords: [String],
      ogImage: String,
    },

    // Display Order and Priority
    sortOrder: {
      type: Number,
      default: 0,
    },
    priority: {
      type: String,
      enum: ["low", "medium", "high"],
      default: "medium",
    },

    // Admin Management
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    lastModifiedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    // Analytics
    analytics: {
      viewCount: {
        type: Number,
        default: 0,
      },
      searchCount: {
        type: Number,
        default: 0,
      },
      popularityScore: {
        type: Number,
        default: 0,
      },
      avgCourseRating: {
        type: Number,
        default: 0,
      },
      totalEnrollments: {
        type: Number,
        default: 0,
      },
      totalRevenue: {
        type: Number,
        default: 0,
      },
    },

    // Category-specific Settings
    settings: {
      allowInstructorSubmission: {
        type: Boolean,
        default: true,
      },
      requiresApproval: {
        type: Boolean,
        default: false,
      },
      minimumPriceLimit: {
        type: Number,
        default: 0,
      },
      maximumPriceLimit: Number,
      allowedContentTypes: [
        {
          type: String,
          enum: ["video", "text", "quiz", "assignment", "live_session"],
        },
      ],
      defaultDuration: Number, // in hours
      certificateTemplate: String,
    },

    // Tags and Labels
    tags: [String],
    skills: [String], // Skills learned in this category

    // Promotional Content
    promotional: {
      isPromoted: {
        type: Boolean,
        default: false,
      },
      promotionText: String,
      promotionStartDate: Date,
      promotionEndDate: Date,
      discountPercentage: Number,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// Virtual for full path with names
categorySchema.virtual("fullPath").get(function () {
  return this.path || this.name;
});

// Virtual for course enrollment rate
categorySchema.virtual("enrollmentRate").get(function () {
  if (this.analytics.viewCount === 0) return 0;
  return (this.analytics.totalEnrollments / this.analytics.viewCount) * 100;
});

// Virtual for average course price
categorySchema.virtual("averageCoursePrice").get(function () {
  if (this.courseCount === 0) return 0;
  return this.analytics.totalRevenue / this.analytics.totalEnrollments || 0;
});

// Pre-save middleware to generate slug
categorySchema.pre("save", function (next) {
  if (this.isModified("name")) {
    this.slug = this.name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");
  }
  next();
});

// Pre-save middleware to update path
categorySchema.pre("save", async function (next) {
  if (this.isModified("parentCategory") || this.isModified("name")) {
    if (this.parentCategory) {
      try {
        const parent = await this.constructor.findById(this.parentCategory);
        if (parent) {
          this.path = `${parent.path || parent.name}/${this.name}`;
          this.level = (parent.level || 0) + 1;
        }
      } catch (error) {
        return next(error);
      }
    } else {
      this.path = this.name;
      this.level = 0;
    }
  }
  next();
});

// Method to get all descendant categories
categorySchema.methods.getDescendants = async function () {
  const descendants = [];
  const stack = [this._id];

  while (stack.length > 0) {
    const currentId = stack.pop();
    const children = await this.constructor.find({ parentCategory: currentId });

    for (const child of children) {
      descendants.push(child);
      stack.push(child._id);
    }
  }

  return descendants;
};

// Method to get category hierarchy
categorySchema.methods.getHierarchy = async function () {
  const hierarchy = [];
  let current = this;

  while (current) {
    hierarchy.unshift({
      id: current._id,
      name: current.name,
      slug: current.slug,
    });

    if (current.parentCategory) {
      current = await this.constructor.findById(current.parentCategory);
    } else {
      current = null;
    }
  }

  return hierarchy;
};

// Method to update course count
categorySchema.methods.updateCourseCount = async function () {
  const Course = mongoose.model("Course");
  const totalCount = await Course.countDocuments({ category: this.name });
  const activeCount = await Course.countDocuments({
    category: this.name,
    status: "published",
  });

  this.courseCount = totalCount;
  this.activeCoursesCount = activeCount;
  await this.save();
};

// Indexes for better query performance
categorySchema.index({ name: 1 });
categorySchema.index({ slug: 1 });
categorySchema.index({ parentCategory: 1 });
categorySchema.index({ status: 1, isActive: 1 });
categorySchema.index({ isFeatured: 1, sortOrder: 1 });
categorySchema.index({ level: 1 });
categorySchema.index({ "analytics.popularityScore": -1 });

const Category = mongoose.model("Category", categorySchema);

export default Category;
