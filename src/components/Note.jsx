import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { IoCloseSharp, IoTrashBin } from "react-icons/io5";
function Note() {
   const { id } = useParams();
   const baseURL = `${import.meta.env.VITE_SERVER_URL}/api/notes/${id}`;
   const [description, setDescription] = useState("");
   const [title, setTitle] = useState("");
   const [pastTitle, setPastTitle] = useState();
   const [pastDesc, setPastDesc] = useState();
   const [serverIp, setServerIp] = useState("");
   const [ip, setIp] = useState("");
   const [sameUser, setSameUser] = useState(false);
   const [submitted, setSubmitted] = useState(false);
   const [isLoading, setIsLoading] = useState(true);
   const location = useLocation();
   const navigate = useNavigate();

   useEffect(() => {
      axios
         .get(baseURL)
         .then((res) => {
            // console.log(res);
            setTitle(res.data.title);
            setDescription(res.data.description);
            setServerIp(res.data.ip);
            setIsLoading(false);
         })
         .catch((err) => {
            console.log(err);
            setIsLoading(false);
         });
      axios.get("https://api.ipify.org/?format=json").then((res) => {
         setIp(res.data.ip);
      });
   }, []);
   function note(e) {
      e.preventDefault();
      axios.put(baseURL, { title, description }).then((response) => {
         if (response) {
            setTitle("");
            setDescription("");
            setSubmitted(true);
            setTimeout(() => setSubmitted(false), 2000);
         }
      });
   }
   function removeNote() {
      axios.delete(baseURL).then((response) => {
         if (response) {
            navigate("/");
         }
      });
   }
   useEffect(() => {
      // do something
      setPastTitle(title);
      setPastDesc(description);
      if (ip === serverIp) {
         setSameUser(true);
      } else {
         setSameUser(false);
      }
      // console.log(sameUser);
   }, [ip]);
   return (
      <div>
         <div className="fixed top-0 left-0 w-full h-full z-20">
            <div className="w-full h-full flex justify-center items-center">
               <div className=" backdrop-brightness-50 portrait:w-full portrait:h-full landscape:h-[75%] portrait:aspect-[9/16] landscape:aspect-video rounded-2xl portrait:overflow-y-scroll no-scrollbar snap-mandatory snap-y relative p-10">
                  <form
                     onSubmit={note}
                     className="flex justify-center items-center h-full"
                  >
                     <div className="bg-amber-300 rounded-lg landscape:p-20 portrait:p-10 landscape:w-[50%] portrait:w-full landscape:h-full portrait:h-[80%] relative">
                        <Link to="/" className="absolute top-0 right-0 m-5">
                           <IoCloseSharp
                              className=" text-slate-800"
                              size={30}
                           />
                        </Link>
                        <div className="flex absolute bottom-0 right-0 items-center justify-between w-full px-10">
                           <div className="" onClick={removeNote}>
                              <IoTrashBin
                                 className={`text-red-800 cursor-pointer hover:scale-75 ${
                                    !sameUser ? "hidden" : ""
                                 }`}
                                 size={30}
                              />
                           </div>
                           <div>
                              <div className="">
                                 {submitted && (
                                    <p className="success-message font-nav text-green-900">
                                       Note has been saved
                                    </p>
                                 )}
                              </div>
                              <input
                                 type="submit"
                                 value={
                                    submitted ? "Saving note." : "Save Note"
                                 }
                                 className={` bg-white rounded-lg px-8 py-4 m-5 cursor-pointer border-2 border-white hover:border-stone-500 ${
                                    !sameUser ? "hidden" : ""
                                 }`}
                                 disabled={
                                    submitted ||
                                    title == "" ||
                                    description == "" ||
                                    (title == pastTitle &&
                                       description == pastDesc)
                                 }
                              />
                           </div>
                        </div>

                        <div>
                           <input
                              type="text"
                              value={title}
                              onChange={(e) => setTitle(e.target.value)}
                              placeholder="Title"
                              className="placeholder-stone-600 font-nav bg-transparent w-full mb-10 text-xl break-words  focus:outline-none focus:border-none "
                              disabled={!sameUser}
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
                           className="placeholder-stone-600 description bg-transparent w-full h-[80%]"
                           disabled={!sameUser}
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
}

export default Note;
