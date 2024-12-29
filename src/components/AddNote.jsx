import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoCloseSharp, IoTrashBin } from "react-icons/io5";
import moment from "moment";
const AddNote = () => {
	const baseURL = `${import.meta.env.VITE_SERVER_URL}/api/notes`;
	const [description, setDescription] = useState("");
	const [title, setTitle] = useState("");
	const [timestamp, setTimestamp] = useState("");
	const [ip, setIp] = useState("");
	const [submitted, setSubmitted] = useState(false);

	const getData = async () => {
		const res = await axios.get("https://api.ipify.org/?format=json");
		//console.log(res.data);
		setIp(res.data.ip);
	};
	useEffect(() => {
		//console.log(ip);
		//passing getData method to the lifecycle method
		getData();
	}, []);

	function addNote(e) {
		e.preventDefault();
		axios
			.post(baseURL, { title, description, ip, timestamp: moment().format("mmmm dd, yyyy hh:mm a") })
			.then((response) => {
				if (!response.ok) {
					setTitle("");
					setDescription("");
					setTimestamp("");
					setSubmitted(true);
					setTimeout(() => setSubmitted(false), 2000);
				} else {
					console.log("failed to submit data");
				}
			});
	}
	return (
		<div>
			<div className="fixed top-0 left-0 w-full h-full z-20">
				<div className="w-full h-full flex justify-center items-center">
					<div className=" backdrop-brightness-50 portrait:w-full portrait:h-full landscape:h-[75%] portrait:aspect-[9/16] landscape:aspect-video rounded-2xl portrait:overflow-y-scroll no-scrollbar snap-mandatory snap-y relative p-10">
						<form onSubmit={addNote} className="flex justify-center items-center h-full">
							<div className="bg-amber-300 rounded-lg landscape:p-20 portrait:p-10 landscape:w-[50%] portrait:w-full landscape:h-full portrait:h-[80%] relative">
								<Link to="/" className="absolute top-0 right-0 m-5">
									<IoCloseSharp className=" text-slate-800" size={30} />
								</Link>
								<div className="flex absolute bottom-0 right-0 items-center justify-between w-full px-10">
									{/* <div className="" onClick={removeNote}>
                        <IoTrashBin
                           className={`text-red-800 cursor-pointer hover:scale-75 ${
                              !sameUser ? "hidden" : ""
                           }`}
                           size={30}
                        />
                     </div> */}
									<div className="w-full pb-5">
										<div className="flex justify-center w-full">
											{submitted && (
												<p className="success-message font-nav text-green-900">
													Note has been saved
												</p>
											)}
										</div>
										<input
											type="submit"
											value={submitted ? "Saving note." : "Save Note"}
											className={` bg-white rounded-lg py-4 cursor-pointer border-2 border-white hover:border-stone-500 w-full`}
											disabled={submitted || title == "" || description == ""}
										/>
									</div>
								</div>

								<div>
									<input
										type="text"
										value={title}
										onChange={(e) => setTitle(e.target.value)}
										placeholder="Title"
										className="placeholder-stone-600 font-nav bg-transparent w-full text-xl focus:outline-none focus:border-none h-20"
										// disabled={!sameUser}
									/>
								</div>
								<textarea
									value={description}
									onChange={(e) => {
										setDescription(e.target.value);
									}}
									placeholder="Description"
									row="4"
									cols="50"
									className="description bg-transparent w-full h-[80%] placeholder-stone-600 focus:outline-none focus:border-none"
									//  disabled={!sameUser}
								></textarea>
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

export default AddNote;
