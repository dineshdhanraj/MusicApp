import axios from 'axios'
export default async function MusicAppService(url)
{
    try{
        const res = await axios.get(url);
        const ans = res.data;
        return ans;
    }
    catch(Error)
    {
        return {ErrorMessage:"Not Found"};
    }
}

