import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useLocalStorage } from "../hooks/useStorage";

const ContactUs = ({ onClose }) => {
	const form = useRef();

	const [value, setValue, removeValue] = useLocalStorage("email", "");
	const [loading, setLoading] = useState(false);
	const [status, setStatus] = useState(null);
	const [errors, setErrors] = useState({});

	const validateForm = () => {
		const formData = new FormData(form.current);
		const newErrors = {};

		if (!formData.get("user_name").trim()) {
			newErrors.name = "Don't forget to tell me your name, though.";
		}

		if (!formData.get("user_email").trim()) {
			newErrors.email = "Welp, I need your email to write back.";
		} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.get("user_email"))) {
			newErrors.email = "Oopsie! This email doesn't look quite right!";
		}

		if (!formData.get("message").trim()) {
			newErrors.message = "Write something fun to send";
		}

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const sendEmail = async (e) => {
		e.preventDefault();

		if (!validateForm()) return;

		setLoading(true);
		setStatus(null);

		try {
			const res = await emailjs.sendForm("service_4768qp6", "template_8mzqc8g", form.current, {
				publicKey: "pTLonL2DycDNY8_M1",
			});
			console.log("res", res);
			setStatus("success");

			// Extract and store form values
			const formData = new FormData(form.current);
			const formValues = Object.fromEntries(formData.entries());
			setValue((prev) => [...prev, JSON.stringify(formValues)]);

			form.current.reset();
			setErrors({}); // Reset errors
		} catch (error) {
			setStatus("error");
			console.error(error);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="w-full mx-auto bg-white/50 rounded-xl backdrop-blur-sm">
			<form ref={form} onSubmit={sendEmail} className="space-y-6 p-6">
				<div className="relative">
					<input
						type="text"
						name="user_name"
						placeholder=" "
						className={`w-full px-4 py-3 bg-white/80 border-2 ${
							errors.name ? "border-red-400" : "border-amber-300"
						} rounded-lg focus:outline-none focus:border-amber-500 peer`}
					/>
					<label className="absolute left-4 top-3 text-amber-700 text-xs transition-all duration-300 -translate-y-8 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-8 peer-focus:text-amber-500">
						Your awesome name
					</label>
					{errors.name && <p className="mt-1 text-red-500 text-xs">{errors.name}</p>}
				</div>

				<div className="relative">
					<input
						type="email"
						name="user_email"
						placeholder=" "
						className={`w-full px-4 py-3 bg-white/80 border-2 ${
							errors.email ? "border-red-400" : "border-amber-300"
						} rounded-lg focus:outline-none focus:border-amber-500 peer`}
					/>
					<label className="absolute left-4 top-3 text-amber-700 text-xs transition-all duration-300 -translate-y-8 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-8 peer-focus:text-amber-500">
						Your email address (for replying!)
					</label>
					{errors.email && <p className="mt-1 text-red-500 text-xs">{errors.email}</p>}
				</div>

				<div className="relative">
					<textarea
						name="message"
						placeholder=" "
						className={`w-full px-4 py-3 bg-white/80 border-2 ${
							errors.message ? "border-red-400" : "border-amber-300"
						} rounded-lg h-32 resize-none focus:outline-none focus:border-amber-500 peer`}
					/>
					<label className="absolute left-4 top-3 text-amber-700 text-xs transition-all duration-300 -translate-y-8 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-8 peer-focus:text-amber-500">
						Tell me something fun!
					</label>
					{errors.message && <p className="mt-1 text-red-500 text-xs">{errors.message}</p>}
				</div>

				{status === "success" && (
					<div className="p-3 bg-green-100 text-green-700 rounded-lg text-center">Yay! Message sent! 🎉</div>
				)}

				{status === "error" && (
					<div className="p-3 bg-red-100 text-red-700 rounded-lg text-center">
						Oopsie! Let's try again! 🙈
					</div>
				)}

				<button
					type="submit"
					disabled={loading}
					className="w-full bg-amber-400 text-amber-900 py-3 px-6 rounded-lg font-medium hover:bg-amber-500 transition-colors duration-300 focus:ring-4 focus:ring-amber-200 disabled:opacity-50 disabled:cursor-not-allowed"
				>
					{loading ? "Sending..." : "Send my note!"}
				</button>
			</form>
		</div>
	);
};

export default ContactUs;
