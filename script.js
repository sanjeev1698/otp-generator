function generateOTP() {
    let otp = Math.random();
    otp = otp * 10000;
    otp = parseInt(otp);
    document.getElementById("otpOutput").innerText = otp;
}
