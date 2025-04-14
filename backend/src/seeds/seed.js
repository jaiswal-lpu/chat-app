import { config } from "dotenv";
import { connectDB } from "../lib/db.js";
import User from "../models/user.model.js";

config();

const seedUsers = [
  // Female Users
  {
    email: "priya.sharma@example.com",
    fullName: "Priya Sharma",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  { 
    email: "ananya.iyer@example.com",
    fullName: "Ananya Iyer",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    email: "sneha.verma@example.com",
    fullName: "Sneha Verma",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    email: "aarti.kapoor@example.com",
    fullName: "Aarti Kapoor",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    email: "isha.bajpai@example.com",
    fullName: "Isha Bajpai",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    email: "riya.nair@example.com",
    fullName: "Riya Nair",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    email: "charu.singh@example.com",
    fullName: "Charu Singh",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/7.jpg",
  },
  {
    email: "meera.menon@example.com",
    fullName: "Meera Menon",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/8.jpg",
  },

  // Male Users
  {
    email: "rahul.agarwal@example.com",
    fullName: "Rahul Agarwal",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    email: "arjun.chopra@example.com",
    fullName: "Arjun Chopra",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    email: "veer.tandon@example.com",
    fullName: "Veer Tandon",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    email: "kabir.malhotra@example.com",
    fullName: "Kabir Malhotra",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    email: "yash.patel@example.com",
    fullName: "Yash Patel",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    email: "siddharth.mehta@example.com",
    fullName: "Siddharth Mehta",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/6.jpg",
  },
  {
    email: "aman.reddy@example.com",
    fullName: "Aman Reddy",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/7.jpg",
  },
];

const seedDatabase = async () => {
  try {
    await connectDB();

    await User.insertMany(seedUsers);
    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

// Call the function
seedDatabase();
