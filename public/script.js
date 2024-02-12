function closeAlert() {
    document.getElementById("myAlert").style.display = "none";
}

const textanim = document.querySelector(".sec-text");

const textload = () => {
    setTimeout(() => {
        textanim.innerHTML = "<strong>Call Bomber</strong>&nbsp;2024";
    }, 0);
};

textload();


// async function sendOTP() {
//     const phoneNumberElement = document.getElementById('phoneNumber');
//     const phoneNumber = phoneNumberElement.value.trim();
//     const valuephone = phoneNumberElement.value;
//     // Redirect to value.html with the input value as a query parameter
//     window.location.href = `/bomberstart.html?inputValue=${encodeURIComponent(valuephone)}`;

//     // if (!phoneNumber) {
//     //     alert('Please enter a phone number');
//     //     return;
//     // }

//     try {
//         const responseGuarented = await fetch('/send-otp/guarented', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Origin': 'https://www.guarented.com',
//                 'User-Agent': 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/119.0',
//             },
//             body: JSON.stringify({ phone: phoneNumber }),
//         });

//         const resultGuarented = await responseGuarented.json();
//         console.log(resultGuarented);

//         // Wait for 10 seconds before sending OTP from Swiggy
//         await new Promise(resolve => setTimeout(resolve, 10000));

//         const responseSwiggy = await fetch('/send-otp/swiggy', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Origin': 'https://www.swiggy.com',
//                 'User-Agent': 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/119.0',
//             },
//             body: JSON.stringify({ mobile: phoneNumber }),
//         });

//         const resultSwiggy = await responseSwiggy.json();
//         console.log(resultSwiggy);

//         // Wait for 10 seconds before sending OTP from Zomato
//         await new Promise(resolve => setTimeout(resolve, 10000));

//         const responseZomato = await fetch('/send-otp/zomato', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'multipart/form-data; boundary=---------------------------1860107177107053019979095740',
//                 'Origin': 'https://accounts.zomato.com',
//                 'Referer': 'https://accounts.zomato.com/zoauth/login?login_challenge=248874bba2644d5a87ad1b7fad1de15e',
//                 'User-Agent': 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:121.0) Gecko/20100101 Firefox/121.0',
//                 'x-zomato-csrft': '', // Replace with the actual CSRF token
//             },
//             body: JSON.stringify({ number: phoneNumber }),
//         });

//         const resultZomato = await responseZomato.json();
//         console.log(resultZomato);

//         // Wait for 10 seconds before sending OTP from Confirmtkt
//         await new Promise(resolve => setTimeout(resolve, 10000));

//         const responseConfirmtkt = await fetch('/send-otp/confirmtkt', {
//             method: 'GET',
//             body: JSON.stringify({ mobileNumber: phoneNumber }),
//         });

//         const resultConfirmtkt = await responseConfirmtkt.json();
//         console.log(resultConfirmtkt);

//         // Wait for 10 seconds before sending OTP from Swiggysignup
//         await new Promise(resolve => setTimeout(resolve, 10000));

//         const responseSwiggysignup = await fetch('/send-otp/swiggysignup', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Origin': 'https://www.swiggy.com',
//                 'User-Agent': 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/119.0',
//             },
//             body: JSON.stringify({ mobile: phoneNumber }),
//         });

//         const resultSwiggysignup = await responseSwiggysignup.json();
//         console.log(resultSwiggysignup);

//         // Wait for 10 seconds before sending OTP from Swiggysignup
//         await new Promise(resolve => setTimeout(resolve, 10000));

//         const responseZepto = await fetch('/send-otp/zepto', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json; charset=utf-8',
//                 'Referer': 'https://www.zeptonow.com/',
//                 'Access-Control-Allow-Credentials': 'true',
//                 'Access-Control-Allow-Origin': '*',
//                 'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
//                 'X-Requested-With': 'XMLHttpRequest',
//                 'requestId': '6704910682711572',
//                 'sessionId': '4384783635241841',
//                 'appVersion': '7.0.2-WEB',
//                 'bundleVersion': 'v1',
//                 'platform': 'WEB',
//                 'compatible_components': 'CONVENIENCE_FEE,NEW_FEE_STRUCTURE',
//                 'deviceId': '3034202986321597',
//                 'Origin': 'https://www.zeptonow.com',
//                 'Sec-Fetch-Dest': 'empty',
//                 'Sec-Fetch-Mode': 'cors',
//                 'Sec-Fetch-Site': 'cross-site',
//                 'deviceUID': '',
//                 'systemVersion': ''
//             },
//             body: JSON.stringify({ mobileNumber: phoneNumber }),
//         });

//         const resultzepto = await responseZepto.json();
//         console.log(resultzepto);

//         // Wait for 10 seconds before sending OTP from Swiggysignup
//         await new Promise(resolve => setTimeout(resolve, 10000));

//         const responseBlinkit = await fetch('/send-otp/blinkit', {
//             method: 'POST',
//             headers: {
//                 'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64; rv:122.0) Gecko/20100101 Firefox/122.0',
//                 'Content-Type': 'application/x-www-form-urlencoded',
//                 'Referer': 'https://blinkit.com/',
//                 'auth_key': 'c761ec3633c22afad934fb17a66385c1c06c5472b4898b866b7306186d0bb477',
//                 'app_client': 'consumer_web',
//                 'rn_bundle_version': '1009003012',
//                 'app_version': '52434332',
//                 'web_app_version': '1008010012',
//                 'session_uuid': '48a03c8e-fa7d-4d38-988d-862d7a7e2827',
//                 'device_id': 'e47066bd-6a3d-4ce6-8bfb-41caf3c1a80a'
//             },
//             body: JSON.stringify({ user_phone: phoneNumber }),
//         });

//         const resultblinkit = await responseBlinkit.json();
//         console.log(resultblinkit);

//     } catch (error) {
//         console.error('Error sending OTP:', error);
//     }
// }

async function stopOTP() {
    try {
        const response = await fetch('/stop-otp');
        const result = await response.json();
        console.log(result);
        
        if (result.success) {
            Swal.fire({
                icon: 'success',
                title: 'OTP Stopped',
                text: result.message
            }).then(() => {
                window.location.href = '/Home'; // Redirect to /Home
            });
        } else {
            console.error('Failed to stop OTP');
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: result.message
            });
        }
    } catch (error) {
        console.error('Error stopping OTP:', error);
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Failed to stop OTP. Please try again later.'
        });
    }
}




