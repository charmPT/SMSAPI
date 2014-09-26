'use strict';
var request = require("request");
var error = "", response = "", body = "";

var reg = /^\d{21}$/; // to get int/numbers exact 21 digits // transaction code


describe('SMS API', function () {
	// describe('Basic URL', function(){
		
	// 	this.timeout(5000);

	// 	it('Check the response time', function(done){
	// 		request("http://promotexter.com/index.php/api/send_sms", function(e, r, b){
	// 			error = e;
	// 			response = r;
	// 			body = b;
	// 			done();
	// 		});
	// 	});

	// 	it('should have a body equal to -1', function(){
	// 		body.should.equal("-1");
	// 	});

	// 	it('should have a status code equal to 200', function(){
	// 		response.statusCode.should.equal(200); //http header // request success
	// 	});
	// });
	describe('Valid API', function(){
		
		this.timeout(5000);

		it('Check the response time', function(done){
			request("http://promotexter.com/index.php/api/send_sms?clientid=1000001&passkey=770AB3AEA2C5D4B6E80CE32C29A12ED9&msisdn=639175036290&message=helloworldweafawsgf&senderid=testid", function(e, r, b){
				error = e;
				response = r;
				body = b;
				done();
			});
		});

		it('acknowledgment should be 21-digit number', function(){
			reg.test(body).should.equal(true);
		});
	});

	describe('Invalid API', function(){
		
		this.timeout(5000);

		it('Check the response time', function(done){
			request("http://promotexter.com/index.php/api/send_sms?clientid=&passkey=770AB3AEA2C5D4B6E80CE32C29A12ED9&msisdn=639175036290&message=helloworldweafawsgf&senderid=testid", function(e, r, b){
				error = e;
				response = r;
				body = b;
				done();
			});
		});

		it('should have a body equal to -1', function(){
			body.should.equal("-1");
		});
	});

	describe('Invalid Client ID', function(){
	
		this.timeout(5000);

		it('Check the response time', function(done){
			request("http://promotexter.com/index.php/api/send_sms?clientid=1000002&passkey=770AB3AEA2C5D4B6E80CE32C29A12ED9&msisdn=639175036290&message=helloworldweafawsgf&senderid=testid", function(e, r, b){
				error = e;
				response = r;
				body = b;
				done();
			});
		});

		it('should have a body equal to -1', function(){
			body.should.equal("-1");
		});
	});

	describe('Valid Client ID', function(){

		this.timeout(5000);

		it('Check the response time', function(done){
			request("http://promotexter.com/index.php/api/send_sms?clientid=1000001&passkey=770AB3AEA2C5D4B6E80CE32C29A12ED9&msisdn=639175036290&message=helloworldweafawsgf&senderid=testid", function(e, r, b){
				error = e;
				response = r;
				body = b;
				done();
			});
		});

		it('acknowledgment should be 21-digit number', function(){
			reg.test(body).should.equal(true);
		});
	});

	describe('No Client ID', function(){

		this.timeout(5000);

		it('Check the response time', function(done){
			request("http://promotexter.com/index.php/api/send_sms?clientid=&passkey=770AB3AEA2C5D4B6E80CE32C29A12ED9&msisdn=639175036290&message=helloworldweafawsgf&senderid=testid", function(e, r, b){
				error = e;
				response = r;
				body = b;
				done();
			});
		});

		it('should have a body equal to -1', function(){
			body.should.equal("-1");
		});
	});

	describe('Invalid Passkey', function(){

		this.timeout(5000);

		it('Check the response time', function(done){
			request("http://promotexter.com/index.php/api/send_sms?clientid=1000001&passkey=70AB3AEA2C5D4B6E80CE32C29A12ED9&msisdn=639175036290&message=helloworldweafawsgf&senderid=testid", function(e, r, b){
				error = e;
				response = r;
				body = b;
				done();
			});
		});

		it('should have a body equal to -1', function(){
			body.should.equal("-1");
		});
	});

	describe('Valid Passkey', function(){

		this.timeout(5000);

		it('Check the response time', function(done){
			request("http://promotexter.com/index.php/api/send_sms?clientid=1000001&passkey=770AB3AEA2C5D4B6E80CE32C29A12ED9&msisdn=639175036290&message=helloworldweafawsgf&senderid=testid", function(e, r, b){
				error = e;
				response = r;
				body = b;
				done();
			});
		});

		it('acknowledgment should be 21-digit number', function(){
			reg.test(body).should.equal(true);
		});
	});

	describe('No Passkey', function(){
		
		this.timeout(5000);

		it('Check the response time', function(done){
			request("http://promotexter.com/index.php/api/send_sms?clientid=1000001&passkey=&msisdn=639175036290&message=helloworldweafawsgf&senderid=testid", function(e, r, b){
				error = e;
				response = r;
				body = b;
				done();
			});
		});

		it('should have a body equal to -1', function(){
			body.should.equal("-1");
		});
	});

	describe('Valid Mobile', function(){
		
		this.timeout(5000);

		it('Check the response time', function(done){
			request("http://promotexter.com/index.php/api/send_sms?clientid=1000001&passkey=770AB3AEA2C5D4B6E80CE32C29A12ED9&msisdn=639175036290&message=helloworldweafawsgf&senderid=testid", function(e, r, b){
				error = e;
				response = r;
				body = b;
				done();
			});
		});

		it('acknowledgment should be 21-digit number', function(){
			reg.test(body).should.equal(true);
		});
	});

	describe('Invalid Mobile', function(){

		this.timeout(5000);

		it('Check the response time', function(done){
			request("http://promotexter.com/index.php/api/send_sms?clientid=1000001&passkey=770AB3AEA2C5D4B6E80CE32C29A12ED9&msisdn=63917&message=helloworldweafawsgf&senderid=testid", function(e, r, b){
				error = e;
				response = r;
				body = b;
				done();
			});
		});

		it('should have a body equal to -1', function(){
			body.should.be.equal("-1");
		});
	});	

	describe('No Mobile', function(){

		this.timeout(5000);

		it('Check the response time', function(done){
			request("http://promotexter.com/index.php/api/send_sms?clientid=1000001&passkey=770AB3AEA2C5D4B6E80CE32C29A12ED9&msisdn=&message=helloworldweafawsgf&senderid=testid", function(e, r, b){
				error = e;
				response = r;
				body = b;
				done();
			});
		});

		it('should have a body equal to -1', function(){
			body.should.be.equal("-1");
		});
	});	

	describe('No Message', function(){

		this.timeout(5000);

		it('Check the response time', function(done){
		request("http://promotexter.com/index.php/api/send_sms?clientid=1000001&passkey=770AB3AEA2C5D4B6E80CE32C29A12ED9&msisdn=639175036290&message=&senderid=testid", function(e, r, b){
			error = e;
			response = r;
			body = b;
			done();
		});
		});

		it('should have a body equal to -1', function(){
		body.should.equal("-1");
		});
	});

	describe('Valid Message', function(){

		this.timeout(5000);

		it('Check the response time', function(done){
			request("http://promotexter.com/index.php/api/send_sms?clientid=1000001&passkey=770AB3AEA2C5D4B6E80CE32C29A12ED9&msisdn=639175036290&message=helloworldweafawsgf&senderid=testid", function(e, r, b){
				error = e;
				response = r;
				body = b;
				done();
			});
		});

		it('acknowledgment should be 21-digit number', function(){
			reg.test(body).should.equal(true);
		});
	});

	describe('Valid Sender ID', function(){
		
		this.timeout(5000);

		it('Check the response time', function(done){
			request("http://promotexter.com/index.php/api/send_sms?clientid=1000001&passkey=770AB3AEA2C5D4B6E80CE32C29A12ED9&msisdn=639175036290&message=helloworldweafawsgf&senderid=testid", function(e, r, b){
				error = e;
				response = r;
				body = b;
				done();
			});
		});

		it('acknowledgment should be 21-digit number', function(){
			reg.test(body).should.equal(true);
		});
	});

	describe('Invalid Sender ID', function(){
		
		this.timeout(5000);

		it('Check the response time', function(done){
			request("http://promotexter.com/index.php/api/send_sms?clientid=1000001&passkey=770AB3AEA2C5D4B6E80CE32C29A12ED9&msisdn=639175036290&message=helloworldweafawsgf&senderid=tes", function(e, r, b){
				error = e;
				response = r;
				body = b;
				done();
			});
		});

		it('should have a body equal to -1', function(){
			body.should.equal("-1");
		});
	});

	describe('No Sender ID', function(){

		this.timeout(5000);

		it('Check the response time', function(done){
			request("http://promotexter.com/index.php/api/send_sms?clientid=1000001&passkey=770AB3AEA2C5D4B6E80CE32C29A12ED9&msisdn=639175036290&message=helloworldweafawsgf&senderid=", function(e, r, b){
				error = e;
				response = r;
				body = b;
				done();
			});
		});

		it('should have a body equal to -1', function(){
			body.should.equal("-1");
		});
	});
});