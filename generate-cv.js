import PDFDocument from "pdfkit";
import fs from "fs";

const doc = new PDFDocument({ layout: "A4", margin: 50 });
doc.pipe(fs.createWriteStream("public/Daniel-CV.pdf"));

doc.fontSize(28).font("Helvetica-Bold").text("Daniel Sisay", { align: "center" });
doc.fontSize(14).font("Helvetica").fillColor("#2563eb").text("Full Stack Developer", { align: "center" });
doc.moveDown();
doc.fontSize(11).fillColor("#374151").text("danionline519@gmail.com", { align: "center" });
doc.moveDown(2);

doc.moveTo(50, doc.y).lineTo(545, doc.y).strokeColor("#d1d5db").stroke();
doc.moveDown();

doc.fontSize(16).font("Helvetica-Bold").fillColor("#111827").text("About Me");
doc.moveDown(0.5);
doc.fontSize(11).font("Helvetica").fillColor("#4b5563").text(
  "I am learning React, Node.js, Express.js, and MongoDB to become a Full Stack Web Developer. I am passionate about building modern, responsive web applications."
);
doc.moveDown(1.5);

doc.fontSize(16).font("Helvetica-Bold").fillColor("#111827").text("Skills");
doc.moveDown(0.5);
const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express.js", "MongoDB", "Git", "GitHub", "Tailwind CSS"];
const col1 = skills.slice(0, 5);
const col2 = skills.slice(5);
doc.fontSize(11).font("Helvetica").fillColor("#4b5563");
col1.forEach((s, i) => {
  doc.text(`  \u2022  ${s}`, 50, doc.y, { continued: true });
  doc.text(`  \u2022  ${col2[i]}`, { align: "right" });
});
doc.moveDown(1.5);

doc.fontSize(16).font("Helvetica-Bold").fillColor("#111827").text("Projects");
doc.moveDown(0.5);
const projects = [
  { title: "Student Management System", desc: "A system to manage student records, grades, and attendance." },
  { title: "Portfolio Website", desc: "A personal portfolio built with React and Tailwind CSS." },
  { title: "E-Commerce Website", desc: "An online store with product listings, cart, and checkout." },
];
projects.forEach((p) => {
  doc.fontSize(12).font("Helvetica-Bold").fillColor("#111827").text(p.title);
  doc.fontSize(10).font("Helvetica").fillColor("#6b7280").text(p.desc);
  doc.moveDown(0.3);
});
doc.moveDown(1.5);

doc.fontSize(16).font("Helvetica-Bold").fillColor("#111827").text("Education");
doc.moveDown(0.5);
doc.fontSize(11).font("Helvetica").fillColor("#4b5563").text("Pursuing a career in Full Stack Web Development");
doc.moveDown(1.5);

doc.fontSize(16).font("Helvetica-Bold").fillColor("#111827").text("Contact");
doc.moveDown(0.5);
doc.fontSize(11).font("Helvetica").fillColor("#4b5563").text("Email: danionline519@gmail.com");

doc.end();

console.log("CV generated at public/Daniel-CV.pdf");