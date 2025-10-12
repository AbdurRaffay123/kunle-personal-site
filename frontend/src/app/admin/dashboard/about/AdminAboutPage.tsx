/**
 * Admin About Page - Editable "About Me" page
 */

"use client";

import { useEffect, useState } from "react";
import AdminLayout from "@/components/Admin/AdminLayout";
import { UserIcon, PhotoIcon } from "@heroicons/react/24/outline";
import { getProfile, createOrUpdateProfile } from "@/apis/About/api";
import { toast } from "react-hot-toast";

const BACKEND_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

interface AboutData {
  name: string;
  designation: string;
  bio: string;
  image: string | File; // <-- allow both types
  socialLinks: {
    linkedin: string;
    github: string;
    twitter: string;
    email: string;
  };
}

export default function AdminAboutPage() {
  const [aboutData, setAboutData] = useState<AboutData | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<AboutData | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Fetch profile on mount
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await getProfile();
        if (res.success && res.data) {
          setAboutData(res.data);
          setFormData(res.data); // Initialize formData for editing
        } else {
          // No profile data: initialize empty formData for creation
          setFormData({
            name: "",
            designation: "",
            bio: "",
            image: "",
            socialLinks: {
              linkedin: "",
              github: "",
              twitter: "",
              email: "",
            },
          });
          setIsEditing(true); // Show form for creation
        }
      } catch (error: any) {
        toast.error(error.message || "Failed to fetch profile");
        // On error, allow creation
        setFormData({
          name: "",
          designation: "",
          bio: "",
          image: "",
          socialLinks: {
            linkedin: "",
            github: "",
            twitter: "",
            email: "",
          },
        });
        setIsEditing(true);
      }
    };
    fetchProfile();
  }, []);

  const handleEdit = () => {
    setFormData(aboutData); // Set formData to current profile
    setIsEditing(true);
  };

  const handleSave = async () => {
    if (!formData) return;
    setIsLoading(true);
    try {
      const fd = new FormData();
      fd.append("name", formData.name);
      fd.append("designation", formData.designation);
      fd.append("bio", formData.bio);

      // Always send socialLinks as a JSON string
      fd.append("socialLinks", JSON.stringify(formData.socialLinks));

      if (formData.image && formData.image instanceof File) {
        fd.append("image", formData.image);
      }

      const res = await createOrUpdateProfile(fd);
      if (res.success && res.data) {
        setAboutData(res.data);
        setFormData(res.data);
        toast.success("About information saved successfully!");
        setIsEditing(false);
      } else {
        toast.error(res.message || "Failed to save profile");
      }
    } catch (error: any) {
      toast.error(error.message || "Failed to save profile");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    setFormData(aboutData);
    setIsEditing(false);
  };

  const handleChange = (field: string, value: string | File) => {
    if (!formData) return;
    if (field.startsWith("socialLinks.")) {
      const socialField = field.split(".")[1];
      setFormData({
        ...formData,
        socialLinks: {
          ...formData.socialLinks,
          [socialField]: value as string,
        },
      });
    } else {
      setFormData({
        ...formData,
        [field]: value,
      });
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && formData) {
      setFormData({
        ...formData,
        image: file,
      });
    }
  };

  return (
    <AdminLayout title="About Me">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
              About Me
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              Manage your personal information and bio
            </p>
          </div>
          {/* Show Edit/Create button only if not editing */}
          {!isEditing && (
            <button
              onClick={handleEdit}
              className="bg-gradient-to-r from-blue-600 to-sky-500 text-white px-6 py-3 rounded-md hover:opacity-90 transition font-medium"
              disabled={isLoading}
            >
              {aboutData ? "Edit Profile" : "Create Profile"}
            </button>
          )}
        </div>

        {/* Content */}
        <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-md max-w-4xl mx-auto space-y-6">
          {isEditing ? (
            <EditForm
              formData={formData!}
              onChange={handleChange}
              onImageUpload={handleImageUpload}
              onCancel={handleCancel}
              onSave={handleSave}
            />
          ) : (
            aboutData && <ViewMode aboutData={aboutData} />
          )}
        </div>
      </div>
    </AdminLayout>
  );
}

