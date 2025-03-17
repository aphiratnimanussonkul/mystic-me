import { useState } from "react";

const PhoneNumber = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Handle form submission
    console.log("Phone number submitted:", phoneNumber);
  };

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // อนุญาตให้กรอกได้เฉพาะตัวเลขและไม่เกิน 10 หลัก
    const value = e.target.value.replace(/\D/g, "");
    if (value.length <= 10) {
      setPhoneNumber(value);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-semibold text-center mb-6">
          กรอกเบอร์โทรศัพท์
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <input
              type="tel"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              placeholder="เบอร์โทรศัพท์"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition-colors"
          >
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default PhoneNumber;
