function generateOTP() {
    let otp = Math.random();
    otp = otp * 9999;
    otp = parseInt(otp);
    document.getElementById("otpOutput").innerText = otp;
}