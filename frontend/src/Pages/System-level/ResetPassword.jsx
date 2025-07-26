import React, { useState, useEffect } from 'react';

const ResetPasswordWithOTP = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [contact, setContact] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [timer, setTimer] = useState(30);
  const [otpSent, setOtpSent] = useState(false);
  const [otpError, setOtpError] = useState('');

  useEffect(() => {
    let interval;
    if (otpSent && timer > 0) {
      interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
    }
    return () => clearInterval(interval);
  }, [otpSent, timer]);

  const sendOTP = (e) => {
    e.preventDefault();
    console.log('Sending OTP to:', contact);
    setOtpSent(true);
    setTimer(30);
    setStep(2);
  };

  const resendOTP = () => {
    if (timer === 0) {
      console.log('Resending OTP to:', contact);
      setTimer(30);
      setOtp('');
      setOtpError('');
    }
  };

  const verifyOTP = (e) => {
    e.preventDefault();
    if (otp === '123456') {
      setStep(3);
      setOtpError('');
    } else {
      setOtpError('Invalid OTP. Try again.');
    }
  };

  const resetPassword = (e) => {
    e.preventDefault();
    console.log('New password set for:', contact);
    onClose();
    setStep(1);
    setContact('');
    setOtp('');
    setNewPassword('');
    setOtpSent(false);
    setTimer(30);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
      <div className="bg-white rounded-lg w-[90%] sm:w-[400px] p-6 shadow-xl transition-all duration-300">
        <h2 className="text-xl font-bold mb-4 text-center">🔐 Reset Password</h2>

        {step === 1 && (
          <form onSubmit={sendOTP} className="space-y-4">
            <label className="text-sm font-medium">Email or Phone</label>
            <input
              type="text"
              required
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              placeholder="you@example.com / +91xxxxx"
            />
            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
              Send OTP
            </button>
          </form>
        )}

        {step === 2 && (
          <form onSubmit={verifyOTP} className="space-y-4">
            <label className="text-sm font-medium">Enter OTP</label>
            <input
              type="text"
              required
              className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 ${otpError && 'border-red-500'}`}
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter OTP"
            />
            {otpError && <p className="text-sm text-red-500">{otpError}</p>}

            <button type="submit" className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
              Verify OTP
            </button>

            <button
              type="button"
              disabled={timer > 0}
              onClick={resendOTP}
              className={`w-full py-2 rounded ${timer > 0 ? 'bg-gray-300 text-gray-600' : 'bg-yellow-500 text-white hover:bg-yellow-600'}`}
            >
              Resend OTP {timer > 0 && `in ${timer}s`}
            </button>
          </form>
        )}

        {step === 3 && (
          <form onSubmit={resetPassword} className="space-y-4">
            <label className="text-sm font-medium">New Password</label>
            <input
              type="password"
              required
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Enter new password"
            />
            <button type="submit" className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700">
              Reset Password
            </button>
          </form>
        )}

        <div className="mt-4 text-center">
          <button onClick={onClose} className="text-sm text-gray-600 hover:underline">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordWithOTP;
