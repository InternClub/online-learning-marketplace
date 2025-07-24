import React, { useEffect, useState } from "react";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [step, setStep] = useState(1);
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [timer, setTimer] = useState(0);
  const [resendDisabled, setResendDisabled] = useState(false);

  useEffect(() => {
    let countdown;
    if (resendDisabled && timer > 0) {
      countdown = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    }
    if (timer === 0) {
      setResendDisabled(false);
    }
    return () => clearInterval(countdown);
  }, [resendDisabled, timer]);

  const sendOtpHandle = async () => {
    console.log(`Sending OTP to: ${email}`);
    setStep(2);
    setResendDisabled(true);
    setTimer(30);
  };

  const resendOtpHandler = () => {
    console.log(`Resending OTP to: ${email}`);
    setResendDisabled(true);
    setTimer(30);
  };

  const resetPasswordHandler = async () => {
    console.log(`Verifying OTP: ${otp} & Setting New Password`);
    alert("Password has been successfully reset!");
  };

  return (
    <div className="flex items-center justify-center flex-col min-h-screen w-full px-4 sm:px-8 overflow-x-hidden">
      <div className="flex items-center justify-center flex-col w-full max-w-xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-amber-300 text-center">Reset Password</h2>
        {error && <p className="text-red-500 mb-2 text-center"> {error}</p>}

        {step === 1 && (
          <>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-2 mt-10 w-full">
              <label className="mb-1 sm:mb-0 sm:w-auto">Enter your email:</label>
              <input
                type="email"
                className="border-2 text-amber-200 rounded w-full sm:w-72 placeholder:items-center placeholder:text-amber-300"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-center bg-amber-400 rounded-2xl mt-5 px-6 py-2 cursor-pointer">
              <button className="cursor-pointer" onClick={sendOtpHandle}>
                Send OTP
              </button>
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <div className="flex flex-col items-center justify-center mt-4 w-full">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 w-full">
                <label>Enter OTP:</label>
                <input
                  className="border-2 text-amber-200 rounded w-full sm:w-40 placeholder:items-center placeholder:text-amber-300"
                  type="text"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
                <button className="bg-red-500 rounded cursor-pointer px-4 py-1 mt-2 sm:mt-0">Verify OTP</button>
              </div>

              <div className="border-4 border-amber-200 w-full p-4 mt-5 rounded-lg">
                <div className="mb-4">
                  <label className="block text-xl mb-2">New Password:</label>
                  <input
                    className="border-2 text-amber-200 rounded w-full placeholder:items-center placeholder:text-amber-300"
                    type="password"
                    placeholder="New password..."
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                </div>
                <div className="mt-3">
                  <label className="block text-xl mb-2">Confirm New Password:</label>
                  <input
                    className="border-2 text-amber-200 rounded w-full placeholder:items-center placeholder:text-amber-300"
                    type="password"
                    placeholder="Confirm password..."
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
                <button
                  onClick={resetPasswordHandler}
                  className="bg-red-500 cursor-pointer rounded-xl px-5 py-2 w-full sm:w-40"
                >
                  Reset Password
                </button>
                <button
                  onClick={resendOtpHandler}
                  disabled={resendDisabled}
                  className={`bg-red-500 cursor-pointer rounded-xl px-5 py-2 w-full sm:w-48 ${
                    resendDisabled ? "opacity-60 cursor-not-allowed" : ""
                  }`}
                >
                  {resendDisabled ? `Resend OTP in ${timer}s` : "Resend OTP"}
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ResetPassword;
