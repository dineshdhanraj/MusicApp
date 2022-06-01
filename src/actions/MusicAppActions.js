import * as Actions from "../constants/MusicAppConstants"

export const ListAction=(ListData)=>{return async (dispatch)=>{
dispatch({type:Actions.DataDetails,payload:ListData})
}}
export const ErrorAction=(ErrorData)=>{return async (dispatch)=>{
    dispatch({type:Actions.Error,payload:ErrorData})
    }}

