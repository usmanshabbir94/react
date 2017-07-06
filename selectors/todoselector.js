export const todoselector = (state) => {
  let userid=null
  if(state.userid.id)
    userid =state.userid.id
  return userid
}

export const getReportForm = (state) => {
    let reportForm = null
    if(state.form.UploadDataModel.values){
         reportForm = state.form.UploadDataModel.values
    }
    return reportForm
}
