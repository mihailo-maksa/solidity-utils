// SPDX-License-Identifier: MIT
pragma solidity ^0.8.6;

contract Poster {
  event NewPost(address indexed account, string content);

  function post(string calldata content) public {
    emit NewPost(msg.sender, content);
  }
}
