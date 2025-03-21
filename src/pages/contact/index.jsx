import React, { useState } from "react";
import Icon from "@/components/ui/Icon";

const Contact = () => {
  const [activeTab, setActiveTab] = useState("inquiry");

  return (
    <div className="py-16 px-4 md:px-8 max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">Contact Us</h1>
      <p className="text-lg text-gray-600 text-center mb-10">
        Whether you're inquiring about a listed part or requesting something we don’t have yet, we’re here to help.
      </p>

      {/* Tab Buttons */}
      <div className="flex justify-center gap-4 mb-8">
        <button
          onClick={() => setActiveTab("inquiry")}
          className={`px-4 py-2 rounded-md font-medium transition ${
            activeTab === "inquiry" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          Inquire About a Part
        </button>
        <button
          onClick={() => setActiveTab("request")}
          className={`px-4 py-2 rounded-md font-medium transition ${
            activeTab === "request" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          Can’t Find a Part?
        </button>
      </div>

      {/* Tab Content */}
      <div className="mb-12">
        {activeTab === "inquiry" && (
          <form className="space-y-6">
            <div>
              <label className="block font-medium mb-1">Your Name</label>
              <input type="text" className="w-full border border-gray-300 rounded px-4 py-2" />
            </div>
            <div>
              <label className="block font-medium mb-1">Email or Phone</label>
              <input type="text" className="w-full border border-gray-300 rounded px-4 py-2" />
            </div>
            <div>
              <label className="block font-medium mb-1">Part Name or Number</label>
              <input type="text" className="w-full border border-gray-300 rounded px-4 py-2" />
            </div>
            <div>
              <label className="block font-medium mb-1">Quantity</label>
              <input type="number" className="w-full border border-gray-300 rounded px-4 py-2" />
            </div>
            <div>
              <label className="block font-medium mb-1">Message</label>
              <textarea className="w-full border border-gray-300 rounded px-4 py-2" rows={4}></textarea>
            </div>
            <button type="submit" disabled className="bg-blue-600 text-white px-6 py-2 rounded-md cursor-not-allowed">
              Send Inquiry
            </button>
          </form>
        )}

        {activeTab === "request" && (
          <form className="space-y-6">
            <div>
              <label className="block font-medium mb-1">Your Name</label>
              <input type="text" className="w-full border border-gray-300 rounded px-4 py-2" />
            </div>
            <div>
              <label className="block font-medium mb-1">Email</label>
              <input type="email" className="w-full border border-gray-300 rounded px-4 py-2" />
            </div>
            <div>
              <label className="block font-medium mb-1">Vehicle Model / Year / Variant</label>
              <input type="text" className="w-full border border-gray-300 rounded px-4 py-2" />
            </div>
            <div>
              <label className="block font-medium mb-1">Description of Required Part</label>
              <textarea className="w-full border border-gray-300 rounded px-4 py-2" rows={4}></textarea>
            </div>
            <div>
              <label className="block font-medium mb-1">Upload Image (optional)</label>
              <input type="file" className="w-full" />
            </div>
            <button type="submit" disabled className="bg-blue-600 text-white px-6 py-2 rounded-md cursor-not-allowed">
              Submit Request
            </button>
          </form>
        )}
      </div>

      {/* Contact Info Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center mt-12">
        <div className="flex flex-col items-center justify-center p-6 border border-gray-300 rounded-lg shadow-sm bg-blue-50">
          <div className="text-blue-600 mb-3">
            <Icon icon="material-symbols:call" width={32} />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-1">Phone</h3>
          <p className="text-gray-700">+94 77 359 7545</p>
        </div>

        <div className="flex flex-col items-center justify-center p-6 border border-gray-300 rounded-lg shadow-sm bg-blue-50">
          <div className="text-blue-600 mb-3">
            <Icon icon="material-symbols:mail" width={32} />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-1">Email</h3>
          <p className="text-gray-700 break-words">irshard@ymiautohub.com</p>
        </div>

        <div className="flex flex-col items-center justify-center p-6 border border-gray-300 rounded-lg shadow-sm bg-blue-50">
          <div className="text-blue-600 mb-3">
            <Icon icon="mdi:map-marker" width={32} />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-1">Address</h3>
          <p className="text-gray-700 text-sm">
            30/32D De Silva Cross Road,
            <br />
            Kalubowila, Dehiwala
            <br />
            Sri Lanka
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
