// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.4.22 <0.9.0;

contract Brand{
    struct Company {
        string brandName;
        string logo;
        uint256 reports;
    }

    // brands[address] will have the details of that brand
    mapping(address => Company) public brands;

    // checking brand exists or not
    mapping(string => bool) private exists;

    //used for checking if that address exists or not
    mapping(address => bool) private addressExits;

    // state variable with type address 
    address[] public brandOwners;

    //event for creating brand and stored in blockchain
    event BrandCreated(address _owner, string _brandName);

    //event for removing brand
    event BrandDeleted(address _owner, string _brandName);


    //modifier to check brandname alredy exits or not
    modifier checkBrandName(string memory _brandName){
        require(exists[_brandName]==false,'Brand Name Already Exits');
        _;
    }

    //modifier to check if a single owner account has only single brand linked
    modifier checkMultipleBrand() {
        bytes memory tempBrand = bytes(brands[msg.sender].brandName);
        require(tempBrand.length == 0, 'Account is already linked with other brand');
        _;
    }

    //checking if that brand belongs to the address that has invoke delete function or not
    modifier checkBrandOwnership(){
        require(addressExits[msg.sender] == true); 
        _;
    } 

    //Creating brand
    function createBrand(string memory _brandName,string memory _logo) public checkBrandName(_brandName) checkMultipleBrand {
        brandOwners.push(msg.sender);
        brands[msg.sender] = Company(_brandName,_logo,0);
        exists[_brandName] = true;
        addressExits[msg.sender] = true;
        emit BrandCreated(msg.sender,_brandName);
    }

    //delete brand
    // _brandOwner is passed from report.sol checking number of reports
    function deleteBrand(address _brandOwner) public {
        delete exists[brands[_brandOwner].brandName];
        emit BrandDeleted(_brandOwner,brands[_brandOwner].brandName);

    }
}