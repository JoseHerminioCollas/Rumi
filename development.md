# Rumi Development Strategy: Phase 1

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

## 2. Compliance Automation & Regulatory Database Integration
Explicitly link the minting process to official Peruvian government databases to ensure high-integrity RWA tokenization.

*   **MINEM (REINFO) Integration:** Automate the validation of mining concessions by querying the [REINFO Public Registry](https://padron.minem.gob.pe). Minting for Track A is programmatically restricted unless the miner’s RUC is in a state of **Vigente** (Active).
*   **SUNAT RUC Validation:** Use [SUNAT Web Services](https://cpe.sunat.gob.pe) to verify the tax standing and economic activity of vendors for Track B assets, ensuring legal acquisition under **Article 6**.
*   **VUCE Digital Handshake:** Cross-reference export permits and Certificates of Origin through the [VUCE Interoperability API](https://landing.vuce.gob.pe) to append verified export status to the NFT lifecycle.
*   **HCS Proof of Compliance:** For every successful database check, submit a message to the **Hedera Consensus Service (HCS)** containing the timestamped hash of the regulatory record, creating an immutable audit trail.

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

---

# Rumi: Regulatory and Technical Reference Directory

This directory contains the essential links for the Rumi project to maintain legal compliance with Peruvian law and technical alignment with the Hedera ecosystem.

## 1. Peruvian Regulatory & Export Authorities
*   **[SUNAT](https://www.sunat.gob.pe):** (Superintendencia Nacional de Aduanas y de Administración Tributaria). The authority for tax and customs.
    *   *Reference:* [Customs Tariff Search (Arancel de Aduanas)](http://www.aduanet.gob.pe)
*   **[PROMPERÚ](https://www.gob.pe):** The Commission for the Promotion of Peru for Export and Tourism.
    *   *Reference:* [Exportemos Portal](https://exportemos.pe)
*   **[VUCE](https://www.vuce.gob.pe):** (Ventanilla Única de Comercio Exterior). The portal for electronic permits for restricted goods.
*   **[MINCETUR](https://www.gob.pe):** (Ministerio de Comercio Exterior y Turismo). The ministry overseeing foreign trade and artisanal crafts.
*   **[SERPOST / Exporta Fácil](http://www.exportafacil.gob.pe):** The simplified export regime for small businesses and artisans.

## 2. Mining & Legal Frameworks
*   **[INGEMMET](https://www.gob.pe):** (Instituto Geológico, Minero y Metalúrgico). The entity that manages mining concessions and geological data.
*   **[MINEM](https://www.gob.pe):** (Ministerio de Energía y Minas). Oversees mining policies and the **REINFO** (Registro Integral de Formalización Minera).
*   **[Ley General de Minería](https://www.gob.pe):** (DS Nº 014-92-EM). The primary legislation governing mineral origin and ownership.
*   **Article 4 (Libre Comercialización):** Defines the right to free internal and external trade of mineral products.
*   **Article 6 (Posesión de Minerales):** Governs the legal possession of minerals by non-concession holders (retailers/artisans).
*   **Article 263 (Comercialización Interna):** Regulations regarding the purchase and sale of minerals within the national territory for transformation or export.

## 3. Cultural & Artistic Heritage
*   **[Ministerio de Cultura](https://www.gob.pe):** Responsible for certifying that stones (especially carved ones) are not "Patrimonio Cultural" (Cultural Heritage).
*   **[RNA (Registro Nacional del Artesano)](https://artesania.mincetur.gob.pe):** The official registry for Peruvian artisans used for metadata verification.

## 4. Technical Infrastructure
*   **[Hedera Developer Docs](https://docs.hedera.com):** Documentation for HTS (Token Service) and HCS (Consensus Service).
*   **[HIP-412 Metadata Standard](https://hips.hedera.com):** The community standard for NFT metadata on Hedera.
*   **[IPFS (InterPlanetary File System)](https://ipfs.tech):** Decentralized storage for stone imagery and 3D scans.

# Rumi: Development Strategy & Metadata Standards

This strategy outlines the implementation of **Rumi**, utilizing the [Hedera Token Service (HTS)](https://docs.hedera.com) to automate compliance and illuminate the provenance of tokenized Peruvian stones.

## 1. Provenance & Legal Triage
Categorize every asset into one of two cryptographic tracks to manage the variability of Peruvian sourcing.

*   **Track A: Certified Origin**
    *   For stones with [REINFO](https://www.gob.pe) (Mining Formalization) or [VUCE](https://www.vuce.gob.pe) permits.
    *   Map mining concession coordinates and [SUNAT](https://www.sunat.gob.pe) invoice data to the metadata.
*   **Track B: Legacy & Retail**
    *   For stones purchased in shops or markets without a documented history.
    *   Establish the **Point of Sale (PoS)** in Peru as the genesis event.
    *   Focus metadata on "Peruvian Heritage" and the artistry of the mount.

## 2. Metadata Standardization ([HIP-412](https://hips.hedera.com))
Standardize the JSON schema to align with [PROMPERÚ](https://exportemos.pe) and international trade standards.

*   **Legal Status Field:** **Values like** `certified_origin`, `retail_acquisition`, or `legacy_collection`.
*   **Identification:** Capture the **RUC** (Tax ID) of the vendor or the [RNA (Registro Nacional del Artesano)](https://artesania.mincetur.gob.pe) ID of the artisan.
*   **Trade Codes:** Assign the **Harmonized System (HS) Code** based on [Aduanet](http://www.aduanet.gob.pe) classifications (e.g., `7103` for semi-precious stones).

## 3. The Validation Layer
Utilize [Hedera](https://hedera.com) features to mitigate the risk of tokenizing undocumented stones.

*   **Multi-Sig Sign-off:** Use a **Hedera Threshold Key**. A local expert or gemologist must sign the minting transaction.
*   **Cultural Protection:** Verify that the stone is not a protected archaeological artifact ([Patrimonio Cultural](https://www.gob.pe)) before the NFT is generated.

## 4. Physical-to-Digital Anchoring
Ensure the physical stone and the NFT remain a single unit through immutable records.

*   **Optical Fingerprinting:** Capture macro-photography of unique internal inclusions and upload to [IPFS](https://ipfs.tech).
*   **Immutable Logs:** Use the [Hedera Consensus Service (HCS)](https://docs.hedera.com) to record the stone's journey.
*   **Physical Pairing:** Issue a QR-enabled "Rumi Identity Card" at the point of purchase to link the specimen to its Mainnet record.

## 5. Regulatory & Legal Framework
Rumi tokens are governed by the [Ley General de Minería (DS Nº 014-92-EM)](https://www.gob.pe).

*   **Article 4 (Libre Comercialización):** Guarantees the right to free internal and external trade of mineral products.
*   **Article 6 (Posesión de Minerales):** Governs the legal possession of minerals by retailers and artisans.
*   **Article 263 (Comercialización Interna):** Regulates the purchase and sale of minerals for transformation or export.

## 6. Sample JSON Metadata (HIP-412)

### Track A, B: Hybrid Origin and Retail

```json
 {
  "name": "Rumi Stone #001 - Amethyst",
  "creator": "Rumi Project",
  "description": "Premium Peruvian Amethyst. Masterwork provenance from Quispicanchi Mine to handcrafted silver filigree.",
  "image": "ipfs://QmThumbnailImageHash",
  "type": "image/jpg",
  "format": "HIP412@2.0.0",
  "properties": {
    "stone_id": "RUMI-2026-HYB-01",
    "legal_uri": "https://rumi.earth/verify/001",
    "receipt_scan": "ipfs://QmReceiptScanHash",
    "standard_compliance": "DS Nº 014-92-EM",
    "reinfo_id": "PERU-MIN-12345",
    "mining_concession": "Quispicanchi-01",
    "compliance_proof_hcs": "0.0.987654",
    "last_regulatory_check": "2026-03-06T17:44:00Z"
  },
  "files": [
    {
      "uri": "ipfs://QmFullResMasterHash",
      "type": "image/jpg",
      "is_default_file": true,
      "metadata": { "description": "High-Resolution Master Image" }
    },
    {
      "uri": "ipfs://Qm3DScanHash",
      "type": "model/gltf-binary",
      "metadata": { "description": "Interactive 3D Scan" }
    },
    {
      "uri": "ipfs://QmReceiptScanHash",
      "type": "application/pdf",
      "metadata": { "description": "Legal Proof of Possession" }
    }
  ],
  "attributes": [
    { "trait_type": "Stone Type", "value": "Amethyst" },
    { "trait_type": "Weight", "value": "2.5 carats" },
    { "trait_type": "Grading", "value": "AAA" },
    { "trait_type": "Date Mined", "value": "2024-03-15" },
    { "trait_type": "Stone Cut", "value": "Brilliant" },
    { "trait_type": "Artisan", "value": "Juan Pérez" },
    { "trait_type": "Artisan Technique", "value": "Silver Filigree" },
    { "trait_type": "Track", "value": "Track B: Retail w/ Mine Data" },
    { "trait_type": "Acquisition Point", "value": "Inca Jewels Boutique, Cusco" },
    { "trait_type": "Mining Concession", "value": "Quispicanchi-01" },
    { "trait_type": "REINFO ID", "value": "PERU-MIN-12345" },
    { "trait_type": "REINFO Status", "value": "Vigente" },
    { "trait_type": "Legal Status", "value": "Certified Origin & Possession" },
    { "trait_type": "HCS Compliance Link", "value": "0.0.987654" }
  ]
}


```
 
