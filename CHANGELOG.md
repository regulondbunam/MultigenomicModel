# MultigenomicModel

This version is in testing process with new Ecocyc release 26.5 for the RegulonDB 11.2 release.

## [1.0.0](https://github.com/regulondbunam/MultigenomicModel) - 2023-02-22

### Added

- Evidences:
  - crossEvidenceCodeRule
  - evidenceClass
  - evidenceCategory
  - evidenceApproach
  - noteWeb
- TF
  - symmetry
  - family
  
### Changed

- Files modified in this patch.
  - [`schemas/json_schema_validation/evidences.json`](schemas/json_schema_validation/evidences.json)
  - [`schemas/json_schema_validation/promoters.json`](schemas/json_schema_validation/promoters.json)
  - [`schemas/json_schema_validation/regulatoryInteractions.json`](schemas/json_schema_validation/regulatoryInteractions.json)
  - [`schemas/json_schema_validation/transcriptionFactors.json`](schemas/json_schema_validation/transcriptionFactors.json)
- RI
  - absoluteCenterPosition -> relativeDistSitePromoter

### Deprecated

- Promoters
  - pos1

### Fixed

- Without changes.
