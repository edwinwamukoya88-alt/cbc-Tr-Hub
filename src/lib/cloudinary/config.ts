const cloudinaryConfig = {
  cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME!,
  apiKey: process.env.CLOUDINARY_API_KEY!,
  apiSecret: process.env.CLOUDINARY_API_SECRET!,
  uploadPreset: "cbc_teachers",
};

export function getCloudinaryUrl(publicId: string, transformations?: string) {
  const base = `https://res.cloudinary.com/${cloudinaryConfig.cloudName}/image/upload`;
  if (transformations) {
    return `${base}/${transformations}/${publicId}`;
  }
  return `${base}/${publicId}`;
}

export default cloudinaryConfig;
