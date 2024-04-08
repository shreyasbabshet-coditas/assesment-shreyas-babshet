import axiosInstance from "../axios.service";

export const getAllJobs = async () => {
    try {
        const result = await axiosInstance.get('http://localhost:3000/jobs');
        console.log(result)
        return result.data;
    }
    catch (e) {
        console.log(e);
    }
}