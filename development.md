# Rumi: Development Strategy & Compliance Framework


This strategy outlines the implementation of **Rumi**, a project on **Hedera** designed to automate compliance and illuminate the provenance of tokenized Peruvian stones.

## 1. Provenance & Legal Triage
Categorize every asset into one of two cryptographic tracks to manage the variability of Peruvian sourcing.

*   **Track A: Documented Origin**
    *   For stones with [REINFO](https://padron.minem.gob.pe) (Mining Formalization) or [VUCE](https://www.vuce.gob.pe) permits.
    *   Map mining concession coordinates and [SUNAT](https://www.sunat.gob.pe) invoice data to the metadata.
*   **Track B: Legacy & Retail**
    *   For stones purchased in shops or markets without a documented history.
    *   Establish the **Point of Sale (PoS)** in Peru as the genesis event.
    *   Focus metadata on "Peruvian Heritage" and the artistry of the mount.

### 2. Compliance Automation & Regulatory Database Integration

Explicitly link the minting process to official Peruvian government databases to ensure high-integrity **Real World Asset (RWA)** tokenization. Every asset undergoes an automated **"Regulatory Handshake"** before the NFT is generated.

#### 🏛️ Authority & Database Mapping
Rumi's backend performs a lookup-and-log sequence against the following entities to verify the legality of the stone:


| Authority | Resource | Validation Purpose |
| :--- | :--- | :--- |
| **MINEM** | [REINFO Search](https://padron.minem.gob.pe) | Verifies the mining concession is active and the miner is in a state of **Vigente**. |
| **SUNAT** | [RUC Consultation](https://e-consultaruc.sunat.gob.pe) | Cross-referenced against the **SUNAT RUC Database** to ensure the shop is a legal commercial entity under **Article 6**. |
| **VUCE** | [Permit Verification](https://www.vuce.gob.pe) | Validates export authorizations and Certificates of Origin for international compliance. |

#### 🔗 Technical Implementation: HCS Proof of Compliance
To ensure transparency, Rumi utilizes the **[Hedera Consensus Service (HCS)](https://docs.hedera.com)** to notarize these database checks:

*   **Immutable Timestamping:** Every successful query to a Peruvian database is logged as a message on a dedicated **HCS Topic**.
*   **Cryptographic Linkage:** The unique **Topic ID** (e.g., `0.0.987654`) is embedded into the NFT metadata under the `compliance_proof_hcs` field.
*   **Auditability:** Customs officers at **[SERPOST](https://www.serpost.com.pe)** or international buyers can query the HCS Topic to view the raw, timestamped response from the government database at the moment of minting.

#### 📊 Enhanced Metadata Definitions
The following fields are integrated into the **[HIP-412](https://hips.hedera.com)** JSON to reflect this automated compliance:

*   **`compliance_proof_hcs`**: The HCS Topic ID containing the immutable record of the regulatory handshake.
*   **`last_regulatory_check`**: ISO 8601 timestamp (e.g., `2026-03-06T17:44:00Z`) of the most recent database validation.
*   **`REINFO Status`**: **Values like** `Vigente` or `Formalizado`, reflecting the miner’s standing in the **[MINEM](https://padron.minem.gob.pe)** registry.
*   **`vendor_ruc`**: The validated Tax ID of the merchant, ensuring the asset entered the market via a legal commercial entity.


## 3. Metadata Standardization ([HIP-412](https://hips.hedera.com))
Standardize the JSON schema to align with [PROMPERÚ](https://exportemos.pe) and international trade standards.

*   **Legal Status Field:** **Values like** `certified_origin`, `retail_acquisition`, or `legacy_collection`.
*   **Identification:** Capture the **RUC** (Tax ID) of the vendor or the [RNA (Registro Nacional del Artesano)](https://artesania.mincetur.gob.pe) ID of the artisan.
*   **Trade Codes:** Assign the **Harmonized System (HS) Code** based on [Aduanet](http://www.aduanet.gob.pe) classifications (e.g., `7103` for semi-precious stones).

## 4. The Validation Layer
Utilize **Hedera** features to mitigate the risk of tokenizing undocumented stones.

*   **Multi-Sig Sign-off:** Use a **Hedera Threshold Key**. A local expert or gemologist must sign the minting transaction.
*   **Cultural Protection:** Verify that the stone is not a protected archaeological artifact ([Patrimonio Cultural](https://www.gob.pe)) before the NFT is generated.

## 5. Physical-to-Digital Anchoring
Ensure the physical stone and the NFT remain a single unit through immutable records.

*   **Optical Fingerprinting:** Capture macro-photography of unique internal inclusions and upload to [IPFS](https://ipfs.tech).
*   **Immutable Logs:** Use the **Hedera Consensus Service (HCS)** to record the stone's journey from shop to buyer.
*   **Physical Pairing:** Issue a QR-enabled "Rumi Identity Card" at the point of purchase to link the specimen to its Mainnet record.

## 6. Artisan & Marketplace Onboarding
Focus the initial launch on the jewelry sectors of Cusco and Lima (Miraflores).

*   **Artisan Profiles:** Create decentralized identifiers for craftsmen to vouch for techniques.
*   **Value Attribution:** Highlight the "Mount Type" and "Technique" (**Values like** `Filigree`, `Cusqueño Inlay`, or `Silver Bezel`) to drive value when geological history is unavailable.
*   **Simplified Export:** Prepare metadata to auto-populate [Exporta Fácil](http://www.exportafacil.gob.pe) forms for international shipping.
 
 

```
 
