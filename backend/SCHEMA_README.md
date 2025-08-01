# MongoDB Schema Documentation

This document outlines the MongoDB schema structure for the Online Learning Marketplace application.

## Schema Overview

The application uses 7 main collections:

1. **Users** - Handles all user types (Learners, Instructors, Admins)
2. **Courses** - Course content and structure
3. **Reviews** - Course ratings and feedback
4. **Orders** - Purchase transactions
5. **Certificates** - Course completion certificates
6. **Coupons** - Discount codes and promotions
7. **Assignments** - Course assignments and submissions

## Schema Relationships

```
User (1) ←→ (Many) Courses (as instructor)
User (1) ←→ (Many) Orders (as student)
User (1) ←→ (Many) Reviews (as student)
User (1) ←→ (Many) Certificates (as student)
User (1) ←→ (Many) Assignments (submissions)

Course (1) ←→ (Many) Reviews
Course (1) ←→ (Many) Orders (items)
Course (1) ←→ (Many) Certificates
Course (1) ←→ (Many) Assignments

Order (1) ←→ (Many) Coupons (usage)
```

## Key Features by Schema

### User Schema
- **Multi-role support**: Single schema handles Learners, Instructors, and Admins
- **Profile customization**: Role-specific fields (learnerProfile, instructorProfile)
- **Authentication**: Password hashing, JWT tokens, OAuth support
- **Progress tracking**: Course enrollment, completion, daily goals
- **Security**: Login history, password reset tokens, email verification

### Course Schema
- **Structured content**: Sections and lessons with multimedia support
- **Flexible pricing**: Regular pricing, discounts, coupons
- **Analytics**: View counts, completion rates, revenue tracking
- **Live course support**: Scheduled sessions, meeting links
- **Rich metadata**: SEO fields, tags, learning objectives

### Review Schema
- **Detailed feedback**: Overall and category-specific ratings
- **Moderation**: Status management, flagging system
- **Instructor responses**: Public replies to reviews
- **Helpful voting**: Community-driven quality assessment

### Order Schema
- **Complete transaction tracking**: From cart to completion
- **Payment integration**: Multiple gateway support
- **Refund management**: Partial and full refunds
- **Invoice generation**: Automated billing documents
- **Analytics tracking**: UTM parameters, conversion data

### Certificate Schema
- **Verification system**: Unique codes and validation URLs
- **Blockchain ready**: Future NFT/blockchain integration
- **Sharing features**: Social media integration
- **Template system**: Customizable certificate designs
- **Analytics**: Download and view tracking

### Coupon Schema
- **Flexible discounts**: Percentage and fixed amount
- **Smart targeting**: User segments, course categories
- **Usage limits**: Per-user and total usage controls
- **Campaign tracking**: UTM tags and promotional data
- **Auto-application**: Rule-based coupon application

### Assignment Schema
- **Multiple formats**: Text, file uploads, URLs, projects
- **Grading system**: Rubrics, auto-grading, peer review
- **Submission management**: Late policies, resubmissions
- **Feedback tools**: Detailed instructor comments
- **Statistics**: Performance analytics and insights

## Database Indexes

Each schema includes optimized indexes for:
- Frequently queried fields
- Compound queries (e.g., user + course)
- Sorting operations (e.g., creation date)
- Unique constraints (e.g., email, course enrollment)

## Environment Variables Required

See `.env.example` for all required environment variables including:
- Database connection
- JWT secrets
- Payment gateway keys
- Email service configuration
- File upload service credentials

## Usage Examples

### Create a new user
```javascript
import { User } from './schema/index.js';

const newUser = new User({
  firstName: 'John',
  lastName: 'Doe',
  email: 'john@example.com',
  password: 'securePassword',
  role: 'learner'
});

await newUser.save();
```

### Create a course
```javascript
import { Course } from './schema/index.js';

const newCourse = new Course({
  title: 'JavaScript Fundamentals',
  description: 'Learn JavaScript from scratch',
  instructor: userId,
  category: 'Programming',
  level: 'beginner',
  price: 99.99,
  thumbnail: 'https://example.com/thumbnail.jpg'
});

await newCourse.save();
```

### Process an order
```javascript
import { Order } from './schema/index.js';

const newOrder = new Order({
  student: userId,
  items: [{
    course: courseId,
    title: 'JavaScript Fundamentals',
    price: 99.99,
    instructor: instructorId
  }],
  totalAmount: 99.99,
  paymentMethod: 'stripe'
});

await newOrder.save();
```

## Best Practices

1. **Use transactions** for multi-document operations (orders, enrollments)
2. **Implement soft deletes** for important data (courses, users)
3. **Regular backups** and monitoring
4. **Index optimization** based on query patterns
5. **Data validation** at both schema and application levels
6. **Pagination** for large result sets
7. **Caching** for frequently accessed data

## Migration Strategy

When updating schemas:
1. Add new fields as optional
2. Create migration scripts for data transformation
3. Test on development/staging environments
4. Use gradual rollout for production
5. Maintain backward compatibility during transition periods
