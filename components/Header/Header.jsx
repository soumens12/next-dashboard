"use client";
import Image from "next/image";
import React from "react";
import uk from "../../public/images/uk.png";
import admin from "../../public/images/admin.jpg";
import { Bell } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="bg-cyan-500/10 shadow-md border-b border-slate-900 mx-4 sm:mx-6 lg:mx-8 mt-4 mb-2 rounded-lg">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 flex items-center justify-between">
        <h1 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-100">
          Dashboard
        </h1>
        <div className="flex items-center space-x-3 sm:space-x-6">
          <Image
            src={uk}
            alt="country-flag"
            width={25}
            height={18}
            className="rounded-full shadow-md cursor-pointer"
          />
          <div className="relative">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Bell className="w-5 sm:w-6 h-5 sm:h-6 text-gray-300 cursor-pointer hover:text-white" />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                sideOffset={8}
                asChild
                className="w-60 bg-[#0F172A]/90 backdrop-blur-xl border border-cyan-500/20 shadow-lg"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: -8 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.15, ease: "easeOut" }}
                >
                  <DropdownMenuLabel className="text-gray-200">
                    Notifications
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator className="bg-cyan-500/10" />

                  <DropdownMenuItem className="text-gray-300 hover:bg-cyan-500/20 hover:text-white transition">
                    🔔 New user signed up
                  </DropdownMenuItem>

                  <DropdownMenuItem className="text-gray-300 hover:bg-cyan-500/20 hover:text-white transition">
                    📦 New order received
                  </DropdownMenuItem>

                  <DropdownMenuItem className="text-gray-300 hover:bg-cyan-500/20 hover:text-white transition">
                    💬 You have 3 new messages
                  </DropdownMenuItem>

                  <DropdownMenuSeparator className="bg-cyan-500/10" />

                  <DropdownMenuItem className="text-center text-cyan-400 hover:bg-cyan-500/10">
                    View all
                  </DropdownMenuItem>
                </motion.div>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="flex items-center space-x-2 sm:space-x-3 cursor-pointer select-none">
                <Image
                  src={admin}
                  alt="admin"
                  width={35}
                  height={35}
                  className="rounded-full border border-gray-500"
                />
                <span className="hidden sm:block text-gray-100">
                  Soumen Sarkar
                </span>
              </div>
            </DropdownMenuTrigger>

            <DropdownMenuContent
              align="end"
              sideOffset={8}
              asChild
              className="w-48 mr-2 bg-[#0F172A]/90 backdrop-blur-xl border border-cyan-500/20 shadow-lg"
            >
              {/* Animation wrapper */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: -8 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.15, ease: "easeOut" }}
              >
                <DropdownMenuLabel className="text-gray-200">
                  My Account
                </DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-cyan-500/10" />

                <DropdownMenuItem className="text-gray-300 hover:bg-cyan-500/20 hover:text-white transition">
                  Profile
                </DropdownMenuItem>

                <DropdownMenuItem className="text-gray-300 hover:bg-cyan-500/20 hover:text-white transition">
                  Settings
                </DropdownMenuItem>

                <DropdownMenuItem className="text-gray-300 hover:bg-cyan-500/20 hover:text-white transition">
                  Billing
                </DropdownMenuItem>

                <DropdownMenuSeparator className="bg-cyan-500/10" />

                <DropdownMenuItem className="text-red-400 hover:bg-red-600/20 hover:text-red-300 transition">
                  Logout
                </DropdownMenuItem>
              </motion.div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;
