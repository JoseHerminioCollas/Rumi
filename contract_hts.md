## 📜 Smart Contract Logic: HTS Integration

To maintain high performance and fixed low fees, **Rumi** utilizes the [Hedera Token Service (HTS) System Contract (0x167)](https://docs.hedera.com). This allows the Solidity layer to govern business logic (legal tracks and metadata pairing) while delegating asset management to the native network layer.

### Technical Advantages
*   **Atomic Finality**: Transactions reach consensus in 3.3 seconds, ensuring the "Birth Certificate" of the stone is instant.
*   **Native Royalties**: Royalties for artisans are enforced by the **HTS Custom Fee Schedule**, not by Solidity code, ensuring they are paid even on secondary marketplaces.
*   **Metadata Consistency**: The contract ensures every minted serial is paired with its specific **Track A or B** classification before it enters circulation.

### RumiController.sol

```solidity
// SPDX-License-Identifier: Apache-2.0
pragma solidity ^0.8.0;

import "./HederaTokenService.sol";
import "./HederaResponseCodes.sol";

/**
 * @title RumiController
 * @dev Manages the minting of Peruvian stone NFTs using Hedera Native Token Service.
 * Separates Track A (Certified) from Track B (Legacy/Retail) via programmatic logic.
 */
contract RumiController is HederaTokenService {
    address constant HTS_PRECOMPILE = address(0x167);
    address public owner;

    enum ProvenanceTrack { CERTIFIED, LEGACY }

    struct Stone {
        string stoneId;
        ProvenanceTrack track;
        string legalUri;
        bool isValidated;
    }

    mapping(uint256 => Stone) public registry;

    constructor() {
        owner = msg.sender;
    }

    /**
     * @dev Mints a stone NFT via HTS Precompile for ~0.05 USD.
     * @param tokenAddress The HTS Token ID (as address) for the stone collection.
     * @param _id Internal Rumi ID.
     * @param _track Track A (Certified) or Track B (Legacy).
     * @param _metadata The HIP-412 JSON metadata for IPFS.
     */
    function mintStone(
        address tokenAddress,
        string memory _id,
        ProvenanceTrack _track,
        bytes[] memory _metadata
    ) external returns (int64 responseCode, int64[] memory serialNumbers) {
        require(msg.sender == owner, "Only Rumi admin can mint");

        // Execute Native Minting via HTS precompile (0x167)
        (int response, , int64[] memory serials) = 
            HederaTokenService.mintToken(tokenAddress, 0, _metadata);

        if (response != HederaResponseCodes.SUCCESS) {
            revert("HTS Minting Failed");
        }

        // Map the new serial number to its legal provenance track
        registry[uint256(serials)] = Stone({
            stoneId: _id,
            track: _track,
            legalUri: "https://rumi.earth",
            isValidated: true
        });

        return (int64(response), serials);
    }
}
```

```javascript

const { 
    TokenCreateTransaction, 
    TokenType, 
    TokenSupplyType, 
    Client, 
    PrivateKey 
} = require("@hashgraph/sdk");

async function createRumiToken() {
    // Configure your Hedera Testnet Client
    const client = Client.forTestnet();
    client.setOperator(process.env.OPERATOR_ID, process.env.OPERATOR_KEY);

    const supplyKey = PrivateKey.generate();

    // 1. Define the Token Identity (Name and Symbol)
    const transaction = new TokenCreateTransaction()
        .setTokenName("Rumi Stones of Peru")     // The full name of the collection
        .setTokenSymbol("RUMI")                  // The ticker symbol
        .setTokenType(TokenType.NonFungibleUnique) // Defines this as an NFT collection
        .setDecimals(0)
        .setInitialSupply(0)                     // Initial supply is 0; stones are minted later
        .setTreasuryAccountId(process.env.OPERATOR_ID)
        .setSupplyType(TokenSupplyType.Infinite) // Allows continuous minting of new stones
        .setSupplyKey(supplyKey)                 // This key is required for the Solidity contract to mint
        .freezeWith(client);

    // 2. Sign and Execute
    const signTx = await transaction.sign(PrivateKey.fromString(process.env.OPERATOR_KEY));
    const txResponse = await signTx.execute(client);
    
    // 3. Get the Token ID (Address)
    const receipt = await txResponse.getReceipt(client);
    const tokenId = receipt.tokenId;

    console.log(`Rumi Token Created! ID: ${tokenId}`);
    console.log(`Solidity Address: ${tokenId.toSolidityAddress()}`);
    
    return tokenId;
}

```
