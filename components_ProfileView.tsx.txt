import React from "react";
import {
  Twitter,
  Instagram,
  MessagesSquare,
  Store,
  Mail,
  User,
  Lock,
} from "lucide-react";
export function ProfileView() {
  return (
    <div className="px-4 pb-8">
      <h1 className="text-4xl font-bold mb-6 pt-4">Account</h1>
      <section className="mb-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
            <User className="w-8 h-8 text-gray-400" />
          </div>
          <div>
            <h2 className="text-lg font-semibold">Guest User</h2>
            <p className="text-sm text-gray-500">Free Account</p>
          </div>
        </div>
        <div className="bg-white rounded-2xl p-4 shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
          <div className="flex items-center gap-3 mb-4 pb-4 border-b">
            <Mail className="w-5 h-5 text-gray-400" />
            <div className="flex-1">
              <p className="text-sm text-gray-500">Email</p>
              <p className="text-base">guest@example.com</p>
            </div>
            <Lock className="w-4 h-4 text-gray-400" />
          </div>
          <div className="flex items-center gap-3">
            <User className="w-5 h-5 text-gray-400" />
            <div className="flex-1">
              <p className="text-sm text-gray-500">Username</p>
              <p className="text-base">guest_user</p>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-8">
        <h2 className="text-sm font-medium text-gray-500 mb-4">ACTIVITY</h2>
        <div className="bg-white rounded-2xl p-4 shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
          <div className="flex justify-between items-center mb-4 pb-4 border-b">
            <span className="text-base">Generated Flythroughs</span>
            <span className="font-medium bg-gray-100 px-3 py-1 rounded-full text-sm">
              0
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-base">Free Previews Left</span>
            <span className="font-medium bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm">
              10
            </span>
          </div>
        </div>
      </section>
      <section className="mb-8">
        <h2 className="text-sm font-medium text-gray-500 mb-4">
          UPGRADE YOUR ACCOUNT
        </h2>
        <button className="w-full bg-black text-white rounded-2xl p-4 font-medium shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:bg-black/90 transition-colors">
          Get Unlimited for $12.99/month
        </button>
        <p className="text-sm text-gray-500 text-center mt-3">
          Access unlimited flythroughs. Cancel anytime.
        </p>
      </section>
      <section>
        <h2 className="text-sm font-medium text-gray-500 mb-4">
          CONNECT WITH US
        </h2>
        <div className="bg-white rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
          {[
            {
              icon: MessagesSquare,
              label: "Join our Discord",
              color: "bg-indigo-500",
            },
            {
              icon: Twitter,
              label: "Follow on Twitter",
              color: "bg-blue-400",
            },
            {
              icon: Instagram,
              label: "Follow on Instagram",
              color: "bg-pink-500",
            },
            {
              icon: Store,
              label: "Review on App Store",
              color: "bg-gray-900",
            },
          ].map(({ icon: Icon, label, color }, index) => (
            <button
              key={index}
              className="w-full flex items-center gap-3 p-4 hover:bg-gray-50 transition-colors duration-200"
            >
              <div
                className={`w-8 h-8 rounded-full ${color} flex items-center justify-center`}
              >
                <Icon className="w-4 h-4 text-white" />
              </div>
              <span className="text-base font-medium flex-1 text-left">
                {label}
              </span>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}
