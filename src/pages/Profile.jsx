import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { setCredentials } from "../slices/authSlices.js";
import { useUpdateUserMutation } from "../slices/usersApiSlice.js";

export const Profile = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.auth);
  const [updateProfile] = useUpdateUserMutation();

  useEffect(() => {
    setFirstName(userInfo.firstName);
    setLastName(userInfo.lastName);
    setEmail(userInfo.email);
  }, [userInfo.setFirstName, userInfo.setLastName, userInfo.setEmail]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
    } else {
      try {
        const res = await updateProfile({
          _id: userInfo._id,
          firstName,
          lastName,
          email,
          password,
        }).unwrap();
        dispatch(setCredentials({ ...res }));
        toast.success("Profile updated");
      } catch (err) {
        toast.error(err?.data?.message || err.message);
      }
    }
  };

  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <div className="flex items-center space-x-4">
      <div className="w-[40%]">
        <img src="./skin.jpg" alt="Skin" className="w-full" />
      </div>
      <div className="w-[50%] flex flex-col gap-2 items-center space-y-4">
        <div>
          <h1 className="text-[60px]">Update Profile</h1>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 items-center w-full"
        >
          <div className="flex justify-between w-[60%] space-x-4">
            <input
              type="text"
              placeholder="First name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="p-3 w-full border rounded"
              required
            />
            <input
              type="text"
              placeholder="Last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="p-3 w-full border rounded"
              required
            />
          </div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 w-[60%] border rounded"
            required
          />
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-3 w-[60%] border rounded"
            required
          />
          <input
            type="password"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="p-3 w-[60%] border rounded"
            required
          />
          <div className="flex space-x-4 w-[60%]">
            <button
              type="submit"
              className="border-2 border-none bg-[#afad55] p-2 text-white w-full"
            >
              Update profile
            </button>
            <button onClick={handleCancel}
            className="flex items-center gap-2 border border-black p-2 justify-center text-lg w-full">
              Cancel
            </button>
          </div>
        </form>
        <div className="flex items-center gap-2 w-full justify-center"></div>
      </div>
    </div>
  );
};
