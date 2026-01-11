import mongoose, { Schema, Model } from 'mongoose';

// User Interface
export interface IUser {
  clerkUserId: string;
  email: string;
  firstName?: string;
  lastName?: string;
  fullName?: string;
  username?: string;
  profileImageUrl?: string;
  createdAt: Date;
  lastActive: Date;
  updatedAt: Date;
}

// User Schema
const UserSchema = new Schema<IUser>({
  clerkUserId: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  email: {
    type: String,
    required: true,
    index: true,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  fullName: {
    type: String,
  },
  username: {
    type: String,
  },
  profileImageUrl: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  lastActive: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Daily Streak Interface
export interface IDailyStreak {
  userId: string;
  date: string;
  tasksCompleted: number;
  pointsEarned: number;
  isCompleted: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// Daily Streak Schema
const DailyStreakSchema = new Schema<IDailyStreak>({
  userId: {
    type: String,
    required: true,
    index: true,
  },
  date: {
    type: String,
    required: true,
  },
  tasksCompleted: {
    type: Number,
    default: 0,
  },
  pointsEarned: {
    type: Number,
    default: 0,
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Compound index for userId and date (unique combination)
DailyStreakSchema.index({ userId: 1, date: 1 }, { unique: true });

// Achievement Interface
export interface IAchievement {
  userId: string;
  achievementType: string;
  milestone: number;
  unlockedAt: Date;
}

// Achievement Schema
const AchievementSchema = new Schema<IAchievement>({
  userId: {
    type: String,
    required: true,
    index: true,
  },
  achievementType: {
    type: String,
    required: true,
  },
  milestone: {
    type: Number,
    required: true,
  },
  unlockedAt: {
    type: Date,
    default: Date.now,
  },
});

// Compound index for unique achievements
AchievementSchema.index({ userId: 1, achievementType: 1, milestone: 1 }, { unique: true });

// User Stats Interface
export interface IUserStats {
  userId: string;
  totalPoints: number;
  currentStreak: number;
  longestStreak: number;
  totalActiveDays: number;
  lastUpdated: Date;
}

// User Stats Schema
const UserStatsSchema = new Schema<IUserStats>({
  userId: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  totalPoints: {
    type: Number,
    default: 0,
  },
  currentStreak: {
    type: Number,
    default: 0,
  },
  longestStreak: {
    type: Number,
    default: 0,
  },
  totalActiveDays: {
    type: Number,
    default: 0,
  },
  lastUpdated: {
    type: Date,
    default: Date.now,
  },
});

// Export Models
export const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>('User', UserSchema);
export const DailyStreak: Model<IDailyStreak> = mongoose.models.DailyStreak || mongoose.model<IDailyStreak>('DailyStreak', DailyStreakSchema);
export const Achievement: Model<IAchievement> = mongoose.models.Achievement || mongoose.model<IAchievement>('Achievement', AchievementSchema);
export const UserStats: Model<IUserStats> = mongoose.models.UserStats || mongoose.model<IUserStats>('UserStats', UserStatsSchema);
