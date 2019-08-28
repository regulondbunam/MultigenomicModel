/*
	schema_version
	mongodb_version
	author
	date
	description
	design patterns: extended references, schema_version
*/
db.createCollection( "gene", { 
	validator: { 
		$jsonSchema: { 
			bsonType: "object",
			required: [ 
				"gene_id",  
				"positions",
				"gene_strand",
				"gene_sequence",
				"gc_content",
				"organism_id", 
				"gene_type",
				"centisome_position",
				"schema_version"
			],
			properties: {
				"gene_id": {
					bsonType: "string",
					description: ""
				}, 
				"gene_name": {
					bsonType: "string",
					description: ""
				},
				"positions": {
					bsonType: ["int"],
				},
				"gene_strand": {
					bsonType: "string",
					description: "",
					enum: ["forward", "reverse", null]
				},
				"gene_sequence": {
					bsonType: "string",
					description: "",
					pattern: "^[ATCGatcg]+$"
				},
				"gc_content": {
					bsonType: "double",
					description: ""
				},
				"gene_note": {
					bsonType: "string",
					description: ""
				},
				"gene_internal_comment": {
					bsonType: "string",
					description: ""
				},
				"organism_id": {
					bsonType: "string",
					description: ""
				},
				"gene_type": {
					bsonType: "string",
					description: "",
					enum: [
						"pseudo", 
						"phantom", 
						"gene", 
						"truncated"
					]
				},
				"centisome_position": {
					bsonType: "double",
					description: ""
				},
				"interrupted": {
					bsonType: "bool",
					description: ""
				},
				"synonyms": {
					bsonType: ["string"],
					description: ""
				},
				"external_databases": {
					bsonType: ["array"],
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
							}
						}
					}
				},
				"multifun_parent": {
					bsonType: "string",
					description: ""
				},
				"schema_version": {
					bsonType: "string",
					description: ""
				}
			}
		}
	}
})