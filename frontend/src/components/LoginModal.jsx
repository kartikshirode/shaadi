import React, { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, Phone, Heart } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';

const LoginModal = ({ isOpen, onClose, onSwitchToRegister }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginMethod, setLoginMethod] = useState('email');
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    password: '',
    otp: '',
  });
  const [otpSent, setOtpSent] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSendOtp = () => {
    if (formData.phone.length >= 10) {
      setOtpSent(true);
      alert('OTP sent! (Mock: Use 123456)');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login data:', formData);
    alert('Login successful! (Mock)');
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md p-0 overflow-hidden">
        <div className="bg-gradient-to-r from-[#00bcd4] to-[#0097a7] p-6 text-white">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold flex items-center gap-2">
              <Heart className="h-6 w-6 text-[#e91e63] fill-[#e91e63]" />
              Welcome Back!
            </DialogTitle>
            <p className="text-white/80 mt-1">Login to continue your journey</p>
          </DialogHeader>
        </div>

        <div className="p-6">
          <Tabs value={loginMethod} onValueChange={setLoginMethod}>
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="email">Email</TabsTrigger>
              <TabsTrigger value="phone">Phone</TabsTrigger>
            </TabsList>

            <form onSubmit={handleSubmit}>
              <TabsContent value="email" className="space-y-4">
                <div>
                  <Label className="text-gray-700">Email Address</Label>
                  <div className="relative mt-1">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                <div>
                  <Label className="text-gray-700">Password</Label>
                  <div className="relative mt-1">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Enter password"
                      value={formData.password}
                      onChange={(e) => handleInputChange('password', e.target.value)}
                      className="pl-10 pr-10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                <div className="text-right">
                  <button
                    type="button"
                    className="text-[#00bcd4] hover:underline text-sm"
                  >
                    Forgot Password?
                  </button>
                </div>
              </TabsContent>

              <TabsContent value="phone" className="space-y-4">
                <div>
                  <Label className="text-gray-700">Phone Number</Label>
                  <div className="relative mt-1">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      type="tel"
                      placeholder="Enter phone number"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                {!otpSent ? (
                  <Button
                    type="button"
                    onClick={handleSendOtp}
                    className="w-full bg-[#00bcd4] hover:bg-[#00a5bb] text-white"
                  >
                    Send OTP
                  </Button>
                ) : (
                  <div>
                    <Label className="text-gray-700">Enter OTP</Label>
                    <Input
                      type="text"
                      placeholder="Enter 6-digit OTP"
                      value={formData.otp}
                      onChange={(e) => handleInputChange('otp', e.target.value)}
                      className="mt-1 text-center text-lg tracking-widest"
                      maxLength={6}
                    />
                    <button
                      type="button"
                      onClick={handleSendOtp}
                      className="text-[#00bcd4] hover:underline text-sm mt-2"
                    >
                      Resend OTP
                    </button>
                  </div>
                )}
              </TabsContent>

              <Button
                type="submit"
                className="w-full mt-6 bg-[#00bcd4] hover:bg-[#00a5bb] text-white py-6 text-lg"
              >
                Login
              </Button>
            </form>
          </Tabs>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">or continue with</span>
            </div>
          </div>

          {/* Social Login */}
          <div className="flex gap-4">
            <Button
              variant="outline"
              className="flex-1 py-5"
              type="button"
            >
              <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Google
            </Button>
            <Button
              variant="outline"
              className="flex-1 py-5"
              type="button"
            >
              <svg className="h-5 w-5 mr-2" fill="#1877F2" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Facebook
            </Button>
          </div>

          {/* Register Link */}
          <div className="text-center mt-6 pt-6 border-t">
            <p className="text-gray-600">
              New to Shaadi.com?{' '}
              <button
                onClick={onSwitchToRegister}
                className="text-[#00bcd4] hover:underline font-medium"
              >
                Register Now
              </button>
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
