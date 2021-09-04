if (typeof web3 !== 'undefined') {
	web3 = new Web3(web3.currentProvider);
} else {
	// set the provider you want from Web3.providers
	web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}

web3.eth.defaultAccount = '0xEddC85B6D07752cEe6c3fE6790725e87B85AA249';
//web3.eth.defaultAccount = web3.eth.accounts[0];

var StudentDetails = new web3.eth.Contract([
	{
		"constant": false,
		"inputs": [
		{
		"name": "_fName",
		"type": "string"
		},
		{
		"name": "_lName",
		"type": "string"
		},
		{
		"name": "_dob",
		"type": "string"
		}
		],
		"name": "setStudentDetails",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getStudentDetails",
		"outputs": [
		{
		"name": "",
		"type": "string"
		},
		{
		"name": "",
		"type": "string"
		},
		{
		"name": "",
		"type": "string"
		}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
], '0x410110592fD691B0258273B2B8FCe56Bf2AA4480');
//var StudentDetails = StudentDetailsContract.at('0x410110592fD691B0258273B2B8FCe56Bf2AA4480');

console.log(StudentDetails);

StudentDetails.methods.getStudentDetails().call(function(error, result) {
	if(!error) {
		$("#instructor").html('Enrolled ' + result[0] + ' ' + result[1] + ' with DOB '+ result[2]);
		console.log(result);
	} 
	else {
		console.log(error);
	}
});
/*StudentDetails.getStudentDetails(function(error, result) {
	if(!error) {
		$("#instructor").html('Enrolled ' + result[0] + ' ' + result[1] + ' with DOB '+ result[2]);
		console.log(result);
	} 
	else {
		console.log(error);
	}
});*/

$("#button").click(function() {
	StudentDetails.methods['setStudentDetails(string,string,string)']($("#fname").val(), $("#lname").val(), $("#dob").val()).send(
	{from: '0xEddC85B6D07752cEe6c3fE6790725e87B85AA249'}, function() {
		StudentDetails.methods['0xbc658659']().call(function(error, result) {
			if(!error) {
				$("#instructor").html('Enrolled ' + result[0] + ' ' + result[1] + ' with DOB '+ result[2]);
				console.log(result);
			} 
			else {
				console.log(error);
			}
		});
	});
});

/*$("#button").click(function() {
	StudentDetails.methods.setStudentDetails($("#fname").val(), $("#lname").val(), $("#dob").val());
});*/
