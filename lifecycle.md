# Rumi Project: Technical User Flow & Lifecycle

This document defines the architecture for the **Rumi NFT**, representing a physical Peruvian gemstone’s journey from extraction to international export. It utilizes the **Hedera Token Service (HTS)** for asset management and a **single Hedera Consensus Service (HCS) Topic** as a unified provenance registry.

---

## I. Infrastructure Setup (Executed Once)

Before any stones are processed, Rumi establishes the global rules and the master registry.

### 1. Token Class Creation (HTS)
Rumi executes a `TokenCreateTransaction` to establish the collection.
* **Purpose:** Creates a unique Token ID (e.g., `0.0.556677`) acting as the parent for all individual stones.
* **Code Update:** * Name: `"Rumi"`
    * Symbol: `"RUMI"`
* **Key Configuration:**
    * **Fee Schedule Key:** Assigned to Rumi Multi-sig. Allows adjusting royalties (e.g., 5%) or fees without migrating to a new token.
    * **Supply Key:** Held by Rumi to authorize minting of new serial numbers.
    * **Metadata Key:** Held by Rumi to update stone traits and export status.

### 2. Master Provenance Topic (HCS)
Rumi creates a **single HCS Topic ID**.
* **The Master Registry:** This single topic records every event for **all** stones in the Rumi ecosystem.
* **Function:** Instead of one topic per stone, Rumi sends a "tagged" message to this one topic. Auditors filter by `stone_id` to see the history of a specific asset.

---

## II. Individual Stone Lifecycle (Step 3: Executed for Each Stone)

### 3. Genesis & Notarization
* **Selection:** Identify as **Track A** (Mine) or **Track B** (Retail).
* **HCS Birth Certificate:** A message is sent to the **Master HCS Topic**.
    * *Format:* `{ "stone_id": "RUMI-001", "event": "GENESIS", "data_hash": "..." }`
* **HTS Minting:** Rumi mints a new Serial Number under the "Rumi" Token ID. The **HIP-412 JSON** is pinned to IPFS and linked to the NFT.

### 4. Transformation: Cutting & Artistry
* **Event:** Stone is processed by a registered artisan.
* **Metadata Update:** Rumi uses the **Metadata Key** to update the NFT’s CID with new 3D scans and Artisan IDs.
* **HCS Log:** A "TRANSFORMATION" message is sent to the Master HCS Topic, cryptographically linking the finished piece to its raw origin.

### 5. Sales & Economic Management
* **Primary/Secondary Sales:** Handled natively by HTS.
* **Royalty Engine:** The **5% Royalty** (set in Step 1) is automatically routed to Rumi. 
* **Fee Adjustment:** Rumi uses the **Fee Schedule Key** to update royalties across the entire "Rumi" collection simultaneously.

### 6. Export & Final Provenance
* **Customs Verification:** The NFT serves as the **Digital Packing List** for SUNAT.
* **HCS Final Notarization:** Once cleared by **SERPOST**, the Export Permit Number is hashed and sent to the Master HCS Topic.
* **Status Freeze:** Metadata is updated to `Legal Status: Exported`.

---

## III. Technical Appendix

### A. Core Hedera SDK Operations (JavaScript)

#### 1. Token Creation (Updated)
```javascript
const transaction = new TokenCreateTransaction()
    .setTokenName("Rumi") // Updated Name
    .setTokenSymbol("RUMI") // Updated Symbol
    .setTokenType(TokenType.NonFungibleUnique)
    .setTreasuryAccountId(rumiTreasuryId)
    .setFeeScheduleKey(rumiFeeAdminKey) 
    .setAdminKey(rumiAdminKey)
    .setSupplyKey(rumiSupplyKey)
    .setMetadataKey(rumiMetadataKey)
    .setCustomFees([
        new CustomRoyaltyFee()
            .setNumerator(5) 
            .setDenominator(100)
            .setFeeCollectorAccountId(rumiTreasuryId)
    ])
    .freezeWith(client);
```

#### 2. Fee Schedule Update (Using Fee Schedule Key)
```javascript
const transaction = new TokenFeeScheduleUpdateTransaction()
    .setTokenId(rumiTokenId)
    .setCustomFees([
        new CustomRoyaltyFee()
            .setNumerator(3) // Adjusted to 3%
            .setDenominator(100)
            .setFeeCollectorAccountId(rumiTreasuryId)
    ])
    .freezeWith(client);
```

#### 3. NFT Metadata Update (Artisan/Export)
```javascript
const transaction = new TokenUpdateNftsTransaction()
    .setTokenId(rumiTokenId)
    .setSerialNumbers([serialNumber])
    .setMetadata(Buffer.from(newIpfsHash)) // Updates CID to new metadata
    .freezeWith(client);
```

#### B. HCS Message Schema (JSON)

Each event sent to the HCS Topic should follow this format for audit consistency:

```javascript
{
  "event": "TRANSFORMATION",
  "stone_id": "RUMI-2026-001",
  "timestamp": "2026-03-05T12:00:00Z",
  "actor_id": "RNA-778899",
  "data_hash": "sha256:7f83b165...", 
  "action": "Finished 18k Gold Prong Setting"
}
```

### HCS Message Schema

| Field | Description | Example |
| :--- | :--- | :--- |
| **Stone ID** | The unique identifier for the specific stone. | `RUMI-2026-005` |
| **Event Type** | What happened to the stone? | `GENESIS`, `CUTTING`, `EXPORT` |
| **Data Hash** | A SHA-256 hash of the off-chain documents. | `7f83b165...` |
| **Actor** | Who performed the action? | `Rumi Admin`, `Artisan RNA-123` |

#### IV. Future Development: The Open Model
Smart Contract Transition: The Supply Key will be updated from a Private Key to a Contract ID.

Automation: Verified 3rd-party miners will trigger Step 3 via a Solidity contract that enforces whitelisting and automated minting fees paid to the Rumi Treasury.
