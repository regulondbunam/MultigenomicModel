db.createCollection( "motif", { 
	validator: { 
		$jsonSchema: { 
			bsonType: "object",
			required: [ 
				"motif_id",
				"product_id",
				"motif_posleft",
				"motif_posright",
				"motif_sequence",
				"organism_id"
			],
			properties: {
				"motif_id": {
					bsonType: "string",
					description: ""
				},
				"product_id": {
					bsonType: "string",
					description: ""
				},
				"motif_posleft": {
					bsonType: "int",
					description: ""
				},
				"motif_posright": {
					bsonType: "int",
					description: ""
				},
				"motif_sequence": {
					bsonType: "string",
					description: ""
				},
				"motif_description": {
					bsonType: "string",
					description: ""
				},
				"motif_note": {
					bsonType: "string",
					description: ""
				},
				"motif_internal_comment": {
					bsonType: "string",
					description: ""
				},
				"organism_id": {
					bsonType: "string",
					description: ""
				},
				"data_source": {
					bsonType: "string",
					description: ""
				},
				"residue_number": {
					bsonType: "double",
					description: ""
				},
				"attached_group": {
					bsonType: "string",
					description: ""
				},
				"homology_motif": {
					bsonType: "string",
					description: ""
				},
				"alternate_sequence": {
					bsonType: "string",
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
				}
			}
		}
	}
})