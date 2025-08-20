import contactDetails from "../models/contactDetails.model.js";

export const saveContactDetails = async (req, res) => {
  try {
    const contact = new contactDetails(req.body);
    await contact.save();
    res.status(200).json({ message: "Message sent successfully" });
  } catch (error) {
    console.error("Error saving contact:", error);
    res.status(500).json({ error: "Server error" });
  }
};
