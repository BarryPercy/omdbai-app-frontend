import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { AppThunkDispatch } from '../../types'

export const GET_MOVIE = "GET_MOVIE";


export const getMovie = async (imdbId:String)=>{
    return async(dispatch: AppThunkDispatch) =>{
        try {
            const response = await fetch(process.env.REACT_APP_BACKEND+"/movies/"+imdbId)
            if(response.ok){
                const movie = await response.json()
                dispatch({
                    type:GET_MOVIE,
                    payload:movie
                })
            }
        } catch (error) {
            console.log(error)
        }
    }
    
}