// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.4.22 <0.9.0;

import './_Brand.sol';

//inherting brand in contract reprot
//Brand --> parent, report --> child
contract report is Brand {
    struct ReportData {
        uint256 products;//number of products that user have
        bool hasReported; //user has reported this brand or not
    }

// mapping of products with user and of which brand
    mapping(address =>mapping(address=>ReportData)) public userRepoInfo;

// event to report a brand
    event brandReported(address _brandOwner, address _reporter);

// event to revoked a report by reporter
    event brandReportRevoked(address _brandOwner, address _reporter);

//modifier to check if the reporter can report product/brand or not
    modifier checkReportAccess(address _brandOwner, address _reporter){
        require(userRepoInfo[_reporter][_brandOwner].products > 0 && userRepoInfo[_reporter][_brandOwner].hasReported != true);
        _;
    }

// modifier to check if report can be revoked or not
    modifier checkRevokeAccess(address _brandOwner, address _revoker){
        require(userRepoInfo[_revoker][_brandOwner].hasReported == true);
        _;
    }

// modifier to check if brand can be removed or not
    modifier checkRemoveBrand(address _brandOwner){
        require(brands[_brandOwner].reports > 5);
        //here check the delay time is greater than minimum setted time or not ....remaining to do
        _;
    }

//reporting a brand
    function brandReport(address _brandOwner) public checkReportAccess(_brandOwner, msg.sender) {
        userRepoInfo[msg.sender][_brandOwner].hasReported = true;
        brands[_brandOwner].reports++; //increasing report number of a inherited imported from brand.sol        
        emit brandReported(_brandOwner, msg.sender);
    }

// removing brand if the no of brand report is very high
    function removeBrand(address _brandOwner) private checkRemoveBrand(_brandOwner){
        deleteBrand(_brandOwner);
    }

// Report revoking by the reporter that has reported
    function revokeReport(address _brandOwner, address _reporter) public checkRevokeAccess(_brandOwner, _reporter) {
        userRepoInfo[_reporter][_brandOwner].hasReported = false;
        brands[_brandOwner].reports--;
    }

// check if user can report that brand or not
    function canReport(address _brandOwner, address _checker) public view returns(bool result){
        if(userRepoInfo[_checker][_brandOwner].products > 0 && userRepoInfo[_checker][_brandOwner].hasReported != true){
            return true;
        }else{
            return false;
        }
    }
}



