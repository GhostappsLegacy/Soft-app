import React, { useEffect, useState } from "react";
import { Home, Search, User } from "lucide-react";
import { ExploreView } from "./components/ExploreView";
import { ProfileView } from "./components/ProfileView";
export function App() {
  const [activeTab, setActiveTab] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <main className="w-full min-h-screen bg-gray-50 overflow-x-hidden relative flex flex-col">
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${isScrolled ? "bg-black/60 backdrop-blur-xl shadow-[0_1px_20px_rgb(0,0,0,0.4)] border-b border-white/10" : "bg-transparent"}`}
        style={{
          height: "env(safe-area-inset-top, 20px)",
        }}
      />
      <div
        className="flex-1 w-full overflow-y-auto scroll-smooth"
        style={{
          height: "calc(100vh - env(safe-area-inset-bottom, 0px) - 4rem)",
          paddingTop: "env(safe-area-inset-top, 20px)",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {activeTab === "home" && (
          <div className="px-4 pb-8">
            <h1
              className={`text-4xl font-bold mb-8 pt-4 transition-colors duration-300 ${isScrolled ? "text-gray-400" : "text-black"}`}
            >
              Gallery
            </h1>
            <div className="overflow-x-auto mb-12 hide-scrollbar max-w-screen">
              <div className="inline-flex gap-3 sm:gap-4 pb-1">
                {[1, 2, 3].map((_, index) => (
                  <div
                    key={index}
                    className="w-[min(420px,80vw)] flex-shrink-0 rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-shadow duration-300"
                  >
                    <div className="relative aspect-[3/2]">
                      <img
                        src={
                          [
                            "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9",
                            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
                            "https://images.unsplash.com/photo-1600585154526-990dced4db0d",
                          ][index] +
                          "?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2575&q=80"
                        }
                        alt={`950 ${index === 0 ? "Upstairs" : index === 1 ? "ADU" : "Living Room"}`}
                        className="absolute inset-0 w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div
                        className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
                        aria-hidden="true"
                      />
                      <div className="absolute bottom-0 left-0 p-4 w-full">
                        <h3 className="font-semibold text-lg text-white">
                          {index === 0
                            ? "950 Upstairs"
                            : index === 1
                              ? "950 ADU"
                              : "950 Living Room"}
                        </h3>
                        <p className="text-white/90 text-sm">950 Lucky Ave</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <h2 className="text-4xl font-bold mb-8">Your Flythroughs</h2>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {[1, 2, 3].map((_, index) => (
                <div
                  key={index}
                  className="rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-shadow duration-300"
                >
                  <div className="relative aspect-square">
                    <img
                      src={
                        [
                          "https://images.unsplash.com/photo-1604014237800-1c9102c219da",
                          "https://images.unsplash.com/photo-1600585154526-990dced4db0d",
                          "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9",
                        ][index] +
                        "?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2575&q=80"
                      }
                      alt={`950 ${index === 0 ? "Kitchen" : index === 1 ? "Living Room" : "Upstairs"}`}
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="py-3 px-4 bg-white">
                    <h3 className="font-semibold text-lg text-center">
                      {index === 0
                        ? "950 Kitchen"
                        : index === 1
                          ? "950 Living Room"
                          : "950 Upstairs"}
                    </h3>
                    <p className="text-gray-600 text-center text-sm">
                      950 Lucky Ave
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        {activeTab === "explore" && <ExploreView />}
        {activeTab === "me" && <ProfileView />}
      </div>
      <div
        className="fixed bottom-0 left-0 w-full bg-black/60 backdrop-blur-xl shadow-[0_-1px_20px_rgb(0,0,0,0.4)] rounded-t-[20px] border-t border-white/10 z-50"
        style={{
          paddingBottom: "env(safe-area-inset-bottom, 0px)",
        }}
      >
        <div className="max-w-screen-xl mx-auto px-6 py-4">
          <div className="flex items-center justify-around">
            <button
              onClick={() => setActiveTab("home")}
              className="flex flex-col items-center gap-1.5 py-1 px-3 transition-colors duration-200"
            >
              <Home
                size={24}
                className={
                  activeTab === "home" ? "text-white" : "text-gray-400"
                }
                fill={activeTab === "home" ? "currentColor" : "none"}
              />
              <span
                className={`text-xs font-medium ${activeTab === "home" ? "text-white" : "text-gray-400"}`}
              >
                Home
              </span>
            </button>
            <button
              onClick={() => setActiveTab("explore")}
              className="flex flex-col items-center gap-1.5 py-1 px-3 transition-colors duration-200"
            >
              <Search
                size={24}
                className={
                  activeTab === "explore" ? "text-white" : "text-gray-400"
                }
                fill={activeTab === "explore" ? "currentColor" : "none"}
              />
              <span
                className={`text-xs font-medium ${activeTab === "explore" ? "text-white" : "text-gray-400"}`}
              >
                Explore
              </span>
            </button>
            <button
              onClick={() => setActiveTab("me")}
              className="flex flex-col items-center gap-1.5 py-1 px-3 transition-colors duration-200"
            >
              <User
                size={24}
                className={activeTab === "me" ? "text-white" : "text-gray-400"}
                fill={activeTab === "me" ? "currentColor" : "none"}
              />
              <span
                className={`text-xs font-medium ${activeTab === "me" ? "text-white" : "text-gray-400"}`}
              >
                Me
              </span>
            </button>
          </div>
        </div>
      </div>
      <style jsx global>{`
        :root {
          --vh: 1vh;
        }
        html {
          scroll-behavior: smooth;
          height: -webkit-fill-available;
        }
        body {
          overscroll-behavior-y: none;
          margin: 0;
          padding: 0;
          min-height: 100vh;
          min-height: -webkit-fill-available;
          overflow: hidden;
          position: fixed;
          width: 100%;
          -webkit-font-smoothing: antialiased;
        }
        #root {
          height: 100vh;
          height: -webkit-fill-available;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .scroll-smooth {
          scroll-behavior: smooth;
          -webkit-overflow-scrolling: touch;
        }
        @supports (-webkit-touch-callout: none) {
          .min-h-screen {
            min-height: -webkit-fill-available;
          }
        }
      `}</style>
    </main>
  );
}