// View Mode Component
function ViewMode({ aboutData }: { aboutData: AboutData }) {
  return (
    <div className="space-y-8">
      {/* Profile Section */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        <div className="relative">
          <img
            src={
              typeof aboutData.image === "string" && aboutData.image
                ? aboutData.image.startsWith("http")
                  ? aboutData.image
                  : `${BACKEND_URL.replace(/\/$/, "")}${aboutData.image.startsWith("/") ? "" : "/"}${aboutData.image}`
                : undefined
            }
            alt={aboutData.name}
            className="w-32 h-32 rounded-full object-cover border-4 border-blue-200 dark:border-blue-800"
          />
          <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white p-2 rounded-full">
            <UserIcon className="h-5 w-5" />
          </div>
        </div>
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
            {aboutData.name}
          </h3>
          <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-4">
            {aboutData.designation}
          </p>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            {aboutData.bio}
          </p>
        </div>
      </div>

      {/* Social Links */}
      <div>
        <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
          Social Links
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {Object.entries(aboutData.socialLinks).map(([platform, url]) => (
            <div key={platform} className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                <span className="text-blue-600 dark:text-blue-400 font-semibold">
                  {platform.charAt(0).toUpperCase()}
                </span>
              </div>
              <div>
                <p className="font-medium text-slate-900 dark:text-white capitalize">
                  {platform}
                </p>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
                >
                  {url}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Edit Form Component
function EditForm({
  formData,
  onChange,
  onImageUpload,
  onCancel,
  onSave,
}: {
  formData: AboutData;
  onChange: (field: string, value: string | File) => void;
  onImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onCancel: () => void;
  onSave: () => void;
}) {
  const filteredSocialLinks = Object.fromEntries(
    Object.entries(formData.socialLinks).filter(([_, v]) => v && v.trim() !== "")
  );

  return (
    <form className="space-y-6" onSubmit={e => { e.preventDefault(); onSave(); }}>
      {/* Profile Image */}
      <div>
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
          Profile Image
        </label>
        <div className="flex items-center gap-4">
          {(typeof formData.image === "string" && formData.image) ||
           (formData.image instanceof File) ? (
            <img
              src={
                typeof formData.image === "string" && formData.image
                  ? formData.image.startsWith("http")
                    ? formData.image
                    : `${BACKEND_URL.replace(/\/$/, "")}${formData.image.startsWith("/") ? "" : "/"}${formData.image}`
                  : formData.image instanceof File
                  ? URL.createObjectURL(formData.image as File)
                  : undefined
              }
              alt="Profile"
              className="w-20 h-20 rounded-full object-cover border-2 border-slate-300 dark:border-slate-600"
            />
          ) : null}
          <div>
            <input
              type="file"
              accept="image/*"
              onChange={onImageUpload}
              className="hidden"
              id="profile-image"
            />
            <label
              htmlFor="profile-image"
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors cursor-pointer"
            >
              <PhotoIcon className="h-4 w-4" />
              Upload Image
            </label>
          </div>
        </div>
      </div>

      {/* Name */}
      <div>
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
          Name
        </label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => onChange("name", e.target.value)}
          className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          required
        />
      </div>

      {/* Designation */}
      <div>
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
          Designation
        </label>
        <input
          type="text"
          value={formData.designation}
          onChange={(e) => onChange("designation", e.target.value)}
          className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          required
        />
      </div>

      {/* Bio */}
      <div>
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
          Bio
        </label>
        <textarea
          value={formData.bio}
          onChange={(e) => onChange("bio", e.target.value)}
          rows={6}
          className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          required
        />
      </div>

      {/* Social Links */}
      <div>
        <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
          Social Links
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {Object.entries(formData.socialLinks).map(([platform, url]) => (
            <div key={platform}>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 capitalize">
                {platform}
              </label>
              <input
                type={platform === "email" ? "email" : "url"}
                value={url}
                onChange={(e) => onChange(`socialLinks.${platform}`, e.target.value)}
                className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder={
                  platform === "email"
                    ? "your@email.com"
                    : `https://${platform}.com/username`
                }
              />
            </div>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="flex justify-end space-x-3 pt-6 border-t border-slate-200 dark:border-slate-700">
        <button
          type="button"
          onClick={onCancel}
          className="px-6 py-2 text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition-colors"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="bg-gradient-to-r from-blue-600 to-sky-500 text-white px-6 py-2 rounded-md hover:opacity-90 transition"
        >
          Save Changes
        </button>
      </div>
    </form>
  );
}
