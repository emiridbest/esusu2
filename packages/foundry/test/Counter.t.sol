// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Test, console} from "forge-std/Test.sol";
import {Counter} from "../src/Counter.sol";

contract CounterTest is Test {
    Counter public counter;

    function setUp() public {
        counter = new Counter();
        counter.setNumber(0);
    }

    function test_Increment() public {
        counter.increment();
        assertEq(counter.number(), 1);
    }

    function testFuzz_SetNumber(uint256 x) public {
        counter.setNumber(x);
        assertEq(counter.number(), x);
    }
}
No files changed, compilation skipped
Deployer: 0xb82896C4F251ed65186b416dbDb6f6192DFAF926
Deployed to: 0x00A4B6b53bCE2FaD8Bcd39bF4AB94e4Cdda7b497
Transaction hash: 0xd5c0d2d41f73ad3203ec62db629c60136721e46310874080684f4b9dcab79c0d