export function optimizeImage(url:string){

  return url.replace(
    "/upload/",
    "/upload/w_800,h_400,c_fit,q_auto,f_auto/"
  );

}