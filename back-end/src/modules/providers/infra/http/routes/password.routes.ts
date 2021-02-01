import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import ForgotPasswordController from '../controllers/ForgotPasswordController';
// import ResetPasswordController from '../controllers/ResetPasswordController';

const PasswordRouter = Router();
const forgotPasswordController = new ForgotPasswordController();
// const resetPasswordController = new ResetPasswordController();

PasswordRouter.post(
  '/forgot',
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().email().required(),
    },
  }),
  forgotPasswordController.create,
);
// PasswordRouter.post(
//   '/reset',
//   celebrate({
//     [Segments.BODY]: {
//       token: Joi.string().uuid().required(),
//       password: Joi.string().required(),
//       password_confirmation: Joi.string()
//         .required()
//         .valid(Joi.ref('password ')),
//     },
//   }),
//   resetPasswordController.create,
// );

export default PasswordRouter;
