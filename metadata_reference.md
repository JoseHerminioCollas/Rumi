### 📊 Metadata Field Descriptions: Rumi HIP-412 Standard

This documentation provides a technical and legal breakdown of the **Rumi JSON Metadata** structure, ensuring alignment with the [Hedera HIP-412 standard](https://hips.hedera.com) and the 2026 Peruvian trade regulations (Ley Nº 32537).

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
The `properties` object contains the data required for **Compliance Automation** and **VUCE 2.0** integration:

* **`stone_id`**: Internal serial number for inventory and **SUNAT** tracking.
* **`hs_code`**: The official **Harmonized System Code** (e.g., `7103.99`) used to automate export forms.
* **`standard_compliance`**: References the framework (e.g., `DS Nº 014-92-EM / Ley Nº 32537`).
* **`reinfo_id`**: The miner's formalization ID, verified against the **MINEM Public Registry**.
* **`vendor_ruc`**: The tax ID of the shop, cross-referenced against **SUNAT**.
* **`artisan_rna`**: The **MINCETUR RNA** number verifying the craftsman's registration.
* **`vuce_xml_hash` (2026)**: SHA-256 hash of the **XAdES-BES** digital signature from the VUCE XML.
* **`sunafil_payroll_verified` (2026)**: Boolean check for formal worker registration per **Res. 051-2026**.
* **`sinceramiento_timestamp` (2026)**: Record of georeferenced coordinate submission (April 2026 Deadline).
* **`census_status` (2026)**: Verification status of the **National MAPE Census** (June 2026).
* **`compliance_proof_hcs`**: The **Hedera HCS** Topic ID containing the immutable record of the database query.
* **`last_regulatory_check`**: ISO 8601 timestamp of the most recent automated validation.

---

### 🔗 Attributes: On-Chain Provenance
The `attributes` array uses `trait_type` and `value` pairs. Fields marked with **(2026)** are critical for export readiness:

* **`Stone Type`**: Identification of specimen (e.g., Amethyst, Pink Opal).
* **`Track`**: Categorizes the asset as **Track A** (Mine-Direct) or **Track B** (Retail/Hybrid).
* **`REINFO Status`**: Values like `Vigente` or `Suspendido`.
* **`Sinceramiento Status` (2026)**: Confirms georeferenced filing (Mandatory post-April 25, 2026).
* **`INEI Census ID` (2026)**: Participation ID from the National Census (Mandatory post-June 30, 2026).
* **`Legal Status`**: Summary of compliance (e.g., `Certified Origin & Possession`).
* **`Verification Level` (2026)**: Indicates audit depth (e.g., `Full 2026 Compliance (Hybrid)`).
* **`Export Permit ID` (2026)**: The official VUCE permit number.
* **`Current Location` (2026)**: Tracks movement (e.g., `Peru - Pending Export`).
* **`Is Exported` (2026)**: Boolean-style trait (`True/False`).
* **`HCS Compliance Link`**: Visual reference to the HCS audit trail Topic ID.

---

### 🛠️ Developer Implementation: One-Line Attributes
For programmatic updates during regulatory gates or the export transition:

```json
{"trait_type": "Sinceramiento Status", "value": "Verified (Georeferenced)"}
{"trait_type": "INEI Census ID", "value": "INEI-2026-MAPE-8822"}
{"trait_type": "Verification Level", "value": "Full 2026 Compliance (Hybrid)"}
{"trait_type": "Export Permit ID", "value": "VUCE-2026-EXP-99"}
{"trait_type": "Current Location", "value": "Peru - Pending Export"}
{"trait_type": "Is Exported", "value": "False"}
