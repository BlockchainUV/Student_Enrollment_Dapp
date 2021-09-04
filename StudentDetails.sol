pragma solidity ^0.4.18;
contract StudentDetails {
    string fName;
    string lName;
    string dob;
    function setStudentDetails(string _fName, string _lName, string _dob) public {
        fName = _fName;
        lName = _lName;
        dob = _dob;
   }
    function getStudentDetails() public constant returns (string, string, string) {
        return (fName, lName, dob);
   }
}
