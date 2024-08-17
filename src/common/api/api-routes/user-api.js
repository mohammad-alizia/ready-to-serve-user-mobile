import { agent } from "..";

export const userApi = {
    register: (body) => agent.post('/user/register', body),
    verfiyEmail: (body) => agent.post('/user/verfy-email', body),
    login: (body) => agent.post('/user/login', body),
    loginWithPhoneNumber: (body) => agent.post('/user/login-with-phone-number', body),
    socialSignIn: (body) => agent.post('/user/social-sign-in', body),
    forgotPassword: (body) => agent.post('/user/forgot-password', body),
    verifyResetCode: (body) => agent.post('/user/verify-reset-code', body),
    resetPassword: (body) => agent.put('/user/reset-password', body),
    myProfile: (body) => agent.get('/user/me', body),
    changePassword: (body) => agent.put('/user/change-password', body),
    updateProfile: (body) => agent.put('/user/me/update-profile', body),
    reviewProduct: (pid) => agent.put('/user/review-product', {}, { params: pid }),
    logout: (body) => agent.get('/user/logout'),
}