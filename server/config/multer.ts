import multer from "multer";

const storage = multer.memoryStorage();

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1021 * 1021 }, // 5MB limit
});

export default upload;
