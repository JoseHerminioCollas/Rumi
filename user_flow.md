# Rumi: Project User Flow

The lifecycle of a Rumi NFT follows the physical stone from extraction or retail discovery through to international export.

## 1. Genesis & Minting (The "First Step")

### Track A: Certified Origin
*   **Data Capture**: Collect [REINFO](https://www.gob.pe) (Mining Formalization) ID, mining concession name, and GPS coordinates.
*   **Extraction Logging**: Record the **Date Mined**, raw weight, and batch number.
*   **Notarization**: Submit a timestamped message to the [Hedera Consensus Service (HCS)](https://docs.hedera.com) to create an immutable birth certificate for the raw mineral.
*   **Minting**: Upload [HIP-412](https://hips.hedera.com) metadata to [IPFS](https://ipfs.tech) and execute a `TokenMintTransaction` via [HTS](https://docs.hedera.com).

### Track B: Legacy & Retail
*   **Discovery**: Identify a stone in a Peruvian market or shop (e.g., Cusco).
*   **Acquisition Logging**: Record the shop's **RUC** (Tax ID), purchase date, and location.
*   **Validation**: A Rumi-authorized expert signs the transaction via a **Multi-sig Threshold Key** to confirm it is a mineral and not a protected [Patrimonio Cultural](https://www.gob.pe) artifact.
*   **Minting**: Generate the NFT with **Values like** `retail_acquisition` in the metadata.

## 2. Mounting & Artistry (Transformation)
*   **Artisan Handover**: The stone is delivered to a registered craftsman ([RNA Registry](https://artesania.mincetur.gob.pe)).
*   **Metadata Update**: The NFT metadata is updated (or a new version is minted) to include:
    *   **Mount Type**: **Values like** `Silver Bezel`, `Gold Prong`, or `Filigree`.
    *   **Artisan ID**: Cryptographic signature or ID of the maker.
    *   **Technique**: Description of the cultural method used.
*   **Visual Proof**: New high-resolution photography or 3D scans of the finished jewelry are uploaded to IPFS.

## 3. Marketplace & Primary Sale
*   **Listing**: The creator lists the stone on the Rumi Marketplace.
*   **Association**: The buyer "associates" the Token ID with their [HashPack](https://www.hashpack.app) wallet.
*   **Atomic Swap**: The smart contract executes a simultaneous exchange of HBAR/RUMI for the NFT, ensuring zero counterparty risk.

## 4. Secondary Resale & Royalties
*   **Trading**: Owners can resell their stones on secondary markets.
*   **Automated Royalties**: [HTS Custom Fees](https://docs.hedera.com) automatically direct a percentage of the resale price back to the original Peruvian artisan or the project treasury.

## 5. Export & Final Provenance
*   **Customs Filing**: The owner or exporter initiates a [SUNAT Exporta Fácil](http://www.exportafacil.gob.pe) declaration.
*   **Digital Packing List**: The NFT's metadata serves as the digital proof of origin and value for customs officers.
*   **Final Notarization**: Once the stone clears [SERPOST](https://www.serpost.com.pe), the **Export Permit Number** is hashed and added to the [HCS](https://docs.hedera.com) log, marking the "Legal Exit" of the asset from Peru.
