import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema({
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  discountedPrice: {
    type: Number,
    min: 0,
  },
  discountPercentage: {
    type: Number,
    default: 0,
    min: 0,
    max: 100,
  },
  instructor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const orderSchema = new mongoose.Schema(
  {
    // Order Information
    orderNumber: {
      type: String,
      unique: true,
      required: true,
    },
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    // Order Items
    items: [orderItemSchema],

    // Pricing Information
    subtotal: {
      type: Number,
      required: true,
      min: 0,
    },
    discountAmount: {
      type: Number,
      default: 0,
      min: 0,
    },
    taxAmount: {
      type: Number,
      default: 0,
      min: 0,
    },
    totalAmount: {
      type: Number,
      required: true,
      min: 0,
    },
    currency: {
      type: String,
      default: "USD",
    },

    // Coupon Information
    couponCode: {
      type: String,
      trim: true,
    },
    couponDiscount: {
      type: Number,
      default: 0,
      min: 0,
    },

    // Payment Information
    paymentMethod: {
      type: String,
      enum: [
        "credit_card",
        "debit_card",
        "paypal",
        "stripe",
        "razorpay",
        "bank_transfer",
      ],
      required: true,
    },
    paymentStatus: {
      type: String,
      enum: [
        "pending",
        "processing",
        "completed",
        "failed",
        "cancelled",
        "refunded",
        "partially_refunded",
      ],
      default: "pending",
    },
    transactionId: {
      type: String,
      unique: true,
      sparse: true,
    },
    paymentGateway: {
      type: String,
      enum: ["stripe", "paypal", "razorpay", "square"],
    },
    paymentDetails: {
      cardLast4: String,
      cardBrand: String,
      paymentMethodId: String,
      gatewayTransactionId: String,
      gatewayResponse: mongoose.Schema.Types.Mixed,
    },

    // Order Status
    orderStatus: {
      type: String,
      enum: [
        "pending",
        "confirmed",
        "processing",
        "completed",
        "cancelled",
        "refunded",
      ],
      default: "pending",
    },

    // Dates
    orderDate: {
      type: Date,
      default: Date.now,
    },
    confirmationDate: Date,
    completionDate: Date,
    cancellationDate: Date,

    // Billing Information
    billingAddress: {
      firstName: String,
      lastName: String,
      email: String,
      phone: String,
      address: {
        street: String,
        city: String,
        state: String,
        country: String,
        zipCode: String,
      },
    },

    // Refund Information
    refunds: [
      {
        amount: {
          type: Number,
          required: true,
          min: 0,
        },
        reason: {
          type: String,
          enum: [
            "customer_request",
            "course_unavailable",
            "technical_issue",
            "policy_violation",
            "other",
          ],
        },
        status: {
          type: String,
          enum: ["pending", "approved", "rejected", "processed"],
          default: "pending",
        },
        requestedAt: {
          type: Date,
          default: Date.now,
        },
        processedAt: Date,
        refundTransactionId: String,
        notes: String,
        processedBy: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
      },
    ],

    // Invoice Information
    invoice: {
      invoiceNumber: String,
      invoiceUrl: String,
      isGenerated: {
        type: Boolean,
        default: false,
      },
      generatedAt: Date,
    },

    // Notes and Additional Information
    customerNotes: String,
    adminNotes: String,

    // Enrollment Status
    enrollmentStatus: {
      type: String,
      enum: ["pending", "enrolled", "failed"],
      default: "pending",
    },
    enrollmentDate: Date,

    // Analytics and Tracking
    analytics: {
      sourceUrl: String,
      utmSource: String,
      utmMedium: String,
      utmCampaign: String,
      referrer: String,
      ipAddress: String,
      userAgent: String,
      country: String,
      deviceType: {
        type: String,
        enum: ["desktop", "mobile", "tablet"],
      },
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// Virtual for total savings
orderSchema.virtual("totalSavings").get(function () {
  return this.discountAmount + this.couponDiscount;
});

// Virtual for final amount after all discounts
orderSchema.virtual("finalAmount").get(function () {
  return this.subtotal - this.totalSavings + this.taxAmount;
});

// Pre-save middleware to generate order number
orderSchema.pre("save", function (next) {
  if (this.isNew && !this.orderNumber) {
    const timestamp = Date.now().toString();
    const random = Math.floor(Math.random() * 1000)
      .toString()
      .padStart(3, "0");
    this.orderNumber = `ORD-${timestamp}-${random}`;
  }
  next();
});

// Pre-save middleware to generate invoice number
orderSchema.pre("save", function (next) {
  if (
    this.isModified("orderStatus") &&
    this.orderStatus === "completed" &&
    !this.invoice.invoiceNumber
  ) {
    const timestamp = Date.now().toString();
    const random = Math.floor(Math.random() * 1000)
      .toString()
      .padStart(3, "0");
    this.invoice.invoiceNumber = `INV-${timestamp}-${random}`;
  }
  next();
});

// Indexes for better query performance
orderSchema.index({ student: 1, createdAt: -1 });
orderSchema.index({ orderNumber: 1 });
orderSchema.index({ transactionId: 1 });
orderSchema.index({ orderStatus: 1 });
orderSchema.index({ paymentStatus: 1 });
orderSchema.index({ "items.course": 1 });
orderSchema.index({ "items.instructor": 1 });
orderSchema.index({ orderDate: -1 });

const Order = mongoose.model("Order", orderSchema);

export default Order;
