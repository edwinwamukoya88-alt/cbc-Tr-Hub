import { User as FirebaseUser } from "firebase/auth";
import { Timestamp } from "firebase/firestore";
import { User, UserRole, Plan } from "@/types";

export function mapFirebaseUserToAppUser(
  firebaseUser: FirebaseUser,
  userData?: Partial<User>
): User {
  return {
    uid: firebaseUser.uid,
    email: firebaseUser.email ?? "",
    displayName: firebaseUser.displayName ?? "",
    role: (userData?.role as UserRole) ?? "teacher",
    avatarUrl: firebaseUser.photoURL ?? userData?.avatarUrl,
    phone: firebaseUser.phoneNumber ?? userData?.phone,
    schoolId: userData?.schoolId,
    plan: (userData?.plan as Plan) ?? "free",
    isActive: userData?.isActive ?? true,
    preferences: {
      language: (userData?.preferences?.language ?? "en") as "en" | "sw",
      biblicalIntegration: userData?.preferences?.biblicalIntegration ?? false,
      darkMode: userData?.preferences?.darkMode ?? false,
    },
    createdAt: userData?.createdAt ?? null as unknown as Timestamp,
    updatedAt: userData?.updatedAt ?? null as unknown as Timestamp,
  };
}

export function getRoleRedirect(role: UserRole): string {
  switch (role) {
    case "super_admin":
      return "/admin/dashboard";
    case "school_admin":
      return "/dashboard";
    case "teacher":
      return "/dashboard";
    case "parent":
      return "/dashboard";
    default:
      return "/dashboard";
  }
}
