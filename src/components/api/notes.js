import { apiClient } from "./apiClient";

export const getAllNotes = async (params) => {
	const response = await apiClient.get("/api/notes", { params });
	console.log("Fetching all notes");
	return response.data;
};

export const getNote = async (id) => {
	const response = await apiClient.get(`/api/notes/${id}`, { params });
	return response.data;
};
