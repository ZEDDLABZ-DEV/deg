'use client';

import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export function AdmissionForm({ open, onClose }: { open: boolean, onClose: () => void }) {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    email: '',
    phone: '',
    grade: '',
    message: '',
  });

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  if (!open) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Create a simple, clean HTML email that will display properly
      const emailBody = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; }
    .container { max-width: 600px; margin: 0 auto; }
    .header { font-size: 18px; font-weight: bold; margin-bottom: 20px; }
    .field { margin-bottom: 10px; }
    .label { font-weight: bold; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">Admission Query from ${formData.studentName}</div>
    <p>A message has been received. Kindly respond at your earliest convenience.</p>
    
    <div class="field">
      <span class="label">Student Name:</span> ${formData.studentName}
    </div>
    <div class="field">
      <span class="label">Parent/Guardian Name:</span> ${formData.parentName}
    </div>
    <div class="field">
      <span class="label">Email:</span> ${formData.email}
    </div>
    <div class="field">
      <span class="label">Phone:</span> ${formData.phone}
    </div>
    <div class="field">
      <span class="label">Grade/Class Applying For:</span> ${formData.grade}
    </div>
    <div class="field">
      <span class="label">Additional Information:</span> ${formData.message || 'None provided'}
    </div>
    
    <p>This message was sent on ${new Date().toLocaleString()}</p>
  </div>
</body>
</html>`;

      // Send email with simplified parameters
      await emailjs.send(
        'service_b2hxg6o',
        'template_3qvzmvp',
        {
          to_name: "Admin",
          from_name: formData.studentName,
          message: `Student: ${formData.studentName}, Parent: ${formData.parentName}, Grade: ${formData.grade}`,
          reply_to: formData.email,
          email: formData.email,
          phone: formData.phone,
          html_content: emailBody,
          subject: `Admission Query: ${formData.studentName}`,
        },
        'wAUmZXDZtQ2K3MWVk'
      );

      toast.success('Form submitted successfully!');
      setFormData({
        studentName: '',
        parentName: '',
        email: '',
        phone: '',
        grade: '',
        message: '',
      });
    } catch (error) {
      toast.error('Failed to submit form. Please try again.');
      console.error('Error sending email:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative w-full max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold"
          onClick={onClose}
          aria-label="Close"
          type="button"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold text-center mb-6">Admission Inquiry Form</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="studentName">Student Name</Label>
              <Input
                id="studentName"
                name="studentName"
                value={formData.studentName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="parentName">Parent/Guardian Name</Label>
              <Input
                id="parentName"
                name="parentName"
                value={formData.parentName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="grade">Grade/Class Applying For</Label>
            <Input
              id="grade"
              name="grade"
              value={formData.grade}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Additional Information</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
            />
          </div>

          <Button
            type="submit"
            className="w-full"
            disabled={isLoading}
          >
            {isLoading ? 'Submitting...' : 'Submit Inquiry'}
          </Button>
        </form>
      </div>
    </div>
  );
} 