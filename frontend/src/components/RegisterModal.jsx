import React, { useState } from 'react';
import { X, Eye, EyeOff, User, Mail, Lock, Phone, Calendar, MapPin, Heart } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';

const RegisterModal = ({ isOpen, onClose, onSwitchToLogin }) => {
  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    profileFor: '',
    gender: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    dateOfBirth: '',
    religion: '',
    motherTongue: '',
    city: '',
  });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registration data:', formData);
    alert('Registration successful! (Mock)');
    onClose();
    setStep(1);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg p-0 overflow-hidden">
        <div className="bg-gradient-to-r from-[#00bcd4] to-[#0097a7] p-6 text-white">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold flex items-center gap-2">
              <Heart className="h-6 w-6 text-[#e91e63] fill-[#e91e63]" />
              Join Shaadi.com
            </DialogTitle>
            <p className="text-white/80 mt-1">Find your perfect match today</p>
          </DialogHeader>
        </div>

        <div className="p-6">
          {/* Progress Steps */}
          <div className="flex items-center justify-center mb-6">
            {[1, 2, 3].map((s) => (
              <React.Fragment key={s}>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    step >= s
                      ? 'bg-[#00bcd4] text-white'
                      : 'bg-gray-200 text-gray-500'
                  }`}
                >
                  {s}
                </div>
                {s < 3 && (
                  <div
                    className={`w-16 h-1 mx-2 ${
                      step > s ? 'bg-[#00bcd4]' : 'bg-gray-200'
                    }`}
                  ></div>
                )}
              </React.Fragment>
            ))}
          </div>

          <form onSubmit={handleSubmit}>
            {/* Step 1: Basic Info */}
            {step === 1 && (
              <div className="space-y-4">
                <div>
                  <Label className="text-gray-700">Profile For</Label>
                  <Select
                    value={formData.profileFor}
                    onValueChange={(value) => handleInputChange('profileFor', value)}
                  >
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select profile for" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="self">Myself</SelectItem>
                      <SelectItem value="son">Son</SelectItem>
                      <SelectItem value="daughter">Daughter</SelectItem>
                      <SelectItem value="brother">Brother</SelectItem>
                      <SelectItem value="sister">Sister</SelectItem>
                      <SelectItem value="relative">Relative</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className="text-gray-700">Gender</Label>
                  <div className="flex gap-4 mt-2">
                    <button
                      type="button"
                      onClick={() => handleInputChange('gender', 'male')}
                      className={`flex-1 py-3 px-4 rounded-lg border-2 transition-all ${
                        formData.gender === 'male'
                          ? 'border-[#00bcd4] bg-[#00bcd4]/10 text-[#00bcd4]'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      Male
                    </button>
                    <button
                      type="button"
                      onClick={() => handleInputChange('gender', 'female')}
                      className={`flex-1 py-3 px-4 rounded-lg border-2 transition-all ${
                        formData.gender === 'female'
                          ? 'border-[#e91e63] bg-[#e91e63]/10 text-[#e91e63]'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      Female
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label className="text-gray-700">First Name</Label>
                    <div className="relative mt-1">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        type="text"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <div>
                    <Label className="text-gray-700">Last Name</Label>
                    <div className="relative mt-1">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        type="text"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Contact Info */}
            {step === 2 && (
              <div className="space-y-4">
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

                <div>
                  <Label className="text-gray-700">Password</Label>
                  <div className="relative mt-1">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Create password"
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

                <div>
                  <Label className="text-gray-700">Date of Birth</Label>
                  <div className="relative mt-1">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      type="date"
                      value={formData.dateOfBirth}
                      onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Personal Details */}
            {step === 3 && (
              <div className="space-y-4">
                <div>
                  <Label className="text-gray-700">Religion</Label>
                  <Select
                    value={formData.religion}
                    onValueChange={(value) => handleInputChange('religion', value)}
                  >
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select religion" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hindu">Hindu</SelectItem>
                      <SelectItem value="muslim">Muslim</SelectItem>
                      <SelectItem value="christian">Christian</SelectItem>
                      <SelectItem value="sikh">Sikh</SelectItem>
                      <SelectItem value="jain">Jain</SelectItem>
                      <SelectItem value="buddhist">Buddhist</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className="text-gray-700">Mother Tongue</Label>
                  <Select
                    value={formData.motherTongue}
                    onValueChange={(value) => handleInputChange('motherTongue', value)}
                  >
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select mother tongue" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hindi">Hindi</SelectItem>
                      <SelectItem value="tamil">Tamil</SelectItem>
                      <SelectItem value="telugu">Telugu</SelectItem>
                      <SelectItem value="marathi">Marathi</SelectItem>
                      <SelectItem value="bengali">Bengali</SelectItem>
                      <SelectItem value="gujarati">Gujarati</SelectItem>
                      <SelectItem value="kannada">Kannada</SelectItem>
                      <SelectItem value="malayalam">Malayalam</SelectItem>
                      <SelectItem value="punjabi">Punjabi</SelectItem>
                      <SelectItem value="urdu">Urdu</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className="text-gray-700">City</Label>
                  <div className="relative mt-1">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      type="text"
                      placeholder="Enter your city"
                      value={formData.city}
                      onChange={(e) => handleInputChange('city', e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex gap-4 mt-6">
              {step > 1 && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleBack}
                  className="flex-1"
                >
                  Back
                </Button>
              )}
              {step < 3 ? (
                <Button
                  type="button"
                  onClick={handleNext}
                  className="flex-1 bg-[#00bcd4] hover:bg-[#00a5bb] text-white"
                >
                  Continue
                </Button>
              ) : (
                <Button
                  type="submit"
                  className="flex-1 bg-[#00bcd4] hover:bg-[#00a5bb] text-white"
                >
                  Create Account
                </Button>
              )}
            </div>
          </form>

          {/* Login Link */}
          <div className="text-center mt-6 pt-6 border-t">
            <p className="text-gray-600">
              Already have an account?{' '}
              <button
                onClick={onSwitchToLogin}
                className="text-[#00bcd4] hover:underline font-medium"
              >
                Login here
              </button>
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RegisterModal;
