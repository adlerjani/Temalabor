import axios, {AxiosPromise, AxiosRequestConfig} from "axios";

 
const callEndpoint = <ReturnType> (
    axiosRequestConfig: AxiosRequestConfig,
): AxiosPromise<ReturnType> =>{
    
    const axiosPromise: AxiosPromise = axios(axiosRequestConfig)

    return axiosPromise
    .catch((error) =>{
        throw(error)
    }
    )
    .then((response) =>{
        return response
    })

}


export default callEndpoint;