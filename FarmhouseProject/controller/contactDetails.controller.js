import contactDetails from "../models/contactDetails.model.js";

// FAQ data (can be moved to a separate config or JSON if reused)
const faq = [
  {
    question: "Do you provide Parking?",
    answer: "Yes, we offer free parking for all our guests.",
  },
  {
    question: "Are pets allowed?",
    answer: "Yes, pets are welcome at our farmhouse!",
  },
  {
    question: "What are your check-in times?",
    answer: "Check-in is from 12:00 PM, check-out is until 11:00 AM.",
  },
  {
    question: "Do you provide food?",
    answer: "Yes, we provide farm-fresh meals on request.",
  },
];

// GET route controller
export const getContactPage = (req, res) => {
  res.render("contact", { faq, toast: null });
};

// POST route controller
export const saveContactDetails = async (req, res) => {
  try {
    const contact = new contactDetails(req.body);
    await contact.save();
    res.render("contact", {
      faq,
      toast: { message: "Message sent successfully!", type: "success" },
    });
  } catch (error) {
    console.error("Error saving contact:", error);
    res.render("contact", {
      faq,
      toast: {
        message: "Something went wrong. Try again later.",
        type: "danger",
      },
    });
  }
};
