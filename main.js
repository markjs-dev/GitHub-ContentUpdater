{
  "schemaVersion": 2,
  "label": "Update GitHub Repo",
  "messages": [],
  "credentials": {},
  "nodes": {
    "n8n-node-base.start": {
      "x": 100,
      "y": 450,
      "wires": [
        [
          "n8n-node-community.github"
        ]
      ]
    },
    "n8n-node-community.github": {
      "GITHUB_TOKEN": [
        "{{$credentials.github}}"
      ],
      "REPO": "n8n-io/n8n",
      "x": 300,
      "y": 450,
      "wires": [
        [
          "n8n-node-base.end"
        ]
      ]
    },
    "n8n-node-base.end": {
      "x": 600,
      "y": 450
    }
  }
}