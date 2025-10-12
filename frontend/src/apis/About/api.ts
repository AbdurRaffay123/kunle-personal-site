import instance from "@/axios/Axios";

// Get profile
export const getProfile = async () => {
  try {
    const response = await instance.get("/api/profile");
    return response.data;
  } catch (error: any) {
    throw error.response?.data || { success: false, message: "Failed to fetch profile" };
  }
};

// Create or update profile (with image upload)
export const createOrUpdateProfile = async (formData: FormData) => {
  try {
    const response = await instance.post("/api/profile/create", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data;
  } catch (error: any) {
    throw error.response?.data || { success: false, message: "Failed to save profile" };
  }
};