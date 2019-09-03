db.createCollection( "product", { 
	validator: { 
		$jsonSchema: { 
			bsonType: "object",
			required: [
				"product_id",
				"product_type",
				"organism_id",
				"genes"
			],
			properties: {
				"_id": {
					bsonType: "objectId",
					description: ""
				},
				"product_id": {
					bsonType: "string",
					description: ""
				}, 
				"product_name": {
					bsonType: "string",
					description: ""
				}, 
				"molecular_weight": {
					bsonType: "double",
					description: ""
				}, 
				"isoelectric_point": {
					bsonType: "double",
					description: ""
				},
				"location": {
					bsonType: "string",
					description: ""
				},
				"anticodon": {
					bsonType: "string",
					description: ""
				},
				"product_sequence": {
					bsonType: "string",
					description: ""
				},
				"product_note": {
					bsonType: "string",
					description: ""
				},
				"product_internal_comment": {
					bsonType: "string",
					description: ""
				},
				"organism_id": {
					bsonType: "string",
					description: ""
				},
				"product_type": {
					bsonType: "string",
					description: ""
				},
				"modified_form": {
					bsonType: "string",
					description: ""
				},
				"molecular_weight_kd": {
					bsonType: "double",
					description: ""
				},
				"component_of": {
					bsonType: "string",
					description: ""
				},
				"catalyzes": {
					bsonType: "string",
					description: ""
				},
				"genes": {
					bsonType: "array",
					description: "",
					uniqueItems: true,
					items: {
						bsonType: "object",
						required: [
							"gene_id", 
							"gene_name"
						],
						properties: {
							"gene_id": {
								bsonType: "string"
							},
							"gene_name": {
								bsonType: "string"
							}
						}
					}
				},
				"synonyms": {
					bsonType: "array",
					uniqueItems: true,
					items: {
						bsonType: "string"
					},
					description: ""
				},
				"evidence_reference": {
					bsonType: "array",
					description: "",
					uniqueItems: true,
					items: {
						bsonType: "object",
						properties: {
							"publication_id": {
								bsonType: "string",
								description: ""
							},
							"source_id": {
								bsonType: "int",
								description: ""
							},
							"external_database_id": {
								bsonType: "string",
								description: ""
							}
						}
					}
				},
				"external_databases": {
					bsonType: "array",
					description: "",
					uniqueItems: true,
					items: {
						bsonType: "object",
						required: [
							"database_name",
							"database_url"
						],
						properties: {
							"database_name": {
								bsonType: "string",
								description: ""
							},
							"database_url": {
								bsonType: "string",
								description: ""
							},
							"object_id": {
								bsonType: "string",
								description: ""
							}
						}
					}
				},
				"schema_version": {
					bsonType: "double",
					description: ""
				}
			},
			additionalProperties: false
		}
	},
	validationLevel: "strict",
	validationAction: "error"
})