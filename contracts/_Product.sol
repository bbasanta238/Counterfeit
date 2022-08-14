// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.4.22 <0.9.0;

import './_Report.sol';

contract Product is Report{
    //dtructure of product details
    struct productDetails {
        address manufacturer;
        string model;
        uint256 mfg;
    }

    //struct array for storing details of product created
    productDetails[] public products;

    // mapping to point the product to owner :: productid => owner address
    mapping(uint256 => address) public productOwner;

    // event to create product to store details in blockchain
    event productCreated(
        address _owner,
        uint256 _productId,
        uint256 _createdTime
    );
    // modifier to check whether the prduct created address has brand or not
  
    // function for creation of product
    function createProduct(uint256 _mfg, string memory _model) public checkBrandValidation(msg.sender){
        products.push(productDetails(msg.sender,_model,_mfg));
        uint256 _productId = products.length - 1;
        productOwner[_productId] = msg.sender;
        userRepoInfo[msg.sender][msg.sender].products++;
        emit productCreated(msg.sender, _productId, block.timestamp);

    }



}
