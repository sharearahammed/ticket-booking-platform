import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Sparkles,
  Chrome,
} from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function LoginPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      // Save email to localStorage
      localStorage.setItem("userEmail", email);

      // Show toast
      toast.success("Login successful!", {
        position: "top-right",
        autoClose: 2000,
      });

      // Redirect to last visited page after short delay (to allow toast to show)
    //   setTimeout(() => {
    //     navigate(-1);
    //   }, 500);
    }, 1500);
  };

  return (
    <div className=" flex items-center justify-center px-4 lg:py-12 pb-30 pt-5">
      <ToastContainer />
      {/* Background Animation */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-2000"></div>
      </div>

      <div className="relative w-full max-w-md">
        {/* Logo/Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-emerald-600 mb-4 mx-auto">
            <Sparkles className="text-white" size={24} />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            TicketHub
          </h1>
          <p className="text-gray-600">
            Welcome back! Book your next adventure
          </p>
        </div>

        {/* Login Card */}
        <div className="relative group mb-6">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-emerald-600 to-amber-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <div className="relative bg-white rounded-2xl p-8 sm:p-10 border-2 border-blue-100 group-hover:border-blue-200 transition-all">
            <div className="space-y-6">
              {/* Email Input */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail
                    size={18}
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400"
                  />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full pl-10 pr-4 py-3 border-2 border-blue-200 rounded-lg focus:border-blue-500 focus:outline-none bg-blue-50 text-gray-900 placeholder-gray-500 transition-all"
                    required
                  />
                </div>
              </div>

              {/* Password Input */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock
                    size={18}
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400"
                  />
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="w-full pl-10 pr-12 py-3 border-2 border-blue-200 rounded-lg focus:border-blue-500 focus:outline-none bg-blue-50 text-gray-900 placeholder-gray-500 transition-all"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-blue-600 transition-colors"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-2 border-blue-200 text-blue-600 cursor-pointer"
                  />
                  <span className="text-gray-700">Remember me</span>
                </label>
                <a
                  href="#forgot"
                  className="text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                >
                  Forgot password?
                </a>
              </div>

              {/* Login Button */}
              <button
                onClick={handleLogin}
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white font-bold py-3 rounded-lg transition-all transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              >
                {isLoading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Logging in...
                  </>
                ) : (
                  <>
                    Sign In
                    <ArrowRight size={18} />
                  </>
                )}
              </button>
            </div>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t-2 border-blue-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-600">
                  Or continue with
                </span>
              </div>
            </div>

            {/* Social Login */}
            <button className="w-full border-2 border-blue-200 hover:border-blue-400 hover:bg-blue-50 text-gray-900 font-semibold py-3 rounded-lg transition-all flex items-center justify-center gap-2">
              <Chrome size={18} className="text-blue-600" />
              Google
            </button>
          </div>
        </div>

        {/* Sign Up Link */}
        <div className="text-center">
          <p className="text-gray-600 text-sm">
            Don't have an account?{" "}
            <a
              href="#signup"
              className="text-blue-600 hover:text-blue-700 font-bold transition-colors"
            >
              Sign up here
            </a>
          </p>
        </div>

        {/* Security Badge */}
        <div className="mt-8 p-4 bg-white rounded-lg border-2 border-emerald-200 text-center">
          <p className="text-xs text-gray-600">
            🔒{" "}
            <span className="font-semibold text-emerald-600">Secure Login</span>
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Your data is encrypted and protected with industry-leading security
          </p>
        </div>
      </div>
    </div>
  );
}
