



const genrateOTP = ()=>{
    let otp = Math.floor(Math.random()*1000000);

    while(otp <=99999 || otp > 999999){
        otp = Math.floor(Math.random()*1000000)
    }

    return otp
}

export default genrateOTP