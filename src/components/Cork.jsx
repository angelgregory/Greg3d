import React, { useEffect, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
// import useSWR from "swr";

const Cork = ({ isClose, setIsClose }) => {
	const location = useLocation();
	const [value, setValue] = useState(localStorage.getItem("email") ? JSON.parse(localStorage.getItem("email")) : []);
	useEffect(() => {
		setValue((prev) => (localStorage.getItem("email") ? JSON.parse(localStorage.getItem("email")) : []));
	}, [location.pathname]);

	// const [value, setValue, removeValue] = useLocalStorage("email", "");

	// const { data: notes } = useQuery({
	// 	queryFn: () => getAllNotes(),
	// 	queryKey: ["note"],
	// 	staleTime: Infinity,
	// });

	// console.log(notes);

	// const baseURL = `${import.meta.env.VITE_SERVER_URL}/api/notes`;
	// // console.log(import.meta.env.VITE_SERVER_URL);
	// const location = useLocation();
	// const [data, setData] = useState([]);
	// const [clicked, setClicked] = useState(false);
	// const [isLoading, setIsLoading] = useState(true);
	// const [error, setError] = useState(null);

	// // const { data } = useSWR(baseURL, (url) =>
	// //    axios(url).then((r) => {
	// //       setIsLoading(false);
	// //       return r.data;
	// //    })
	// // );
	// function fetchData() {
	//    // const { data } = useSWR(baseURL, (url) =>
	//    //    axios(url).then((r) => {
	//    //       setIsLoading(false);
	//    //       return r.data;
	//    //    })
	//    // );
	//    axios
	//       .get(baseURL)
	//       .then((res) => {
	//          setData(res.data);
	//          setIsLoading(false);
	//       })
	//       .catch((err) => {
	//          setError("error fetching data");
	//          setIsLoading(false);
	//       });
	// }

	// useEffect(() => {
	//    fetchData();
	// }, [location]);

	return (
		<div>
			<div className="fixed top-0 left-0 h-screen w-screen z-20 backdrop-blur-sm">
				<div className="w-full h-full flex justify-center items-center">
					<div className="w-full  portrait:m-0 m-24 bg-white portrait:w-full portrait:h-full landscape:h-[75%] portrait:aspect-[9/16] landscape:aspect-video rounded-2xl portrait:overflow-y-scroll no-scrollbar relative p-10">
						<div className="h-full rounded-lg overflow-auto no-scrollbar">
							<div className="flex justify-center items-center text-center mb-10">
								<IoCloseSharp
									className=" text-slate-800 absolute top-0 right-0 m-5 cursor-pointer"
									size={30}
									onClick={() => {
										setIsClose(true);
									}}
								/>
								<div className="">
									<h1 className="font-bold text-3xl">The Cork Board</h1>
									<p className="">Send Greg a message to check when he'll be back!</p>
									<p className="text-xs">(Don't worry, only you and he can see what you wrote.)</p>
								</div>
							</div>
							<ul className="flex list-none flex-wrap gap-5 overflow-scroll no-scrollbar h-full rounded-lg landscape:m-20 landscape:pb-64">
								<li className="bg-none landscape:flex-[1_0_21%] rounded-lg border-2 border-amber-300 hover:border-amber-300 hover:bg-amber-200 landscape:max-w-xs portrait:w-full max-h-60">
									<Link to={`/AddNote`}>
										<div className=" text-amber-300 flex justify-center items-center w-full h-full font-light text-5xl">
											+
										</div>
									</Link>
								</li>

								{value
									? value
											?.map((item) => JSON.parse(item))
											.slice(0)
											.reverse()
											.map((item) => (
												<li
													key={item._id}
													className="max-h-60 bg-amber-300 landscape:flex-[1_0_21%] rounded-lg border-2 border-amber-300 hover:border-amber-500 portrait:w-full"
												>
													{/* <Link to={`/note/${item._id}`}> */}
													<div className="w-full  h-full break-all text-ellipsis overflow-auto">
														<div className="p-10">
															<h4 className=" mt-0 mb-10 text-[10px]">
																{item.timestamp}
															</h4>
															<h3 className="font-nav mt-0 mb-10 text-xs">
																{item.message}
															</h3>
															{/* <p className="mt-0 mb-10 max-h-28">{item.description}</p> */}
														</div>
													</div>
													{/* </Link> */}
												</li>
											))
									: ""}
							</ul>
							{/* <ContactUs onClose={setIsClose} /> */}
							{/* 
							{notes && notes.length > 0 ? (
								<ul className="flex list-none flex-wrap gap-5 overflow-scroll no-scrollbar h-full rounded-lg landscape:m-20 landscape:pb-64">
									<li
										key={""}
										className="bg-none landscape:flex-[1_0_21%] rounded-lg border-2 border-amber-300 hover:border-amber-300 hover:bg-amber-200 w-full h-28"
									>
										<Link to={`/AddNote`}>
											<div className=" text-amber-300 flex justify-center items-center w-full h-full font-light text-5xl">
												+
											</div>
										</Link>
									</li>

									{notes
										.slice(0)
										.reverse()
										.map((item) => (
											<li
												key={item._id}
												className="bg-amber-300 landscape:flex-[1_0_21%] rounded-lg border-2 border-amber-300 hover:border-amber-500 portrait:w-full"
											>
												<Link to={`/note/${item._id}`}>
													<div className="w-full h-full break-all text-ellipsis overflow-hidden">
														<div className="p-10">
															<h3 className="font-nav mt-0 mb-10">{item.title}</h3>
															<p className="mt-0 mb-10 max-h-28">{item.description}</p>
														</div>
													</div>
												</Link>
											</li>
										))}
								</ul>
							) : null} */}
							{/* {
                     isLoading ? (
                        <p>Loading...</p>
                     ) : error ? (
                        <p>{error}</p>
                     ) : (
                        <ul className="flex list-none flex-wrap gap-5 overflow-scroll no-scrollbar h-full rounded-lg landscape:m-20 landscape:pb-64">
                           <li className="bg-none landscape:flex-[1_0_21%] rounded-lg border-2 border-amber-300 hover:border-amber-300 hover:bg-amber-200 w-full h-28">
                              <Link to={`/AddNote`}>
                                 <div className=" text-amber-300 flex justify-center items-center w-full h-full font-light text-5xl">
                                    +
                                 </div>
                              </Link>
                           </li>
                           {data
                              .slice(0)
                              .reverse()
                              .map((note) => (
                                 <li
                                    key={item._id}
                                    className="bg-amber-300 landscape:flex-[1_0_21%] rounded-lg border-2 border-amber-300 hover:border-amber-500 portrait:w-full"
                                 >
                                    <Link to={`/note/${item._id}`}>
                                       <div className="w-full h-full break-all text-ellipsis overflow-hidden">
                                          <div className="p-10">
                                             <h3 className="font-nav mt-0 mb-10">
                                                {item.title}
                                             </h3>
                                             <p className="mt-0 mb-10 max-h-28">
                                                {item.description}
                                             </p>
                                          </div>
                                       </div>
                                    </Link>
                                 </li>
                              ))}
                        </ul>
                     )}{" "} */}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cork;
