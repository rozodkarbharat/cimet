import axios from "axios"

export const FetchImage = async (url: string) => {
    const res =await axios.get(url);
    return res.data
}