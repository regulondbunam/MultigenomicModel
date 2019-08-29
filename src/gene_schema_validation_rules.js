db.createCollection("gene", { 
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
					bsonType: ["object"],
					items: {
						bsonType: "object",
						oneOf: [
							{
								bsonType: "object",
								required: [
									"left_position",
									"right_position"
								],
								properties: {
									"left_position": {
										bsonType: "int",
										description: ""
									},
									"right_position": {
										bsonType: "int",
										description: ""
									}
								}
							},
							{
								bsonType: "object",
								required: [
									"gene_fragments"
								],
								properties: {
									"gene_fragments": {
										bsonType: ["array"],
										uniqueItems: true,
										items: {
											bsonType: "object",
											required: [
												"left_position",
												"right_position",
												"strand"
											],
											properties: {
												"strand": {
													bsonType: "string",
													enum: ["reverse", "forward"],
													description: ""
												},
												"left_position": {
													bsonType: "int",
													description: ""
												},
												"right_position": {
													bsonType: "int",
													description: ""
												},
												"name": {
													bsonType: "string",
													description: ""
												},
												"bnumber": {
													bsonType: "string",
													description: ""
												},
												"synonyms": {
													bsonType: ["string"],
													description: ""
												},
												"centisome_position": {
													bsonType: "double",
													description: ""
												}
											}
										}
									}
								}
							}
						]
					}
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
				"multifun_parent": {
					bsonType: "string",
					description: ""
				},
				"synonyms": {
					bsonType: ["string"],
					description: ""
				},
				"evidence_reference": {
					bsonType: ["array"],
					uniqueItems: true,
					items: {
						bsonType: "object",
						properties: {
							"publication_id": {
								bsonType: "string",
								description: ""
							},
							"source_id": {
								bsonType: "string",
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
					bsonType: ["array"],
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
				"products":{
					bsonType: ["array"],
					uniqueItems: true,
					items: {
						bsonType: "object",
						required: [
							"$ref",
							"$id"
						],
						properties: {
							"$ref": {
								bsonType: "string",
								description: ""
							},
							"$id": {
								bsonType: "objectId",
								description: ""
							}
						}
					}
				},
				"schema_version": {
					bsonType: "string",
					description: ""
				}
			}
		},
		additionalProperties: false,
	},
	validationLevel: "strict",
	validationAction: "error"
})