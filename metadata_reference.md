### 📊 Metadata Field Descriptions: Rumi HIP-412 Standard

This documentation provides a technical and legal breakdown of the **Rumi JSON Metadata** structure, ensuring alignment with the [Hedera HIP-412 standard](https://hips.hedera.com) and 2026 Peruvian trade regulations.

| Key | Type | Description |
| :--- | :--- | :--- |
| `name` | String | Public identifier for the stone (e.g., "Rumi Stone #001 - Amethyst"). |
| `creator` | String | Identifies the project or specific mining/artisanal entity. |
| `description` | String | Narrative of the stone’s journey, geological traits, and cultural value. |
| `image` | URI | Immutable link to the primary visual asset on **IPFS**. |
| `type` | String | MIME type of the media (typically `image/jpg`). |
| `format` | String | Metadata standard version, fixed at `HIP412@2.0.0`. |
| `properties` | Object | Hidden technical and legal "anchors" used for backend automation. |
| `files` | Array | Extended assets (3D scans, high-res masters, PDF receipts). |
| `attributes` | Array | Visual traits and legal status displayed in wallets like **HashPack**. |

---

### 🏛️ Properties: The Regulatory Anchor
The `properties` object contains the data required for **Compliance Automation** and **VUCE** integration:

* **`stone_id`**: Internal serial number for inventory and **SUNAT** tracking.
* **`hs_code`**: The official **Harmonized System Code** (e.g., `7103.99`) used to automate **Exporta Fácil** forms.
* **`standard_compliance`**: References the specific legal framework (**Values like** `DS Nº 014-92-EM`).
* **`reinfo_id`**: The miner's formalization ID, verified against the **MINEM Public Registry**.
* **`vendor_ruc`**: The tax ID of the shop, cross-referenced against **SUNAT** to ensure a legal commercial entity.
* **`artisan_rna`**: The **MINCETUR RNA** number verifying the craftsman's legal registration.
* **`cod_reference`**: Link to the **Digital Certificate of Origin** required for 2026 regional trade.
* **`compliance_proof_hcs`**: The **Hedera HCS** Topic ID containing the immutable record of the regulatory handshake.
* **`last_regulatory_check`**: ISO 8601 timestamp of the most recent automated database validation.

---

### 🔗 Attributes: On-Chain Provenance
The `attributes` array uses `trait_type` and `value` pairs to categorize the specimen. Fields marked with **(2026)** are critical for international export readiness:

* **`Stone Type`**: Used for filtering the 27+ specimens (e.g., Amethyst, Pink Opal, Gold).
* **`Weight / Grading / Cut`**: Technical specifications defining the stone's physical value.
* **`Track`**: Categorizes the asset as **Track A** (Certified) or **Track B** (Retail/Legacy).
* **`REINFO Status`**: **Values like** `Vigente` or `Formalizado`, proving the miner's standing.
* **`Legal Status`**: A summary of compliance (e.g., `Certified Origin & Possession`).
* **`Verification Level` (2026)**: Indicates the depth of the audit (e.g., `Full Provenance (Hybrid)`).
* **`Export Permit ID` (2026)**: The official VUCE permit number (added post-clearance).
* **`Current Location` (2026)**: Tracks movement (e.g., `Peru - Pending Export` or `International - Destination`).
* **`Is Exported` (2026)**: Boolean-style trait (`True/False`) for rapid collection filtering.
* **`HCS Compliance Link`**: A visual reference to the HCS audit trail for buyers and customs officers.



---

### 🛠️ Developer Implementation: One-Line Attributes
For programmatic updates using the **Metadata Key** (specifically for the export transition), use the following single-line JSON format:

```json
{"trait_type": "Verification Level", "value": "Full Provenance (Hybrid)"}
{"trait_type": "Export Permit ID", "value": "VUCE-2026-EXP-99"}
{"trait_type": "Current Location", "value": "Peru - Pending Export"}
{"trait_type": "Is Exported", "value": "False"}
