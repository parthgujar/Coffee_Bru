// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app=angular.module('page', ['ionic','ngCordova'])
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})


		app.controller('controller', function($scope,$http,$cordovaBarcodeScanner,$locale,$ionicLoading,$ionicSlideBoxDelegate) {
			
			//path="http://coffeebru-server.mybluemix.net/";
			//path="http://10.189.106.135:3000/"
			path="http://10.0.0.89:3000/";
			//path="http://172.20.10.2:3000/";
			$http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
			$scope.currentYear = new Date().getFullYear()
			$scope.currentMonth = new Date().getMonth() + 1
			$scope.months = $locale.DATETIME_FORMATS.MONTH
			$scope.signUp_details = {type:undefined}
			
			$scope.navSlide = function(index) {
				$ionicSlideBoxDelegate.slide(index, 100);
			}
			
			Object.toparams = function ObjecttoParams(obj) {
					var p = [];
					for (var key in obj) {
					p.push(key + '=' + encodeURIComponent(obj[key]));
					}
					return p.join('&');
				};
			
			
			$scope.signInSignUp=true;
			$scope.slider_image=true;
			// two generic methods for managing form //
			
			$scope.genericShow= function(){
				$scope.signInSignUp=false;
				$scope.logout_1=false;
				$scope.customer_home=false;
				$scope.userSignIn=false;
				$scope.cardDetails_1=false;
				$scope.login_details_1=false;
				$scope.qrcodeCanvas_1=false;
				$scope.customer_details=false;
				$scope.passwordDetails_1=false;
				$scope.cardDetailsUpdate_1=false;
				$scope.bussiness_home_1=false;
				$scope.personal_details_customer=false;
				$scope.bussiness_pd_form_1=false;
				$scope.signUpType_1=false;
				$scope.StripeKey_form_1=false;
				$scope.bussiness_ld_1=false;
				$scope.bussiness_home=false;
				$scope.bussiness_details=false;
				$scope.bussiness_cp_1=false;
				$scope.bussiness_sa_show=false;
				$scope.Menu_Show=false;
				$scope.Add_Item_Menu=false;
				$scope.Add_Item=false;
				$scope.edit_Menu=false;
				$scope.edit_Done=false;
				$scope.delete_item=false;
				$scope.cart_show=false;
				$scope.CustPayment_History=false;
				$scope.bussPayment_History=false;
				$scope.slider_image=false;
			};
			
			$scope.resetAllForm= function(){
				$scope.signUp_details={n1:"1"};
				$scope.signUp_details_pd={n1:"1"};
				$scope.signIn_Details={n1:"1"};
				$scope.customer_details_1={n1:"1"};
				$scope.password_details_View={n1:"1"};
				$scope.card_details_1={n1:"1"};
				$scope.stripe_key={n1:"1"};
				$scope.bussiness_details_1={n1:"1"};
				$scope.bussiness_sa={n1:"1"};
				$scope.item={n1:"0"};
				$scope.cartArray={n1:"1"};
				$scope.bussiness_pass_view={n1:"1"};
				signIn_Form.reset();
				bussiness_pd_form.reset();
				StripeKey_form.reset();
				bussiness_ld_Form.reset();
				signUpType_Form.reset();
				passwordDetails_Form.reset();
				personalDetails_Form.reset();
				paymentForm.reset();
				loginDetails_Form.reset();
				card_details_Form.reset();
				bussiness_cp_Form.reset();
				bussiness_sa_Form.reset();
				Add_Item_form.reset();
				//$scope.custPaymentArray="";
			};
			
			
			// SignUp 
			
			$scope.signUp = function() {
				$scope.resetAllForm();
				$scope.genericShow();
				$scope.signUp_details_pd = {bussiness: false}
				$scope.signUpType_1=true;
				$scope.signInSignUp=true;
			};
			
			// SignUp for customer
			
			$scope.signUp_1=function(){
				$scope.genericShow();
				$scope.signUpType_1=true;
				$scope.signInSignUp=true;
			};
			
			$scope.signUpType= function(signUp_details_pd)
			{
				
				if(signUp_details_pd.bussiness == true)
				{
					$scope.genericShow();
					$scope.signInSignUp=true;
					$scope.bussiness_pd_form_1=true;
				}
				else
				{
					$scope.genericShow();
					$scope.personal_details_customer=true;
					$scope.signInSignUp=true;
					
				}
				
			};
			
			$scope.cardDetails = function() {
				$scope.genericShow();
				$scope.cardDetails_1=true;
				$scope.signInSignUp=true;
			};
			
			$scope.loginDetails = function() {
				$scope.genericShow();
				$scope.login_details_1=true;
				$scope.signInSignUp=true;
			};
			
			
			$scope.submit_customer=function(signUp_details,signUp_details_pd)
			{
				var patt_firstName = /[A-Za-z. ]/;
				if(patt_firstName.test(signUp_details_pd.firstName)==false){
					alert("Please enter valid firstname");
					return;
				}
				
				var patt_lastName = /[A-Za-z. ]/;
				if(patt_lastName.test(signUp_details_pd.lastName)==false){
					alert("Please enter valid lastname");
					return;
				}
				
				
				var patt_contact = /[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}/;
				if(patt_contact.test(signUp_details_pd.contact)==false){
					alert("Please enter valid contact number");
					return;
				}
				
				var patt_email = /[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}/;
				if(patt_email.test(signUp_details_pd.email)==false){
					alert("Please enter valid email address");
					return;
				}
				
				
				var patt_number = /[0-9]/;
				if(patt_number.test(signUp_details.number)==false){
					alert("Credit card must be a valid Amex, Visa, Discover, or Master Card");
					return;
				}
				if(signUp_details.number.length > 19 || signUp_details.number.length < 16){
					alert("Credit card length must be between 16 to 19 digits long")
					return;
				}
				
				var patt_securityCode = /[0-9]/;
				if(patt_securityCode.test(signUp_details.securityCode)==false){
					alert("Please enter valid CCV");
					return;
				}
				if(signUp_details.securityCode.length != 3){
					alert("CCV must be 3-digit long");
					return;
				}
				
				var patt_password = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*([-+_!@#$%^&*.,?])).{5,7}/;
				if(patt_password.test(signUp_details_pd.password)==false){
					alert("Please enter valid password");
					return;
				}
				if(signUp_details_pd.password.length < 8){
					alert("Password must be longer than 8-digits");
					return;
				}
				
				if(signUp_details_pd.password != signUp_details_pd.confPassword){
					alert("Password and Confirm Password are required to be same");
					return;
				}
				
				
				do{
					var buf = new Uint32Array(1);
					var sequence_1 = window.crypto.getRandomValues(buf);
				}while(sequence_1.toString().length != 10);
				
				var text = JSON.stringify(signUp_details);
				
				var encrypt = new JSEncrypt();
				encrypt.setPublicKey("-----BEGIN PUBLIC KEY-----MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAuuht7Q7Ej5QgJi6DJ557p1+U3HHwljIVzfDg4MxB6ycOceeeYprz3/wmh/KHxJ5t6j+O1VKBfKOX4Wr7lh7RWPD1nkGNYa4MGQ+391/QJonFfq2eRV8WrTCJsuyELUkOjoK4C5EoR5y6Mj2Iy3HQYy6Ur5MxUrglTJ6WDddWAidInPAPb78909fBZ4rnMJTEP6/2uSVbWyRcCCDQ0e84S7MhsvkRQtcpzOIGvIseWhDxXcRDKC0rcVh/rIXjLzh+uFbVd0KjxY9u6E1M1akgc+R7CY8skYoeJLaN+o9F1Wfau2pvSTi0ysj08X3We+q3Fk9blaBeQYv+TBxqNjLynwIDAQAB-----END PUBLIC KEY-----");
				
				var encrypted = encrypt.encrypt(text);
				var cn="***********";
				cn+=(signUp_details.number).substr((signUp_details.number).length - 4);
				var ct=(signUp_details.type);
				
				var server_request_data={"encrypted_data":encrypted,"personal_details":JSON.stringify(signUp_details_pd),"sequence":sequence_1.toString(),"cardNumber":cn,"cardType":ct};
				
				$http({
					method:'POST',
					url: path+'signUp',
					data: Object.toparams(server_request_data)
				}).then(function(res)
						{
							if(res.data.status=="200"){
								alert(res.data.password);
								$scope.signIn();
							}
							else{
								alert(res.data.password);
							}
						});
			};
			
			// sign up for bussiness
			
			
			$scope.bussiness_AccoutDetails=function(){
				$scope.genericShow();
				$scope.signInSignUp=true;
				$scope.StripeKey_form_1=true;
			};
			
			$scope.bussiness_loginform=function()
			{	
				$scope.genericShow();
				$scope.signInSignUp=true;
				$scope.bussiness_ld_1=true;
			};
			
			$scope.submit_bussiness=function(stripe_key,signUp_details_pd){
				
				var stripe_key_value = JSON.stringify(stripe_key);
				
				var patt_name = /[A-Za-z. ]/;
				if(patt_name.test(signUp_details_pd.name)==false){
					alert("Please enter valid bussiness name");
					return;
				}
				
				var patt_contact = /[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}/;
				if(patt_contact.test(signUp_details_pd.contact)==false){
					alert("Please enter valid contact number");
					return;
				}
				
				var patt_email = /[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}/;
				if(patt_email.test(signUp_details_pd.email)==false){
					alert("Please enter valid email address");
					return;
				}
				
				if(stripe_key.publishKey.length < 20){
					alert("Publish Key must be greater than 20 digits");
					return;
				}
				
				if(stripe_key.publishKey != stripe_key.confpublishKey){
					alert("Publish key and confirm publish key are required to be same");
					return;
				}
				
				if(stripe_key.privateKey.length < 20){
					alert("Private Key must must be greater than 20 digits");
					return;
				}
				
				if(stripe_key.privateKey != stripe_key.confprivateKey){
					alert("Private key and confirm private key are required to be same");
					return;
				}
				
				var patt_password = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*([-+_!@#$%^&*.,?])).{5,7}/;
				if(patt_password.test(signUp_details_pd.password)==false){
					alert("Please enter valid password");
					return;
				}
				if(signUp_details_pd.password.length < 8){
					alert("Password must be longer than 8-digits");
					return;
				}
				
				if(signUp_details_pd.password != signUp_details_pd.confPassword){
					alert("Password and Confirm Password are required to be same");
					return;
				}
				
				var encrypt = new JSEncrypt();
				encrypt.setPublicKey("-----BEGIN PUBLIC KEY-----MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAuuht7Q7Ej5QgJi6DJ557p1+U3HHwljIVzfDg4MxB6ycOceeeYprz3/wmh/KHxJ5t6j+O1VKBfKOX4Wr7lh7RWPD1nkGNYa4MGQ+391/QJonFfq2eRV8WrTCJsuyELUkOjoK4C5EoR5y6Mj2Iy3HQYy6Ur5MxUrglTJ6WDddWAidInPAPb78909fBZ4rnMJTEP6/2uSVbWyRcCCDQ0e84S7MhsvkRQtcpzOIGvIseWhDxXcRDKC0rcVh/rIXjLzh+uFbVd0KjxY9u6E1M1akgc+R7CY8skYoeJLaN+o9F1Wfau2pvSTi0ysj08X3We+q3Fk9blaBeQYv+TBxqNjLynwIDAQAB-----END PUBLIC KEY-----");
				
				var publishKey = stripe_key.publishKey;
				var confpublishKey = stripe_key.confpublishKey;
				var privateKey = encrypt.encrypt(stripe_key.privateKey);
				var confprivateKey = encrypt.encrypt(stripe_key.confprivateKey);
					
				var key = {"publishKey":publishKey,"confpublishKey":confpublishKey,"privateKey":privateKey,"confprivateKey":confprivateKey};
				
				var server_request_data = {"personal_details":JSON.stringify(signUp_details_pd),"key":JSON.stringify(key)};
				
				
				$http({
					method:'POST',
					url: path+'bussinessSignUp',
					data: Object.toparams(server_request_data)
				}).then(function(res)
						{
							if(res.data.status=="200"){
								alert(res.data.password);
								$scope.genericShow();
								$scope.signIn();
							}
							else{
								alert(res.data.password);
							}
						});
					
			};
			
			
			// User Sign In
			
			$scope.signIn = function() {
				$scope.resetAllForm();	
				$scope.genericShow();
				$scope.signIn_Details = {bussiness: false}
				$scope.userSignIn=true;
				$scope.signInSignUp=true;
			};
			
			$scope.signIn_User = function(signIn_details) {
				
				var patt_email = /[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}/;
				if(patt_email.test(signIn_details.email)==false){
					alert("Please enter valid email address");
					return;
				}

				$http({
					method: 'POST',
					url: path+'loginValidate',
					data: Object.toparams(signIn_details)
					}).then(function(res) 
					{
						if(res.data.status=="200"){
								localStorage.setItem('coffeeBru_email',res.data.email);
								localStorage.setItem('coffeeBru_bussiness',signIn_details.bussiness);
								$scope.genericShow();
								$scope.resetAllForm();
								$scope.logout_1=true;
								$scope.slider_image=true;
								if(localStorage.getItem("coffeeBru_bussiness") == 'false'){
									$scope.customer_home=true;
								}
								else{
									$scope.bussiness_home=true;
								}
							}
							else{
								alert(res.data.password);
							}
					});
			};
			
			// customer pressing Home Button
			
			$scope.customerHome=function(){
				$scope.genericShow();
				$scope.resetAllForm();
				$scope.logout_1=true;
				$scope.customer_home=true;
				$scope.slider_image=true;
			}
			
			// After LogIn Customer getting Details
			
			$scope.customerDetails=function()
			{
				$scope.resetAllForm();
				$http({
					method:'POST',
					url: path+'customerDetails',
					data: Object.toparams({email:localStorage.getItem("coffeeBru_email"),bussiness:localStorage.getItem("coffeeBru_bussiness")})
				}).then(function(res)
				{
					if(res.data.status="200")
					{
						$scope.customer_details_1 = {lastName:res.data.user_data[0]["lastname"],contact:res.data.user_data[0]["contact"],email:res.data.user_data[0]["email"],firstName:res.data.user_data[0]["firstname"]};
						$scope.card_details_1 = {cardNumber:res.data.user_data[0]["cardnumber"],cardtype:res.data.user_data[0]["cardtype"]};
						//$scope.signUp_details = {number:"",type:"",name:"",securityCode:"",month:"",year:""};
						$scope.genericShow();
						$scope.customer_details=true;
						$scope.customer_home=true;
						$scope.logout_1=true;
					}
				});
			};
			
			// Customer changing password
			
			$scope.passwordView=function(){
				$scope.genericShow();
				$scope.passwordDetails_1=true;
				$scope.customer_home=true;
				$scope.logout_1=true;
				
			};
			
			$scope.changePassword=function(password_details_View){
				var password_details = JSON.stringify(password_details_View);
				
				var patt = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*([-+_!@#$%^&*.,?])).{5,7}/;
				if(patt.test(password_details_View.newPassword)==false){
					alert("Please enter valid new password");
					return;
				}
				if(password_details_View.newPassword.length < 8){
					alert("New password must be longer than 8-digits");
				}
				if(password_details_View.newPassword != password_details_View.confPassword){
					alert("New password and Confirm Password are required to be same");
				}
				
				$http({
					method:'POST',
					url: path+'changePassword',
					data: Object.toparams({email:localStorage.getItem("coffeeBru_email"),bussiness:localStorage.getItem("coffeeBru_bussiness"),password:password_details})
				}).then(function(res)
				{
					if(res.data.status=="200"){
						alert(res.data.password);
						$scope.logout();
						$scope.slider_image=false;
						$scope.userSignIn=true;
					}
					else{
						alert(res.data.password);
					}
				});	
				
			};
			
			// customer changing card details
			
			$scope.cardDetailsView=function(){
				$scope.genericShow();
				$scope.cardDetailsUpdate_1=true;
				$scope.customer_home=true;
				$scope.logout_1=true;
			};
			
			$scope.updateCreditCard=function(signUp_details){
				
				var patt_number = /[0-9]/;
				if(patt_number.test(signUp_details.number)==false){
					alert("Credit card must be a valid Amex, Visa, Discover, or Master Card");
					return;
				}
				if(signUp_details.number.length > 19 || signUp_details.number.length < 16){
					alert("Credit card length must be between 16 to 19 digits long")
					return;
				}
				
				var patt_securityCode = /[0-9]/;
				if(patt_securityCode.test(signUp_details.securityCode)==false){
					alert("Please enter valid CCV");
					return;
				}
				if(signUp_details.securityCode.length != 3){
					alert("CCV must be 3-digit long");
					return;
				}
				
				
				var text = JSON.stringify(signUp_details);
				var encrypt = new JSEncrypt();
				encrypt.setPublicKey("-----BEGIN PUBLIC KEY-----MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAuuht7Q7Ej5QgJi6DJ557p1+U3HHwljIVzfDg4MxB6ycOceeeYprz3/wmh/KHxJ5t6j+O1VKBfKOX4Wr7lh7RWPD1nkGNYa4MGQ+391/QJonFfq2eRV8WrTCJsuyELUkOjoK4C5EoR5y6Mj2Iy3HQYy6Ur5MxUrglTJ6WDddWAidInPAPb78909fBZ4rnMJTEP6/2uSVbWyRcCCDQ0e84S7MhsvkRQtcpzOIGvIseWhDxXcRDKC0rcVh/rIXjLzh+uFbVd0KjxY9u6E1M1akgc+R7CY8skYoeJLaN+o9F1Wfau2pvSTi0ysj08X3We+q3Fk9blaBeQYv+TBxqNjLynwIDAQAB-----END PUBLIC KEY-----");
				
				var encrypted = encrypt.encrypt(text);
				var cn="***********";
				cn+=(signUp_details.number).substr((signUp_details.number).length - 4);
				var ct=(signUp_details.type);
				
				var server_request_data={"encrypted_data":encrypted,"cardNumber":cn,"cardType":ct,email:localStorage.getItem("coffeeBru_email"),bussiness:localStorage.getItem("coffeeBru_bussiness")};
				
				$http({
					method:'POST',
					url: path+'cardDetailsUpdate',
					data: Object.toparams(server_request_data)
				}).then(function(res)
						{
							if(res.data.status=="200"){
								alert(res.data.password);
								$scope.resetAllForm();	
								$scope.genericShow();
								$scope.customerDetails();
								//$scope.customer_home=true;
								//$scope.logout_1=true;
							}
							else{
								alert(res.data.password);
							}
						});
			};
			
			// customer generating QR-Code
			
			$scope.generateQRCode=function(){
				
				do{
					var buf = new Uint32Array(1);
					var sequence_1 = window.crypto.getRandomValues(buf);
				}while(sequence_1.toString().length != 10);
				
				$http({
					method:'POST',
					url: path+'generateQRCode',
					data: Object.toparams({email:localStorage.getItem("coffeeBru_email"),bussiness:localStorage.getItem("coffeeBru_bussiness"),"sequence":sequence_1.toString()})
				}).then(function(res)
						{
							if(res.data.status=="200"){
								//alert(res.data.password);
								
								$("#qrcodeCanvas").html("");
								
								QRCode_1=jQuery('#qrcodeCanvas').qrcode({
								text	: JSON.stringify(sequence_1)
								});
								
							$scope.genericShow();
							$scope.resetAllForm();
							$scope.qrcodeCanvas_1=true;
							$scope.customer_home=true;
							$scope.logout_1=true;
						}
						else{
							alert(res.data.password);
						}
					});
				
			};
			
			
			// customer fetching payment history
			
			$scope.customerHistory=function(){
				
					$http({
					method:'POST',
					url:path+'customerPaymentHistory',
					data:Object.toparams({email:localStorage.getItem("coffeeBru_email"),bussiness:localStorage.getItem("coffeeBru_bussiness")})
				}).then(function(res){
					
					if(res.data.status="200"){
						var serverData = JSON.stringify(res.data);
						$scope.custPaymentArray = [];
						for(var i=0;i<res.data.len; i++){
							$scope.custPaymentArray[i]=res.data.payment_history[i];
						}
					}
					else{
						alert(res.data.password);
					}
					$scope.genericShow();
					$scope.resetAllForm();
					$scope.CustPayment_History=true;
					$scope.customer_home=true;
					$scope.logout_1=true;
			})
		};	
			
			
			
			// customer pressing Home Button
			
			$scope.bussinessHome=function(){
				$scope.genericShow();
				$scope.resetAllForm();
				$scope.logout_1=true;
				$scope.bussiness_home=true;
				$scope.slider_image=true;
			}
			
			// bussiness logged in and fetching details
			
			$scope.bussinessDetails=function()
			{
				$scope.resetAllForm();
				$http({
					method:'POST',
					url: path+'bussinessDetails',
					data: Object.toparams({email:localStorage.getItem("coffeeBru_email"),bussiness:localStorage.getItem("coffeeBru_bussiness")})
				}).then(function(res)
				{
					if(res.data.status="200")
					{
						$scope.bussiness_details_1 = {name:res.data.user_data[0]["name"],contact:res.data.user_data[0]["contact"],email:res.data.user_data[0]["email"],publishKey:res.data.user_data[0]["publishKey"]};
						$scope.genericShow();
						$scope.bussiness_details=true;
						$scope.bussiness_home=true;
						$scope.logout_1=true;
					}
					else{
						alert(res.data.password);
					}
				});
			};
						
			// bussiness changing password
			
			$scope.bussiness_p=function(){
				$scope.genericShow();
				$scope.bussiness_home=true;
				$scope.bussiness_cp_1=true;
				$scope.logout_1=true;
			};
			
			
			$scope.bussiness_changePassword=function(bussiness_pass_view){
				var password_details = JSON.stringify(bussiness_pass_view);
				
				var patt = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*([-+_!@#$%^&*.,?])).{5,7}/;
				if(patt.test(bussiness_pass_view.newPassword)==false){
					alert("Please enter valid new password");
					return;
				}
				if(bussiness_pass_view.newPassword.length < 8){
					alert("New password must be longer than 8-digits");
				}
				if(bussiness_pass_view.newPassword != bussiness_pass_view.confPassword){
					alert("New Password and Confirm Password are required to be same");
				}
				
				$http({
					method:'POST',
					url: path+'bussinessChangePassword',
					data: Object.toparams({email:localStorage.getItem("coffeeBru_email"),bussiness:localStorage.getItem("coffeeBru_bussiness"),password:password_details})
				}).then(function(res)
				{
					if(res.data.status=="200"){
						alert(res.data.password);
						//$scope.logout();
						$scope.signIn();
						$scope.userSignIn=true;
					}
					else{
						alert(res.data.password);
					}
				});	
				
			};
			
			// bussiness changing stripe account details
			
			$scope.bussiness_sa_details=function(){
				$scope.genericShow();
				//$scope.resetAllForm(); because bussiness_details_1 require value
				$scope.bussiness_sa_show=true;
				$scope.bussiness_home=true;
				$scope.logout_1=true;
			};
			
			$scope.bussiness_change_sa=function(bussiness_sa){
				
				var stripe_key_value = JSON.stringify(bussiness_sa);
				
				if(bussiness_sa.publishKey.length < 20){
					alert("Publish Key must be greater than 20 digits");
					return;
				}
				
				if(bussiness_sa.publishKey != bussiness_sa.confpublishKey){
					alert("Publish key and confirm publish key are required to be same");
					return;
				}
				
				if(bussiness_sa.privateKey.length < 20){
					alert("Private Key must must be greater than 20 digits");
					return;
				}
				
				if(bussiness_sa.privateKey != bussiness_sa.confprivateKey){
					alert("Private key and confirm private key are required to be same");
					return;
				}
				
				var encrypt = new JSEncrypt();
				encrypt.setPublicKey("-----BEGIN PUBLIC KEY-----MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAuuht7Q7Ej5QgJi6DJ557p1+U3HHwljIVzfDg4MxB6ycOceeeYprz3/wmh/KHxJ5t6j+O1VKBfKOX4Wr7lh7RWPD1nkGNYa4MGQ+391/QJonFfq2eRV8WrTCJsuyELUkOjoK4C5EoR5y6Mj2Iy3HQYy6Ur5MxUrglTJ6WDddWAidInPAPb78909fBZ4rnMJTEP6/2uSVbWyRcCCDQ0e84S7MhsvkRQtcpzOIGvIseWhDxXcRDKC0rcVh/rIXjLzh+uFbVd0KjxY9u6E1M1akgc+R7CY8skYoeJLaN+o9F1Wfau2pvSTi0ysj08X3We+q3Fk9blaBeQYv+TBxqNjLynwIDAQAB-----END PUBLIC KEY-----");
				
				var publishKey = bussiness_sa.publishKey;
				var confpublishKey = bussiness_sa.confpublishKey;
				var privateKey = encrypt.encrypt(bussiness_sa.privateKey);
				var confprivateKey = encrypt.encrypt(bussiness_sa.confprivateKey);
					
				var key = {"publishKey":publishKey,"confpublishKey":confpublishKey,"privateKey":privateKey,"confprivateKey":confprivateKey};
				
				var server_request_data = {"key":JSON.stringify(key),email:localStorage.getItem("coffeeBru_email"),bussiness:localStorage.getItem("coffeeBru_bussiness")};
				
				$http({
					method:'POST',
					url: path+'bussinessChangeSA',
					data: Object.toparams(server_request_data)
				}).then(function(res)
						{
							if(res.data.status=="200"){
								alert(res.data.password);
								$scope.genericShow();
								$scope.resetAllForm();
								$scope.bussiness_home=true;
								$scope.logout_1=true;
							}
							else{
								alert(res.data.password);
							}
						});
			};
			
			// Bussiness scanning QR-code for transaction
			
			
			$scope.scanQRCode = function(cartArray) {
				$cordovaBarcodeScanner.scan().then(function(imageData) {
				var user_email;
				var image_text = angular.fromJson(imageData.text);
				var nitesh = image_text["0"].toString();
				alert("Scan Successful");
				$scope.loading();
				$http({
					method: 'POST',
					url: path+'scannedQR',
					data: Object.toparams(nitesh)
					}).then(function(res) 
					{
						if(res.data.status=="200"){
							var decrypt = new JSEncrypt();
								
							var step1=JSON.stringify(res.data.user_data[0]);
							var step2=angular.fromJson(step1);
							
							user_email=step2.email;
							user_name=step2.firstname;
							//alert(user_name);
							var cardDetails = step2.card_details;
								
							var encrypted = step2.card_details;
								
							decrypt.setPrivateKey(res.data.key);
							var uncrypted = decrypt.decrypt(encrypted);
							//alert(uncrypted);
								
							$scope.bussinessDetails_transaction(function(v2,status_1){
								
								//alert("v2 return"+v2.email);
								if(status_1=="400"){
									return;
								}
								
								Stripe.setPublishableKey(v2.publishKey);
								
								var step3=angular.fromJson(uncrypted);
								//alert("month"+step3.month);
								var month_1=0;
								if((step3.month).length == 1){
									month_1+=step3.month;
								}
								else{
									month_1=step3.month;
								}
								
								var year_1 = (step3.year).substr(0,4);
								
								//alert(step3.number);
								//alert(month_1);
								//alert(year_1);
								//alert(step3.securityCode);
								
								Stripe.token.create({
								card: {
										"number": step3.number,
										"exp_month":month_1,
										"exp_year": year_1,
										"cvc":step3.securityCode
									  }
									}, function(err, token) {
											if (err){
												//alert(err);
												$scope.unloading();
												if(err != "200"){
												alert("Card details invalid,please try with different credit card");
												return;
												}
											}
											if (token) {
												
												//alert(token);
												//alert(v2.privateKey);
												
												var encrypt_privateKey = v2.privateKey;
												var decrypted_privateKey = decrypt.decrypt(encrypt_privateKey);
												
												//alert(decrypted_privateKey);
												
												var cart= angular.toJson(cartArray);
												
												//alert(cart);
												
												var token = {"cartArray":cart,"currency": "usd","source": token.id,"description":user_email,"user_name":user_name,"privateKey":decrypted_privateKey,"bussinessEmail":localStorage.getItem("coffeeBru_email")};
												$scope.sendToken(token,function(){
													//alert("burrraaaahhhhhh");
													
												});
											}
										});			
									});
							
							
							}
							else{
								$scope.unloading();
								alert(res.data.password);
							}
					});
				
			}, function(error) {
				$scope.unloading();
				console.log("An error happened -> " + error);
			});
			};
			
			
			// fetching bussiness publish key for transaction
			
			$scope.bussinessDetails_transaction=function(callback)
			{
				$http({
					method:'POST',
					url: path+'bussinessDetails',
					data: Object.toparams({email:localStorage.getItem("coffeeBru_email"),bussiness:localStorage.getItem("coffeeBru_bussiness")})
				}).then(function(res)
				{
					var v1="";
					if(res.data.status="200"){
						v1={email:res.data.user_data[0]["email"],publishKey:res.data.user_data[0]["publishKey"],privateKey:res.data.user_data[0]["privateKey"]};
						
						callback(v1,res.data.status);
					}
					else{
						alert(res.data.password);
						callback(v1,res.data.status);
					}
				});
			};
			
			// bussiness sending token to server
			
			$scope.sendToken=function(token_1,callback)
			{
				//alert("in send token");
				$http({
					method:'POST',
					url: path+'token',
					data: Object.toparams(token_1)
				}).then(function(res)
				{
					if(res.data.status="200"){
						$scope.unloading();
						alert(res.data.password);
						$scope.bussinessHistory();
						callback();
					}else{
						$scope.unloading();
						alert(res.data.password);
						callback();
					}
				});
			};
			
			// bussiness fetching payment history
			
			$scope.bussinessHistory=function(){
				
					$http({
					method:'POST',
					url:path+'bussinessPaymentHistory',
					data:Object.toparams({email:localStorage.getItem("coffeeBru_email"),bussiness:localStorage.getItem("coffeeBru_bussiness")})
				}).then(function(res){
					
					if(res.data.status="200"){
						var serverData = JSON.stringify(res.data);
						$scope.bussPaymentArray = [];
						for(var i=0;i<res.data.len; i++){
							$scope.bussPaymentArray[i]=res.data.payment_history[i];
						}
					}
					else{
						alert(res.data.password);
					}
					$scope.genericShow();
					$scope.resetAllForm();
					$scope.bussPayment_History=true;
					$scope.bussiness_home=true;
					$scope.logout_1=true;
			})
		};	
			
			
			// Creating Menu
			
			$scope.showMenu = function(){
				
				$http({
					method:'POST',
					url:path+'getMenuItems',
					data: Object.toparams({"email":localStorage.getItem("coffeeBru_email")})
				}).then(function(res){
					$scope.resetAllForm();
					$scope.genericShow();
					if(res.data.status == 200){
						var serverData = JSON.stringify(res.data);
						$scope.itemArray = [];
						for(var i=0;i<res.data.len; i++){
							$scope.itemArray[i]=res.data.menu_items[i];
						}
					}
					else{
						alert(res.data.password);
					}
					if(res.data.len == 0){
						alert("Menu is empty,please add items in menu to continue");
						$scope.Add_Item=true;
						$scope.Menu_Show=false;
					}
					else{
						$scope.Menu_Show=true;
					}
					$scope.bussiness_home=true;
					$scope.Add_Item_Menu=true;
					$scope.edit_Menu=true;
				});
			};
			
			$scope.addItem=function(){
				if($scope.Add_Item==true){
					$scope.Add_Item=false;
					$scope.resetAllForm();
				}else{
					$scope.Add_Item=true;
				}
			};
			
			$scope.submitItem=function(item){
				var item_details = JSON.stringify(item);
				if(item.price <= 0){
					alert("Please enter valid price for an item");
					return;
				}
				
				$http({
					method:'POST',
					url:path+'addMenuItem',
					data: Object.toparams({"menu_details":item_details,"email":localStorage.getItem("coffeeBru_email")})
				}).then(function(res){
					if(res.data.status == 200){
						alert(res.data.password);
						var serverData = JSON.stringify(res.data);
						$scope.itemArray = [];
						for(var i=0;i<res.data.len; i++){
							$scope.itemArray[i]=res.data.menu_items[i];
							Add_Item_form.reset();
							$scope.item={n1:"0"};
							$scope.Menu_Show=true;
						}
					}
					else{
						alert(res.data.password);
					}
				});
			};
			
			
			$scope.editItems=function(){
				if($scope.itemArray.length == 0){
					alert("Menu is empty");
					return;
				}
				$scope.resetAllForm();
				$scope.genericShow();
				$scope.bussiness_home=true;
				$scope.edit_Done=true;
				$scope.delete_item=true;
			};
			
			$scope.delete_item_function=function(itemName){
				
				$http({
					method:'POST',
					url:path+'deleteMenuItem',
					data: Object.toparams({"itemName":itemName,"email":localStorage.getItem("coffeeBru_email")})
				}).then(function(res){
					if(res.data.status == 200){
						alert(res.data.password);
						var serverData = JSON.stringify(res.data);
						$scope.itemArray = [];
						for(var i=0;i<res.data.len; i++){
							$scope.itemArray[i]=res.data.menu_items[i];
						}
						if(res.data.len == 0){
							$scope.showMenu();
						}
					}
					else{
						alert(res.data.password);
					}
				});
			};
			
			$scope.editComplete=function(){
				$scope.showMenu();
			};
			// End of menu
			
			
			// Taking order from customer
	
			$scope.buttonEnabled=function(){
				var buttonEnable=true;
 				angular.forEach($scope.itemArray, function(item){
						if (item.selected)
						{
							buttonEnable=false;
						}
					});
					if(buttonEnable==false){
							Add_Item_form.reset();
							$scope.item={n1:"0"};
							$scope.Add_Item=false;
					}
					return buttonEnable;
				};						 
			
			$scope.addToCart = function(){ 
				generateBil = [];
				item_1=true;
				angular.forEach($scope.itemArray, function(item){
 					if(item_1){
						if (item.selected){
							if(item.quantity < 0 || item.quantity==undefined){
								alert("Please enter valid quantity for item "+item.name )
								item_1=false;
							}
							else{
								generateBil.push(item);
							}
							
						}	
					}});
					if(item_1){
					var total_1="0";
					$scope.cartArray=[];
					for(var i=0;i<generateBil.length;i++){
						generateBil[i].sum = generateBil[i].price * generateBil[i].quantity;
						$scope.cartArray[i]=generateBil[i];
						total_1=+(total_1) + +(generateBil[i].sum);
						}
						$scope.total = total_1;
						$scope.genericShow();
						$scope.cart_show=true;
					}	
				};
			
			
			$scope.backToMenu=function(){
				$scope.cart_show=false;
				$scope.Menu_Show=true;
				$scope.bussiness_home=true;
				$scope.edit_Menu=true;
				$scope.Add_Item_Menu=true;
			};
			
			$scope.checkOut=function(cartArray){
				$scope.scanQRCode(cartArray);
			};
			
			
			// Managing logout functionality
			
			$scope.logout= function(){
				localStorage.clear();
				$scope.genericShow();
				$scope.resetAllForm();
				$scope.slider_image=true;
				$scope.signIn_Details = {bussiness: false}
				$scope.signInSignUp=true;
			};
			
			// Maintaining session on both bussiness and customer
			
			if(localStorage.getItem('coffeeBru_email')!=null && localStorage.getItem('coffeeBru_bussiness')!=null)
			{
				if(localStorage.getItem('coffeeBru_bussiness')=="true"){
					$scope.resetAllForm();	
					$scope.genericShow();
					$scope.bussiness_home=true;
					$scope.slider_image=true;
					$scope.logout_1=true;
				}else{
					$scope.resetAllForm();	
					$scope.genericShow();
					$scope.slider_image=true;
					$scope.customer_home=true;
					$scope.logout_1=true;
				}
			}
			
			
			// client side validations //
			
			
			// SignIn form Validation
			
			$scope.validateEmail=function(signIn_Details) {
				if(signIn_Details.email==undefined){
					return;
				}
				var patt = /[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}/;
				if(patt.test(signIn_Details.email)==false){
					alert("Username must be valid email address");
					return;
				}
			}
			
			// customer sign up form validation 
			
			$scope.custpd_FirstName=function(signUp_details_pd) {
				if(signUp_details_pd.firstName==undefined){
					return;
				}
				var patt = /[A-Za-z. ]/;
				if(patt.test(signUp_details_pd.firstName)==false){
					alert("Please enter valid firstname");
					return;
				}
			}
			
			$scope.custpd_LastName=function(signUp_details_pd) {
				if(signUp_details_pd.lastName==undefined){
					return;
				}
				var patt = /[a-zA-Z. ]/;
				if(patt.test(signUp_details_pd.lastName)==false){
					alert("Please enter valid lastname");
					return;
				}
			}
			
			$scope.custpd_Contact=function(signUp_details_pd) {
				if(signUp_details_pd.contact==undefined){
					return;
				}
				var patt = /[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}/;
				if(patt.test(signUp_details_pd.contact)==false){
					alert("Please enter valid contact number");
					return;
				}
			}
			
			$scope.custpd_Email=function(signUp_details_pd) {
				if(signUp_details_pd.email==undefined){
					return;
				}
				var patt = /[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}/;
				if(patt.test(signUp_details_pd.email)==false){
					alert("Please enter valid email address");
					return;
				}
			}
			
			$scope.custPayment_CC=function(signUp_details){
				if(signUp_details.number==undefined){
					return;
				}
				var patt = /[0-9]/;
				if(patt.test(signUp_details.number)==false){
					alert("Credit card must be a valid Amex, Visa, Discover, or Master Card");
					return;
				}
				if(signUp_details.number.length > 19 || signUp_details.number.length < 16){
					alert("Credit card length must be between 16 to 19 digits long")
				}
			}
			
			$scope.custPayment_securityCode=function(signUp_details){
				if(signUp_details.securityCode==undefined){
					return;
				}
				var patt = /[0-9]/;
				if(patt.test(signUp_details.securityCode)==false){
					alert("Please enter valid CCV");
					return;
				}
				if(signUp_details.securityCode.length != 3){
					alert("CCV must be 3-digit long");
				}
			}
			
			$scope.custLF_Password=function(signUp_details_pd){
				if(signUp_details_pd.password==undefined){
					return;
				}
				var patt = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*([-+_!@#$%^&*.,?])).{5,7}/;
				if(patt.test(signUp_details_pd.password)==false){
					alert("Please enter valid password");
					return;
				}
				if(signUp_details_pd.password.length < 8){
					alert("Password must be longer than 8-digits");
				}
			}
			
			$scope.custLF_ConfPassword=function(signUp_details_pd){
				if(signUp_details_pd.confPassword==undefined){
					return;
				}
				if(signUp_details_pd.password != signUp_details_pd.confPassword){
					alert("Password and Confirm Password are required to be same");
				}
			}
			
			
			// customer changing password
			
			$scope.custPD_NewPass=function(password_details_View){
				if(password_details_View.newPassword==undefined){
					return;
				}
				var patt = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*([-+_!@#$%^&*.,?])).{5,7}/;
				if(patt.test(password_details_View.newPassword)==false){
					alert("Please enter valid password");
					return;
				}
				if(password_details_View.newPassword.length < 8){
					alert("Password must be longer than 8-digits");
				}
			}
			
			$scope.custPD_ConfPass=function(password_details_View){
				if(password_details_View.confPassword==undefined){
					return;
				}
				if(password_details_View.newPassword != password_details_View.confPassword){
					alert("Password and Confirm Password are required to be same");
				}
			}
			
			// bussiness sign up form validation
			
			$scope.buss_pd_Name=function(signUp_details_pd) {
				if(signUp_details_pd.name==undefined){
					return;
				}
				var patt = /[A-Za-z. ]/;
				if(patt.test(signUp_details_pd.name)==false){
					alert("Please enter valid bussiness name");
					return;
				}
			}
			
			$scope.buss_pd_Contact=function(signUp_details_pd) {
				if(signUp_details_pd.contact==undefined){
					return;
				}
				var patt = /[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}/;
				if(patt.test(signUp_details_pd.contact)==false){
					alert("Please enter valid contact number");
					return;
				}
			}
			
			$scope.buss_pd_Email=function(signUp_details_pd) {
				if(signUp_details_pd.email==undefined){
					return;
				}
				var patt = /[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}/;
				if(patt.test(signUp_details_pd.email)==false){
					alert("Please enter valid email address");
					return;
				}
			}
			
			$scope.stripe_PublicKey=function(stripe_key){
				if(stripe_key.publishKey==undefined){
					return;
				}
				if(stripe_key.publishKey.length < 20){
					alert("Publish Key must be greater than 20 digits");
				}
			}
			
			$scope.stripe_ConfPublicKey=function(stripe_key){
				if(stripe_key.confpublishKey==undefined){
					return;
				}
				if(stripe_key.publishKey != stripe_key.confpublishKey){
					alert("Publish key and confirm publish key are required to be same");
				}
			}
			
			$scope.stripe_PrivateKey=function(stripe_key){
				if(stripe_key.privateKey==undefined){
					return;
				}
				if(stripe_key.privateKey.length < 20){
					alert("Private Key must must be greater than 20 digits");
				}
			}
			
			$scope.stripe_ConfPrivateKey=function(stripe_key){
				if(stripe_key.confprivateKey==undefined){
					return;
				}
				if(stripe_key.privateKey != stripe_key.confprivateKey){
					alert("Private key and confirm private key are required to be same");
				}
			}
			
			// bussiness changing password 
			
			$scope.bussPass_NewPass=function(bussiness_pass_view){
				if(bussiness_pass_view.newPassword==undefined){
					return;
				}
				var patt = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*([-+_!@#$%^&*.,?])).{5,7}/;
				if(patt.test(bussiness_pass_view.newPassword)==false){
					alert("Please enter valid password");
					return;
				}
				if(bussiness_pass_view.newPassword.length < 8){
					alert("Password must be longer than 8-digits");
				}
			}
			
			$scope.bussPass_ConfPass=function(bussiness_pass_view){
				if(bussiness_pass_view.confPassword==undefined){
					return;
				}
				if(bussiness_pass_view.newPassword != bussiness_pass_view.confPassword){
					alert("Password and Confirm Password are required to be same");
				}
			}
			
			// bussiness changing Stripe Account KEY //
			
			$scope.bussSA_publishKey=function(bussiness_sa){
				if(bussiness_sa.publishKey==undefined){
					return;
				}
				if(bussiness_sa.publishKey.length < 20){
					alert("Publish Key must be greater than 20 digits");
				}
			}
			
			$scope.bussSA_confpublishKey=function(bussiness_sa){
				if(bussiness_sa.confpublishKey==undefined){
					return;
				}
				if(bussiness_sa.publishKey != bussiness_sa.confpublishKey){
					alert("Publish key and confirm publish key are required to be same");
				}
			}
			
			$scope.bussSA_privateKey=function(bussiness_sa){
				if(bussiness_sa.privateKey==undefined){
					return;
				}
				if(bussiness_sa.privateKey.length < 20){
					alert("Private Key must must be greater than 20 digits");
				}
			}
			
			$scope.bussSA_confprivateKey=function(bussiness_sa){
				if(bussiness_sa.confprivateKey==undefined){
					return;
				}
				if(bussiness_sa.privateKey != bussiness_sa.confprivateKey){
					alert("Private key and confirm private key are required to be same");
				}
			}
			
			 $scope.loading = function() {
					$ionicLoading.show({
					template: 'Please wait...'
					});
			};
			
			$scope.unloading = function(){
				$ionicLoading.hide();
			};
			
			
			
	}); 


angular.module('page').directive
  ( 'creditCardType'
  , function(){
      var directive =
        { require: 'ngModel'
        , link: function(scope, elm, attrs, ctrl){
            ctrl.$parsers.unshift(function(value){
              scope.signUp_details.type =
                (/^5[1-5]/.test(value)) ? "Mastercard"
                : (/^4/.test(value)) ? "Visa"
                : (/^3[47]/.test(value)) ? 'Amex'
                : (/^6011|65|64[4-9]|622(1(2[6-9]|[3-9]\d)|[2-8]\d{2}|9([01]\d|2[0-5]))/.test(value)) ? 'Discover'
                : undefined
              ctrl.$setValidity('invalid',!!scope.signUp_details.type)
              return value
            })
          }
        }
      return directive
      }
    )

angular.module('page').directive
  ( 'cardExpiration'
  , function(){
      var directive =
        { require: 'ngModel'
        , link: function(scope, elm, attrs, ctrl){
            scope.$watch('[signUp_details.month,signUp_details.year]',function(value){
              ctrl.$setValidity('invalid',true)
              if ( scope.signUp_details.year == scope.currentYear
                   && scope.signUp_details.month <= scope.currentMonth
                 ) {
				alert("Provided expiration date is invalid")	 
                ctrl.$setValidity('invalid',false)
              }
              return value
            },true)
          }
        }
      return directive
      }
    )

angular.module('page').filter
  ( 'range'
  , function() {
      var filter = 
        function(arr, lower, upper) {
          for (var i = lower; i <= upper; i++) arr.push(i)
          return arr
        }
      return filter
    }
  )
  
  