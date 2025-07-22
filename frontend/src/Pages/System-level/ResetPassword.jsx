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
    alert("Password has been succesfully reset!");
  };

  return (
    <div className="flex items-center justify-center flex-col h-[91.4vh] w-full overflow-hidden">
      <div className="flex items-center justify-center flex-col">
        <h2 className="text-4xl font-bold text-amber-300 ">Reset Password</h2>
        {error && <p className="text-red-500 mb-2"> {error}</p>}

        {step === 1 && (
          <>
            <div className="flex items-center justify-between gap-2 mt-10">
              <label>Enter your email: </label>
              <input
                type="email"
                className="border-2 text-amber-200 rounded-l w-70 placeholder:items-center placeholder:text-amber-300 "
                placeholder="you@example.cpm"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-center bg-amber-400 rounded-2xl mt-5 w-25 h-15 cursor-pointer ">
              <button className="cursor-pointer" onClick={sendOtpHandle}>
                Send OTP
              </button>
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <div className="flex flex-col items-center justify-center">
              <div>
                <label>Enter OTP</label>
                <input
                  type="text"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
              </div>
              <div>
                <label>New Password</label>
                <input
                  type="password"
                  placeholder="New password..."
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </div>
              <div>
                <label>Confirm New Password</label>
                <input
                  type="password"
                  placeholder="Confirm password..."
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>{" "}
              <div>
                <button onClick={resetPasswordHandler}>Reset Password</button>
                <button onClick={resendOtpHandler} disabled={resendDisabled}>
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
