import { toast } from "react-toastify";
export const toastError = error => {
  toast.error(error, {
    position: toast.POSITION.BOTTOM_RIGHT
  });
};
// if(typeof error ==='object' && error.message){
//   ({message}=error)
// }
// if(message!==null&&typeof message!=='undefined'&&message!==''){
//   console.log("hello")
//   toast.error(message)
// }
export const toastSuccess = success => {
  toast.success(success, {
    position: toast.POSITION.BOTTOM_RIGHT
  });
};
