// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.4.22 <0.9.0;

import './_Product.sol';

contract Transfer is Product{


    // buying product event
    event buy(uint256 _productId, address _from, address _to, uint256 _transferTime);

    // modifier to check whether that product belongs to that seller or not
    modifier isbelong(uint256 _productId){
        require(productOwner[_productId] == msg.sender,'Product Owner can only perform this operation');
        _;        
    }
    // function fro emitting buy event
    function sellProduct(uint256 _productId, address _buyer) public isbelong(_productId){
      // getting the brand owner
        address _brandOwner = products[_productId].manufacturer;
        // getting the product Owner
        address _productOwner = productOwner[_productId];
        // product count dereased in  seller
        userRepoInfo[_productOwner][_brandOwner].products--;
        // changing the productOwner
        productOwner[_productId] = msg.sender;
        // product count increase in  buyer
        userRepoInfo[_buyer][_brandOwner].products++;
        // envoking event
        emit buy(_productId,_productOwner,_buyer,block.timestamp);
    }
    


}