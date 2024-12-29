import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useLocalStorage } from "../hooks/useStorage";
import moment from "moment";
const AddNote2 = () => {
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
			// Append timestamp to the form as a hidden field
			const timestampInput = document.createElement("input");
			timestampInput.type = "hidden";
			timestampInput.name = "timestamp";
			timestampInput.value = moment().format("MMMM DD, YYYY hh:mm A"); // Example: "December 30, 2024 12:30 PM"
			form.current.appendChild(timestampInput);

			// Send the form using emailjs
			const res = await emailjs.sendForm(
				"service_4768qp6",
				"template_8mzqc8g",
				form.current, // Pass the form element
				"pTLonL2DycDNY8_M1" // Public key
			);

			console.log("res", res);

			// Update status
			setStatus("success");

			// Save form data in localStorage
			const formData = new FormData(form.current);
			const formValues = Object.fromEntries(formData.entries());
			setValue((prev) => [...prev, JSON.stringify(formValues)]);

			// Reset form and errors
			form.current.reset();
			setErrors({});
		} catch (error) {
			setStatus("error");
			console.error(error);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div>
			<div className="fixed top-0 left-0 w-full h-full z-20">
				<div className="w-full h-full flex justify-center items-center">
					<div className=" backdrop-brightness-50 portrait:w-full portrait:h-full landscape:h-[75%] portrait:aspect-[9/16] landscape:aspect-video rounded-2xl portrait:overflow-y-scroll no-scrollbar snap-mandatory snap-y relative p-10">
						<form ref={form} onSubmit={sendEmail} className="flex justify-center items-center h-full">
							<div className="bg-amber-300 rounded-lg landscape:py-14 portrait:py-10 landscape:w-[50%] portrait:w-full landscape:h-full portrait:h-[80%] relative space-y-6 p-6">
								<Link to="/" className="absolute top-0 right-0 m-5">
									<IoCloseSharp className=" text-slate-800" size={30} />
								</Link>{" "}
								<div className="relative">
									<input
										type="text"
										name="user_name"
										placeholder=" "
										className={`w-full px-4 py-3 bg-white/80 border-2 ${
											errors.name ? "border-red-400" : "border-amber-300"
										} rounded-lg focus:outline-none focus:border-amber-500 peer`}
									/>
									<label className="absolute left-4 top-3 text-amber-700 text-xs transition-all duration-300 -translate-y-8 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-8 peer-focus:text-black">
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
									<label className="absolute left-4 top-3 text-amber-700 text-xs transition-all duration-300 -translate-y-8 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-8 peer-focus:text-black">
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
										} rounded-lg h-48 resize-none focus:outline-none focus:border-amber-500 peer`}
									/>
									<label className="absolute left-4 top-3 text-amber-700 text-xs transition-all duration-300 -translate-y-8 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-8 peer-focus:text-black">
										Tell me something fun!
									</label>
									{errors.message && <p className="mt-1 text-red-500 text-xs">{errors.message}</p>}
								</div>{" "}
								{status === "success" && (
									<div className="absolute top-0 left-0 m-5 p-3 bg-green-100 text-green-700 rounded-sm text-center">
										Yay! Message sent! 🎉
									</div>
								)}
								{status === "error" && (
									<div className="absolute top-0 left-0 m-5 p-3 bg-red-100 text-red-700 rounded-sm text-center">
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
							</div>
							{/* <input
       type="submit"
       value={submitted ? "Saving note." : "💾Save Note"}
       disabled={submitted}
       hidden={!sameUser}
    /> */}
							{/* <div className="text-center">
       {submitted && (
          <p className="success-message">
             Note has been added
          </p>
       )}
    </div> */}
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AddNote2;
