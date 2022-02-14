import { validationResult } from "express-validator";

// 유효성 검사: POST, PUT - 꼼꼼하게 하면 할수록 좋음
export const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }

  return res.status(400).json({ message: errors.array()[0].msg });
};
